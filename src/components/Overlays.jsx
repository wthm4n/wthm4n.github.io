import { THEMES } from "../constants/themes";

// ── Status Bar ────────────────────────────────────────────────────────────────
export function StatusBar({
  t,
  mobile,
  panicOn,
  lnCol,
  meta,
  themeName,
  onGitClick,
  onCmdClick,
  onLangClick,
  onThemeClick,
}) {
  return (
    <div
      style={{
        height: mobile ? 26 : 22,
        background: panicOn ? "#e06c75" : t.status,
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        gap: 12,
        flexShrink: 0,
        fontSize: mobile ? 10.5 : 11.5,
        color: "rgba(255,255,255,0.88)",
        transition: "background 0.3s",
        ...(mobile
          ? { position: "fixed", bottom: 48, left: 0, right: 0, zIndex: 90 }
          : {}),
      }}
    >
      {/* Git branch */}
      <div
        onClick={onGitClick}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "0 4px",
          height: "100%",
          cursor: "pointer",
          borderRadius: 2,
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M6 9v6M15.5 6.5A9 9 0 0 1 9 15" />
        </svg>
        <span>⎇ main</span>
      </div>

      {/* Errors / Warnings */}
      <div
        onClick={onCmdClick}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "0 4px",
          height: "100%",
          cursor: "pointer",
        }}
      >
        <span>⊘ {panicOn ? 99 : 0}</span>
        <span>⚠ {panicOn ? 999 : 0}</span>
      </div>

      {/* Right side */}
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ padding: "0 4px" }}>{lnCol}</span>
        {!mobile && (
          <span
            style={{ padding: "0 4px", cursor: "pointer" }}
            onClick={onLangClick}
          >
            {meta.lang}
          </span>
        )}
        {!mobile && <span style={{ padding: "0 4px" }}>UTF-8</span>}
        <div
          onClick={onThemeClick}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "0 4px",
            cursor: "pointer",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
          </svg>
          <span>{THEMES[themeName]?.label}</span>
        </div>
      </div>
    </div>
  );
}

// ── Mobile Bottom Navigation ──────────────────────────────────────────────────
export function MobileBottomNav({
  t,
  activity,
  mobileSidebarOpen,
  onSelect,
  onPalette,
}) {
  const ITEMS = [
    {
      id: "explorer",
      label: "Files",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          style={{ width: 18, height: 18 }}
        >
          <path d="M3 9h18M3 15h18M9 3v18" />
        </svg>
      ),
    },
    {
      id: "search",
      label: "Search",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          style={{ width: 18, height: 18 }}
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      ),
    },
    {
      id: "git",
      label: "Git",
      badge: true,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          style={{ width: 18, height: 18 }}
        >
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M6 9v6M15.5 6.5A9 9 0 0 1 9 15" />
        </svg>
      ),
    },
    {
      id: "palette",
      label: "Palette",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          style={{ width: 18, height: 18 }}
        >
          <polyline points="4 7 4 4 20 4 20 7" />
          <line x1="9" y1="20" x2="15" y2="20" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      ),
    },
    {
      id: "settings",
      label: "Settings",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          style={{ width: 18, height: 18 }}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 48,
        background: t.panel,
        borderTop: `1px solid ${t.border2}`,
        zIndex: 100,
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-around",
      }}
    >
      {ITEMS.map(({ id, label, icon, badge }) => {
        const isActive =
          mobileSidebarOpen && activity === id && id !== "palette";
        return (
          <button
            key={id}
            onClick={() => (id === "palette" ? onPalette() : onSelect(id))}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              cursor: "pointer",
              color: isActive ? t.tabLine : t.comment,
              fontSize: 9,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              border: "none",
              background: "transparent",
              position: "relative",
              WebkitTapHighlightColor: "transparent",
              transition: "color 0.15s",
            }}
          >
            {isActive && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "20%",
                  right: "20%",
                  height: 2,
                  background: t.tabLine,
                  borderRadius: "0 0 2px 2px",
                }}
              />
            )}
            {icon}
            {label}
            {badge && (
              <div
                style={{
                  position: "absolute",
                  top: 4,
                  right: "calc(50% - 14px)",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: t.number,
                  border: `1px solid ${t.panel}`,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

// ── Notifications overlay ─────────────────────────────────────────────────────
export function Notifications({ notes, mobile, t, onRemove }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: mobile ? 78 : 30,
        right: 16,
        left: mobile ? 8 : "auto",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        zIndex: 999,
        pointerEvents: "none",
      }}
    >
      {notes.map((n) => (
        <div
          key={n.id}
          className="notif-enter"
          style={{
            background: t.bg3,
            border: `1px solid ${t.border2}`,
            color: t.fg2,
            fontSize: 12,
            padding: "10px 14px",
            borderRadius: 6,
            maxWidth: mobile ? "100%" : 280,
            display: "flex",
            alignItems: "flex-start",
            gap: 8,
            pointerEvents: "all",
          }}
        >
          <span style={{ flexShrink: 0, marginTop: 1 }}>
            {{ info: "ℹ️", warning: "⚠️", success: "✅", error: "❌" }[
              n.type
            ] || "ℹ️"}
          </span>
          <span style={{ flex: 1 }}>{n.msg}</span>
          <span
            onClick={() => onRemove(n.id)}
            style={{
              marginLeft: "auto",
              opacity: 0.5,
              cursor: "pointer",
              fontSize: 14,
              lineHeight: 1,
              paddingLeft: 6,
              flexShrink: 0,
            }}
          >
            ×
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Command Palette ───────────────────────────────────────────────────────────
export function CommandPalette({
  t,
  mobile,
  cmds,
  query,
  setQuery,
  idx,
  setIdx,
  onClose,
}) {
  const filtered = query
    ? cmds.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.detail.toLowerCase().includes(query.toLowerCase()),
      )
    : cmds;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 500,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: 80,
      }}
    >
      <div
        style={{
          background: t.bg3,
          border: `1px solid ${t.border2}`,
          borderRadius: 8,
          width: mobile ? "95vw" : 560,
          maxWidth: "90vw",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          overflow: "hidden",
        }}
      >
        <input
          autoFocus
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIdx(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setIdx((i) => Math.min(i + 1, filtered.length - 1));
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              setIdx((i) => Math.max(i - 1, 0));
            }
            if (e.key === "Enter") {
              filtered[idx]?.action();
              onClose();
            }
            if (e.key === "Escape") {
              onClose();
            }
          }}
          placeholder="> Type a command..."
          style={{
            width: "100%",
            background: "transparent",
            border: "none",
            outline: "none",
            color: t.fg2,
            fontSize: 14,
            padding: "14px 16px",
            borderBottom: `1px solid ${t.border2}`,
          }}
        />
        <div style={{ maxHeight: 300, overflowY: "auto" }}>
          {filtered.slice(0, 10).map((c, i) => (
            <div
              key={i}
              onClick={() => {
                c.action();
                onClose();
              }}
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 12.5,
                color: t.fg,
                background: i === idx ? t.sel : "transparent",
                transition: "background 0.1s",
              }}
            >
              <span style={{ color: t.func }}>{c.detail}</span>
              <span style={{ color: t.fg2 }}>{c.label}</span>
              {c.key && (
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 11,
                    color: t.comment,
                    background: t.border2,
                    padding: "1px 6px",
                    borderRadius: 3,
                  }}
                >
                  {c.key}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
