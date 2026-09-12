/*
  QUICK SHOP — a small, separate row of cards (used on the home page) that
  let a customer pick a size and add to their bag without opening the full
  product page. Only products marked `featured: true` in js/data.js appear
  here, so it stays a deliberate, coherent handful rather than everything.
*/

const quickShopState = {};

function quickCardHTML(p) {
  const img = (p.images && p.images[0]) || "images/placeholder.svg";
  const variants = getVariants(p);
  const hasRealSizes = !(variants.length === 1 && variants[0].size === "");
  const soldOut = totalStock(p) <= 0;

  quickShopState[p.id] = hasRealSizes ? "" : variants[0].size;

  const sizeRow = hasRealSizes
    ? `<div class="quick-size-row" data-product="${p.id}">
        ${variants
          .map(
            (v) =>
              `<button class="quick-chip${v.stock <= 0 ? " chip-disabled" : ""}" data-size="${v.size}" ${v.stock <= 0 ? "disabled" : ""}>${v.size}</button>`
          )
          .join("")}
      </div>`
    : "";

  const buttonLabel = soldOut ? "Sold out" : hasRealSizes ? "Select a size" : "Add to bag";

  return `
    <div class="quick-card">
      <a href="product.html?id=${p.id}" class="quick-card-media">
        ${soldOut ? '<span class="sold-out-tag">Sold out</span>' : ""}
        <img src="${img}" alt="${p.name}" onerror="this.src='images/placeholder.svg'">
      </a>
      <div class="quick-card-body">
        <a href="product.html?id=${p.id}" class="quick-card-name">${p.name}</a>
        <span class="quick-card-price">Rs. ${p.price.toLocaleString("en-LK")}</span>
        ${sizeRow}
        <button class="btn clay quick-add-btn" data-product="${p.id}" ${soldOut || hasRealSizes ? "disabled" : ""}>${buttonLabel}</button>
      </div>
    </div>`;
}

function wireQuickShop(products) {
  document.querySelectorAll(".quick-size-row .quick-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      if (chip.disabled) return;
      const row = chip.closest(".quick-size-row");
      const productId = row.dataset.product;
      quickShopState[productId] = chip.dataset.size;
      row.querySelectorAll(".quick-chip").forEach((c) => c.classList.toggle("selected", c === chip));
      const btn = document.querySelector(`.quick-add-btn[data-product="${productId}"]`);
      if (btn) {
        btn.disabled = false;
        btn.textContent = "Add to bag";
      }
    });
  });

  document.querySelectorAll(".quick-add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = btn.dataset.product;
      const product = products.find((p) => p.id === productId);
      if (!product) return;
      const size = quickShopState[productId] || "";
      const result = addToCart(product, size, 1);
      if (result.added > 0) {
        const original = btn.textContent;
        btn.textContent = "Added \u2713";
        openDrawer();
        setTimeout(() => {
          btn.textContent = original;
        }, 1200);
      } else {
        btn.textContent = "Out of stock";
      }
    });
  });
}

function renderQuickShop() {
  const grid = document.getElementById("quick-shop-grid");
  if (!grid) return;
  const featured = PRODUCTS.filter((p) => p.featured);
  const list = featured.length ? featured : PRODUCTS.slice(0, 6);
  grid.innerHTML = list.map(quickCardHTML).join("");
  wireQuickShop(list);
}

document.addEventListener("DOMContentLoaded", renderQuickShop);
