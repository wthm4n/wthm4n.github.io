export function TitleBar({ t, mobile, clock, themeName, onTitleClick, onCmdOpen }) {
  return (
    <div
      onClick={onTitleClick}
      style={{
        height: mobile ? 44 : 30,
        background: t.panel,
        borderBottom: `1px solid ${t.border}`,
        display: "flex",
        alignItems: "center",
        userSelect: "none",
        flexShrink: 0,
        position: "relative",
        cursor: "default",
      }}
    >
      {/* Traffic lights */}
      <div
        data-winbtn
        style={{ display: "flex", alignItems: "center", gap: mobile ? 6 : 8, padding: mobile ? "0 10px" : "0 14px" }}
      >
        {[
          { bg: "#ff5f57", sym: "✕" },
          { bg: "#febc2e", sym: "−" },
          { bg: "#28c840", sym: "+" },
        ].map(({ bg, sym }, i) => (
          <div
            key={i}
            style={{ width: mobile ? 14 : 12, height: mobile ? 14 : 12, borderRadius: "50%", background: bg, cursor: "pointer", position: "relative", flexShrink: 0 }}
            onMouseEnter={(e) => { e.currentTarget.querySelector("span").style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.querySelector("span").style.opacity = "0"; }}
          >
            <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: 8, fontWeight: 900, opacity: 0, transition: "opacity 0.15s", lineHeight: 1, color: "rgba(0,0,0,0.6)" }}>
              {sym}
            </span>
          </div>
        ))}
      </div>

      {/* Centre label (desktop only) */}
      {!mobile && (
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", color: t.comment, fontSize: 11.5, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 11 }}>🟡</span>
          <span>aman.lua — portfolio</span>
        </div>
      )}

      {/* Right side */}
      <div
        data-titleright
        style={{ marginLeft: "auto", paddingRight: 12, display: "flex", alignItems: "center", gap: 10 }}
      >
        <div
          onClick={(e) => { e.stopPropagation(); onCmdOpen(); }}
          style={{ cursor: "pointer", color: t.comment, fontSize: 11, padding: "2px 6px", borderRadius: 3, border: `1px solid ${t.border2}` }}
        >
          ⌘ P
        </div>
        {!mobile && <span style={{ color: t.comment, fontSize: 11 }}>{clock}</span>}
      </div>
    </div>
  );
}
