import { useState } from "react";

// ── Token type registry ───────────────────────────────────────────────────────
const TOKEN_TYPES = {
  keyword:  { role: "keyword",  italic: false, bold: true  },
  func:     { role: "function", italic: false, bold: false },
  string:   { role: "string",   italic: false, bold: false },
  number:   { role: "number",   italic: false, bold: false },
  type:     { role: "type",     italic: false, bold: false },
  operator: { role: "operator", italic: false, bold: false },
  comment:  { role: "comment",  italic: true,  bold: false },
  fg:       { role: "plain",    italic: false, bold: false },
  red:      { role: "error",    italic: false, bold: false },
  fg2:      { role: "emphasis", italic: false, bold: false },
};

// ── Token factory ─────────────────────────────────────────────────────────────
function makeToken(colorKey) {
  const meta = TOKEN_TYPES[colorKey];

  const Component = ({ t, children, title, onClick }) => {
    const color = t[colorKey];
    return (
      <span
        data-token={meta.role}
        title={title}
        onClick={onClick}
        onMouseEnter={onClick ? (e) => (e.currentTarget.style.opacity = "0.7") : undefined}
        onMouseLeave={onClick ? (e) => (e.currentTarget.style.opacity = "1")   : undefined}
        style={{
          color,
          fontStyle:           meta.italic ? "italic" : undefined,
          fontWeight:          meta.bold   ? "600"    : undefined,
          cursor:              onClick ? "pointer" : undefined,
          textDecorationLine:  onClick ? "underline" : undefined,
          textDecorationStyle: onClick ? "dotted"    : undefined,
          textDecorationColor: onClick ? `${color}80` : undefined,
          transition:          "opacity 0.12s",
        }}
      >
        {children}
      </span>
    );
  };

  Component.displayName = `Token(${colorKey})`;
  return Component;
}

export const K = makeToken("keyword");   // keywords:   local, function, return, if, end…
export const F = makeToken("func");      // functions:  methodName, fieldName
export const S = makeToken("string");    // strings:    "hello", [[block]]
export const N = makeToken("number");    // numbers:    42, 3.14
export const T = makeToken("type");      // types/objs: Aman, Projects, Contact
export const O = makeToken("operator");  // operators:  =, +, |, :
export const C = makeToken("comment");   // comments:   -- this, // this
export const P = makeToken("fg");        // punctuation/plain: . , ( ) { }
export const E = makeToken("red");       // errors/warnings
export const B = makeToken("fg2");       // bold emphasis


// ── Explicit space ────────────────────────────────────────────────────────────
// Use between tokens where a space is semantically needed.
// Prefer this over relying on JSX whitespace collapsing.
//   <K t={t}>local</K><Sp /><T t={t}>Aman</T>
//   <Sp n={4} /> for manual alignment padding
export function Sp({ n = 1 }) {
  return (
    <span style={{ whiteSpace: "pre" }}>{" ".repeat(n)}</span>
  );
}


// ── Indent guide ──────────────────────────────────────────────────────────────
// Renders `depth` vertical indent lines.
// Pass active=true on the innermost scope to highlight that guide.
export function I({ depth = 1, active = false }) {
  return Array.from({ length: depth }, (_, i) => (
    <span
      key={i}
      style={{
        display:     "inline-block",
        width:       16,
        borderLeft:  "1px solid",
        borderColor: active && i === depth - 1 ? "var(--cursor)" : "var(--indent)",
        opacity:     active && i === depth - 1 ? 0.55 : 0.28,
        flexShrink:  0,
        transition:  "border-color 0.15s, opacity 0.15s",
      }}
    />
  ));
}


// ── Line number gutter ────────────────────────────────────────────────────────
// lineNum   — the number to show
// changed   — git-modified line  (green left stripe)
// error     — error dot
// breakpoint — red breakpoint dot
export function Gutter({
  t,
  lineNum,
  width = 48,
  breakpoint = false,
  changed = false,
  error = false,
}) {
  const color = breakpoint || error
    ? t.red
    : changed
    ? t.func
    : t.comment;

  return (
    <span
      aria-hidden="true"
      style={{
        display:            "inline-flex",
        alignItems:         "center",
        justifyContent:     "flex-end",
        width,
        minWidth:           width,
        paddingRight:       16,
        paddingLeft:        8,
        flexShrink:         0,
        fontVariantNumeric: "tabular-nums",
        color,
        fontSize:           "0.82em",
        letterSpacing:      "0.01em",
        userSelect:         "none",
        position:           "relative",
      }}
    >
      {/* Git change stripe */}
      {changed && (
        <span
          style={{
            position:     "absolute",
            left:         0,
            top:          "10%",
            bottom:       "10%",
            width:        3,
            borderRadius: 2,
            background:   t.func,
          }}
        />
      )}

      {/* Error dot */}
      {error && !breakpoint && (
        <span
          style={{
            position:    "absolute",
            left:        4,
            top:         "50%",
            transform:   "translateY(-50%)",
            width:       6,
            height:      6,
            borderRadius: "50%",
            background:  t.red,
          }}
        />
      )}

      {/* Breakpoint dot */}
      {breakpoint && (
        <span
          style={{
            position:    "absolute",
            left:        4,
            top:         "50%",
            transform:   "translateY(-50%)",
            width:       8,
            height:      8,
            borderRadius: "50%",
            background:  t.red,
            boxShadow:   `0 0 5px ${t.red}`,
          }}
        />
      )}

      {lineNum}
    </span>
  );
}


// ── Single code line ──────────────────────────────────────────────────────────
// hl      — active/highlighted line (cursor line bg + left accent)
// error   — wavy underline on entire line
// added   — git diff added   (green tint bg)
// removed — git diff removed (red tint bg)
// dimmed  — reduced opacity (e.g. folded siblings)
// onClick — makes line interactive (button role)
export function Line({
  t,
  hl      = false,
  error   = false,
  added   = false,
  removed = false,
  dimmed  = false,
  onClick,
  children,
}) {
  const [hovered, setHovered] = useState(false);

  const bg = hl
    ? (t ? `${t.sel}` : "var(--sel)")
    : added
    ? "rgba(80,200,100,0.07)"
    : removed
    ? "rgba(240,80,80,0.07)"
    : hovered && onClick
    ? (t ? t.hover : "var(--hover)")
    : "transparent";

  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick(e) : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:      "flex",
        alignItems:   "stretch",
        lineHeight:   "22px",
        minHeight:    22,
        paddingRight: 40,
        background:   bg,
        opacity:      dimmed ? 0.35 : 1,
        cursor:       onClick ? "pointer" : "text",
        position:     "relative",
        whiteSpace:   "pre",                         // preserve spaces between tokens
        transition:   "background 0.08s, opacity 0.15s",
        ...(error && {
          textDecoration:      "underline wavy",
          textDecorationColor: t ? t.red : "var(--red, #f44)",
          textDecorationSkipInk: "none",
        }),
      }}
    >
      {/* Left accent bar on active line */}
      {hl && (
        <span
          style={{
            position:     "absolute",
            left:         0,
            top:          0,
            bottom:       0,
            width:        2,
            background:   t ? t.cursor : "var(--cursor)",
            borderRadius: "0 1px 1px 0",
          }}
        />
      )}
      {children}
    </div>
  );
}


// ── Ghost / autocomplete suggestion text ─────────────────────────────────────
// Renders dimmed italic text — mimics IDE inline AI suggestions.
export function Ghost({ t, children }) {
  return (
    <span
      style={{
        color:        t ? t.comment : "var(--comment)",
        opacity:      0.45,
        fontStyle:    "italic",
        userSelect:   "none",
        pointerEvents: "none",
      }}
    >
      {children}
    </span>
  );
}


// ── Inline diagnostic / hover tooltip ────────────────────────────────────────
// Renders a wavy-underlined token that shows a tooltip on hover.
// kind: "error" | "warning" | "info" | "hint"
export function Diagnostic({ t, kind = "error", children, message }) {
  const [open, setOpen] = useState(false);

  const color = {
    error:   t.red,
    warning: t.number,
    info:    t.func,
    hint:    t.comment,
  }[kind] ?? t.comment;

  const icon = {
    error:   "✖",
    warning: "⚠",
    info:    "ℹ",
    hint:    "·",
  }[kind];

  return (
    <span style={{ position: "relative", display: "inline" }}>
      <span
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        style={{
          color,
          textDecoration:      "underline wavy",
          textDecorationColor: `${color}99`,
          cursor:              "help",
        }}
      >
        {children}
      </span>

      {open && message && (
        <span
          style={{
            position:   "absolute",
            bottom:     "calc(100% + 5px)",
            left:       0,
            zIndex:     200,
            background: t.panel ?? t.bg,
            color:      t.fg,
            border:     `1px solid ${t.border2}`,
            borderRadius: 5,
            padding:    "5px 10px",
            fontSize:   "0.78em",
            lineHeight: "1.45",
            whiteSpace: "nowrap",
            boxShadow:  "0 6px 20px rgba(0,0,0,0.45)",
            pointerEvents: "none",
          }}
        >
          <span style={{ color, marginRight: 5, fontWeight: 700 }}>{icon}</span>
          {message}
        </span>
      )}
    </span>
  );
}


// ── Collapsible fold region ───────────────────────────────────────────────────
// Renders a clickable fold arrow + collapsed summary pill.
export function Fold({ t, summary, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <Line t={t} onClick={() => setOpen((o) => !o)}>
        <span
          style={{
            display:    "inline-flex",
            alignItems: "center",
            gap:        5,
            color:      t.comment,
            fontSize:   "0.8em",
            userSelect: "none",
            paddingLeft: 4,
          }}
        >
          <span
            style={{
              display:    "inline-block",
              transition: "transform 0.15s",
              transform:  open ? "rotate(90deg)" : "rotate(0deg)",
              opacity:    0.6,
            }}
          >
            ▶
          </span>
          {!open && (
            <span
              style={{
                background:   t.bg3,
                border:       `1px solid ${t.border2}`,
                borderRadius: 3,
                padding:      "0 7px",
                color:        t.fg,
                fontSize:     "0.9em",
              }}
            >
              {summary}
            </span>
          )}
        </span>
      </Line>
      {open && children}
    </div>
  );
}


// ── Search / find match highlight ─────────────────────────────────────────────
// active — currently focused match (brighter highlight)
export function Match({ t, active = false, children }) {
  return (
    <span
      style={{
        background:   active ? `${t.cursor}55` : `${t.number}2e`,
        outline:      active ? `1px solid ${t.cursor}` : "none",
        borderRadius: 2,
      }}
    >
      {children}
    </span>
  );
}


// ── Blinking cursor ───────────────────────────────────────────────────────────
export function Cursor({ t }) {
  return (
    <span
      style={{
        display:       "inline-block",
        width:         2,
        height:        "1em",
        background:    t.cursor,
        verticalAlign: "text-bottom",
        borderRadius:  1,
        animation:     "blink 1.1s step-end infinite",
      }}
    >
      <style>{`@keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }`}</style>
    </span>
  );
}