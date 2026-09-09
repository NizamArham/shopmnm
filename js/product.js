function getProductFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return PRODUCTS.find((p) => p.id === id);
}

const pdState = { color: "", size: "", qty: 1, activeImage: 0 };

function renderNotFound() {
  document.getElementById("product-root").innerHTML = `
    <div style="padding:80px 0; text-align:center;">
      <h1 style="font-family:var(--display); font-style:italic; font-weight:500; font-size:32px;">We couldn't find that product</h1>
      <p style="color:var(--grey-text); margin-bottom:24px;">It may have sold out or the link may be wrong.</p>
      <a href="catalog.html" class="btn">Back to the catalog</a>
    </div>`;
}

function renderProduct(p) {
  pdState.color = p.colors[0] || "";
  
  // Handle size format: array of objects { size, stock }
  const sizeOptions = p.sizes || [];
  pdState.size = sizeOptions.length > 0 ? sizeOptions[0].size : "";
  
  pdState.qty = 1;

  const images = p.images && p.images.length ? p.images : ["images/placeholder.svg"];
  const alreadyInCart = qtyInCartForProduct(getCart(), p.id);
  
  // Total remaining stock for this product
  const totalStock = sizeOptions.reduce((sum, s) => sum + s.stock, 0);
  const remaining = Math.max(0, totalStock - alreadyInCart);
  const soldOut = totalStock <= 0 || remaining <= 0;

  // Color chips
  const colorChips = p.colors.length
    ? `<div class="option-group">
        <div class="option-label">Color</div>
        <div class="chip-row" id="color-chips">
          ${p.colors.map((c, i) => `<button class="chip${i === 0 ? " selected" : ""}" data-color="${c}">${c}</button>`).join("")}
        </div>
      </div>`
    : "";

  // Size chips — out of stock = locked (greyed, not clickable, no pointer events)
  const sizeChips = sizeOptions.length
    ? `<div class="option-group">
        <div class="option-label">Size (Waist/Inseam)</div>
        <div class="chip-row size-chip-row" id="size-chips">
          ${sizeOptions.map((s, i) => {
            const isOutOfStock = s.stock <= 0;
            return `
              <button 
                class="chip${i === 0 && !isOutOfStock ? " selected" : ""} ${isOutOfStock ? "locked" : ""}" 
                data-size="${s.size}" 
                data-stock="${s.stock}"
                ${isOutOfStock ? 'disabled style="opacity:0.3; cursor:not-allowed; pointer-events:none;"' : ''}
              >
                ${s.size}
              </button>
            `;
          }).join("")}
        </div>
        <div style="margin-top:8px; font-size:12px; color:var(--ink-soft);">${sizeOptions.length} sizes available</div>
      </div>`
    : "";

  // Get available stock for selected size
  function getSelectedSizeStock() {
    const selected = sizeOptions.find(s => s.size === pdState.size);
    return selected ? selected.stock : 0;
  }

  const selectedStock = getSelectedSizeStock();
  const maxQty = Math.min(remaining, selectedStock);

  // Stock note logic
  let stockNote;
  if (soldOut) {
    stockNote = "Currently sold out. Check back soon or ask us on WhatsApp.";
  } else if (remaining <= 3) {
    stockNote = `Only ${remaining} left in stock — order soon!`;
  } else {
    stockNote = "In stock — usually confirmed within a few hours over WhatsApp.";
  }

  // Badge — dynamic from product data
  const badgeHTML = p.badge ? `
    <span style="background:#e8f5e9; color:#2e7d32; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:500;">
      ${p.badge}
    </span>
  ` : '';

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
        <div class="pd-price">Rs. ${p.price.toLocaleString("en-LK")}</div>
        
        <!-- Dynamic Badge -->
        ${badgeHTML}
        
        <p class="pd-desc">${p.description}</p>
        ${colorChips}
        ${sizeChips}
        
        <div class="option-group">
          <div class="option-label">Quantity</div>
          <div class="qty-row">
            <div class="qty-control">
              <button id="qty-minus" aria-label="Decrease quantity" ${soldOut || maxQty <= 0 ? "disabled" : ""}>&minus;</button>
              <span id="qty-value">${soldOut || maxQty <= 0 ? 0 : 1}</span>
              <button id="qty-plus" aria-label="Increase quantity" ${soldOut || maxQty <= 1 ? "disabled" : ""}>&plus;</button>
            </div>
          </div>
        </div>
        
        <div class="pd-actions">
          ${!soldOut && maxQty > 0
            ? `<button class="btn clay" id="add-to-cart-btn">Add to bag</button>`
            : `<button class="btn secondary" disabled>${soldOut ? "Sold out" : "No stock for this size"}</button>`}
          <a href="catalog.html" class="btn secondary">Keep browsing</a>
        </div>
        <p class="stock-note" id="stock-note">${stockNote}</p>
      </div>
    </div>`;

  // ----- Event Listeners -----

  // Thumbnails
  document.querySelectorAll(".pd-thumbs img").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      document.getElementById("pd-main-image").src = images[thumb.dataset.index];
      document.querySelectorAll(".pd-thumbs img").forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });
  
  // Set first thumb as active
  const firstThumb = document.querySelector(".pd-thumbs img");
  if (firstThumb) firstThumb.classList.add("active");

  // Color chips
  document.querySelectorAll("#color-chips .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      pdState.color = chip.dataset.color;
      document.querySelectorAll("#color-chips .chip").forEach((c) => c.classList.toggle("selected", c === chip));
    });
  });

  // Size chips — only clickable if in stock
  document.querySelectorAll("#size-chips .chip:not(.locked)").forEach((chip) => {
    chip.addEventListener("click", () => {
      const newStock = parseInt(chip.dataset.stock);
      if (newStock <= 0) return;
      
      pdState.size = chip.dataset.size;
      document.querySelectorAll("#size-chips .chip").forEach((c) => c.classList.toggle("selected", c === chip));
      
      // Update max quantity based on selected size
      const maxQty = Math.min(remaining, newStock);
      const qtyValueEl = document.getElementById("qty-value");
      const qtyPlusBtn = document.getElementById("qty-plus");
      const qtyMinusBtn = document.getElementById("qty-minus");
      
      pdState.qty = Math.min(pdState.qty, maxQty);
      if (qtyValueEl) qtyValueEl.textContent = maxQty > 0 ? pdState.qty : 0;
      if (qtyPlusBtn) qtyPlusBtn.disabled = maxQty <= 1 || pdState.qty >= maxQty;
      if (qtyMinusBtn) qtyMinusBtn.disabled = maxQty <= 0;
      
      // Update stock note
      const stockNote = document.getElementById("stock-note");
      const addBtn = document.getElementById("add-to-cart-btn");
      
      if (maxQty <= 0) {
        if (addBtn) {
          addBtn.outerHTML = `<button class="btn secondary" disabled>No stock for this size</button>`;
        }
        if (stockNote) stockNote.textContent = "This size is out of stock. Please select another size.";
      } else {
        if (!document.querySelector("#add-to-cart-btn")) {
          const actionsDiv = document.querySelector(".pd-actions");
          const keepBrowsing = actionsDiv.querySelector(".btn.secondary");
          actionsDiv.innerHTML = `
            <button class="btn clay" id="add-to-cart-btn">Add to bag</button>
            ${keepBrowsing.outerHTML}
          `;
          document.getElementById("add-to-cart-btn").addEventListener("click", addToCartHandler);
        }
        if (stockNote) {
          if (maxQty <= 3) {
            stockNote.textContent = `Only ${maxQty} left in stock for this size — order soon!`;
          } else {
            stockNote.textContent = "In stock — usually confirmed within a few hours over WhatsApp.";
          }
        }
      }
    });
  });

  // Quantity controls
  const qtyValueEl = document.getElementById("qty-value");
  const qtyMinusBtn = document.getElementById("qty-minus");
  const qtyPlusBtn = document.getElementById("qty-plus");

  if (qtyMinusBtn) {
    qtyMinusBtn.addEventListener("click", () => {
      pdState.qty = Math.max(1, pdState.qty - 1);
      qtyValueEl.textContent = pdState.qty;
      if (qtyPlusBtn) qtyPlusBtn.disabled = pdState.qty >= maxQty;
      if (qtyMinusBtn) qtyMinusBtn.disabled = pdState.qty <= 1;
    });
  }
  
  if (qtyPlusBtn) {
    qtyPlusBtn.addEventListener("click", () => {
      if (pdState.qty >= maxQty) return;
      pdState.qty += 1;
      qtyValueEl.textContent = pdState.qty;
      qtyPlusBtn.disabled = pdState.qty >= maxQty;
      if (qtyMinusBtn) qtyMinusBtn.disabled = false;
    });
  }

  // Add to cart handler
  function addToCartHandler() {
    const selectedSizeData = sizeOptions.find(s => s.size === pdState.size);
    if (!selectedSizeData || selectedSizeData.stock <= 0) {
      alert("This size is out of stock. Please select another size.");
      return;
    }
    
    const result = addToCart(p, pdState.color, pdState.size, pdState.qty);
    const noteEl = document.getElementById("stock-note");
    
    if (result.added === 0) {
      if (noteEl) noteEl.textContent = "None available to add — you already have the full stock in your bag.";
      return;
    }
    if (result.capped && noteEl) {
      noteEl.textContent = `Only ${result.added} could be added — that was the last of the available stock.`;
    }
    openDrawer();
    renderProduct(p);
  }

  // Bind add to cart
  const addBtn = document.getElementById("add-to-cart-btn");
  if (addBtn) {
    addBtn.addEventListener("click", addToCartHandler);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const product = getProductFromURL();
  if (!product) {
    renderNotFound();
    return;
  }
  document.title = `${product.name} — M&M Clothing`;
  renderProduct(product);
});