import { useState, useEffect, useRef } from "react";
import { THEMES } from "../constants/themes";

// ── useHover ──────────────────────────────────────────────────────────────────
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
    <div style={{ borderBottom: `1px solid ${t.border}`, flexShrink: 0 }}>
      <div
        onClick={() => setOpen((s) => !s)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          padding: "8px 14px",
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
            <span style={{
              width: 5, height: 5, borderRadius: "50%",
              background: accent, boxShadow: `0 0 5px ${accent}`,
              display: "inline-block",
            }} />
          )}
          {title}
        </span>
        <span style={{
          fontSize: 8,
          transform: open ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.18s cubic-bezier(0.4,0,0.2,1)",
          display: "inline-block",
          opacity: 0.45,
        }}>▶</span>
      </div>

      <div style={{
        overflow: "hidden",
        maxHeight: open ? 1200 : 0,
        transition: "max-height 0.25s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div style={{ padding: "12px 14px 16px" }}>{children}</div>
      </div>
    </div>
  );
}

// ── Skill bar — label-based, no fake percentages ──────────────────────────────
const LEVEL_META = {
  expert:      { label: "Expert",      pct: 92, note: null         },
  advanced:    { label: "Advanced",    pct: 76, note: null         },
  proficient:  { label: "Proficient",  pct: 62, note: null         },
  comfortable: { label: "Comfortable", pct: 48, note: null         },
  learning:    { label: "Learning",    pct: 28, note: "in progress"},
};

function SkillBar({ label, level, color, t, delay = 0 }) {
  const [w, setW] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const meta = LEVEL_META[level];

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
    const id = setTimeout(() => setW(meta.pct), 180 + delay);
    return () => clearTimeout(id);
  }, [visible, meta.pct, delay]);

  return (
    <div ref={ref} style={{ marginBottom: 10 }}>
      <div style={{
        fontSize: 11,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
      }}>
        <span style={{ color: t.fg, fontWeight: 500 }}>{label}</span>
        <span style={{
          color: level === "learning" ? t.keyword : t.comment,
          fontSize: 10,
          fontStyle: level === "learning" ? "italic" : "normal",
          fontWeight: level === "learning" ? 600 : 400,
        }}>
          {meta.note ?? meta.label}
        </span>
      </div>
      <div style={{
        height: 2.5,
        background: t.border2,
        borderRadius: 99,
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${w}%`,
          background: `linear-gradient(90deg, ${color}99, ${color})`,
          borderRadius: 99,
          transition: `width 1.1s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
          boxShadow: w > 0 ? `0 0 5px ${color}55` : "none",
        }} />
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
        display: "flex", alignItems: "center", gap: 9,
        padding: "5px 8px", borderRadius: 5, cursor: "pointer",
        fontSize: 11.5,
        color: active ? t.fg2 : hovered ? t.fg : t.comment,
        background: active ? `${t.tabLine}14` : hovered ? t.hover : "transparent",
        border: `1px solid ${active ? t.tabLine + "50" : "transparent"}`,
        marginBottom: 2,
        transition: "all 0.12s",
      }}
    >
      <div style={{
        width: 13, height: 13, borderRadius: 3,
        background: theme.swatch, border: `1px solid ${t.border2}`,
        flexShrink: 0,
        boxShadow: active ? `0 0 0 2px ${t.tabLine}44` : "none",
        transition: "box-shadow 0.12s",
      }} />
      <span style={{ flex: 1 }}>{theme.label}</span>
      {active && (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={t.tabLine} strokeWidth="3">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </div>
  );
}

// ── Contact link ──────────────────────────────────────────────────────────────
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
        display: "flex", alignItems: "center", gap: 10,
        padding: "7px 10px", borderRadius: 6, textDecoration: "none",
        background: hovered ? `${color}10` : "transparent",
        border: `1px solid ${hovered ? color + "30" : "transparent"}`,
        marginBottom: 4,
        transition: "all 0.14s",
        cursor: "pointer",
      }}
    >
      <div style={{
        width: 28, height: 28, borderRadius: 7,
        background: `${color}18`, border: `1px solid ${color}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, fontSize: 13,
        transition: "background 0.14s",
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontSize: 9.5, fontWeight: 700, letterSpacing: "0.08em",
          textTransform: "uppercase", color: t.comment, marginBottom: 1,
        }}>
          {label}
        </div>
        <div style={{
          fontSize: 11.5,
          color: hovered ? color : t.fg,
          fontFamily: "monospace",
          transition: "color 0.14s",
        }}>
          {value}
        </div>
      </div>
      {hovered && (
        <svg style={{ marginLeft: "auto", opacity: 0.5 }} width="10" height="10"
          viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
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
      year: "2019", color: t.string, icon: "🌐",
      title: "First lines of code",
      desc: "HTML, CSS & JS in 8th grade. Built fun personal sites just for the joy of it.",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      year: "2020", color: t.func, icon: "📘",
      title: "Advanced JS & TypeScript",
      desc: "Deep dive into OOP patterns and TypeScript fundamentals.",
      tags: ["TypeScript", "OOP"],
    },
    {
      year: "2021–22", color: t.type, icon: "🤖",
      title: "Discord bots & tooling",
      desc: "Production-grade Discord server — full moderation, data store & automation via discord.js.",
      tags: ["discord.js", "Node.js"],
    },
    {
      year: "2023", color: t.number, icon: "🐍",
      title: "Python + web frameworks",
      desc: "Backend expansion, advanced web frameworks, scripting.",
      tags: ["Python", "Frameworks"],
    },
    {
      year: "2024", color: t.keyword, icon: "🏥",
      title: "Hospital Management System",
      desc: "Full production HMS built in Python with MongoDB.",
      tags: ["Python", "MongoDB", "Full Stack"],
    },
    {
      year: "2025 Q1", color: t.func, icon: "🎮",
      title: "Roblox dev begins",
      desc: "Learned Luau, Roblox Studio, animations and light 3D modeling.",
      tags: ["Luau", "Roblox Studio"],
    },
    {
      year: "2025 Q4", color: t.operator, icon: "📱",
      title: "Buildathon 1.0",
      desc: "React Native app for college — KKC ITM, Noida.",
      tags: ["React Native", "KKC ITM"],
    },
    {
      year: "2026", color: t.string, icon: "💰",
      title: "Open for commissions",
      desc: "Selling combat & gun systems. Active on HiddenDevs + Roblox community.",
      tags: ["HiddenDevs", "Commissions"],
      active: true,
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      <div style={{
        position: "absolute", left: 5, top: 6, bottom: 6, width: 1,
        background: `linear-gradient(to bottom, ${t.comment}00, ${t.comment}28 12%, ${t.comment}28 88%, ${t.comment}00)`,
      }} />
      {events.map((item, i) => (
        <div key={i} style={{
          display: "flex", gap: 0,
          marginBottom: i === events.length - 1 ? 0 : 14,
          position: "relative",
        }}>
          <div style={{
            flexShrink: 0, width: 11, paddingTop: 4,
            display: "flex", justifyContent: "center",
            zIndex: 1, position: "relative",
          }}>
            <div style={{
              width: item.active ? 9 : 7,
              height: item.active ? 9 : 7,
              borderRadius: "50%",
              background: item.color,
              boxShadow: item.active
                ? `0 0 0 3px ${item.color}28, 0 0 10px ${item.color}55`
                : `0 0 0 2px ${item.color}20`,
            }} />
          </div>
          <div style={{ flex: 1, paddingLeft: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
              <span style={{
                fontSize: 9, fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color: item.color, fontFamily: "monospace",
              }}>{item.year}</span>
              <span style={{ fontSize: 10 }}>{item.icon}</span>
              {item.active && (
                <span style={{
                  fontSize: 8, fontWeight: 700, letterSpacing: "0.06em",
                  textTransform: "uppercase", padding: "1px 6px", borderRadius: 20,
                  background: `${item.color}20`, color: item.color,
                  border: `1px solid ${item.color}40`,
                }}>now</span>
              )}
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: t.fg, lineHeight: 1.3, marginBottom: 2 }}>
              {item.title}
            </div>
            <div style={{ fontSize: 10, color: t.comment, lineHeight: 1.5, marginBottom: 5 }}>
              {item.desc}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              {item.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: 9, padding: "1px 6px", borderRadius: 4,
                  background: `${item.color}12`, color: item.color,
                  border: `1px solid ${item.color}25`, fontWeight: 600,
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Now card ──────────────────────────────────────────────────────────────────
function NowCard({ t }) {
  const items = [
    { icon: "📖", label: "Learning",  value: "Advanced Lua patterns",     sub: "metatables · coroutines · OOP", color: t.keyword },
    { icon: "🔨", label: "Building",  value: "Roblox commissions",         sub: "combat · gun · inventory systems", color: t.func   },
    { icon: "📍", label: "Active on", value: "HiddenDevs",                 sub: "& Roblox dev community",        color: t.string  },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map(({ icon, label, value, sub, color }) => (
        <div key={label} style={{
          display: "flex", alignItems: "flex-start", gap: 10,
          padding: "8px 10px", borderRadius: 7,
          background: `${color}0c`, border: `1px solid ${color}20`,
        }}>
          <span style={{ fontSize: 15, lineHeight: 1, paddingTop: 1 }}>{icon}</span>
          <div>
            <div style={{
              fontSize: 9, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: color, marginBottom: 1,
            }}>{label}</div>
            <div style={{ fontSize: 11.5, fontWeight: 600, color: t.fg, marginBottom: 1 }}>{value}</div>
            <div style={{ fontSize: 10, color: t.comment }}>{sub}</div>
          </div>
        </div>
      ))}
      <div style={{
        marginTop: 2, padding: "7px 10px", borderRadius: 6,
        background: t.hover, borderLeft: `2px solid ${t.comment}40`,
        fontSize: 10.5, color: t.comment, fontStyle: "italic", lineHeight: 1.45,
      }}>
        "the rabbit hole has no bottom"
      </div>
    </div>
  );
}

// ── Dev Info — hook headline + breathing room ─────────────────────────────────
function DevInfo({ t }) {
  const pills = [
    { label: "Luau",       color: t.func     },
    { label: "TypeScript", color: t.operator },
    { label: "Python",     color: t.type     },
    { label: "React",      color: t.string   },
    { label: "C",          color: t.red      },
    { label: "Java",       color: t.number   },
  ];

  return (
    <div>
      {/* Avatar + name */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: `linear-gradient(135deg, ${t.func}33, ${t.type}33)`,
          border: `1px solid ${t.func}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20, flexShrink: 0,
        }}>👾</div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: t.fg2, letterSpacing: "-0.2px", lineHeight: 1.2 }}>
            Aman Koushal
          </div>
          <div style={{ fontSize: 11, color: t.comment, marginTop: 2 }}>
            🇮🇳 Delhi · B.Tech CSE AI/ML
          </div>
        </div>
        {/* Open badge */}
        <div style={{
          marginLeft: "auto", display: "flex", alignItems: "center", gap: 5,
          padding: "4px 9px", borderRadius: 20,
          background: `${t.string}14`, border: `1px solid ${t.string}30`,
        }}>
          <div style={{
            width: 6, height: 6, borderRadius: "50%",
            background: t.string, boxShadow: `0 0 6px ${t.string}`,
            animation: "pulse 2.5s ease-in-out infinite",
          }} />
          <span style={{ color: t.string, fontSize: 10, fontWeight: 600 }}>open</span>
        </div>
      </div>

      {/* ── Hook headline — the sharp "who is this guy" line ── */}
      <div style={{
        padding: "9px 12px",
        borderRadius: 7,
        background: `${t.func}0e`,
        border: `1px solid ${t.func}25`,
        borderLeft: `3px solid ${t.func}`,
        marginBottom: 14,
        fontSize: 11.5,
        color: t.fg,
        lineHeight: 1.55,
        fontWeight: 500,
      }}>
        Builds{" "}
        <span style={{ color: t.func, fontWeight: 700 }}>scalable Roblox systems</span>
        {" "}— combat, gun, inventory — with server authority and clean OOP.
        Also ships{" "}
        <span style={{ color: t.type, fontWeight: 700 }}>fullstack web apps</span>
        {" "}and Discord bots.
      </div>

      <div style={{
        height: 1,
        background: `linear-gradient(90deg, ${t.func}28, ${t.border2}, transparent)`,
        marginBottom: 14,
      }} />

      {/* Bio */}
      <div style={{
        fontSize: 11, color: t.comment, lineHeight: 1.6, marginBottom: 14,
      }}>
        Self-taught dev, currently doing a B.Tech I mostly use as wifi.
        Started with HTML in 8th grade, found Luau, never looked back.
        Looking for a team to build something actually worth shipping.
      </div>

      {/* Tech pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {pills.map(({ label, color }) => (
          <span key={label} style={{
            display: "inline-block", padding: "3px 9px", borderRadius: 4,
            fontSize: 10.5, border: `1px solid ${color}35`,
            background: `${color}12`, color, fontWeight: 500,
          }}>{label}</span>
        ))}
      </div>
    </div>
  );
}

// ── Main RightPanel ───────────────────────────────────────────────────────────
export function RightPanel({ t, themeName, setThemeName }) {
  const contacts = [
    { icon: "📧", label: "Email",   value: "noenoeke11@gmail.com",  href: "mailto:noenoeke11@gmail.com",  color: t.type    },
    { icon: "🌐", label: "Site",    value: "tfm4n.me",              href: "https://tfm4n.me",             color: t.func    },
    { icon: "🐙", label: "GitHub",  value: "github.com/wthm4n",     href: "https://github.com/wthm4n",    color: t.string  },
    { icon: "💬", label: "Discord", value: "tfm4n",                 href: "#",                            color: t.keyword },
  ];

  return (
    <div style={{
      overflowY: "auto",
      flex: 1,
      scrollbarWidth: "thin",
      scrollbarColor: `${t.scrollbar} transparent`,
    }}>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>

      <Section title="DEV_INFO" t={t} accent={t.string}>
        <DevInfo t={t} />
      </Section>

      <Section title="SKILLS" t={t} accent={t.func}>
        <SkillBar label="Luau"        level="expert"      color={t.func}     t={t} delay={0}   />
        <SkillBar label="HTML/CSS/SCSS"level="expert"     color={t.string}   t={t} delay={60}  />
        <SkillBar label="JavaScript"  level="expert"      color={t.type}     t={t} delay={120} />
        <SkillBar label="TypeScript"  level="advanced"    color={t.operator} t={t} delay={180} />
        <SkillBar label="Python"      level="advanced"    color={t.number}   t={t} delay={240} />
        <SkillBar label="React / RN"  level="proficient"  color={t.func}     t={t} delay={300} />
        <SkillBar label="Node/Express"level="proficient"  color={t.string}   t={t} delay={360} />
        <SkillBar label="C"           level="comfortable" color={t.red}      t={t} delay={420} />
        <SkillBar label="Java"        level="comfortable" color={t.keyword}  t={t} delay={480} />
        <SkillBar label="Adv Lua"     level="learning"    color={t.keyword}  t={t} delay={540} />
      </Section>

      <Section title="TIMELINE" t={t} defaultOpen={false} accent={t.type}>
        <Timeline t={t} />
      </Section>

      <Section title="NOW" t={t} accent={t.keyword}>
        <NowCard t={t} />
      </Section>

      <Section title="CONTACT" t={t} accent={t.func}>
        {contacts.map((c) => (
          <ContactLink key={c.label} {...c} t={t} />
        ))}
      </Section>

      <Section title="COLOR THEME" t={t} defaultOpen={false}>
        {Object.entries(THEMES).map(([k, v]) => (
          <ThemeRow key={k} name={k} theme={v} active={k === themeName} onClick={setThemeName} t={t} />
        ))}
      </Section>
    </div>
  );
}