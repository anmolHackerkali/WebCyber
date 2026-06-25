/* ====================================================================
   30 Din Mein HTML — App Logic
   ==================================================================== */

(function () {
  "use strict";

  // ---------- STATE ----------
  let currentDay = 1;
  const userCode = {};            // per-day edited code, persists while page is open
  const MOBILE_BREAKPOINT = 720;

  // ---------- DOM REFS ----------
  const dayListEl        = document.getElementById("dayList");
  const sidebarEl        = document.getElementById("sidebar");
  const sidebarBackdrop  = document.getElementById("sidebarBackdrop");
  const sidebarToggleBtn = document.getElementById("sidebarToggle");
  const contentEl        = document.getElementById("mainContent");

  const dayNumberBadge   = document.getElementById("dayNumberBadge");
  const dayTitleEl       = document.getElementById("dayTitle");
  const dayExplanationEl = document.getElementById("dayExplanation");
  const activeDayPill    = document.getElementById("activeDayPill");

  const codeEditor       = document.getElementById("codeEditor");
  const runBtn           = document.getElementById("runBtn");
  const resetBtn         = document.getElementById("resetBtn");
  const clearTermBtn     = document.getElementById("clearTermBtn");

  const previewFrame     = document.getElementById("previewFrame");
  const consoleOutput    = document.getElementById("consoleOutput");

  // ======================================================
  // SIDEBAR : build day list (Day 1 - Day 30)
  // ======================================================
  function buildDayList() {
    const frag = document.createDocumentFragment();
    courseData.forEach((day) => {
      const btn = document.createElement("button");
      btn.className = "day-item";
      btn.id = "day-item-" + day.id;
      btn.innerHTML =
        '<span class="day-num-chip">' + String(day.id).padStart(2, "0") + '</span>' +
        '<span class="day-item-title">Day ' + day.id + ": " + escapeHtml(day.title) + "</span>";
      btn.addEventListener("click", () => selectDay(day.id));
      frag.appendChild(btn);
    });
    dayListEl.appendChild(frag);
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ======================================================
  // SIDEBAR : open / close (pinned toggle button controls it)
  // ======================================================
  function isMobile() {
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }

  function openSidebar() {
    sidebarEl.classList.remove("closed");
    contentEl.classList.remove("full");
    if (isMobile()) sidebarBackdrop.classList.add("show");
  }

  function closeSidebar() {
    sidebarEl.classList.add("closed");
    contentEl.classList.add("full");
    sidebarBackdrop.classList.remove("show");
  }

  function toggleSidebar() {
    if (sidebarEl.classList.contains("closed")) {
      openSidebar();
    } else {
      closeSidebar();
    }
  }

  sidebarToggleBtn.addEventListener("click", toggleSidebar);
  sidebarBackdrop.addEventListener("click", closeSidebar);

  // ======================================================
  // DAY SELECTION : render explanation + load that day's code
  // ======================================================
  function selectDay(id) {
    const day = courseData.find((d) => d.id === id);
    if (!day) return;

    currentDay = id;

    // header / explanation
    dayNumberBadge.textContent = "Day " + String(day.id).padStart(2, "0");
    dayTitleEl.textContent = day.title;
    dayExplanationEl.innerHTML = day.explanation;
    activeDayPill.textContent = "Day " + day.id;

    // code editor — restore edited code if user already changed it this session
    codeEditor.value = userCode[id] !== undefined ? userCode[id] : day.code;

    // reset terminal/preview cleanly for the new day
    resetTerminal();

    // mark active item in sidebar
    document.querySelectorAll(".day-item").forEach((el) => el.classList.remove("active"));
    const activeEl = document.getElementById("day-item-" + id);
    if (activeEl) {
      activeEl.classList.add("active");
      activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    // on phones the sidebar is a full overlay — close it after picking a day
    // so the (now full-screen) code + terminal are visible immediately
    if (isMobile()) closeSidebar();
  }

  // ======================================================
  // TERMINAL : reset / clear
  // ======================================================
  function resetTerminal() {
    previewFrame.srcdoc = "";
    consoleOutput.innerHTML =
      '<div class="term-line term-placeholder">// "Run Code" button dabayein — yahan real output dikhega<span class="term-cursor"></span></div>';
  }

  function appendTermLine(type, msg) {
    const line = document.createElement("div");
    line.className = "term-line term-" + type;
    const prefix = type === "error" ? "✖ " : type === "warn" ? "⚠ " : type === "success" ? "✔ " : "❭ ";
    line.textContent = prefix + msg;
    consoleOutput.appendChild(line);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }

  // ======================================================
  // RUN CODE : real execution inside a sandboxed iframe
  // Captures console.log / console.warn / console.error / runtime errors
  // and streams them into the terminal panel — output reflects the
  // actual code the user wrote, including mistakes.
  // ======================================================
  function runCode() {
    const userWrittenCode = codeEditor.value;

    consoleOutput.innerHTML = "";
    appendTermLine("success", "Code run ho raha hai...");

    const bridgeScript =
      '<script>' +
      "(function(){" +
      "function send(logType, parts){ try{ parent.postMessage({__termBridge:true, logType:logType, msg: parts.map(function(a){" +
      "  if (a instanceof Error) return a.message;" +
      "  if (typeof a === 'object') { try { return JSON.stringify(a); } catch(e){ return String(a); } }" +
      "  return String(a);" +
      "}).join(' ')}, '*'); }catch(e){} }" +
      "var _log = console.log, _warn = console.warn, _err = console.error;" +
      "console.log = function(){ send('log', [].slice.call(arguments)); _log.apply(console, arguments); };" +
      "console.warn = function(){ send('warn', [].slice.call(arguments)); _warn.apply(console, arguments); };" +
      "console.error = function(){ send('error', [].slice.call(arguments)); _err.apply(console, arguments); };" +
      "window.onerror = function(message, source, line, col){ send('error', ['JavaScript Error: ' + message + ' (line ' + line + ')']); return true; };" +
      "window.addEventListener('DOMContentLoaded', function(){ send('success', ['Page successfully render ho gaya (no fatal HTML error).']); });" +
      "})();" +
      "<\/script>";

    previewFrame.srcdoc = bridgeScript + userWrittenCode;
  }

  window.addEventListener("message", (e) => {
    if (e.data && e.data.__termBridge) {
      appendTermLine(e.data.logType, e.data.msg);
    }
  });

  runBtn.addEventListener("click", runCode);

  // ======================================================
  // RESET / CLEAR buttons
  // ======================================================
  resetBtn.addEventListener("click", () => {
    const day = courseData.find((d) => d.id === currentDay);
    codeEditor.value = day.code;
    userCode[currentDay] = day.code;
    resetTerminal();
  });

  clearTermBtn.addEventListener("click", resetTerminal);

  // persist edits per-day as the user types
  codeEditor.addEventListener("input", () => {
    userCode[currentDay] = codeEditor.value;
  });

  // Tab key -> insert 2 spaces instead of jumping focus (smoother editing)
  codeEditor.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = codeEditor.selectionStart;
      const end = codeEditor.selectionEnd;
      codeEditor.value = codeEditor.value.slice(0, start) + "  " + codeEditor.value.slice(end);
      codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
      userCode[currentDay] = codeEditor.value;
    }
    // Ctrl/Cmd + Enter => quick run
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      runCode();
    }
  });

  // ======================================================
  // COPY PROTECTION (best-effort)
  // Blocks right-click, copy/cut, and common "view/save/inspect" shortcuts.
  // Note: this deters casual copying but cannot make content 100%
  // un-extractable from a browser — that is a real client-side limitation.
  // ======================================================
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener("copy", (e) => e.preventDefault());
  document.addEventListener("cut", (e) => e.preventDefault());
  document.addEventListener("dragstart", (e) => e.preventDefault());

  document.addEventListener("keydown", (e) => {
    const k = e.key.toLowerCase();
    const blockedCtrl = ["c", "u", "s", "p", "x"];
    if ((e.ctrlKey || e.metaKey) && blockedCtrl.includes(k)) {
      e.preventDefault();
    }
    if (e.key === "F12") e.preventDefault();
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && ["i", "j", "c"].includes(k)) {
      e.preventDefault();
    }
  });

  // ======================================================
  // INIT
  // ======================================================
  function init() {
    buildDayList();
    if (isMobile()) {
      closeSidebar(); // start clean on phones — user opens via the pinned button
    }
    selectDay(1);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
