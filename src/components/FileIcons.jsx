// ── Lua file icons — Roblox Studio style ─────────────────────────────────────
// Script       = white/grey  (server)
// LocalScript  = blue        (client)
// ModuleScript = orange      (module)

// ── Shared base — the folded-corner document shape ───────────────────────────
function DocShape({ fill, stroke, fold }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
      {/* Page body */}
      <path
        d="M2 1 H10 L14 5 V15 H2 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      {/* Folded corner */}
      <path
        d="M10 1 L10 5 L14 5"
        fill="none"
        stroke={fold}
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      {/* Text lines */}
      <line x1="4" y1="7.5"  x2="12" y2="7.5"  stroke={stroke} strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
      <line x1="4" y1="9.5"  x2="11" y2="9.5"  stroke={stroke} strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
      <line x1="4" y1="11.5" x2="9"  y2="11.5" stroke={stroke} strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

// ── Script (server) — white doc, matches Roblox's white Script icon ───────────
export const ScriptIcon = () => (
  <DocShape fill="#c8cdd4" stroke="#6b7280" fold="#9ca3af" />
);

// ── LocalScript (client) — blue, matches Roblox's LocalScript icon ────────────
export const LocalScriptIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
    <path
      d="M2 1 H10 L14 5 V15 H2 Z"
      fill="#1e3a5f"
      stroke="#4a9eff"
      strokeWidth="0.8"
      strokeLinejoin="round"
    />
    <path
      d="M10 1 L10 5 L14 5"
      fill="none"
      stroke="#4a9eff"
      strokeWidth="0.8"
      strokeLinejoin="round"
    />
    {/* "L" badge in bottom-right */}
    <circle cx="11.5" cy="12" r="3" fill="#4a9eff" />
    <text x="9.5" y="14" fontSize="4.5" fill="white" fontFamily="monospace" fontWeight="bold">L</text>
    {/* Lines */}
    <line x1="4" y1="7.5"  x2="9"  y2="7.5"  stroke="#4a9eff" strokeWidth="0.7" strokeLinecap="round" opacity="0.7" />
    <line x1="4" y1="9.5"  x2="8"  y2="9.5"  stroke="#4a9eff" strokeWidth="0.7" strokeLinecap="round" opacity="0.7" />
  </svg>
);

// ── ModuleScript — orange/yellow, matches Roblox's ModuleScript icon ──────────
export const ModuleScriptIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
    <path
      d="M2 1 H10 L14 5 V15 H2 Z"
      fill="#3d1f00"
      stroke="#f59e0b"
      strokeWidth="0.8"
      strokeLinejoin="round"
    />
    <path
      d="M10 1 L10 5 L14 5"
      fill="none"
      stroke="#f59e0b"
      strokeWidth="0.8"
      strokeLinejoin="round"
    />
    {/* "M" badge */}
    <circle cx="11.5" cy="12" r="3" fill="#f59e0b" />
    <text x="9.2" y="14" fontSize="4.5" fill="#1a0a00" fontFamily="monospace" fontWeight="bold">M</text>
    {/* Lines */}
    <line x1="4" y1="7.5"  x2="9"  y2="7.5"  stroke="#f59e0b" strokeWidth="0.7" strokeLinecap="round" opacity="0.7" />
    <line x1="4" y1="9.5"  x2="8"  y2="9.5"  stroke="#f59e0b" strokeWidth="0.7" strokeLinecap="round" opacity="0.7" />
  </svg>
);

// ── LuaIcon — generic, used as fallback ───────────────────────────────────────
export const LuaIcon = () => <ScriptIcon />;

// ── FILE_ICONS map ────────────────────────────────────────────────────────────
// about, skills, work, contact → all server Scripts (Lua)
// pkg → JSON orange
// readme → markdown grey
export const FILE_ICONS = {
  about:   <ScriptIcon />,
  skills:  <ScriptIcon />,
  work:    <ScriptIcon />,
  contact: <ScriptIcon />,
  pkg: (
    <svg width="15" height="15" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
      <rect x="1" y="1" width="14" height="14" rx="2" fill="#1a1200" stroke="#cb8a27" strokeWidth="0.8" />
      <text x="3" y="11" fontSize="7" fill="#cb8a27" fontFamily="monospace" fontWeight="bold">{"{}"}</text>
    </svg>
  ),
  readme: (
    <svg width="15" height="15" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
      <rect x="1" y="1" width="14" height="14" rx="2" fill="#1a1a1a" stroke="#6b7280" strokeWidth="0.8" />
      <text x="2.5" y="11" fontSize="6" fill="#9ca3af" fontFamily="monospace" fontWeight="bold">MD</text>
    </svg>
  ),
};