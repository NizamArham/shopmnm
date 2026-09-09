document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;
  const featured = PRODUCTS.slice(-8).reverse();
  grid.innerHTML = featured.map(productCardHTML).join("");
});
