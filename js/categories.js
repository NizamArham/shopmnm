function getCategories() {
  const map = {};
  PRODUCTS.forEach((p) => {
    if (!map[p.category]) {
      map[p.category] = {
        name: p.category,
        image: (p.images && p.images[0]) || "images/placeholder.svg",
        count: 0
      };
    }
    map[p.category].count += 1;
  });
  return Object.values(map);
}

function categoryTileHTML(cat) {
  return `
    <a class="category-tile" href="catalog.html?category=${encodeURIComponent(cat.name)}">
      <div class="category-tile-media">
        <img src="${cat.image}" alt="${cat.name}" onerror="this.src='images/placeholder.svg'">
      </div>
      <span class="category-tile-name">${cat.name}</span>
      <span class="category-tile-count">${cat.count} item${cat.count === 1 ? "" : "s"}</span>
    </a>`;
}
