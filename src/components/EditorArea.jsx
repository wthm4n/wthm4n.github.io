import {
  CodeAbout,
  CodeSkills,
  CodeWork,
  CodeContact,
  CodePkg,
  CodeReadme,
} from "./CodeBlocks";
import { META, TAB_COLORS, FILE_LABELS } from "../constants/themes";

// ── Minimap ───────────────────────────────────────────────────────────────────
function Minimap({ t }) {
  const widths = [
    "60%",
    "40%",
    "70%",
    "80%",
    "30%",
    "65%",
    "50%",
    "45%",
    "75%",
    "55%",
    "40%",
    "80%",
    "35%",
    "60%",
    "90%",
    "25%",
    "70%",
    "50%",
    "55%",
    "65%",
  ];
  const colors = [t.keyword, t.func, t.string, t.border2];

  return (
    <div
      style={{
        width: 70,
        background: t.bg,
        borderLeft: `1px solid ${t.border}`,
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 50,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          pointerEvents: "none",
        }}
      />
      <div style={{ padding: "4px 0" }}>
        {widths.map((w, i) => (
          <div
            key={i}
            style={{
              height: 2,
              margin: "1px 4px",
              borderRadius: 1,
              background: colors[i % 4],
              opacity: 0.5,
              width: w,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Code renderer ─────────────────────────────────────────────────────────────
function CodeRenderer({ activeTab, t }) {
  return (
    <div className="fadein" key={activeTab}>
      {activeTab === "about" && <CodeAbout t={t} />}
      {activeTab === "skills" && <CodeSkills t={t} />}
      {activeTab === "work" && <CodeWork t={t} />}
      {activeTab === "contact" && <CodeContact t={t} />}
      {activeTab === "pkg" && <CodePkg t={t} />}
      {activeTab === "readme" && <CodeReadme t={t} />}
    </div>
  );
}

// ── Main EditorArea ───────────────────────────────────────────────────────────
export function EditorArea({
  t,
  mobile,
  tablet,
  activeTab,
  openTabs,
  switchTab,
  closeTab,
  lineNumsOn,
  minimapOn,
  onScroll,
}) {
  const meta = META[activeTab] || META.about;
  const editorBg = t.bg2;

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        marginBottom: mobile ? 48 : 0,
      }}
    >
      {/* ── Tabs ── */}
      <div
        style={{
          height: mobile ? 36 : 35,
          background: t.panel,
          borderBottom: `1px solid ${t.border}`,
          display: "flex",
          alignItems: "flex-end",
          overflowX: "auto",
          flexShrink: 0,
        }}
      >
        {[...openTabs].map((tab) => {
          if (!META[tab]) return null;
          const isActive = activeTab === tab;
          return (
            <div
              key={tab}
              onClick={() => switchTab(tab)}
              style={{
                height: mobile ? 36 : 35,
                padding: mobile ? "0 12px" : "0 14px",
                display: "flex",
                alignItems: "center",
                gap: 7,
                fontSize: mobile ? 11.5 : 12.5,
                color: isActive ? t.fg2 : t.comment,
                borderRight: `1px solid ${t.border}`,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s",
                flexShrink: 0,
                position: "relative",
                background: isActive ? editorBg : "transparent",
                borderTop: isActive
                  ? `1px solid ${t.tabLine}`
                  : "1px solid transparent",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: TAB_COLORS[tab],
                  flexShrink: 0,
                }}
              />
              {FILE_LABELS[tab]}
              {!mobile && (
                <span
                  onClick={(e) => closeTab(e, tab)}
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    color: t.comment,
                    cursor: "pointer",
                    marginLeft: 2,
                    opacity: isActive ? 0.6 : 0,
                    transition: "all 0.1s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = t.bg3;
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.opacity = isActive ? "0.6" : "0";
                  }}
                >
                  ×
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Breadcrumb ── */}
      <div
        style={{
          height: mobile ? 20 : 22,
          background: editorBg,
          borderBottom: `1px solid ${t.border}`,
          display: "flex",
          alignItems: "center",
          padding: mobile ? "0 10px" : "0 14px",
          gap: 3,
          fontSize: mobile ? 11 : 12,
          color: t.comment,
          flexShrink: 0,
        }}
      >
        <span>aman-portfolio</span>
        <span style={{ color: t.border2, margin: "0 1px" }}>›</span>
        {!mobile && (
          <>
            <span>{meta.folder}</span>
            <span style={{ color: t.border2, margin: "0 1px" }}>›</span>
          </>
        )}
        <span style={{ color: t.fg }}>{meta.file}</span>
      </div>

      {/* ── Code + minimap ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
          background: editorBg,
        }}
      >
        {/* Line numbers */}
        {lineNumsOn && (
          <div
            style={{
              padding: "16px 14px 16px 8px",
              textAlign: "right",
              color: t.comment,
              fontSize: mobile ? 11.5 : 13,
              lineHeight: "22px",
              minWidth: mobile ? 32 : 48,
              flexShrink: 0,
              userSelect: "none",
              background: editorBg,
            }}
          >
            {Array.from({ length: meta.lines + 6 }, (_, i) => (
              <div key={i} style={{ height: 22 }}>
                {i + 1}
              </div>
            ))}
          </div>
        )}

        {/* Code scroll */}
        <div
          onScroll={onScroll}
          style={{
            flex: 1,
            overflowY: "auto",
            overflowX: "auto",
            padding: mobile ? "12px 0 80px 12px" : "16px 0 80px 16px",
            fontSize: mobile ? 12 : 13,
          }}
        >
          <CodeRenderer activeTab={activeTab} t={t} />
        </div>

        {/* Minimap */}
        {minimapOn && !tablet && <Minimap t={t} />}
      </div>
    </div>
  );
}
