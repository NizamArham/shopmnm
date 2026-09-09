function productCardHTML(p) {
  const img = (p.images && p.images[0]) || "images/placeholder.svg";
  const soldOut = p.stock <= 0;
  return `
    <a class="card-link" href="product.html?id=${p.id}">
      <article class="card">
        <div class="card-media">
          ${soldOut ? '<span class="sold-out-tag">Sold out</span>' : ""}
          <img src="${img}" alt="${p.name}" onerror="this.src='images/placeholder.svg'">
        </div>
        <div class="card-body">
          <span class="card-cat">${p.subCategory}</span>
          <span class="card-name">${p.name}</span>
          <span class="card-price">Rs. ${p.price.toLocaleString("en-LK")}</span>
        </div>
      </article>
    </a>`;
}
