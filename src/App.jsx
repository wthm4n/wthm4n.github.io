import { useState, useCallback, useRef, useEffect } from "react";

import { THEMES, META } from "./constants/themes";
import {
  useLocalStorage, useNotifications, useMatrix,
  useWindowWidth, useClock, useIdleEasterEgg, useKeyboardEasterEggs,
} from "./hooks";

import { TitleBar }        from "./components/TitleBar";
import { ActivityBar }     from "./components/ActivityBar";
import { Sidebar }         from "./components/Sidebar";
import { EditorArea }      from "./components/EditorArea";
import { RightPanel }      from "./components/RightPanel";
import { StatusBar, MobileBottomNav, Notifications, CommandPalette } from "./components/Overlays";

export default function App() {
  // ── Theme ─────────────────────────────────────────────────────────────────
  const [themeName, setThemeName] = useLocalStorage("aman-theme-r", "onedark");
  const t = THEMES[themeName]?.vars || THEMES.onedark.vars;

  // ── Editor state ──────────────────────────────────────────────────────────
  const [activeTab,         setActiveTab]         = useState("readme");
  const [openTabs,          setOpenTabs]          = useState(new Set(["readme" ,"about", "skills", "work", "contact", "pkg"]));
  const [activity,          setActivity]          = useState("explorer");
  const [sidebarOpen,       setSidebarOpen]       = useState(true);
  const [rightPanelOpen,    setRightPanelOpen]    = useState(true);
  const [minimapOn,         setMinimapOn]         = useState(true);
  const [lineNumsOn,        setLineNumsOn]        = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [lnCol,             setLnCol]             = useState("Ln 1, Col 1");

  // ── Command palette ───────────────────────────────────────────────────────
  const [cmdOpen,  setCmdOpen]  = useState(false);
  const [cmdQuery, setCmdQuery] = useState("");
  const [cmdIdx,   setCmdIdx]   = useState(0);

  // ── Search ────────────────────────────────────────────────────────────────
  const [searchQuery, setSearchQuery] = useState("");

  // ── Easter egg state ──────────────────────────────────────────────────────
  const [matrixOn,       setMatrixOn]       = useState(false);
  const [panicOn,        setPanicOn]        = useState(false);
  const [themeClickCount,setThemeClickCount]= useState(0);
  const titleClickCount  = useRef(0);
  const titleClickTimer  = useRef(null);

  // ── Hooks ─────────────────────────────────────────────────────────────────
  const { notes, push, remove } = useNotifications();
  const windowWidth   = useWindowWidth();
  const clock         = useClock();
  const matrixCanvasRef = useMatrix(matrixOn, t);

  const mobile = windowWidth <= 768;
  const tablet = windowWidth <= 1024;

  // ── Apply CSS vars to :root ───────────────────────────────────────────────
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(t).forEach(([k, v]) => {
      root.style.setProperty("--" + k.replace(/([A-Z])/g, "-$1").toLowerCase(), v);
    });
    root.style.setProperty("--sel",    t.sel);
    root.style.setProperty("--hover",  t.hover);
    root.style.setProperty("--indent", t.indent);
  }, [t]);

  // ── Console easter egg ────────────────────────────────────────────────────
  useEffect(() => {
    console.log("%c👋 hey, you opened devtools!", "font-size:18px;font-weight:bold;color:#61afef;");
    console.log("%cAman built this with React + Vite. Multi-file architecture.", "color:#98c379");
    console.log("%cGun systems, combat engines — check out contact.lua if you wanna collab 🔥", "color:#e5c07b");
    console.log('%c🎮 Secret: type "aman" on the page for a surprise', "color:#c678dd");
  }, []);

  // ── Tab helpers ───────────────────────────────────────────────────────────
  const switchTab = useCallback((name) => {
    if (!META[name]) return;
    setActiveTab(name);
    setOpenTabs((s) => new Set([...s, name]));
    setMobileSidebarOpen(false);
  }, []);

  const closeTab = useCallback((e, name) => {
    e.stopPropagation();
    setOpenTabs((s) => { const n = new Set(s); n.delete(name); return n; });
    setActiveTab((prev) => {
      if (prev !== name) return prev;
      const rem = [...openTabs].filter((x) => x !== name);
      return rem[rem.length - 1] || "about";
    });
  }, [openTabs]);

  const handleScroll = useCallback((e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const pct = scrollTop / (scrollHeight - clientHeight || 1);
    const ln  = Math.max(1, Math.round(pct * (META[activeTab]?.lines || 30)));
    setLnCol(`Ln ${ln}, Col 1`);
  }, [activeTab]);

  // ── Easter eggs ───────────────────────────────────────────────────────────
  const triggerMatrix = useCallback(() => {
    setMatrixOn((on) => {
      push(on ? "🕵️ Matrix mode: OFF" : "🕵️ Matrix mode: ON — you see the Luau", "success", 3000);
      return !on;
    });
  }, [push]);

  const triggerPanic = useCallback(() => {
    setPanicOn(true);
    push("🔴 PANIC MODE — everything is fine. this is fine. 🔥", "error", 4000);
    setTimeout(() => { setPanicOn(false); push("😌 Crisis averted. you good.", "success", 3000); }, 5000);
  }, [push]);

  const handleThemeStatusClick = useCallback(() => {
    setThemeClickCount((n) => {
      const next = n + 1;
      if (next === 5)  push("🤔 5 clicks. you exploring the themes?", "info", 2500);
      if (next >= 10)  { push("🌈 ok ok here's all themes, pick one", "success", 3000); setActivity("settings"); return 0; }
      return next;
    });
  }, [push]);

  const handleTitleClick = useCallback((e) => {
    if (e.target.closest("[data-winbtn]") || e.target.closest("[data-titleright]")) return;
    titleClickCount.current += 1;
    clearTimeout(titleClickTimer.current);
    titleClickTimer.current = setTimeout(() => { titleClickCount.current = 0; }, 600);
    if (titleClickCount.current >= 3) {
      const keys     = Object.keys(THEMES);
      const nextTheme = keys[(keys.indexOf(themeName) + 1) % keys.length];
      setThemeName(nextTheme);
      push(`🎨 Theme switched to ${THEMES[nextTheme].label}! (triple-click = cycle themes)`, "success", 3000);
      clearTimeout(titleClickTimer.current);
      titleClickCount.current = 0;
    }
  }, [themeName, setThemeName, push]);

  // ── Idle easter egg ───────────────────────────────────────────────────────
  useIdleEasterEgg(push);

  // ── Keyboard shortcuts + typed-word easter eggs ───────────────────────────
  useKeyboardEasterEggs({
    push,
    switchTab,
    setSidebarOpen,
    setActivity,
    setCmdOpen,
    setMobileSidebarOpen,
  });

  // ── Command list ──────────────────────────────────────────────────────────
  const CMDS = [
    { label: "about.lua",     detail: "Open file", key: "Ctrl+1", action: () => switchTab("about")   },
    { label: "skills.lua",     detail: "Open file", key: "Ctrl+2", action: () => switchTab("skills")  },
    { label: "projects.lua",  detail: "Open file", key: "Ctrl+3", action: () => switchTab("work")    },
    { label: "contact.lua",   detail: "Open file", key: "Ctrl+4", action: () => switchTab("contact") },
    { label: "package.json",  detail: "Open file", key: "Ctrl+5", action: () => switchTab("pkg")     },
    { label: "README.md",     detail: "Open file", key: "",       action: () => switchTab("readme")  },
    { label: "Toggle Sidebar",detail: "View",      key: "Ctrl+B", action: () => setSidebarOpen((s) => !s) },
    { label: "Toggle Minimap",detail: "View",      key: "",       action: () => setMinimapOn((s) => !s)   },
    ...Object.keys(THEMES).map((k) => ({
      label: THEMES[k].label, detail: "Theme", key: "", action: () => setThemeName(k),
    })),
    { label: "Matrix Mode 🕵️", detail: "Easter egg", key: "", action: triggerMatrix },
    { label: "Panic Mode 🔴",  detail: "Easter egg", key: "", action: triggerPanic  },
  ];

  // ── Search results ────────────────────────────────────────────────────────
  const searchResults = searchQuery.trim() ? (() => {
    const corpus = {
      about:   "Aman New Delhi India Roblox Developer open_to_work Luau TypeScript HTML CSS JS Python React",
      skills:  "Luau Roblox Studio Systems Architecture Networking Remotes Advanced Lua HTML CSS JS TypeScript Python React Native C",
      work:    "GunSystem CombatSystem Raycasting recoil ADS hipfire Melee combo hitstun knockback Region3 hitbox Inventory DataStore",
      contact: "email github discord twitter Roblox game systems Gun combat commissions Web projects React TS",
      pkg:     "aman-portfolio luau typescript javascript html css python react roblox-ts tailwindcss",
      readme:  "Roblox developer Delhi India gun systems combat engines TypeScript HTML CSS JS Python C",
    };
    return Object.entries(corpus)
      .filter(([, c]) => c.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(([tab]) => ({ tab, file: META[tab]?.file || tab }));
  })() : [];

  const meta = META[activeTab] || META.about;

  // ── Mobile sidebar handler ────────────────────────────────────────────────
  const handleMobileNavSelect = (id) => {
    const samePanel = activity === id && mobileSidebarOpen;
    setActivity(id);
    setMobileSidebarOpen(!samePanel);
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 13, lineHeight: 1.5,
      background: t.bg, color: t.fg,
      display: "flex", flexDirection: "column",
      height: "100vh", overflow: "hidden",
      transition: "background 0.3s, color 0.3s",
    }}>

      {/* ── Global CSS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { height: 100%; overflow: hidden; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: var(--scrollbar, #3e4451); border-radius: 4px; }
        ::selection { background: var(--sel); }
        @keyframes slideIn { from { opacity:0; transform:translateX(20px); } to { opacity:1; transform:none; } }
        @keyframes fadeIn  { from { opacity:0; transform:translateY(4px); } to { opacity:1; transform:none; } }
        @keyframes pulse   { 0%,100%{box-shadow:0 0 4px var(--string)} 50%{box-shadow:0 0 10px var(--string),0 0 20px var(--string)} }
        @keyframes blink   { 50% { opacity:0; } }
        .notif-enter { animation: slideIn 0.25s ease; }
        .fadein      { animation: fadeIn  0.25s ease forwards; }
        .blink       { animation: blink   1.1s step-end infinite; }
        input { font-family: inherit; }
      `}</style>

      {/* ── Matrix canvas ── */}
      <canvas
        ref={matrixCanvasRef}
        style={{ position: "fixed", inset: 0, zIndex: 800, pointerEvents: "none", opacity: matrixOn ? 0.18 : 0, transition: "opacity 0.5s" }}
      />

      {/* ── Notifications ── */}
      <Notifications notes={notes} mobile={mobile} t={t} onRemove={remove} />

      {/* ── Command palette ── */}
      {cmdOpen && (
        <CommandPalette
          t={t} mobile={mobile}
          cmds={CMDS}
          query={cmdQuery} setQuery={setCmdQuery}
          idx={cmdIdx}     setIdx={setCmdIdx}
          onClose={() => { setCmdOpen(false); setCmdQuery(""); }}
        />
      )}

      {/* ── Mobile overlay backdrop ── */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 150, backdropFilter: "blur(2px)" }}
        />
      )}

      {/* ── Title bar ── */}
      <TitleBar
        t={t} mobile={mobile} clock={clock} themeName={themeName}
        onTitleClick={handleTitleClick}
        onCmdOpen={() => setCmdOpen(true)}
      />

      {/* ── App body ── */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* Activity bar (desktop only) */}
        {!mobile && (
          <ActivityBar
            t={t} activity={activity}
            onSelect={(id) => { setActivity(id); if (!sidebarOpen) setSidebarOpen(true); }}
          />
        )}

        {/* Sidebar */}
        <Sidebar
          t={t} activity={activity} mobile={mobile}
          mobileSidebarOpen={mobileSidebarOpen}
          sidebarOpen={sidebarOpen}
          activeTab={activeTab} switchTab={switchTab} push={push}
          searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchResults={searchResults}
          themeName={themeName} setThemeName={setThemeName}
          lineNumsOn={lineNumsOn} setLineNumsOn={setLineNumsOn}
          minimapOn={minimapOn}   setMinimapOn={setMinimapOn}
          rightPanelOpen={rightPanelOpen} setRightPanelOpen={setRightPanelOpen}
        />

        {/* Editor */}
        <EditorArea
          t={t} mobile={mobile} tablet={tablet}
          activeTab={activeTab} openTabs={openTabs}
          switchTab={switchTab} closeTab={closeTab}
          lineNumsOn={lineNumsOn} minimapOn={minimapOn}
          onScroll={handleScroll}
        />

        {/* Right panel (desktop only) */}
        {!tablet && rightPanelOpen && (
          <div style={{ width: 260, background: t.panel, borderLeft: `1px solid ${t.border}`, display: "flex", flexDirection: "column", overflow: "hidden", flexShrink: 0 }}>
            <RightPanel t={t} themeName={themeName} setThemeName={setThemeName} />
          </div>
        )}
      </div>

      {/* ── Status bar ── */}
      <StatusBar
        t={t} mobile={mobile} panicOn={panicOn}
        lnCol={lnCol} meta={meta} themeName={themeName}
        onGitClick={() => setActivity("git")}
        onCmdClick={() => setCmdOpen(true)}
        onLangClick={() => setActivity("extensions")}
        onThemeClick={handleThemeStatusClick}
      />

      {/* ── Mobile bottom nav ── */}
      {mobile && (
        <MobileBottomNav
          t={t} activity={activity} mobileSidebarOpen={mobileSidebarOpen}
          onSelect={handleMobileNavSelect}
          onPalette={() => setCmdOpen(true)}
        />
      )}
    </div>
  );
}
