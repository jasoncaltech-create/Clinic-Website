/* 本一聯合診所 — 捲動時的淡入與視差效果
   若使用者在系統中開啟「減少動態效果」，所有動畫都會停用，內容直接顯示。 */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    document.documentElement.classList.remove("js");
    return;
  }

  /* 1. 捲動淡入：元素進入畫面時由下往上浮現，同一組內依序出現 */
  var groups = [
    ".section-head", ".dept-card", ".about-grid > div", ".about-photo", ".pillars li",
    ".service", ".other-services", ".doctor", ".hours-wrap > div", ".call-note",
    ".faq details", ".contact-grid > *", ".wide-photo", ".photo-caption", ".narrow > p"
  ];
  var targets = [];
  groups.forEach(function (sel) {
    var els = document.querySelectorAll("main " + sel);
    var lastParent = null, i = 0;
    els.forEach(function (el) {
      if (el.parentNode !== lastParent) { lastParent = el.parentNode; i = 0; }
      el.classList.add("reveal");
      el.style.setProperty("--d", Math.min(i, 6) * 0.08 + "s");
      i++;
      targets.push(el);
    });
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  targets.forEach(function (el) { io.observe(el); });

  /* 2. 主視覺視差與照片縮放 */
  var parallax = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  var zooms = Array.prototype.slice.call(document.querySelectorAll("[data-zoom]"));
  var ticking = false;
  function update() {
    ticking = false;
    var vh = window.innerHeight;
    parallax.forEach(function (img) {
      var r = img.parentNode.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var f = parseFloat(img.getAttribute("data-parallax")) || 0.2;
      img.style.transform = "translate3d(0," + (-r.top * f).toFixed(1) + "px,0)";
    });
    zooms.forEach(function (fig) {
      var r = fig.getBoundingClientRect();
      // 0 when the photo's top enters the bottom of the screen, 1 when its centre reaches the middle
      var p = (vh - r.top) / (vh * 0.5 + r.height * 0.5);
      p = Math.max(0, Math.min(1, p));
      var s = 0.86 + 0.14 * p;
      fig.style.setProperty("--zoom", s.toFixed(4));
      fig.style.setProperty("--radius", (24 - 18 * p).toFixed(1) + "px");
    });
  }
  function onScroll() { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();
