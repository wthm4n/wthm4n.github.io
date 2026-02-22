import { useState, useEffect } from "react";
import { THEMES } from "../constants/themes";

// ── Collapsible section wrapper ───────────────────────────────────────────────
function RightSection({ title, t, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ borderBottom: `1px solid ${t.border}`, flexShrink: 0 }}>
      <div
        onClick={() => setOpen((s) => !s)}
        style={{ padding: "6px 12px", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: t.comment, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "background 0.1s" }}
        onMouseEnter={(e) => (e.currentTarget.style.background = t.hover)}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <span>{title}</span>
        <span style={{ fontSize: 9, transform: open ? "rotate(90deg)" : "none", transition: "transform 0.15s", display: "inline-block" }}>▶</span>
      </div>
      {open && <div style={{ padding: "10px 12px" }}>{children}</div>}
    </div>
  );
}

// ── Animated skill bar ────────────────────────────────────────────────────────
function SkillBar({ label, pct, color, note }) {
  const [w, setW] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setW(pct), 400);
    return () => clearTimeout(id);
  }, [pct]);

  return (
    <div style={{ marginBottom: 7 }}>
      <div style={{ fontSize: 11, display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
        <span style={{ color: "var(--fg)" }}>{label}</span>
        <span style={{ color: note ? "var(--keyword)" : "var(--comment)" }}>{note || `${pct}%`}</span>
      </div>
      <div style={{ height: 3, background: "var(--border2)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${w}%`, background: color, borderRadius: 2, transition: "width 1.3s cubic-bezier(0.4,0,0.2,1)" }} />
      </div>
    </div>
  );
}

// ── Main RightPanel ───────────────────────────────────────────────────────────
export function RightPanel({ t, themeName, setThemeName }) {
  return (
    <div style={{ overflowY: "auto", flex: 1 }}>

      {/* Dev Info */}
      <RightSection title="DEV_INFO" t={t}>
        <div style={{ fontSize: 15, fontWeight: 500, color: t.fg2, marginBottom: 2 }}>Aman</div>
        <div style={{ fontSize: 12, color: t.comment, marginBottom: 8 }}>🇮🇳 Delhi, India</div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: t.string, boxShadow: `0 0 6px ${t.string}`, animation: "pulse 2.5s ease-in-out infinite" }} />
          <span style={{ color: t.string, fontSize: 11.5 }}>open to work</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {[
            { label: "Luau",      color: t.func    },
            { label: "TypeScript",color: t.operator},
            { label: "Python",    color: t.type    },
            { label: "React",     color: t.string  },
            { label: "C",         color: t.red     },
            { label: "Adv Lua ↑", color: t.comment },
          ].map((pill, i) => (
            <span key={i} style={{ display: "inline-block", padding: "2px 7px", borderRadius: 3, fontSize: 10.5, border: `1px solid ${pill.color}44`, background: `${pill.color}14`, color: pill.color }}>
              {pill.label}
            </span>
          ))}
        </div>
      </RightSection>

      {/* Skills */}
      <RightSection title="SKILLS" t={t}>
        <SkillBar label="Luau"        pct={90} color={t.func}     />
        <SkillBar label="HTML/CSS/JS" pct={86} color={t.string}   />
        <SkillBar label="TypeScript"  pct={76} color={t.operator} />
        <SkillBar label="Python"      pct={70} color={t.type}     />
        <SkillBar label="React/RN"    pct={68} color="#61dafb"    />
        <SkillBar label="C"           pct={61} color={t.red}      />
        <SkillBar label="Adv Lua"     pct={48} color={t.keyword}  note="learning" />
      </RightSection>

      {/* Color Theme */}
      <RightSection title="COLOR THEME" t={t}>
        {Object.entries(THEMES).map(([k, v]) => (
          <div
            key={k}
            onClick={() => setThemeName(k)}
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
      </RightSection>

      {/* Contact */}
      <RightSection title="CONTACT" t={t}>
        {[
          {
            icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
            label: "aman@example.com",
            href: "mailto:aman@example.com",
          },
          {
            icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>,
            label: "github.com/aman",
            href: "https://github.com/",
          },
          {
            icon: <svg width="13" height="13" viewBox="0 0 24 24" fill={t.func} style={{ opacity: 0.8 }}><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.102.128 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>,
            label: "aman#0000",
            href: "#",
          },
        ].map((link, i) => (
          <a
            key={i}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: t.func, textDecoration: "none", padding: "4px 0", transition: "color 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = t.fg2)}
            onMouseLeave={(e) => (e.currentTarget.style.color = t.func)}
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </RightSection>

      {/* Now */}
      <RightSection title="NOW" t={t}>
        <div style={{ fontSize: 12, color: t.type, marginBottom: 3 }}>Advanced Lua Patterns</div>
        <div style={{ fontSize: 11.5, color: t.comment }}>metatables · coroutines · OOP</div>
        <div style={{ marginTop: 8, fontSize: 11, color: t.comment, fontStyle: "italic" }}>"the rabbit hole has no bottom"</div>
      </RightSection>
    </div>
  );
}
