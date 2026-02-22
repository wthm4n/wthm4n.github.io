import { useState, useEffect, useRef } from "react";
import { THEMES } from "../constants/themes";

// ── useHover — clean hover state, no inline style mutation ───────────────────
function useHover() {
  const [hovered, setHovered] = useState(false);
  return {
    hovered,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };
}

// ── Collapsible section ───────────────────────────────────────────────────────
function Section({ title, t, defaultOpen = true, children, accent }) {
  const [open, setOpen] = useState(defaultOpen);
  const { hovered, onMouseEnter, onMouseLeave } = useHover();

  return (
    <div
      style={{
        borderBottom: `1px solid ${t.border}`,
        flexShrink: 0,
      }}
    >
      {/* Header */}
      <div
        onClick={() => setOpen((s) => !s)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          padding: "7px 14px",
          fontSize: 9.5,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: hovered ? t.fg : t.comment,
          fontWeight: 700,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: hovered ? t.hover : "transparent",
          transition: "background 0.12s, color 0.12s",
          userSelect: "none",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {accent && (
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: accent,
                boxShadow: `0 0 5px ${accent}`,
                display: "inline-block",
              }}
            />
          )}
          {title}
        </span>
        <span
          style={{
            fontSize: 8,
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.18s cubic-bezier(0.4,0,0.2,1)",
            display: "inline-block",
            opacity: 0.5,
          }}
        >
          ▶
        </span>
      </div>

      {/* Body */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? 1000 : 0,
          transition: "max-height 0.22s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div style={{ padding: "10px 14px 14px" }}>{children}</div>
      </div>
    </div>
  );
}

// ── Animated skill bar ────────────────────────────────────────────────────────
function SkillBar({ label, pct, color, note, t, delay = 0 }) {
  const [w, setW] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = setTimeout(() => setW(pct), 200 + delay);
    return () => clearTimeout(id);
  }, [visible, pct, delay]);

  return (
    <div ref={ref} style={{ marginBottom: 9 }}>
      <div
        style={{
          fontSize: 11,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <span style={{ color: t.fg, fontWeight: 500 }}>{label}</span>
        <span
          style={{
            color: note ? t.keyword : t.comment,
            fontSize: 10,
            fontStyle: note ? "italic" : "normal",
            fontWeight: note ? 600 : 400,
          }}
        >
          {note || `${pct}%`}
        </span>
      </div>
      <div
        style={{
          height: 3,
          background: t.border2,
          borderRadius: 99,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${w}%`,
            background: `linear-gradient(90deg, ${color}bb, ${color})`,
            borderRadius: 99,
            transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
            boxShadow: w > 0 ? `0 0 6px ${color}66` : "none",
          }}
        />
      </div>
    </div>
  );
}

// ── Theme swatch row ──────────────────────────────────────────────────────────
function ThemeRow({ name, theme, active, onClick, t }) {
  const { hovered, onMouseEnter, onMouseLeave } = useHover();

  return (
    <div
      onClick={() => onClick(name)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "5px 8px",
        borderRadius: 5,
        cursor: "pointer",
        fontSize: 11.5,
        color: active ? t.fg2 : hovered ? t.fg : t.comment,
        background: active
          ? `${t.tabLine}14`
          : hovered
          ? t.hover
          : "transparent",
        border: `1px solid ${active ? t.tabLine + "50" : "transparent"}`,
        marginBottom: 2,
        transition: "all 0.12s",
      }}
    >
      {/* Swatch */}
      <div
        style={{
          width: 13,
          height: 13,
          borderRadius: 3,
          background: theme.swatch,
          border: `1px solid ${t.border2}`,
          flexShrink: 0,
          boxShadow: active ? `0 0 0 2px ${t.tabLine}44` : "none",
          transition: "box-shadow 0.12s",
        }}
      />
      <span style={{ flex: 1 }}>{theme.label}</span>
      {active && (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={t.tabLine} strokeWidth="3">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </div>
  );
}

// ── Contact link row ──────────────────────────────────────────────────────────
function ContactLink({ icon, label, value, href, color, t }) {
  const { hovered, onMouseEnter, onMouseLeave } = useHover();

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "7px 10px",
        borderRadius: 6,
        textDecoration: "none",
        background: hovered ? `${color}10` : "transparent",
        border: `1px solid ${hovered ? color + "30" : "transparent"}`,
        marginBottom: 4,
        transition: "all 0.14s",
        cursor: "pointer",
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 7,
          background: `${color}18`,
          border: `1px solid ${color}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: 13,
          transition: "background 0.14s, border 0.14s",
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: 9.5,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: t.comment,
            marginBottom: 1,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 11.5,
            color: hovered ? color : t.fg,
            fontFamily: "monospace",
            transition: "color 0.14s",
          }}
        >
          {value}
        </div>
      </div>
      {hovered && (
        <svg
          style={{ marginLeft: "auto", opacity: 0.5 }}
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
    </a>
  );
}

// ── Timeline ──────────────────────────────────────────────────────────────────
function Timeline({ t }) {
  const events = [
    {
      year: "2019",
      color: t.string,
      icon: "🌐",
      title: "First lines of code",
      desc: "HTML, CSS & JS in 8th grade. Built fun personal sites just for the joy of it.",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      year: "2020",
      color: t.func,
      icon: "📘",
      title: "Advanced JS & TypeScript",
      desc: "Deep dive into OOP patterns and TypeScript fundamentals.",
      tags: ["TypeScript", "OOP"],
    },
    {
      year: "2021–22",
      color: t.type,
      icon: "🤖",
      title: "Discord bots & tooling",
      desc: "Production-grade Discord server — full moderation, data store & automation via discord.js.",
      tags: ["discord.js", "Node.js"],
    },
    {
      year: "2023",
      color: t.number,
      icon: "🐍",
      title: "Python + web frameworks",
      desc: "Backend expansion, advanced web frameworks, scripting.",
      tags: ["Python", "Frameworks"],
    },
    {
      year: "2024",
      color: t.keyword,
      icon: "🏥",
      title: "Hospital Management System",
      desc: "Full production HMS built in Python — most complex project to date.",
      tags: ["Python", "Full Stack"],
    },
    {
      year: "2025 Q1",
      color: t.func,
      icon: "🎮",
      title: "Roblox dev begins",
      desc: "Learned Luau, Roblox Studio, animations and light 3D modeling.",
      tags: ["Luau", "Roblox Studio", "3D"],
    },
    {
      year: "2025 Q4",
      color: t.operator,
      icon: "📱",
      title: "Buildathon 1.0",
      desc: "React Native app for college at Buildathon 1.0 — KKC ITM, Noida.",
      tags: ["React Native", "KKC ITM"],
    },
    {
      year: "2026",
      color: t.string,
      icon: "💰",
      title: "Open for commissions",
      desc: "Selling combat & gun systems. Active on HiddenDevs + Roblox community.",
      tags: ["HiddenDevs", "Commissions"],
      active: true,
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      {/* Vertical line */}
      <div
        style={{
          position: "absolute",
          left: 5,
          top: 6,
          bottom: 6,
          width: 1,
          background: `linear-gradient(to bottom, ${t.comment}00, ${t.comment}28 12%, ${t.comment}28 88%, ${t.comment}00)`,
        }}
      />

      {events.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: 0,
            marginBottom: i === events.length - 1 ? 0 : 13,
            position: "relative",
          }}
        >
          {/* Dot */}
          <div
            style={{
              flexShrink: 0,
              width: 11,
              paddingTop: 4,
              display: "flex",
              justifyContent: "center",
              zIndex: 1,
              position: "relative",
            }}
          >
            <div
              style={{
                width: item.active ? 9 : 7,
                height: item.active ? 9 : 7,
                borderRadius: "50%",
                background: item.color,
                boxShadow: item.active
                  ? `0 0 0 3px ${item.color}28, 0 0 10px ${item.color}55`
                  : `0 0 0 2px ${item.color}20`,
                transition: "box-shadow 0.3s",
              }}
            />
          </div>

          {/* Content */}
          <div style={{ flex: 1, paddingLeft: 10 }}>
            {/* Year + badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: item.color,
                  fontFamily: "monospace",
                }}
              >
                {item.year}
              </span>
              <span style={{ fontSize: 10 }}>{item.icon}</span>
              {item.active && (
                <span
                  style={{
                    fontSize: 8,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "1px 6px",
                    borderRadius: 20,
                    background: `${item.color}20`,
                    color: item.color,
                    border: `1px solid ${item.color}40`,
                  }}
                >
                  now
                </span>
              )}
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: t.fg,
                lineHeight: 1.3,
                marginBottom: 2,
              }}
            >
              {item.title}
            </div>

            {/* Desc */}
            <div
              style={{
                fontSize: 10,
                color: t.comment,
                lineHeight: 1.5,
                marginBottom: 5,
              }}
            >
              {item.desc}
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 9,
                    padding: "1px 6px",
                    borderRadius: 4,
                    background: `${item.color}12`,
                    color: item.color,
                    border: `1px solid ${item.color}25`,
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Now / currently section ───────────────────────────────────────────────────
function NowCard({ t }) {
  const items = [
    {
      icon: "📖",
      label: "Learning",
      value: "Advanced Lua patterns",
      sub: "metatables · coroutines · OOP",
      color: t.keyword,
    },
    {
      icon: "🔨",
      label: "Building",
      value: "Roblox commissions",
      sub: "combat · gun · inventory systems",
      color: t.func,
    },
    {
      icon: "📍",
      label: "Active on",
      value: "HiddenDevs",
      sub: "& Roblox dev community",
      color: t.string,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map(({ icon, label, value, sub, color }) => (
        <div
          key={label}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            padding: "8px 10px",
            borderRadius: 7,
            background: `${color}0c`,
            border: `1px solid ${color}20`,
          }}
        >
          <span style={{ fontSize: 15, lineHeight: 1, paddingTop: 1 }}>{icon}</span>
          <div>
            <div
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: color,
                marginBottom: 1,
              }}
            >
              {label}
            </div>
            <div style={{ fontSize: 11.5, fontWeight: 600, color: t.fg, marginBottom: 1 }}>
              {value}
            </div>
            <div style={{ fontSize: 10, color: t.comment }}>{sub}</div>
          </div>
        </div>
      ))}

      {/* Tagline */}
      <div
        style={{
          marginTop: 2,
          padding: "7px 10px",
          borderRadius: 6,
          background: t.hover,
          borderLeft: `2px solid ${t.comment}40`,
          fontSize: 10.5,
          color: t.comment,
          fontStyle: "italic",
          lineHeight: 1.45,
        }}
      >
        "the rabbit hole has no bottom"
      </div>
    </div>
  );
}

// ── Dev Info header card ──────────────────────────────────────────────────────
function DevInfo({ t }) {
  const pills = [
    { label: "Luau",       color: t.func    },
    { label: "TypeScript", color: t.operator},
    { label: "Python",     color: t.type    },
    { label: "React",      color: t.string  },
    { label: "C",          color: t.red     },
    { label: "Adv Lua ↑",  color: t.keyword },
  ];

  return (
    <div>
      {/* Avatar + name row */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: `linear-gradient(135deg, ${t.func}33, ${t.type}33)`,
            border: `1px solid ${t.func}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            flexShrink: 0,
          }}
        >
          👾
        </div>
        <div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: t.fg2,
              letterSpacing: "-0.2px",
              lineHeight: 1.2,
            }}
          >
            Aman
          </div>
          <div style={{ fontSize: 11, color: t.comment, marginTop: 2 }}>
            🇮🇳 Delhi, India
          </div>
        </div>

        {/* Status badge */}
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "4px 9px",
            borderRadius: 20,
            background: `${t.string}14`,
            border: `1px solid ${t.string}30`,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: t.string,
              boxShadow: `0 0 6px ${t.string}`,
              animation: "pulse 2.5s ease-in-out infinite",
            }}
          />
          <span style={{ color: t.string, fontSize: 10, fontWeight: 600 }}>
            open
          </span>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: `linear-gradient(90deg, ${t.func}30, ${t.border2}, transparent)`,
          marginBottom: 12,
        }}
      />

      {/* Bio blurb */}
      <div
        style={{
          fontSize: 11,
          color: t.comment,
          lineHeight: 1.55,
          marginBottom: 12,
        }}
      >
        Self-taught dev from Delhi. Started with HTML in 8th grade, found Luau,
        never looked back. Ships game systems and web apps.
      </div>

      {/* Tech pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {pills.map(({ label, color }) => (
          <span
            key={label}
            style={{
              display: "inline-block",
              padding: "2px 8px",
              borderRadius: 4,
              fontSize: 10.5,
              border: `1px solid ${color}35`,
              background: `${color}12`,
              color: color,
              fontWeight: 500,
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Main RightPanel ───────────────────────────────────────────────────────────
export function RightPanel({ t, themeName, setThemeName }) {
  const contacts = [
    {
      icon: "📧",
      label: "Email",
      value: "aman@example.com",
      href: "mailto:aman@example.com",
      color: t.type,
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/aman",
      href: "https://github.com/aman",
      color: t.func,
    },
    {
      icon: "💬",
      label: "Discord",
      value: "aman#0000",
      href: "#",
      color: t.keyword,
    },
  ];

  return (
    <div
      style={{
        overflowY: "auto",
        flex: 1,
        scrollbarWidth: "thin",
        scrollbarColor: `${t.scrollbar} transparent`,
      }}
    >
      {/* ── Dev Info ── */}
      <Section title="DEV_INFO" t={t} accent={t.string}>
        <DevInfo t={t} />
      </Section>

      {/* ── Skills ── */}
      <Section title="SKILLS" t={t} accent={t.func}>
        <SkillBar label="Luau"        pct={90} color={t.func}     t={t} delay={0}   />
        <SkillBar label="HTML/CSS/JS" pct={86} color={t.string}   t={t} delay={60}  />
        <SkillBar label="TypeScript"  pct={76} color={t.operator} t={t} delay={120} />
        <SkillBar label="Python"      pct={70} color={t.type}     t={t} delay={180} />
        <SkillBar label="React / RN"  pct={68} color={t.number}   t={t} delay={240} />
        <SkillBar label="C"           pct={61} color={t.red}      t={t} delay={300} />
        <SkillBar label="Adv Lua"     pct={48} color={t.keyword}  t={t} delay={360} note="learning" />
      </Section>

      {/* ── Timeline ── */}
      <Section title="TIMELINE" t={t} defaultOpen={false} accent={t.type}>
        <Timeline t={t} />
      </Section>

      {/* ── Now ── */}
      <Section title="NOW" t={t} accent={t.keyword}>
        <NowCard t={t} />
      </Section>

      {/* ── Contact ── */}
      <Section title="CONTACT" t={t} accent={t.func}>
        {contacts.map((c) => (
          <ContactLink key={c.label} {...c} t={t} />
        ))}
      </Section>

      {/* ── Color Theme ── */}
      <Section title="COLOR THEME" t={t} defaultOpen={false}>
        {Object.entries(THEMES).map(([k, v]) => (
          <ThemeRow
            key={k}
            name={k}
            theme={v}
            active={k === themeName}
            onClick={setThemeName}
            t={t}
          />
        ))}
      </Section>
    </div>
  );
}