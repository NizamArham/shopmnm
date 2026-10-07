// One-time "factory outlet & imported" notice. Shown once per browser; add ?notice to any page URL to see it again.
(function () {
  const KEY = "mm_notice_seen";
  const force = new URLSearchParams(window.location.search).has("notice");

  function seen() {
    try { return localStorage.getItem(KEY) === "1"; } catch (e) { return false; }
  }
  function remember() {
    try { localStorage.setItem(KEY, "1"); } catch (e) {}
  }

  if (seen() && !force) return;

  const modal = document.createElement("div");
  modal.className = "notice-overlay";
  modal.innerHTML = `
    <div class="notice-box" role="dialog" aria-modal="true" aria-labelledby="notice-title">
      <button class="notice-close" aria-label="Close">&times;</button>
      <span class="notice-eyebrow">Good to know</span>
      <h2 id="notice-title">Factory outlet &amp; imported pieces</h2>
      <p>Our collection includes factory outlet and imported stock. Most pieces have no damages.</p>
      <p>Want to know more about a piece before you order? Just ask us on WhatsApp.</p>
      <button class="btn clay notice-ok">Got it, let me browse</button>
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
