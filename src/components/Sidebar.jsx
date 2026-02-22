import { useState } from "react";
import { FILE_ICONS } from "./FileIcons";
import { THEMES, FILE_LABELS } from "../constants/themes";

// ── Reusable folder row ───────────────────────────────────────────────────────
function FolderRow({ label, open, depth, onClick, t, color }) {
  return (
    <div
      onClick={onClick}
      style={{ padding: `3px 10px 3px ${depth * 14}px`, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontSize: 12.5, color: t.fg, userSelect: "none", transition: "background 0.1s" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = t.hover)}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <span style={{ fontSize: 9, color: t.comment, transform: open ? "rotate(90deg)" : "none", transition: "transform 0.15s", display: "inline-block" }}>▶</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0, opacity: 0.8 }}>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
      <span>{label}</span>
    </div>
  );
}

// ── Reusable file row ─────────────────────────────────────────────────────────
function FileRow({ tab, active, onClick, t }) {
  return (
    <div
      onClick={onClick}
      style={{ padding: "3px 10px 3px 0", cursor: "pointer", display: "flex", alignItems: "center", gap: 7, fontSize: 12.5, color: t.fg, transition: "background 0.1s", userSelect: "none", background: active ? t.bg3 : "transparent" }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = t.hover; }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}
    >
      <span style={{ width: 28, flexShrink: 0 }} />
      {FILE_ICONS[tab]}
      <span style={{ color: active ? t.fg2 : t.fg }}>{FILE_LABELS[tab]}</span>
    </div>
  );
}

// ── Panel header ─────────────────────────────────────────────────────────────
function PanelHeader({ label, t, children }) {
  return (
    <div style={{ padding: "7px 12px", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: t.comment, fontWeight: 700, borderBottom: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
      <span>{label}</span>
      {children}
    </div>
  );
}

// ── Toggle switch ─────────────────────────────────────────────────────────────
function Toggle({ on, onToggle, t }) {
  return (
    <div onClick={onToggle} style={{ width: 32, height: 16, borderRadius: 8, background: on ? t.tabLine : t.border2, cursor: "pointer", position: "relative", transition: "background 0.2s", flexShrink: 0 }}>
      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "white", position: "absolute", top: 2, right: on ? 2 : 16, transition: "right 0.2s" }} />
    </div>
  );
}

// ── Explorer panel ────────────────────────────────────────────────────────────
function ExplorerPanel({ t, activeTab, switchTab, push, setRightPanelOpen }) {
  const [folderOpen, setFolderOpen] = useState({ root: true, src: true, cfg: true });

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
      <PanelHeader label="Explorer" t={t}>
        <div style={{ display: "flex", gap: 2 }}>
          {["+ ", "⊟ ", "⊞"].map((label, i) => (
            <div key={i}
              onClick={() => {
                if (i === 0) push("📄 Created untitled.lua... just kidding 😂", "info", 4000);
                if (i === 1) setFolderOpen({ root: false, src: false, cfg: false });
                if (i === 2) setRightPanelOpen((s) => !s);
              }}
              style={{ cursor: "pointer", opacity: 0.5, fontSize: 15, transition: "opacity 0.15s", padding: 2, borderRadius: 3 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
            >{label}</div>
          ))}
        </div>
      </PanelHeader>

      <div style={{ overflowY: "auto", flex: 1, padding: "4px 0" }}>
        <FolderRow label="aman-portfolio" open={folderOpen.root} depth={0} onClick={() => setFolderOpen((f) => ({ ...f, root: !f.root }))} t={t} color={t.type} />

        {folderOpen.root && (
          <>
            <FolderRow label="src" open={folderOpen.src} depth={1} onClick={() => setFolderOpen((f) => ({ ...f, src: !f.src }))} t={t} color={t.func} />
            {folderOpen.src && ["about", "skills", "work", "contact"].map((tab) => (
              <FileRow key={tab} tab={tab} active={activeTab === tab} onClick={() => switchTab(tab)} t={t} />
            ))}

            <FolderRow label="config" open={folderOpen.cfg} depth={1} onClick={() => setFolderOpen((f) => ({ ...f, cfg: !f.cfg }))} t={t} color={t.comment} />
            {folderOpen.cfg && ["pkg", "readme"].map((tab) => (
              <FileRow key={tab} tab={tab} active={activeTab === tab} onClick={() => switchTab(tab)} t={t} />
            ))}
          </>
        )}

        {/* Outline */}
        <div style={{ padding: "10px 10px 3px", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: t.comment, fontWeight: 700 }}>Outline</div>
        {[
          { icon: "▪", color: t.keyword, label: "local Aman",      tab: "about" },
          { icon: "●", color: t.func,    label: "fn GetBio()",      tab: "about" },
          { icon: "●", color: t.func,    label: "fn GunSystem",     tab: "work"  },
          { icon: "●", color: t.func,    label: "fn CombatSystem",  tab: "work"  },
          { icon: "★", color: t.type,    label: "type SkillSet",    tab: "skills"},
        ].map((item, i) => (
          <div key={i} onClick={() => switchTab(item.tab)}
            style={{ padding: "2px 10px 2px 22px", fontSize: 12, cursor: "pointer", color: t.comment, display: "flex", alignItems: "center", gap: 5, transition: "color 0.1s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = t.fg2)}
            onMouseLeave={(e) => (e.currentTarget.style.color = t.comment)}
          >
            <span style={{ color: item.color, fontSize: 10 }}>{item.icon}</span>
            {item.label}
          </div>
        ))}

        {/* Timeline */}
        <div style={{ padding: "10px 10px 3px", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: t.comment, fontWeight: 700 }}>Timeline</div>
        <div style={{ padding: "4px 12px 8px" }}>
          {[
            { color: t.string,  label: "2023 — Started Luau"    },
            { color: t.func,    label: "2024 — Gun System v1"   },
            { color: t.type,    label: "2024 — Combat System"   },
            { color: t.keyword, label: "2025 — Adv Lua", blink: true },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 5, fontSize: 11.5, color: t.comment }}>
              <span className={item.blink ? "blink" : ""} style={{ color: item.color }}>●</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Search panel ──────────────────────────────────────────────────────────────
function SearchPanel({ t, searchQuery, setSearchQuery, searchResults, switchTab }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PanelHeader label="Search" t={t} />
      <div style={{ padding: 8 }}>
        <input
          autoFocus
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search in files..."
          style={{ width: "100%", background: t.bg3, border: `1px solid ${t.border2}`, color: t.fg2, fontSize: 12.5, padding: "5px 10px", borderRadius: 4, outline: "none" }}
        />
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "4px 0" }}>
        {searchResults.length === 0 && searchQuery && (
          <div style={{ padding: 12, color: t.comment, fontSize: 12 }}>No results for "{searchQuery}"</div>
        )}
        {searchResults.map((r, i) => (
          <div key={i} onClick={() => switchTab(r.tab)}
            style={{ padding: "3px 12px", cursor: "pointer", fontSize: 12, color: t.fg, transition: "background 0.1s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = t.hover)}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div style={{ color: t.func, fontSize: 11, marginBottom: 1 }}>{r.file}</div>
            <div>Match found</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Git panel ─────────────────────────────────────────────────────────────────
function GitPanel({ t, push }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PanelHeader label="Source Control" t={t} />
      <div style={{ padding: "8px 12px", fontSize: 12, color: t.comment }}>⎇ main</div>
      <div style={{ padding: "4px 12px", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: t.comment }}>Changes (3)</div>
      {[
        { s: "M", c: t.number, f: "about.lua"    },
        { s: "M", c: t.number, f: "projects.lua" },
        { s: "A", c: t.string, f: "contact.lua"  },
      ].map((item, i) => (
        <div key={i}
          style={{ padding: "4px 12px", fontSize: 12, color: t.fg, display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = t.hover)}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <span style={{ fontWeight: 700, width: 12, color: item.c }}>{item.s}</span>
          <span>{item.f}</span>
        </div>
      ))}
      <div style={{ padding: 16 }}>
        <input
          style={{ width: "100%", background: t.bg3, border: `1px solid ${t.border2}`, color: t.fg, fontFamily: "inherit", fontSize: 12, padding: "6px 10px", borderRadius: 4, outline: "none", marginBottom: 8 }}
          placeholder="Message (Ctrl+Enter to commit)"
        />
        <div
          onClick={() => {
            push("🚀 Pushed to main! Deploy in progress...", "success");
            setTimeout(() => push("✅ aman-portfolio deployed to GitHub Pages", "success", 5000), 1500);
          }}
          style={{ background: t.tabLine, color: "white", textAlign: "center", padding: 5, borderRadius: 4, cursor: "pointer", fontSize: 12 }}
        >
          ✓ Commit & Push
        </div>
      </div>
    </div>
  );
}

// ── Extensions panel ──────────────────────────────────────────────────────────
function ExtensionsPanel({ t }) {
  const exts = [
    { n: "Luau LSP",                 d: "Type checking for Luau" },
    { n: "roblox-ts",                d: "TypeScript → Luau"      },
    { n: "One Dark Pro",             d: "Theme (active)"         },
    { n: "Tailwind CSS IntelliSense",d: "Autocomplete, hover"    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PanelHeader label="Extensions" t={t} />
      <div style={{ padding: 8 }}>
        <input style={{ width: "100%", background: t.bg3, border: `1px solid ${t.border2}`, color: t.fg, fontFamily: "inherit", fontSize: 12, padding: "5px 10px", borderRadius: 4, outline: "none" }} placeholder="Search Extensions..." />
      </div>
      {exts.map((ext, i) => (
        <div key={i} style={{ padding: "8px 12px", borderBottom: `1px solid ${t.border}` }}>
          <div style={{ fontSize: 12.5, color: t.fg2, marginBottom: 2 }}>{ext.n}</div>
          <div style={{ fontSize: 11, color: t.comment }}>{ext.d}</div>
          <div style={{ fontSize: 10, color: t.string, marginTop: 2 }}>✓ Installed</div>
        </div>
      ))}
    </div>
  );
}

// ── Settings panel ────────────────────────────────────────────────────────────
function SettingsPanel({ t, themeName, setThemeName, lineNumsOn, setLineNumsOn, minimapOn, setMinimapOn, rightPanelOpen, setRightPanelOpen }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PanelHeader label="Settings" t={t} />
      <div style={{ padding: "8px 12px", overflowY: "auto", flex: 1 }}>
        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: t.comment, marginBottom: 8 }}>Color Theme</div>
        {Object.entries(THEMES).map(([k, v]) => (
          <div key={k} onClick={() => setThemeName(k)}
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 8px", borderRadius: 4, cursor: "pointer", fontSize: 12, color: t.fg, border: `1px solid ${k === themeName ? t.tabLine : "transparent"}`, marginBottom: 2, transition: "background 0.1s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = t.hover)}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div style={{ width: 12, height: 12, borderRadius: 2, background: v.swatch, border: `1px solid ${t.border2}`, flexShrink: 0 }} />
            {v.label}
            {k === themeName && (
              <svg style={{ marginLeft: "auto" }} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
        ))}

        <div style={{ height: 1, background: t.border, margin: "12px 0" }} />
        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: t.comment, marginBottom: 8 }}>Editor</div>
        {[
          { label: "Line Numbers", on: lineNumsOn, toggle: () => setLineNumsOn((s) => !s) },
          { label: "Minimap",      on: minimapOn,  toggle: () => setMinimapOn((s) => !s)  },
          { label: "Right Panel",  on: rightPanelOpen, toggle: () => setRightPanelOpen((s) => !s) },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: t.fg, marginBottom: 6 }}>
            <span>{item.label}</span>
            <Toggle on={item.on} onToggle={item.toggle} t={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Sidebar wrapper ──────────────────────────────────────────────────────
export function Sidebar({
  t, activity, mobile, mobileSidebarOpen,
  activeTab, switchTab, push,
  searchQuery, setSearchQuery, searchResults,
  themeName, setThemeName,
  lineNumsOn, setLineNumsOn,
  minimapOn, setMinimapOn,
  rightPanelOpen, setRightPanelOpen,
  sidebarOpen,
}) {
  const style = {
    background: t.bg,
    borderRight: `1px solid ${t.border}`,
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    overflow: "hidden",
    ...(mobile
      ? {
          position: "fixed", top: 44, left: 0, bottom: 48, zIndex: 200,
          width: 280,
          boxShadow: "6px 0 30px rgba(0,0,0,0.6)",
          transform: mobileSidebarOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.25s cubic-bezier(0.4,0,0.2,1)",
          borderRight: `1px solid ${t.border2}`,
        }
      : { width: sidebarOpen ? 220 : 0, transition: "width 0.2s" }),
  };

  return (
    <div style={style}>
      {activity === "explorer"  && <ExplorerPanel  t={t} activeTab={activeTab} switchTab={switchTab} push={push} setRightPanelOpen={setRightPanelOpen} />}
      {activity === "search"    && <SearchPanel    t={t} searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchResults={searchResults} switchTab={switchTab} />}
      {activity === "git"       && <GitPanel       t={t} push={push} />}
      {activity === "extensions"&& <ExtensionsPanel t={t} />}
      {activity === "settings"  && (
        <SettingsPanel
          t={t} themeName={themeName} setThemeName={setThemeName}
          lineNumsOn={lineNumsOn} setLineNumsOn={setLineNumsOn}
          minimapOn={minimapOn} setMinimapOn={setMinimapOn}
          rightPanelOpen={rightPanelOpen} setRightPanelOpen={setRightPanelOpen}
        />
      )}
    </div>
  );
}