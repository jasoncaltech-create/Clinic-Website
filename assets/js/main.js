/* 本一聯合診所 — 捲動效果
   - 開啟「減少動態效果」時不執行任何動畫，內容直接顯示。
   - 若此檔案無法載入，頁首的安全機制會在 2.5 秒後讓所有內容正常顯示。 */
(function () {
  "use strict";
  var root = document.documentElement;
  window.__pyReady = true;

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    root.classList.remove("js");
    return;
  }

  /* 1. 進場效果：標題逐行浮現，卡片依序出現 */
  document.querySelectorAll("main .section-head h2").forEach(function (h) {
    if (h.children.length) return;
    var span = document.createElement("span");
    span.className = "ln";
    span.textContent = h.textContent;
    h.textContent = "";
    h.appendChild(span);
    h.classList.add("split");
  });

  var groups = [
    ".section-head", ".dept-card", ".pillars li", ".service", ".other-services", ".doctor", ".hours-wrap > div",
    ".call-note", ".faq details", ".contact-grid > *", ".quick-info", ".about-text > p", ".intro-text > p",
    ".narrow > p", ".photo", ".map-frame", ".dir-list > div", ".dir-actions"
  ];
  var targets = [];
  groups.forEach(function (sel) {
    var lastParent = null, i = 0;
    document.querySelectorAll("main " + sel).forEach(function (el) {
      if (el.parentNode !== lastParent) { lastParent = el.parentNode; i = 0; }
      el.style.setProperty("--d", Math.min(i, 5) * 0.14 + "s");
      i++;
      targets.push(el);
    });
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.15 });
  targets.forEach(function (el) { io.observe(el); });

  /* 2. 與捲動同步的效果（背景的太陽與天色、地景下沉、照片放大、固定畫面） */
  var native = window.CSS && CSS.supports && CSS.supports("animation-timeline: scroll()") && CSS.supports("timeline-scope: --a") &&
    !/[?&]fxfallback/.test(location.search);
  var dayEl = document.querySelector(".daylight"), nightEl = document.getElementById("contact");
  if (!native && !document.getAnimations) {
    // 太舊的瀏覽器：不做與捲動同步的效果，內容照常顯示
  } else if (!native) {
    root.classList.add("fx", "fx-js");
    // 不支援 CSS scroll-driven animations 的瀏覽器：暫停 CSS 動畫，依捲動位置設定進度
    var anims = document.getAnimations().filter(function (a) { return a.animationName && a.animationName.indexOf("sd-") === 0; });
    anims.forEach(function (a) { a.pause(); });
    var clamp = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };
    var ticking = false;
    var update = function () {
      ticking = false;
      var y = window.scrollY, vh = window.innerHeight, max = root.scrollHeight - vh;
      anims.forEach(function (a) {
        var n = a.animationName, el = a.effect && a.effect.target, p = 0, box, r;
        if (n.indexOf("sd-day") === 0) { r = dayEl ? dayEl.getBoundingClientRect() : null; p = r ? -r.top / Math.max(1, r.height - vh) : (max > 0 ? y / max : 0); }
        else if (n === "sd-night") { r = nightEl ? nightEl.getBoundingClientRect() : null; p = r ? (vh - r.top) / (vh * 0.45) : 0; }
        else if (n.indexOf("sd-hero") === 0) p = y / vh;
        else if (n === "sd-grow") { r = el.closest(".grow").getBoundingClientRect(); p = (vh - r.top) / ((vh + r.height) / 2); }
        else if (n.indexOf("sd-pin") === 0) { box = el.closest(".pin"); r = box.getBoundingClientRect(); p = -r.top / Math.max(1, r.height - vh); }
        a.currentTime = clamp(p) * 1000 - 0.001;
      });
    };
    var onScroll = function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  } else {
    root.classList.add("fx");
  }


  /* 3. 換頁轉場的備援：瀏覽器若不支援 CSS 換頁轉場，點選站內連結時先讓頁面淡出再前往 */
  if (!("CSSViewTransitionRule" in window)) {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[href]");
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (a.target && a.target !== "_self") return;
      var url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      e.preventDefault();
      document.body.classList.add("is-leaving");
      setTimeout(function () { location.href = url.href; }, 260);
    });
    window.addEventListener("pageshow", function () { document.body.classList.remove("is-leaving"); });
  }

})();

/* 4. 本一診所「今日門診」：依頁面上的門診時間表格與台北時間，顯示今天的時段與目前狀態
   （測試用：網址加上 ?now=2026-11-25T10:00 可模擬台北時間） */
(function () {
  "use strict";
  var box = document.querySelector(".today-now");
  var body = document.querySelector(".hours-table tbody");
  if (!box || !body || !window.Intl) return;
  var day, mins;
  var q = /[?&]now=(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(location.search);
  if (q) {
    day = new Date(Date.UTC(+q[1], +q[2] - 1, +q[3])).getUTCDay();
    mins = +q[4] * 60 + +q[5];
  } else {
    var parts = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Taipei", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
    var get = function (t) { for (var i = 0; i < parts.length; i++) { if (parts[i].type === t) return parts[i].value; } return ""; };
    day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    mins = (+get("hour") % 24) * 60 + +get("minute");
  }
  var row = body.querySelectorAll("tr")[(day + 6) % 7];   // 表格由星期一排到星期日
  if (!row) return;
  var sessions = [];
  row.querySelectorAll("td").forEach(function (td) {
    var m = /(\d{1,2}):(\d{2})\s*[–-]\s*(\d{1,2}):(\d{2})/.exec(td.textContent);
    if (m) sessions.push({ text: m[1] + ":" + m[2] + "–" + m[3] + ":" + m[4], start: +m[1] * 60 + +m[2], end: +m[3] * 60 + +m[4], from: m[1] + ":" + m[2], to: m[3] + ":" + m[4] });
  });
  var status, cls;
  if (!sessions.length) { status = "今日休診"; cls = "closed"; }
  else {
    var cur = sessions.filter(function (s) { return mins >= s.start && mins < s.end; })[0];
    var next = sessions.filter(function (s) { return mins < s.start; })[0];
    if (cur) { status = "看診中・至 " + cur.to; cls = "open"; }
    else if (next) { status = "休息中・下一診 " + next.from; cls = "wait"; }
    else { status = "今日門診已結束"; cls = "closed"; }
  }
  box.querySelector(".today-hours").textContent = sessions.map(function (s) { return s.text; }).join("、");
  var st = box.querySelector(".today-status");
  st.textContent = status;
  st.className = "today-status " + cls;
  box.hidden = false;
})();
