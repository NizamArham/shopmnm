const state = { gender: "", category: "", query: "" };

function buildCategoryPills() {
  const bar = document.getElementById("category-bar");
  const categories = [...new Set(PRODUCTS.map((p) => p.category))].sort();
  bar.innerHTML =
    `<button class="filter-pill active" data-filter="category" data-value="">All categories</button>` +
    categories
      .map((c) => `<button class="filter-pill" data-filter="category" data-value="${c}">${c}</button>`)
      .join("");
}

function matchesState(p) {
  if (state.gender && p.gender !== state.gender) return false;
  if (state.category && p.category !== state.category) return false;
  if (state.query) {
    const q = state.query.toLowerCase();
    const haystack = `${p.name} ${p.category} ${p.subCategory}`.toLowerCase();
    if (!haystack.includes(q)) return false;
  }
  return true;
}

function renderGrid() {
  const grid = document.getElementById("catalog-grid");
  const results = PRODUCTS.filter(matchesState);
  if (results.length === 0) {
    grid.innerHTML = '<div class="empty-note">No products match those filters yet.</div>';
    return;
  }
  grid.innerHTML = results.map(productCardHTML).join("");
}

function wireFilters() {
  document.querySelectorAll(".filter-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.filter;
      const value = btn.dataset.value;
      state[key] = value;
      document
        .querySelectorAll(`.filter-pill[data-filter="${key}"]`)
        .forEach((b) => b.classList.toggle("active", b === btn));
      renderGrid();
    });
  });

  document.getElementById("search-input").addEventListener("input", (e) => {
    state.query = e.target.value.trim();
    renderGrid();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildCategoryPills();
  wireFilters();
  renderGrid();
});
