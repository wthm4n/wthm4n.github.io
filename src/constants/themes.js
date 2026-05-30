// ─────────────────────────────────────────────
//  THEMES.TS  —  syntax + ui color tokens
//  drop-in replacement, same shape as before
// ─────────────────────────────────────────────

export const THEMES = {

  // ── ORIGINALS (kept exactly as-is) ──────────

  onedark: {
    label: "One Dark Pro",
    swatch: "#21252b",
    vars: {
      bg: "#21252b", bg2: "#282c34", bg3: "#2c313c", panel: "#181a1f",
      border: "#181a1f", border2: "#3e4451", comment: "#5c6370", fg: "#abb2bf",
      fg2: "#d1d8e8", keyword: "#c678dd", func: "#61afef", string: "#98c379",
      number: "#d19a66", type: "#e5c07b", operator: "#56b6c2", red: "#e06c75",
      cursor: "#528bff", indent: "#3b4048", sel: "rgba(82,139,255,0.15)",
      hover: "rgba(255,255,255,0.04)", tabLine: "#528bff", status: "#528bff", scrollbar: "#3e4451",
    },
  },

  "github-dark": {
    label: "GitHub Dark",
    swatch: "#0d1117",
    vars: {
      bg: "#0d1117", bg2: "#161b22", bg3: "#21262d", panel: "#010409",
      border: "#30363d", border2: "#30363d", comment: "#8b949e", fg: "#c9d1d9",
      fg2: "#e6edf3", keyword: "#ff7b72", func: "#79c0ff", string: "#a5d6ff",
      number: "#f2cc60", type: "#ffa657", operator: "#79c0ff", red: "#ff7b72",
      cursor: "#58a6ff", indent: "#21262d", sel: "rgba(88,166,255,0.15)",
      hover: "rgba(255,255,255,0.05)", tabLine: "#58a6ff", status: "#238636", scrollbar: "#30363d",
    },
  },

  monokai: {
    label: "Monokai",
    swatch: "#272822",
    vars: {
      bg: "#272822", bg2: "#2d2e27", bg3: "#3e3d32", panel: "#1e1f1b",
      border: "#1e1f1b", border2: "#49483e", comment: "#75715e", fg: "#f8f8f2",
      fg2: "#ffffff", keyword: "#f92672", func: "#a6e22e", string: "#e6db74",
      number: "#ae81ff", type: "#66d9e8", operator: "#f92672", red: "#f92672",
      cursor: "#a6e22e", indent: "#3e3d32", sel: "rgba(166,226,46,0.15)",
      hover: "rgba(255,255,255,0.04)", tabLine: "#a6e22e", status: "#75715e", scrollbar: "#49483e",
    },
  },

  nord: {
    label: "Nord",
    swatch: "#2e3440",
    vars: {
      bg: "#2e3440", bg2: "#3b4252", bg3: "#434c5e", panel: "#242933",
      border: "#242933", border2: "#4c566a", comment: "#616e88", fg: "#d8dee9",
      fg2: "#eceff4", keyword: "#81a1c1", func: "#88c0d0", string: "#a3be8c",
      number: "#b48ead", type: "#ebcb8b", operator: "#81a1c1", red: "#bf616a",
      cursor: "#88c0d0", indent: "#3b4252", sel: "rgba(136,192,208,0.15)",
      hover: "rgba(255,255,255,0.04)", tabLine: "#88c0d0", status: "#3b4252", scrollbar: "#4c566a",
    },
  },

  light: {
    label: "VS Light",
    swatch: "#f3f3f3",
    vars: {
      bg: "#f3f3f3", bg2: "#ffffff", bg3: "#e8e8e8", panel: "#dddddd",
      border: "#c8c8c8", border2: "#c8c8c8", comment: "#008000", fg: "#000000",
      fg2: "#000000", keyword: "#0000ff", func: "#795e26", string: "#a31515",
      number: "#098658", type: "#267f99", operator: "#000000", red: "#cd3131",
      cursor: "#0066bf", indent: "#d3d3d3", sel: "rgba(0,102,191,0.15)",
      hover: "rgba(0,0,0,0.04)", tabLine: "#0066bf", status: "#0066bf", scrollbar: "#c8c8c8",
    },
  },

  dracula: {
    label: "Dracula",
    swatch: "#282a36",
    vars: {
      bg: "#282a36", bg2: "#21222c", bg3: "#2d2f3f", panel: "#191a21",
      border: "#191a21", border2: "#44475a", comment: "#6272a4", fg: "#f8f8f2",
      fg2: "#ffffff", keyword: "#ff79c6", func: "#50fa7b", string: "#f1fa8c",
      number: "#bd93f9", type: "#8be9fd", operator: "#ff79c6", red: "#ff5555",
      cursor: "#bd93f9", indent: "#2d2f3f", sel: "rgba(189,147,249,0.2)",
      hover: "rgba(255,255,255,0.05)", tabLine: "#bd93f9", status: "#6272a4", scrollbar: "#44475a",
    },
  },

  violet: {
    label: "Violet Dusk",
    swatch: "#1a1528",
    vars: {
      bg: "#1a1528", bg2: "#211d35", bg3: "#2a2542", panel: "#120f1e",
      border: "#120f1e", border2: "#3d3660", comment: "#6b5f8a", fg: "#ccc4e8",
      fg2: "#e8e0ff", keyword: "#c792ea", func: "#82aaff", string: "#c3e88d",
      number: "#f78c6c", type: "#ffcb6b", operator: "#89ddff", red: "#ff5370",
      cursor: "#c792ea", indent: "#2a2542", sel: "rgba(199,146,234,0.2)",
      hover: "rgba(255,255,255,0.05)", tabLine: "#c792ea", status: "#3d3660", scrollbar: "#3d3660",
    },
  },

  midnight: {
    label: "Midnight",
    swatch: "#0a0e1a",
    vars: {
      bg: "#0a0e1a", bg2: "#0d1220", bg3: "#111827", panel: "#060810",
      border: "#060810", border2: "#1e2d40", comment: "#4a5a70", fg: "#9bb4cc",
      fg2: "#cde4f8", keyword: "#60a0ff", func: "#00d4aa", string: "#7dd3a8",
      number: "#ffa07a", type: "#5bc8f5", operator: "#60a0ff", red: "#ff6b6b",
      cursor: "#60a0ff", indent: "#111827", sel: "rgba(96,160,255,0.15)",
      hover: "rgba(255,255,255,0.04)", tabLine: "#60a0ff", status: "#1e2d40", scrollbar: "#1e2d40",
    },
  },

  "tokyo-night": {
    label: "Tokyo Night",
    swatch: "#1a1b2e",
    vars: {
      bg: "#1a1b2e", bg2: "#16161e", bg3: "#1f2037", panel: "#13131a",
      border: "#13131a", border2: "#292e42", comment: "#565f89", fg: "#a9b1d6",
      fg2: "#c0caf5", keyword: "#bb9af7", func: "#7aa2f7", string: "#9ece6a",
      number: "#ff9e64", type: "#2ac3de", operator: "#89ddff", red: "#f7768e",
      cursor: "#7aa2f7", indent: "#1f2037", sel: "rgba(122,162,247,0.15)",
      hover: "rgba(255,255,255,0.04)", tabLine: "#7aa2f7", status: "#292e42", scrollbar: "#292e42",
    },
  },

  catppuccin: {
    label: "Catppuccin Mocha",
    swatch: "#1e1e2e",
    vars: {
      bg: "#1e1e2e", bg2: "#181825", bg3: "#24273a", panel: "#11111b",
      border: "#11111b", border2: "#313244", comment: "#6c7086", fg: "#cdd6f4",
      fg2: "#e6e9f4", keyword: "#cba6f7", func: "#89b4fa", string: "#a6e3a1",
      number: "#fab387", type: "#89dceb", operator: "#89dceb", red: "#f38ba8",
      cursor: "#cba6f7", indent: "#24273a", sel: "rgba(203,166,247,0.2)",
      hover: "rgba(255,255,255,0.04)", tabLine: "#cba6f7", status: "#313244", scrollbar: "#313244",
    },
  },

  "solarized-dark": {
    label: "Solarized Dark",
    swatch: "#002b36",
    vars: {
      bg: "#002b36", bg2: "#073642", bg3: "#0d4552", panel: "#001f27",
      border: "#001f27", border2: "#094555", comment: "#586e75", fg: "#839496",
      fg2: "#93a1a1", keyword: "#859900", func: "#268bd2", string: "#2aa198",
      number: "#d33682", type: "#b58900", operator: "#cb4b16", red: "#dc322f",
      cursor: "#268bd2", indent: "#0d4552", sel: "rgba(38,139,210,0.2)",
      hover: "rgba(255,255,255,0.04)", tabLine: "#268bd2", status: "#073642", scrollbar: "#094555",
    },
  },

  "ayu-dark": {
    label: "Ayu Dark",
    swatch: "#0d1017",
    vars: {
      bg: "#0d1017", bg2: "#13191f", bg3: "#1a2130", panel: "#0a0d12",
      border: "#0a0d12", border2: "#1e2a38", comment: "#3d5061", fg: "#bfbdb6",
      fg2: "#e6e1cf", keyword: "#ff8f40", func: "#ffb454", string: "#aad94c",
      number: "#d2a6ff", type: "#59c2ff", operator: "#f29668", red: "#f26d78",
      cursor: "#e6b450", indent: "#1a2130", sel: "rgba(230,180,80,0.15)",
      hover: "rgba(255,255,255,0.04)", tabLine: "#e6b450", status: "#1e2a38", scrollbar: "#1e2a38",
    },
  },

  "rose-pine": {
    label: "Rosé Pine",
    swatch: "#191724",
    vars: {
      bg: "#191724", bg2: "#1f1d2e", bg3: "#26233a", panel: "#111019",
      border: "#111019", border2: "#2a2837", comment: "#6e6a86", fg: "#e0def4",
      fg2: "#f0eeff", keyword: "#c4a7e7", func: "#9ccfd8", string: "#f6c177",
      number: "#ebbcba", type: "#31748f", operator: "#c4a7e7", red: "#eb6f92",
      cursor: "#c4a7e7", indent: "#26233a", sel: "rgba(196,167,231,0.2)",
      hover: "rgba(255,255,255,0.04)", tabLine: "#eb6f92", status: "#2a2837", scrollbar: "#2a2837",
    },
  },


  // ── NEW: TRUE BLACK + VIVID TERMINAL PALETTES ──

  // Pure black bg, classic Linux terminal green/cyan/magenta
  "tty-classic": {
    label: "TTY Classic",
    swatch: "#000000",
    vars: {
      bg: "#000000", bg2: "#0a0a0a", bg3: "#111111", panel: "#000000",
      border: "#000000", border2: "#1a1a1a", comment: "#3a7a3a", fg: "#00cc00",
      fg2: "#00ff41", keyword: "#ff5fff", func: "#00ffff", string: "#ffff00",
      number: "#ff8700", type: "#00ff87", operator: "#ff5fff", red: "#ff0000",
      cursor: "#00ff41", indent: "#111111", sel: "rgba(0,255,65,0.15)",
      hover: "rgba(0,255,65,0.06)", tabLine: "#00ff41", status: "#1a1a1a", scrollbar: "#1a1a1a",
    },
  },

  // True black, neon cyberpunk — hot pink / electric blue / acid green
  "neon-black": {
    label: "Neon Black",
    swatch: "#000000",
    vars: {
      bg: "#000000", bg2: "#050505", bg3: "#0d0d0d", panel: "#000000",
      border: "#000000", border2: "#1a0a1a", comment: "#4a2a5a", fg: "#e0d0f0",
      fg2: "#ffffff", keyword: "#ff2d9b", func: "#00e5ff", string: "#39ff14",
      number: "#ff9500", type: "#bf5af2", operator: "#ff2d9b", red: "#ff3b3b",
      cursor: "#ff2d9b", indent: "#0d0d0d", sel: "rgba(255,45,155,0.18)",
      hover: "rgba(255,255,255,0.04)", tabLine: "#ff2d9b", status: "#1a0a1a", scrollbar: "#1a0a1a",
    },
  },

  // Near-black warm, orange/amber terminal vibe — looks like old amber CRT
  "amber-crt": {
    label: "Amber CRT",
    swatch: "#070500",
    vars: {
      bg: "#070500", bg2: "#0e0a00", bg3: "#160f00", panel: "#040300",
      border: "#040300", border2: "#1e1500", comment: "#5a3e00", fg: "#cc8800",
      fg2: "#ffaa00", keyword: "#ff6600", func: "#ffcc00", string: "#ffe066",
      number: "#ff4400", type: "#ff9933", operator: "#ff6600", red: "#ff2200",
      cursor: "#ffaa00", indent: "#160f00", sel: "rgba(255,170,0,0.15)",
      hover: "rgba(255,170,0,0.06)", tabLine: "#ffaa00", status: "#1e1500", scrollbar: "#1e1500",
    },
  },

  // Pure black, retro hacker — blue phosphor monitor vibe
  "phosphor-blue": {
    label: "Phosphor Blue",
    swatch: "#000308",
    vars: {
      bg: "#000308", bg2: "#000510", bg3: "#000a1a", panel: "#000205",
      border: "#000205", border2: "#001030", comment: "#1a3a6a", fg: "#4a9eff",
      fg2: "#99ccff", keyword: "#00aaff", func: "#66ddff", string: "#aaddff",
      number: "#0077ff", type: "#33bbff", operator: "#00aaff", red: "#ff4466",
      cursor: "#66ddff", indent: "#000a1a", sel: "rgba(0,170,255,0.18)",
      hover: "rgba(0,170,255,0.06)", tabLine: "#00aaff", status: "#001030", scrollbar: "#001030",
    },
  },

  // Black bg, xterm-256 inspired — vivid discrete colors, no pastels
  "xterm-vivid": {
    label: "Xterm Vivid",
    swatch: "#000000",
    vars: {
      bg: "#000000", bg2: "#080808", bg3: "#121212", panel: "#000000",
      border: "#000000", border2: "#1c1c1c", comment: "#444444", fg: "#d0d0d0",
      fg2: "#ffffff", keyword: "#af5fff", func: "#5fd7ff", string: "#87ff5f",
      number: "#ff8700", type: "#00d7ff", operator: "#ff5fd7", red: "#ff5f5f",
      cursor: "#5fd7ff", indent: "#121212", sel: "rgba(95,215,255,0.15)",
      hover: "rgba(255,255,255,0.05)", tabLine: "#5fd7ff", status: "#1c1c1c", scrollbar: "#1c1c1c",
    },
  },

  // Very dark green-black, like a hacker movie terminal
  "matrix": {
    label: "Matrix",
    swatch: "#000300",
    vars: {
      bg: "#000300", bg2: "#010601", bg3: "#020b02", panel: "#000200",
      border: "#000200", border2: "#0a1a0a", comment: "#1a4a1a", fg: "#00aa00",
      fg2: "#00ee00", keyword: "#00ff41", func: "#39ff14", string: "#00dd88",
      number: "#00ffaa", type: "#00cc66", operator: "#00ff41", red: "#ff3300",
      cursor: "#00ff41", indent: "#020b02", sel: "rgba(0,255,65,0.12)",
      hover: "rgba(0,255,65,0.05)", tabLine: "#00ff41", status: "#0a1a0a", scrollbar: "#0a1a0a",
    },
  },

  // Near-black, deep ocean — teal/aqua/coral syntax
  "deep-ocean": {
    label: "Deep Ocean",
    swatch: "#000d12",
    vars: {
      bg: "#000d12", bg2: "#001018", bg3: "#001520", panel: "#000810",
      border: "#000810", border2: "#001e2e", comment: "#2a4a5a", fg: "#7cb8cc",
      fg2: "#b0d8e8", keyword: "#00e5cc", func: "#4dd9ff", string: "#7fff87",
      number: "#ff8c69", type: "#00bfff", operator: "#00e5cc", red: "#ff5555",
      cursor: "#4dd9ff", indent: "#001520", sel: "rgba(77,217,255,0.14)",
      hover: "rgba(0,229,204,0.06)", tabLine: "#00e5cc", status: "#001e2e", scrollbar: "#001e2e",
    },
  },

  // Black bg, synthwave terminal — magenta + cyan + gold, very vivid
  "synthterm": {
    label: "Synthterm",
    swatch: "#020008",
    vars: {
      bg: "#020008", bg2: "#04000e", bg3: "#080018", panel: "#010005",
      border: "#010005", border2: "#130025", comment: "#3d1a5a", fg: "#d8c8f0",
      fg2: "#f0e8ff", keyword: "#ff2aff", func: "#00e5ff", string: "#ffd700",
      number: "#ff6aff", type: "#00ffcc", operator: "#ff2aff", red: "#ff3355",
      cursor: "#ff2aff", indent: "#080018", sel: "rgba(255,42,255,0.16)",
      hover: "rgba(255,255,255,0.04)", tabLine: "#ff2aff", status: "#130025", scrollbar: "#130025",
    },
  },

  // True black, blood red + ice white — high drama, very readable
  "crimson-ice": {
    label: "Crimson Ice",
    swatch: "#000000",
    vars: {
      bg: "#000000", bg2: "#080008", bg3: "#100010", panel: "#000000",
      border: "#000000", border2: "#200020", comment: "#5a2a3a", fg: "#ccccdd",
      fg2: "#eeeeff", keyword: "#ff2244", func: "#88ccff", string: "#aaffcc",
      number: "#ff6688", type: "#55ddff", operator: "#ff2244", red: "#ff0033",
      cursor: "#ff2244", indent: "#100010", sel: "rgba(255,34,68,0.16)",
      hover: "rgba(255,255,255,0.04)", tabLine: "#ff2244", status: "#200020", scrollbar: "#200020",
    },
  },

  // Black bg, sunset palette — warm orange/rose/gold
  "sunset-black": {
    label: "Sunset Black",
    swatch: "#0a0500",
    vars: {
      bg: "#0a0500", bg2: "#100800", bg3: "#180d00", panel: "#070300",
      border: "#070300", border2: "#241200", comment: "#5a3a20", fg: "#e0c8a8",
      fg2: "#ffe8c8", keyword: "#ff6a3d", func: "#ffd166", string: "#06d6a0",
      number: "#ef476f", type: "#ffa552", operator: "#ff6a3d", red: "#ef476f",
      cursor: "#ffd166", indent: "#180d00", sel: "rgba(255,209,102,0.14)",
      hover: "rgba(255,106,61,0.07)", tabLine: "#ff6a3d", status: "#241200", scrollbar: "#241200",
    },
  },

};


// ─────────────────────────────────────────────
//  META  —  tab/file info (unchanged)
// ─────────────────────────────────────────────

export const META = {
  about:   { file: "about.lua",    folder: "pages", lang: "Luau",     lines: 34 },
  skills:  { file: "skills.lua",   folder: "pages", lang: "Luau",     lines: 25 },
  work:    { file: "projects.lua", folder: "pages", lang: "Luau",     lines: 38 },
  contact: { file: "contact.lua",  folder: "pages", lang: "Luau",     lines: 27 },
  pkg:     { file: "package.json", folder: "meta",  lang: "JSON",     lines: 28 },
  readme:  { file: "README.md",    folder: "meta",  lang: "Markdown", lines: 24 },
};

export const TAB_COLORS = {
  about:   "#000080",
  skills:  "#000080",
  work:    "#000080",
  contact: "#000080",
  pkg:     "#cb8a27",
  readme:  "#4a4a4a",
};

export const FILE_LABELS = {
  about:   "about.lua",
  skills:  "skills.lua",
  work:    "projects.lua",
  contact: "contact.lua",
  pkg:     "package.json",
  readme:  "README.md",
};