document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;
  const withPhotos = PRODUCTS.filter((p) => p.images && p.images.length);
  const featured = (withPhotos.length >= 4 ? withPhotos : PRODUCTS).slice(-4).reverse();
  grid.innerHTML = featured.map(productCardHTML).join("");
});
