import { useState } from "react";
import { FILE_ICONS } from "./FileIcons";
import { THEMES, FILE_LABELS } from "../constants/themes";

// ── Tooltip wrapper ───────────────────────────────────────────────────────────
function Tip({ label, children }) {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{ position: "relative", display: "inline-flex" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "calc(100% + 6px)",
            transform: "translateX(-50%)",
            background: "#1a1a1a",
            color: "#e0e0e0",
            fontSize: 10,
            fontWeight: 600,
            padding: "3px 8px",
            borderRadius: 4,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            zIndex: 999,
            boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
}

// ── Panel header ──────────────────────────────────────────────────────────────
function PanelHeader({ label, t, children }) {
  return (
    <div
      style={{
        padding: "8px 12px",
        fontSize: 10,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: t.comment,
        fontWeight: 700,
        borderBottom: `1px solid ${t.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
        minHeight: 36,
      }}
    >
      <span>{label}</span>
      {children && <div style={{ display: "flex", gap: 4 }}>{children}</div>}
    </div>
  );
}

// ── Icon button (explorer header actions) ─────────────────────────────────────
function IconBtn({ label, onClick, t, children }) {
  const [hov, setHov] = useState(false);
  return (
    <Tip label={label}>
      <div
        onClick={onClick}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          cursor: "pointer",
          padding: "2px 5px",
          borderRadius: 3,
          fontSize: 13,
          color: hov ? t.fg : t.comment,
          background: hov ? t.hover : "transparent",
          transition: "color 0.12s, background 0.12s",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        {children}
      </div>
    </Tip>
  );
}

// ── Folder row ────────────────────────────────────────────────────────────────
function FolderRow({ label, open, depth, onClick, t, color }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: `3px 10px 3px ${8 + depth * 14}px`,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12.5,
        color: t.fg,
        userSelect: "none",
        background: hov ? t.hover : "transparent",
        transition: "background 0.1s",
      }}
    >
      <span
        style={{
          fontSize: 8,
          color: t.comment,
          transform: open ? "rotate(90deg)" : "none",
          transition: "transform 0.15s",
          display: "inline-block",
          flexShrink: 0,
        }}
      >
        ▶
      </span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={color}
        style={{ flexShrink: 0, opacity: 0.85 }}
      >
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
      <span style={{ color: hov ? t.fg2 : t.fg, transition: "color 0.1s" }}>
        {label}
      </span>
    </div>
  );
}

// ── File row ──────────────────────────────────────────────────────────────────
function FileRow({ tab, active, onClick, t }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "3px 10px 3px 0",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 7,
        fontSize: 12.5,
        color: active ? t.fg2 : t.fg,
        userSelect: "none",
        position: "relative",
        background: active ? t.bg3 : hov ? t.hover : "transparent",
        transition: "background 0.1s, color 0.1s",
      }}
    >
      {/* Left accent — mirrors Line hl bar */}
      {active && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 2,
            borderRadius: "0 1px 1px 0",
            background: t.cursor ?? t.tabLine,
          }}
        />
      )}
      <span style={{ width: 28, flexShrink: 0 }} />
      {FILE_ICONS[tab]}
      <span style={{ fontWeight: active ? 600 : 400 }}>{FILE_LABELS[tab]}</span>
    </div>
  );
}

// ── Toggle switch ─────────────────────────────────────────────────────────────
function Toggle({ on, onToggle, t }) {
  return (
    <div
      onClick={onToggle}
      style={{
        width: 32,
        height: 16,
        borderRadius: 8,
        background: on ? t.tabLine : t.border2,
        cursor: "pointer",
        position: "relative",
        transition: "background 0.2s",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "white",
          position: "absolute",
          top: 2,
          left: on ? 18 : 2,
          transition: "left 0.2s",
          boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
}

// ── Per-tab outline items ─────────────────────────────────────────────────────
const TAB_OUTLINE = {
  about: [
    { icon: "▪", label: "local Aman", kind: "variable" },
    { icon: "◆", label: "Aman.origin", kind: "property" },
    { icon: "◆", label: "Aman.fuel", kind: "property" },
    { icon: "●", label: "fn GetQuote()", kind: "function" },
  ],
  skills: [
    { icon: "★", label: "type SkillSet", kind: "type" },
    { icon: "◆", label: ".primary", kind: "property" },
    { icon: "◆", label: ".secondary", kind: "property" },
    { icon: "◆", label: ".frameworks", kind: "property" },
  ],
  work: [
    { icon: "▪", label: "Nyxus", kind: "variable" },
    { icon: "▪", label: "amna-v5", kind: "variable" },
    { icon: "▪", label: "BillDashboard", kind: "variable" },
    { icon: "▪", label: "MusicBot", kind: "variable" },
    { icon: "▪", label: "DBS Mods", kind: "variable" },
    { icon: "▪", label: "HMS", kind: "variable" },
  ],
  contact: [
    { icon: "◆", label: "Contact.email", kind: "property" },
    { icon: "◆", label: "Contact.github", kind: "property" },
    { icon: "◆", label: "Contact.discord", kind: "property" },
    { icon: "●", label: "fn HireMe()", kind: "function" },
  ],
  pkg: [
    { icon: "◆", label: '"dependencies"', kind: "property" },
    { icon: "◆", label: '"peerDependencies"', kind: "property" },
    { icon: "◆", label: '"scripts"', kind: "property" },
    { icon: "◆", label: '"config"', kind: "property" },
  ],
  readme: [
    { icon: "◆", label: "## What I build", kind: "property" },
    { icon: "◆", label: "## Projects", kind: "property" },
    { icon: "◆", label: "## Find me", kind: "property" },
  ],
};

const KIND_COLOR = (item, t) =>
  ({
    variable: t.keyword,
    property: t.func,
    function: t.type,
    type: t.string,
  })[item.kind] ?? t.comment;

// ── Explorer panel ────────────────────────────────────────────────────────────
function ExplorerPanel({ t, activeTab, switchTab, push, setRightPanelOpen }) {
  const [folderOpen, setFolderOpen] = useState({ pages: true, meta: true });
  const toggle = (key) => setFolderOpen((f) => ({ ...f, [key]: !f[key] }));

  const outline = TAB_OUTLINE[activeTab] ?? [];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <PanelHeader label="Explorer" t={t}>
        <IconBtn
          label="New file (joke)"
          onClick={() =>
            push("📄 Created untitled.lua... just kidding 😂", "info", 4000)
          }
          t={t}
        >
          ＋
        </IconBtn>
        <IconBtn
          label="Collapse all folders"
          onClick={() => setFolderOpen({ pages: false, meta: false })}
          t={t}
        >
          ⊟
        </IconBtn>
        <IconBtn
          label="Toggle right panel"
          onClick={() => setRightPanelOpen((s) => !s)}
          t={t}
        >
          ⊞
        </IconBtn>
      </PanelHeader>

      <div style={{ overflowY: "auto", flex: 1, paddingTop: 4 }}>
        {/* ── /pages ── */}
        <FolderRow
          label="pages"
          open={folderOpen.pages}
          depth={0}
          onClick={() => toggle("pages")}
          t={t}
          color={t.func}
        />
        {folderOpen.pages &&
          ["about", "skills", "work", "contact"].map((tab) => (
            <FileRow
              key={tab}
              tab={tab}
              active={activeTab === tab}
              onClick={() => switchTab(tab)}
              t={t}
            />
          ))}

        {/* ── /meta ── */}
        <FolderRow
          label="meta"
          open={folderOpen.meta}
          depth={0}
          onClick={() => toggle("meta")}
          t={t}
          color={t.comment}
        />
        {folderOpen.meta &&
          ["pkg", "readme"].map((tab) => (
            <FileRow
              key={tab}
              tab={tab}
              active={activeTab === tab}
              onClick={() => switchTab(tab)}
              t={t}
            />
          ))}

        {/* ── Outline — dynamic per active tab ── */}
        <div
          style={{
            padding: "12px 10px 4px",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: t.comment,
            fontWeight: 700,
          }}
        >
          Outline
        </div>

        {outline.length === 0 ? (
          <div
            style={{
              padding: "4px 14px",
              fontSize: 11,
              color: t.comment,
              fontStyle: "italic",
            }}
          >
            No symbols
          </div>
        ) : (
          outline.map((item, i) => {
            const color = KIND_COLOR(item, t);
            return (
              <OutlineRow
                key={i}
                item={item}
                color={color}
                onClick={() => switchTab(activeTab)}
                t={t}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

function OutlineRow({ item, color, onClick, t }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "2px 10px 2px 18px",
        fontSize: 12,
        cursor: "pointer",
        color: hov ? t.fg2 : t.comment,
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: hov ? t.hover : "transparent",
        transition: "color 0.1s, background 0.1s",
      }}
    >
      <span style={{ color, fontSize: 9, flexShrink: 0 }}>{item.icon}</span>
      <span style={{ fontFamily: "monospace", fontSize: 11.5 }}>
        {item.label}
      </span>
    </div>
  );
}

// ── Search panel ──────────────────────────────────────────────────────────────
function SearchPanel({
  t,
  searchQuery,
  setSearchQuery,
  searchResults,
  switchTab,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PanelHeader label="Search" t={t} />
      <div style={{ padding: 8 }}>
        <input
          autoFocus
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search in files..."
          style={{
            width: "100%",
            background: t.bg3,
            border: `1px solid ${t.border2}`,
            color: t.fg2,
            fontSize: 12.5,
            padding: "5px 10px",
            borderRadius: 4,
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>
      <div style={{ flex: 1, overflowY: "auto" }}>
        {searchQuery && searchResults.length === 0 && (
          <div style={{ padding: "10px 12px", color: t.comment, fontSize: 12 }}>
            No results for "{searchQuery}"
          </div>
        )}
        {searchResults.map((r, i) => (
          <SearchResultRow
            key={i}
            result={r}
            onClick={() => switchTab(r.tab)}
            t={t}
          />
        ))}
      </div>
    </div>
  );
}

function SearchResultRow({ result, onClick, t }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "5px 12px",
        cursor: "pointer",
        fontSize: 12,
        color: t.fg,
        background: hov ? t.hover : "transparent",
        transition: "background 0.1s",
      }}
    >
      <div style={{ color: t.func, fontSize: 11, marginBottom: 1 }}>
        {result.file}
      </div>
      <div style={{ color: t.comment }}>Match found</div>
    </div>
  );
}

// ── Git panel ─────────────────────────────────────────────────────────────────
function GitPanel({ t, push }) {
  const [msg, setMsg] = useState("");

  const handleCommit = () => {
    if (!msg.trim()) {
      push("⚠️ Write a commit message first", "warning", 3000);
      return;
    }
    push(`🚀 Committed: "${msg}" — pushing to main...`, "success");
    setTimeout(
      () => push("✅ aman-portfolio deployed to GitHub Pages", "success", 5000),
      1500,
    );
    setMsg("");
  };

  const changes = [
    { status: "M", color: t.number, file: "about.lua" },
    { status: "M", color: t.number, file: "projects.lua" },
    { status: "A", color: t.string, file: "contact.lua" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PanelHeader label="Source Control" t={t} />

      <div
        style={{
          padding: "8px 12px",
          fontSize: 12,
          color: t.comment,
          borderBottom: `1px solid ${t.border}`,
        }}
      >
        ⎇&nbsp; main
      </div>

      <div
        style={{
          padding: "8px 12px 4px",
          fontSize: 10,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: t.comment,
          fontWeight: 700,
        }}
      >
        Changes ({changes.length})
      </div>

      {changes.map((item, i) => (
        <GitFileRow key={i} item={item} t={t} />
      ))}

      <div
        style={{
          padding: "12px 12px 8px",
          marginTop: "auto",
          borderTop: `1px solid ${t.border}`,
        }}
      >
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && e.ctrlKey && handleCommit()}
          placeholder="Message (Ctrl+Enter to commit)"
          style={{
            width: "100%",
            background: t.bg3,
            border: `1px solid ${t.border2}`,
            color: t.fg,
            fontFamily: "inherit",
            fontSize: 12,
            padding: "6px 10px",
            borderRadius: 4,
            outline: "none",
            marginBottom: 8,
            boxSizing: "border-box",
          }}
        />
        <CommitButton onClick={handleCommit} t={t} />
      </div>
    </div>
  );
}

function GitFileRow({ item, t }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "4px 12px",
        fontSize: 12,
        color: t.fg,
        display: "flex",
        alignItems: "center",
        gap: 8,
        cursor: "default",
        background: hov ? t.hover : "transparent",
        transition: "background 0.1s",
      }}
    >
      <span
        style={{ fontWeight: 700, width: 12, color: item.color, flexShrink: 0 }}
      >
        {item.status}
      </span>
      <span>{item.file}</span>
    </div>
  );
}

function CommitButton({ onClick, t }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? t.type : t.tabLine,
        color: "white",
        textAlign: "center",
        padding: "6px 5px",
        borderRadius: 4,
        cursor: "pointer",
        fontSize: 12,
        fontWeight: 600,
        transition: "background 0.15s",
        userSelect: "none",
      }}
    >
      ✓ Commit & Push
    </div>
  );
}

// ── Extensions panel ──────────────────────────────────────────────────────────
function ExtensionsPanel({ t }) {
  const exts = [
    {
      name: "Luau LSP",
      desc: "Type checking & autocomplete for Luau",
      installed: true,
    },
    {
      name: "roblox-ts",
      desc: "TypeScript → Luau compiler support",
      installed: true,
    },
    { name: "One Dark Pro", desc: "Theme (active)", installed: true },
    {
      name: "Tailwind CSS IntelliSense",
      desc: "Autocomplete, linting, hover previews",
      installed: true,
    },
    {
      name: "Discord.js Snippets",
      desc: "Snippets for Discord bot development",
      installed: false,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PanelHeader label="Extensions" t={t} />
      <div style={{ padding: 8 }}>
        <input
          style={{
            width: "100%",
            background: t.bg3,
            border: `1px solid ${t.border2}`,
            color: t.fg,
            fontFamily: "inherit",
            fontSize: 12,
            padding: "5px 10px",
            borderRadius: 4,
            outline: "none",
            boxSizing: "border-box",
          }}
          placeholder="Search extensions..."
        />
      </div>
      <div style={{ overflowY: "auto", flex: 1 }}>
        {exts.map((ext, i) => (
          <ExtRow key={i} ext={ext} t={t} />
        ))}
      </div>
    </div>
  );
}

function ExtRow({ ext, t }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "9px 12px",
        borderBottom: `1px solid ${t.border}`,
        background: hov ? t.hover : "transparent",
        transition: "background 0.1s",
        cursor: "default",
      }}
    >
      <div
        style={{
          fontSize: 12.5,
          color: t.fg2,
          marginBottom: 2,
          fontWeight: 500,
        }}
      >
        {ext.name}
      </div>
      <div style={{ fontSize: 11, color: t.comment, marginBottom: 3 }}>
        {ext.desc}
      </div>
      <div
        style={{
          fontSize: 10,
          color: ext.installed ? t.string : t.number,
          fontWeight: 600,
        }}
      >
        {ext.installed ? "✓ Installed" : "↓ Install"}
      </div>
    </div>
  );
}

// ── Settings panel ────────────────────────────────────────────────────────────
function SettingsPanel({
  t,
  themeName,
  setThemeName,
  lineNumsOn,
  setLineNumsOn,
  minimapOn,
  setMinimapOn,
  rightPanelOpen,
  setRightPanelOpen,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PanelHeader label="Settings" t={t} />
      <div style={{ padding: "10px 12px", overflowY: "auto", flex: 1 }}>
        <SectionLabel label="Color Theme" t={t} />
        {Object.entries(THEMES).map(([k, v]) => (
          <ThemeRow
            key={k}
            themeKey={k}
            theme={v}
            active={k === themeName}
            onSelect={() => setThemeName(k)}
            t={t}
          />
        ))}

        <Divider t={t} />

        <SectionLabel label="Editor" t={t} />
        {[
          {
            label: "Line Numbers",
            on: lineNumsOn,
            toggle: () => setLineNumsOn((s) => !s),
          },
          {
            label: "Minimap",
            on: minimapOn,
            toggle: () => setMinimapOn((s) => !s),
          },
          {
            label: "Right Panel",
            on: rightPanelOpen,
            toggle: () => setRightPanelOpen((s) => !s),
          },
        ].map((item) => (
          <ToggleRow
            key={item.label}
            label={item.label}
            on={item.on}
            onToggle={item.toggle}
            t={t}
          />
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ label, t }) {
  return (
    <div
      style={{
        fontSize: 10,
        textTransform: "uppercase",
        letterSpacing: "0.11em",
        color: t.comment,
        fontWeight: 700,
        marginBottom: 8,
      }}
    >
      {label}
    </div>
  );
}

function Divider({ t }) {
  return <div style={{ height: 1, background: t.border, margin: "14px 0" }} />;
}

function ThemeRow({ themeKey, theme, active, onSelect, t }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "5px 8px",
        borderRadius: 4,
        cursor: "pointer",
        fontSize: 12,
        color: active ? t.fg2 : t.fg,
        border: `1px solid ${active ? t.tabLine : "transparent"}`,
        background: hov ? t.hover : "transparent",
        marginBottom: 2,
        transition: "background 0.1s, border-color 0.1s",
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: 2,
          background: theme.swatch,
          border: `1px solid ${t.border2}`,
          flexShrink: 0,
        }}
      />
      <span style={{ flex: 1 }}>{theme.label}</span>
      {active && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </div>
  );
}

function ToggleRow({ label, on, onToggle, t }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 12,
        color: t.fg,
        marginBottom: 8,
        padding: "2px 0",
      }}
    >
      <span>{label}</span>
      <Toggle on={on} onToggle={onToggle} t={t} />
    </div>
  );
}

// ── Main Sidebar ──────────────────────────────────────────────────────────────
export function Sidebar({
  t,
  activity,
  mobile,
  mobileSidebarOpen,
  activeTab,
  switchTab,
  push,
  searchQuery,
  setSearchQuery,
  searchResults,
  themeName,
  setThemeName,
  lineNumsOn,
  setLineNumsOn,
  minimapOn,
  setMinimapOn,
  rightPanelOpen,
  setRightPanelOpen,
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
          position: "fixed",
          top: 44,
          left: 0,
          bottom: 48,
          zIndex: 200,
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
      {activity === "explorer" && (
        <ExplorerPanel
          t={t}
          activeTab={activeTab}
          switchTab={switchTab}
          push={push}
          setRightPanelOpen={setRightPanelOpen}
        />
      )}
      {activity === "search" && (
        <SearchPanel
          t={t}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchResults={searchResults}
          switchTab={switchTab}
        />
      )}
      {activity === "git" && <GitPanel t={t} push={push} />}
      {activity === "extensions" && <ExtensionsPanel t={t} />}
      {activity === "settings" && (
        <SettingsPanel
          t={t}
          themeName={themeName}
          setThemeName={setThemeName}
          lineNumsOn={lineNumsOn}
          setLineNumsOn={setLineNumsOn}
          minimapOn={minimapOn}
          setMinimapOn={setMinimapOn}
          rightPanelOpen={rightPanelOpen}
          setRightPanelOpen={setRightPanelOpen}
        />
      )}
    </div>
  );
}
