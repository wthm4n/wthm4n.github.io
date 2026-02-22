const ACTIVITY_ITEMS = [
  {
    id: "explorer",
    tip: "Explorer (Ctrl+B)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        style={{ width: 20, height: 20 }}
      >
        <path d="M3 9h18M3 15h18M9 3v18" />
      </svg>
    ),
  },
  {
    id: "search",
    tip: "Search (Ctrl+F)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        style={{ width: 20, height: 20 }}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    id: "git",
    tip: "Source Control",
    badge: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        style={{ width: 20, height: 20 }}
      >
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M6 9v6M15.5 6.5A9 9 0 0 1 9 15" />
      </svg>
    ),
  },
  {
    id: "extensions",
    tip: "Extensions",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        style={{ width: 20, height: 20 }}
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

const SettingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    style={{ width: 20, height: 20 }}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export function ActivityBar({ t, activity, onSelect }) {
  const btnStyle = (id) => ({
    width: 38,
    height: 38,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: activity === id ? t.fg2 : t.comment,
    transition: "all 0.15s",
    position: "relative",
    marginBottom: 2,
    background: activity === id ? t.hover : "transparent",
  });

  return (
    <div
      style={{
        width: 48,
        background: t.panel,
        borderRight: `1px solid ${t.border}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 6,
        flexShrink: 0,
        zIndex: 20,
      }}
    >
      {ACTIVITY_ITEMS.map(({ id, tip, icon, badge }) => (
        <div
          key={id}
          onClick={() => onSelect(id)}
          title={tip}
          style={btnStyle(id)}
        >
          {activity === id && (
            <div
              style={{
                position: "absolute",
                left: -6,
                top: "50%",
                transform: "translateY(-50%)",
                width: 2,
                height: 22,
                background: t.tabLine,
                borderRadius: 1,
              }}
            />
          )}
          {icon}
          {badge && (
            <div
              style={{
                position: "absolute",
                top: 4,
                right: 4,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: t.number,
                fontSize: 7,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000",
                fontWeight: 700,
              }}
            >
              3
            </div>
          )}
        </div>
      ))}

      {/* Settings at bottom */}
      <div style={{ marginTop: "auto", paddingBottom: 8 }}>
        <div onClick={() => onSelect("settings")} style={btnStyle("settings")}>
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}
