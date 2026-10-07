// "Factory outlet & imported" notice. Shown on the first page of a visit and on every refresh; add ?notice to force it.
(function () {
  const KEY = "mm_notice_seen";
  const force = new URLSearchParams(window.location.search).has("notice");
  const nav = performance.getEntriesByType("navigation")[0];
  const isReload = !!nav && nav.type === "reload";

  function seen() {
    try { return sessionStorage.getItem(KEY) === "1"; } catch (e) { return false; }
  }
  function remember() {
    try { sessionStorage.setItem(KEY, "1"); } catch (e) {}
  }

  if (seen() && !force && !isReload) return;

  const modal = document.createElement("div");
  modal.className = "notice-overlay";
  modal.innerHTML = `
    <div class="notice-box" role="dialog" aria-modal="true" aria-labelledby="notice-title">
      <button class="notice-close" aria-label="Close">&times;</button>
      <span class="notice-eyebrow">Good to know</span>
      <h2 id="notice-title">Factory Outlet &amp; Imported Pieces</h2>
      <p>Our collection features factory outlet and imported pieces, handpicked with care so you can shop with confidence.</p>
      <p>Have a question about a piece? Message us on WhatsApp &mdash; we're happy to help.</p>
      <button class="btn notice-ok">Got it, let me browse</button>
    </div>`;

  function close() {
    remember();
    modal.remove();
    document.removeEventListener("keydown", onKey);
  }
  function onKey(e) {
    if (e.key === "Escape") close();
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
  modal.querySelector(".notice-close").addEventListener("click", close);
  modal.querySelector(".notice-ok").addEventListener("click", close);
  document.addEventListener("keydown", onKey);

  document.body.appendChild(modal);
  modal.querySelector(".notice-ok").focus();
})();
