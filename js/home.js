document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;
  const featured = PRODUCTS.slice(-4).reverse();
  grid.innerHTML = featured.map(productCardHTML).join("");
});
