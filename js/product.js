function getProductFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return PRODUCTS.find((p) => p.id === id);
}

const pdState = { color: "", size: "", qty: 1 };

function renderNotFound() {
  document.getElementById("product-root").innerHTML = `
    <div style="padding:80px 0; text-align:center;">
      <h1 style="font-family:var(--display); font-style:italic; font-weight:500; font-size:32px;">We couldn't find that product</h1>
      <p style="color:var(--grey-text); margin-bottom:24px;">It may have sold out or the link may be wrong.</p>
      <a href="catalog.html" class="btn">Back to the catalog</a>
    </div>`;
}

function renderProduct(p) {
  const entries = p.sizes || [];
  const colors = p.colors || [];
  const images = p.images && p.images.length ? p.images : ["images/placeholder.svg"];

  // Stock for a color (entries without a color count for every color) and the sizes offered in it
  const colorStock = (c) =>
    entries.filter((s) => !s.color || !c || s.color === c).reduce((n, s) => n + (s.stock || 0), 0);
  const sizesFor = (c) => {
    const list = [];
    entries.forEach((s) => {
      if (s.color && c && s.color !== c) return;
      const hit = list.find((x) => x.size === s.size);
      if (hit) hit.stock += s.stock || 0;
      else list.push({ size: s.size, stock: s.stock || 0 });
    });
    return list;
  };
  const firstInStockSize = (c) => {
    const hit = sizesFor(c).find((s) => s.stock > 0);
    return hit ? hit.size : "";
  };

  const isSold = entries.reduce((n, s) => n + (s.stock || 0), 0) <= 0;

  pdState.color = colors.find((c) => colorStock(c) > 0) || colors[0] || "";
  pdState.size = firstInStockSize(pdState.color);
  pdState.qty = 1;

  const colorChips =
    !isSold && colors.length
      ? `<div class="option-group">
          <div class="option-label">Color</div>
          <div class="chip-row" id="color-chips">
            ${colors
              .map((c) => {
                const out = colorStock(c) <= 0;
                return `<button class="chip${c === pdState.color ? " selected" : ""}" data-color="${c}"${out ? ' style="opacity:0.4;"' : ""}>${c}</button>`;
              })
              .join("")}
          </div>
        </div>`
      : "";

  const badgeHTML = isSold
    ? `<span style="background:#222; color:#fff; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600;">Sold</span>`
    : p.badge
    ? `<span style="background:#e8f5e9; color:#2e7d32; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:500;">${p.badge}</span>`
    : "";

  document.getElementById("product-root").innerHTML = `
    <div class="product-detail">
      <div>
        <div class="pd-gallery-main">
          <img id="pd-main-image" src="${images[0]}" alt="${p.name}" onerror="this.src='images/placeholder.svg'">
        </div>
        ${images.length > 1
          ? `<div class="pd-thumbs">${images
              .map((img, i) => `<img src="${img}" data-index="${i}" onerror="this.src='images/placeholder.svg'">`)
              .join("")}</div>`
          : ""}
      </div>
      <div>
        <div class="pd-cat">${p.category} &middot; ${p.subCategory} &middot; ${p.gender}</div>
        <h1 class="pd-name">${p.name}</h1>
        ${isSold ? "" : `<div class="pd-price">Rs. ${p.price.toLocaleString("en-LK")}</div>`}
        ${badgeHTML}
        <p class="pd-desc">${p.description}</p>
        ${colorChips}
        <div id="variant-panel"></div>
      </div>
    </div>`;

  // Thumbnails
  document.querySelectorAll(".pd-thumbs img").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      document.getElementById("pd-main-image").src = images[thumb.dataset.index];
      document.querySelectorAll(".pd-thumbs img").forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });
  const firstThumb = document.querySelector(".pd-thumbs img");
  if (firstThumb) firstThumb.classList.add("active");

  // Color chips
  document.querySelectorAll("#color-chips .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      pdState.color = chip.dataset.color;
      pdState.size = firstInStockSize(pdState.color);
      pdState.qty = 1;
      document.querySelectorAll("#color-chips .chip").forEach((c) => c.classList.toggle("selected", c === chip));
      renderVariantPanel();
    });
  });

  // Sizes, quantity, add-to-bag button and stock note: rebuilt whenever color/size/bag changes
  function renderVariantPanel(message) {
    const panel = document.getElementById("variant-panel");
    if (isSold) {
      panel.innerHTML = `
        <div class="pd-actions">
          <button class="btn secondary" disabled>Sold</button>
          <a href="catalog.html" class="btn secondary">Keep browsing</a>
        </div>
        <p class="stock-note">This piece has been sold. Message us on WhatsApp if you'd like something similar.</p>`;
      return;
    }

    const color = pdState.color;
    const sizes = sizesFor(color);
    const inColor = colorStock(color);
    const selectedStock = sizes.find((s) => s.size === pdState.size)?.stock || 0;
    const inBag = qtyInCartForVariant(getCart(), p.id, color, pdState.size);
    const maxQty = Math.max(0, selectedStock - inBag);
    pdState.qty = maxQty > 0 ? Math.min(Math.max(1, pdState.qty), maxQty) : 1;

    const hasWaistInseam = sizes.some((s) => String(s.size).includes("/"));
    const inStockSizes = sizes.filter((s) => s.stock > 0).length;
    const sizeChips = sizes.length
      ? `<div class="option-group">
          <div class="option-label">Size${hasWaistInseam ? " (Waist/Inseam)" : ""}</div>
          <div class="chip-row size-chip-row" id="size-chips">
            ${sizes
              .map((s) => {
                const out = s.stock <= 0;
                return `<button class="chip${s.size === pdState.size ? " selected" : ""}${out ? " locked" : ""}" data-size="${s.size}"${out ? ' disabled style="opacity:0.3; cursor:not-allowed; pointer-events:none;"' : ""}>${s.size}</button>`;
              })
              .join("")}
          </div>
          <div style="margin-top:8px; font-size:12px; color:var(--ink-soft);">${inStockSizes} size${inStockSizes === 1 ? "" : "s"} available</div>
        </div>`
      : "";

    let button;
    let note;
    if (maxQty > 0) {
      button = `<button class="btn clay" id="add-to-cart-btn">Add to bag</button>`;
      note = maxQty <= 3
        ? `Only ${maxQty} left in stock${sizes.length > 1 ? " for this size" : ""} — order soon!`
        : "In stock — usually confirmed within a few hours over WhatsApp.";
    } else if (inColor <= 0) {
      button = `<button class="btn secondary" disabled>Sold out in this colour</button>`;
      note = "This colour is sold out. Please pick another colour or ask us on WhatsApp.";
    } else if (selectedStock <= 0) {
      button = `<button class="btn secondary" disabled>No stock for this size</button>`;
      note = "This size is out of stock. Please select another size.";
    } else {
      button = `<button class="btn secondary" disabled>All available are in your bag</button>`;
      note = "You already have all the available stock for this size in your bag.";
    }
    if (message) note = message;

    panel.innerHTML = `
      ${sizeChips}
      <div class="option-group">
        <div class="option-label">Quantity</div>
        <div class="qty-row">
          <div class="qty-control">
            <button id="qty-minus" aria-label="Decrease quantity" ${maxQty <= 0 || pdState.qty <= 1 ? "disabled" : ""}>&minus;</button>
            <span id="qty-value">${maxQty > 0 ? pdState.qty : 0}</span>
            <button id="qty-plus" aria-label="Increase quantity" ${maxQty <= 0 || pdState.qty >= maxQty ? "disabled" : ""}>&plus;</button>
          </div>
        </div>
      </div>
      <div class="pd-actions">
        ${button}
        <a href="catalog.html" class="btn secondary">Keep browsing</a>
      </div>
      <p class="stock-note" id="stock-note">${note}</p>`;

    document.querySelectorAll("#size-chips .chip:not(.locked)").forEach((chip) => {
      chip.addEventListener("click", () => {
        pdState.size = chip.dataset.size;
        pdState.qty = 1;
        renderVariantPanel();
      });
    });

    const minus = document.getElementById("qty-minus");
    const plus = document.getElementById("qty-plus");
    if (minus) minus.addEventListener("click", () => { pdState.qty = Math.max(1, pdState.qty - 1); renderVariantPanel(); });
    if (plus) plus.addEventListener("click", () => { pdState.qty = Math.min(maxQty, pdState.qty + 1); renderVariantPanel(); });

    const add = document.getElementById("add-to-cart-btn");
    if (add) {
      add.addEventListener("click", () => {
        const result = addToCart(p, pdState.color, pdState.size, pdState.qty);
        pdState.qty = 1;
        openDrawer();
        renderVariantPanel(
          result.added === 0
            ? "None available to add — you already have the full stock in your bag."
            : result.capped
            ? `Only ${result.added} could be added — that was the last of the available stock.`
            : ""
        );
      });
    }
  }

  renderVariantPanel();
}

// Keep only the listed images that actually exist, so a folder with 1 or 2 photos shows 1 or 2.
function existingImages(list) {
  return Promise.all(
    list.map(
      (src) =>
        new Promise((resolve) => {
          const im = new Image();
          im.onload = () => resolve(src);
          im.onerror = () => resolve(null);
          im.src = src;
        })
    )
  ).then((found) => found.filter(Boolean));
}

document.addEventListener("DOMContentLoaded", async () => {
  const product = getProductFromURL();
  if (!product) {
    renderNotFound();
    return;
  }
  document.title = `${product.name} — M&M Clothing`;
  if (product.images && product.images.length) {
    product.images = await existingImages(product.images);
  }
  renderProduct(product);
});
