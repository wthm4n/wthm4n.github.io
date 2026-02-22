export const LuaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 32 32" style={{ flexShrink: 0 }}>
    <circle cx="16" cy="16" r="15" fill="#000080" />
    <circle
      cx="16"
      cy="16"
      r="11"
      fill="#000080"
      stroke="#fff"
      strokeWidth="1"
    />
    <circle
      cx="21"
      cy="8"
      r="4"
      fill="#000080"
      stroke="#fff"
      strokeWidth="1.5"
    />
    <text
      x="9"
      y="21"
      fontSize="12"
      fill="white"
      fontFamily="serif"
      fontWeight="bold"
    >
      L
    </text>
  </svg>
);

export const TsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 32 32" style={{ flexShrink: 0 }}>
    <rect width="32" height="32" rx="3" fill="#3178c6" />
    <text
      x="3"
      y="24"
      fontSize="18"
      fill="white"
      fontFamily="Arial"
      fontWeight="bold"
    >
      TS
    </text>
  </svg>
);

export const JsonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 32 32" style={{ flexShrink: 0 }}>
    <rect width="32" height="32" rx="3" fill="#cb8a27" />
    <text
      x="4"
      y="23"
      fontSize="14"
      fill="white"
      fontFamily="Arial"
      fontWeight="bold"
    >
      {"{}"}
    </text>
  </svg>
);

export const MdIcon = () => (
  <svg width="15" height="15" viewBox="0 0 32 32" style={{ flexShrink: 0 }}>
    <rect width="32" height="32" rx="3" fill="#4a4a4a" />
    <text
      x="3"
      y="22"
      fontSize="13"
      fill="white"
      fontFamily="Arial"
      fontWeight="bold"
    >
      M↓
    </text>
  </svg>
);

export const FILE_ICONS = {
  about: <LuaIcon />,
  work: <LuaIcon />,
  contact: <LuaIcon />,
  skills: <TsIcon />,
  pkg: <JsonIcon />,
  readme: <MdIcon />,
};
