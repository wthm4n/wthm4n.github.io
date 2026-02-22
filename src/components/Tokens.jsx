import { useRef, useState, useCallback } from "react";

// ── Token type registry ───────────────────────────────────────────────────────
// Each token knows its own role — used for accessibility + future tooling
const TOKEN_TYPES = {
  keyword:  { role: "keyword",   italic: false, bold: true  },
  func:     { role: "function",  italic: false, bold: false },
  string:   { role: "string",    italic: false, bold: false },
  number:   { role: "number",    italic: false, bold: false },
  type:     { role: "type",      italic: false, bold: false },
  operator: { role: "operator",  italic: false, bold: false },
  comment:  { role: "comment",   italic: true,  bold: false },
  fg:       { role: "plain",     italic: false, bold: false },
  red:      { role: "error",     italic: false, bold: false },
  fg2:      { role: "emphasis",  italic: false, bold: false },
};

// ── Token factory — generates all span components ─────────────────────────────
function makeToken(colorKey) {
  const meta = TOKEN_TYPES[colorKey];
  const Component = ({ t, children, title, onClick }) => {
    const style = {
      color: t[colorKey],
      fontStyle:  meta.italic ? "italic" : undefined,
      fontWeight: meta.bold   ? "600"    : undefined,
      cursor:     onClick ? "pointer" : undefined,
      textDecorationLine: onClick ? "underline" : undefined,
      textDecorationStyle: onClick ? "dotted" : undefined,
      textDecorationColor: onClick ? `${t[colorKey]}80` : undefined,
      transition: "opacity 0.12s, filter 0.12s",
    };
    return (
      <span
        data-token={meta.role}
        title={title}
        style={style}
        onClick={onClick}
        onMouseEnter={e => { if (onClick) e.currentTarget.style.opacity = "0.75"; }}
        onMouseLeave={e => { if (onClick) e.currentTarget.style.opacity = "1"; }}
      >
        {children}
      </span>
    );
  };
  Component.displayName = `Token(${colorKey})`;
  return Component;
}

export const K = makeToken("keyword");   // keyword
export const F = makeToken("func");      // function/method
export const S = makeToken("string");    // string literal
export const N = makeToken("number");    // number literal
export const T = makeToken("type");      // type / class
export const O = makeToken("operator");  // operator
export const C = makeToken("comment");   // comment
export const P = makeToken("fg");        // plain foreground
export const E = makeToken("red");       // error / special
export const B = makeToken("fg2");       // bold emphasis


// ── Indent guide ──────────────────────────────────────────────────────────────
// depth: how many indent levels deep
// active: whether this scope is "active" (cursor inside it) — dims siblings
export function I({ depth = 1, active = false }) {
  return Array.from({ length: depth }, (_, i) => (
    <span
      key={i}
      style={{
        display: "inline-block",
        width: 16,
        borderLeft: "1px solid",
        borderColor: active && i === depth - 1
          ? "var(--cursor)"
          : "var(--indent)",
        opacity: active && i === depth - 1 ? 0.55 : 0.3,
        flexShrink: 0,
        transition: "border-color 0.15s, opacity 0.15s",
      }}
    />
  ));
}


// ── Gutter (line numbers + optional decorations) ──────────────────────────────
export function Gutter({ lineNum, width = 48, breakpoint = false, changed = false, error = false }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "flex-end",
        width,
        minWidth: width,
        paddingRight: 16,
        paddingLeft: 8,
        flexShrink: 0,
        fontVariantNumeric: "tabular-nums",
        color: breakpoint
          ? "var(--red, #f44)"
          : changed
          ? "var(--func)"
          : error
          ? "var(--red, #f44)"
          : "var(--comment)",
        fontSize: "0.82em",
        letterSpacing: "0.01em",
        userSelect: "none",
        position: "relative",
      }}
    >
      {/* Git-change indicator stripe */}
      {changed && (
        <span style={{
          position: "absolute", left: 0, top: "10%", bottom: "10%",
          width: 3, borderRadius: 2,
          background: "var(--func)",
        }} />
      )}
      {/* Error dot */}
      {error && (
        <span style={{
          position: "absolute", left: 4, top: "50%",
          transform: "translateY(-50%)",
          width: 6, height: 6, borderRadius: "50%",
          background: "var(--red, #f44)",
        }} />
      )}
      {/* Breakpoint dot */}
      {breakpoint && (
        <span style={{
          position: "absolute", left: 4, top: "50%",
          transform: "translateY(-50%)",
          width: 8, height: 8, borderRadius: "50%",
          background: "var(--red, #f44)",
          boxShadow: "0 0 5px var(--red, #f44)",
        }} />
      )}
      {lineNum}
    </span>
  );
}


// ── Single code line ──────────────────────────────────────────────────────────
// Props:
//   hl          – boolean: is this the "active" highlighted line?
//   error       – boolean: error squiggle underline treatment
//   added       – boolean: git diff added (green bg tint)
//   removed     – boolean: git diff removed (red bg tint)
//   dimmed      – boolean: opacity reduce (e.g. folded siblings)
//   onClick     – optional click handler
export function Line({
  hl = false,
  error = false,
  added = false,
  removed = false,
  dimmed = false,
  onClick,
  children,
}) {
  const [hovered, setHovered] = useState(false);

  const bg = hl
    ? "var(--sel)"
    : added
    ? "rgba(80,200,100,0.08)"
    : removed
    ? "rgba(240,80,80,0.08)"
    : hovered
    ? "var(--hover)"
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
        display: "flex",
        alignItems: "stretch",
        lineHeight: "22px",
        minHeight: 22,
        paddingRight: 40,
        background: bg,
        opacity: dimmed ? 0.4 : 1,
        cursor: onClick ? "pointer" : "text",
        position: "relative",
        transition: "background 0.08s, opacity 0.15s",
        // Error wavy underline on the whole line
        ...(error && {
          textDecoration: "underline wavy",
          textDecorationColor: "var(--red, #f44)",
          textDecorationSkipInk: "none",
        }),
      }}
    >
      {/* Left edge accent for active line */}
      {hl && (
        <span style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: 2, background: "var(--cursor)",
          borderRadius: "0 1px 1px 0",
        }} />
      )}
      {children}
    </div>
  );
}


// ── Inline ghost text (e.g. AI autocomplete suggestion) ──────────────────────
export function Ghost({ children }) {
  return (
    <span style={{
      color: "var(--comment)",
      opacity: 0.5,
      fontStyle: "italic",
      userSelect: "none",
      pointerEvents: "none",
    }}>
      {children}
    </span>
  );
}


// ── Inline diagnostic / tooltip decoration ───────────────────────────────────
export function Diagnostic({ t, kind = "error", children, message }) {
  const [open, setOpen] = useState(false);
  const colors = {
    error:   t.red,
    warning: t.number,
    info:    t.func,
    hint:    t.comment,
  };
  const color = colors[kind] ?? t.comment;

  return (
    <span style={{ position: "relative", display: "inline" }}>
      <span
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        style={{
          color,
          textDecoration: "underline wavy",
          textDecorationColor: `${color}aa`,
          cursor: "help",
        }}
      >
        {children}
      </span>
      {open && message && (
        <span style={{
          position: "absolute",
          bottom: "calc(100% + 4px)",
          left: 0,
          zIndex: 100,
          background: t.panel ?? t.bg,
          color: t.fg,
          border: `1px solid ${t.border2}`,
          borderRadius: 4,
          padding: "4px 8px",
          fontSize: "0.8em",
          lineHeight: "1.4",
          whiteSpace: "nowrap",
          boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
          pointerEvents: "none",
        }}>
          <span style={{ color, marginRight: 6, fontWeight: 700 }}>
            {kind === "error" ? "✖" : kind === "warning" ? "⚠" : "ℹ"}
          </span>
          {message}
        </span>
      )}
    </span>
  );
}


// ── Collapsible fold region ───────────────────────────────────────────────────
export function Fold({ t, summary, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <Line onClick={() => setOpen(o => !o)}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          color: t.comment, fontSize: "0.8em",
          userSelect: "none",
        }}>
          <span style={{
            transition: "transform 0.15s",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            display: "inline-block",
          }}>▶</span>
          {!open && (
            <span style={{
              background: t.bg3,
              border: `1px solid ${t.border2}`,
              borderRadius: 3,
              padding: "0 6px",
              color: t.fg,
              fontSize: "0.85em",
            }}>
              {summary}
            </span>
          )}
        </span>
      </Line>
      {open && children}
    </div>
  );
}


// ── Search match highlight ────────────────────────────────────────────────────
export function Match({ t, active = false, children }) {
  return (
    <span style={{
      background: active ? t.cursor + "55" : t.number + "33",
      outline: active ? `1px solid ${t.cursor}` : "none",
      borderRadius: 2,
    }}>
      {children}
    </span>
  );
}


// ── Cursor blink ─────────────────────────────────────────────────────────────
export function Cursor({ t }) {
  return (
    <span style={{
      display: "inline-block",
      width: 2,
      height: "1em",
      background: t.cursor,
      verticalAlign: "text-bottom",
      borderRadius: 1,
      animation: "blink 1.1s step-end infinite",
    }}>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}