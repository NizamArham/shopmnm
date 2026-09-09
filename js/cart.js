/*
  CART — shared across every page via localStorage.
  Change WHATSAPP_NUMBER below if the order number ever changes.

  STOCK CAPPING
  Each product in data.js has sizes array with per-size stock.
  addToCart() checks the selected size's stock and caps accordingly.
*/

const WHATSAPP_NUMBER = "94705500174"; // no + or leading 0

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("mm_cart") || "[]");
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("mm_cart", JSON.stringify(cart));
  updateCartCount();
}

function cartLineKey(productId, color, size) {
  return [productId, color || "", size || ""].join("::");
}

/**
 * Get total quantity in cart for a specific product + size combination
 */
function qtyInCartForSize(cart, productId, size) {
  return cart
    .filter((line) => line.productId === productId && line.size === size)
    .reduce((sum, line) => sum + line.qty, 0);
}

/**
 * Get total quantity in cart for a product (all sizes)
 */
function qtyInCartForProduct(cart, productId) {
  return cart
    .filter((line) => line.productId === productId)
    .reduce((sum, line) => sum + line.qty, 0);
}

/**
 * Get stock for a specific size from product
 */
function getSizeStock(product, size) {
  if (!product.sizes || !Array.isArray(product.sizes)) return 0;
  const found = product.sizes.find(s => s.size === size);
  return found ? found.stock : 0;
}

/**
 * Adds a product/variant to the cart, capped at the size's stock.
 * Returns { added, capped, remaining, sizeStock }
 */
function addToCart(product, color, size, qty) {
  const cart = getCart();
  
  // Get stock for this specific size
  const sizeStock = getSizeStock(product, size);
  if (sizeStock <= 0) {
    return { added: 0, capped: true, remaining: 0, sizeStock: 0 };
  }
  
  // How many of this size are already in cart?
  const alreadyInCartForSize = qtyInCartForSize(cart, product.id, size);
  const availableToAdd = Math.max(0, sizeStock - alreadyInCartForSize);
  const qtyToAdd = Math.min(qty, availableToAdd);

  if (qtyToAdd > 0) {
    const key = cartLineKey(product.id, color, size);
    const existing = cart.find(
      (line) => cartLineKey(line.productId, line.color, line.size) === key
    );
    if (existing) {
      existing.qty += qtyToAdd;
    } else {
      cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        color: color || "",
        size: size || "",
        image: (product.images && product.images[0]) || "",
        qty: qtyToAdd
      });
    }
    saveCart(cart);
  }

  return {
    added: qtyToAdd,
    capped: qtyToAdd < qty,
    remaining: Math.max(0, sizeStock - alreadyInCartForSize - qtyToAdd),
    sizeStock: sizeStock
  };
}

function removeFromCart(productId, color, size) {
  const key = cartLineKey(productId, color, size);
  const cart = getCart().filter(
    (line) => cartLineKey(line.productId, line.color, line.size) !== key
  );
  saveCart(cart);
  renderDrawer();
}

function cartTotal(cart) {
  return cart.reduce((sum, line) => sum + line.price * line.qty, 0);
}

function cartCount(cart) {
  return cart.reduce((sum, line) => sum + line.qty, 0);
}

function formatLKR(amount) {
  return "Rs. " + amount.toLocaleString("en-LK");
}

function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (el) el.textContent = cartCount(getCart());
}

function renderDrawer() {
  const itemsEl = document.getElementById("drawer-items");
  const footEl = document.getElementById("drawer-foot");
  if (!itemsEl) return;

  const cart = getCart();

  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="drawer-empty">Your bag is empty.<br>Browse the catalog to add something you like.</div>';
    if (footEl) footEl.style.display = "none";
    return;
  }

  if (footEl) footEl.style.display = "block";

  itemsEl.innerHTML = cart
    .map((line) => {
      const meta = [line.color, line.size].filter(Boolean).join(" / ");
      const img = line.image || "images/placeholder.svg";
      return `
        <div class="drawer-item">
          <img src="${img}" alt="${line.name}" onerror="this.src='images/placeholder.svg'">
          <div class="drawer-item-info">
            <div class="drawer-item-name">${line.name}</div>
            <div class="drawer-item-meta">${meta ? meta + " &middot; " : ""}Qty ${line.qty}</div>
            <div class="drawer-item-row">
              <span class="drawer-item-price">${formatLKR(line.price * line.qty)}</span>
              <a href="#" class="remove-link" onclick="removeFromCart('${line.productId}','${line.color}','${line.size}');return false;">Remove</a>
            </div>
          </div>
        </div>`;
    })
    .join("");

  const totalEl = document.getElementById("drawer-total-amount");
  if (totalEl) totalEl.textContent = formatLKR(cartTotal(cart));
}

function openDrawer() {
  renderDrawer();
  document.getElementById("cart-overlay").classList.add("open");
  document.getElementById("cart-drawer").classList.add("open");
}

function closeDrawer() {
  document.getElementById("cart-overlay").classList.remove("open");
  document.getElementById("cart-drawer").classList.remove("open");
}

function buildWhatsAppMessage() {
  const cart = getCart();
  const lines = cart.map((line) => {
    const meta = [line.color, line.size].filter(Boolean).join(", ");
    return `- ${line.name}${meta ? " (" + meta + ")" : ""} x${line.qty} — ${formatLKR(line.price * line.qty)}`;
  });
  const message =
    "Hi M&M Clothing! I'd like to check availability for:\n\n" +
    lines.join("\n") +
    `\n\nTotal: ${formatLKR(cartTotal(cart))}\n\nSent from the catalog site.`;
  return message;
}

function sendCartToWhatsApp() {
  const cart = getCart();
  if (cart.length === 0) return;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  const openBtn = document.getElementById("open-cart");
  const closeBtn = document.getElementById("close-cart");
  const overlay = document.getElementById("cart-overlay");
  const checkoutBtn = document.getElementById("whatsapp-checkout");
  if (openBtn) openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);
  if (checkoutBtn) checkoutBtn.addEventListener("click", sendCartToWhatsApp);
});