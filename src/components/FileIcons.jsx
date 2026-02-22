// ── Roblox Studio icons — exact recreation ────────────────────────────────────
// Script       = plain page, grey lines
// LocalScript  = page + blue monitor badge top-left
// ModuleScript = page + orange 2x2 grid badge top-left

export const ScriptIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
    <rect x="2" y="1" width="12" height="14" rx="1" fill="#d4d4d4" stroke="#9ca3af" strokeWidth="0.5" />
    <rect x="4" y="5"  width="8" height="1"   rx="0.5" fill="#9ca3af" />
    <rect x="4" y="7"  width="6" height="1"   rx="0.5" fill="#9ca3af" />
    <rect x="4" y="9"  width="7" height="1"   rx="0.5" fill="#9ca3af" />
    <rect x="4" y="11" width="5" height="1"   rx="0.5" fill="#9ca3af" />
  </svg>
);

export const LocalScriptIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
    {/* Page */}
    <rect x="3" y="3" width="12" height="13" rx="1" fill="#c8ccd4" stroke="#8a9bb0" strokeWidth="0.4" />
    <rect x="5" y="7"  width="8" height="0.9" rx="0.4" fill="#8a9bb0" opacity="0.7" />
    <rect x="5" y="9"  width="6" height="0.9" rx="0.4" fill="#8a9bb0" opacity="0.7" />
    <rect x="5" y="11" width="7" height="0.9" rx="0.4" fill="#8a9bb0" opacity="0.7" />

    {/* Monitor badge */}
    <rect x="0.5" y="0.5" width="8" height="5.5" rx="1" fill="#1a5fa8" />
    <rect x="1.5" y="1.5" width="6" height="3.5" rx="0.4" fill="#5aaeff" opacity="0.35" />
    {/* Stand stem */}
    <rect x="3.8" y="6"   width="1.4" height="1.2" fill="#1a5fa8" />
    {/* Stand base */}
    <rect x="2.5" y="7.2" width="4"   height="0.8" rx="0.3" fill="#1a5fa8" />
  </svg>
);

export const ModuleScriptIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
    {/* Page */}
    <rect x="3" y="3" width="12" height="13" rx="1" fill="#c8ccd4" stroke="#a08060" strokeWidth="0.4" />
    <rect x="5" y="7"  width="8" height="0.9" rx="0.4" fill="#a08060" opacity="0.7" />
    <rect x="5" y="9"  width="6" height="0.9" rx="0.4" fill="#a08060" opacity="0.7" />
    <rect x="5" y="11" width="7" height="0.9" rx="0.4" fill="#a08060" opacity="0.7" />

    {/* Orange box badge */}
    <rect x="0.5" y="0.5" width="8" height="7" rx="1" fill="#b86000" />
    {/* 2×2 grid */}
    <rect x="1.3" y="1.3" width="2.8" height="2.5" rx="0.3" fill="#ffb030" />
    <rect x="4.7" y="1.3" width="2.8" height="2.5" rx="0.3" fill="#ffb030" />
    <rect x="1.3" y="4.5" width="2.8" height="2.3" rx="0.3" fill="#ffb030" />
    <rect x="4.7" y="4.5" width="2.8" height="2.3" rx="0.3" fill="#ffb030" />
  </svg>
);

export const LuaIcon = () => <ScriptIcon />;

export const FILE_ICONS = {
  about:   <ScriptIcon />,
  skills:  <ModuleScriptIcon />,
  work:    <ScriptIcon />,
  contact: <LocalScriptIcon />,
  pkg: (
    <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
      <rect x="1" y="1" width="14" height="14" rx="2" fill="#1a1200" stroke="#cb8a27" strokeWidth="0.7" />
      <text x="3" y="11" fontSize="7" fill="#cb8a27" fontFamily="monospace" fontWeight="bold">{"{}"}</text>
    </svg>
  ),
  readme: (
    <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
      <rect x="1" y="1" width="14" height="14" rx="2" fill="#1a1a1a" stroke="#6b7280" strokeWidth="0.7" />
      <text x="2" y="11" fontSize="5.5" fill="#9ca3af" fontFamily="monospace" fontWeight="bold">MD</text>
    </svg>
  ),
};