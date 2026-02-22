import { useState, useEffect, useRef, useCallback } from "react";

// ── Persist a value to localStorage ──────────────────────────────────────────
export function useLocalStorage(key, fallback) {
  const [val, setVal] = useState(() => {
    try {
      const s = localStorage.getItem(key);
      return s ? JSON.parse(s) : fallback;
    } catch {
      return fallback;
    }
  });

  const set = useCallback(
    (v) => {
      setVal(v);
      try { localStorage.setItem(key, JSON.stringify(v)); } catch { }
    },
    [key]
  );

  return [val, set];
}

// ── Toast notifications ───────────────────────────────────────────────────────
export function useNotifications() {
  const [notes, setNotes] = useState([]);

  const push = useCallback((msg, type = "info", dur = 3500) => {
    const id = Date.now() + Math.random();
    setNotes((n) => [...n, { id, msg, type }]);
    setTimeout(() => setNotes((n) => n.filter((x) => x.id !== id)), dur);
  }, []);

  const remove = useCallback(
    (id) => setNotes((n) => n.filter((x) => x.id !== id)),
    []
  );

  return { notes, push, remove };
}

// ── Matrix rain canvas (requestAnimationFrame) ────────────────────────────────
export function useMatrix(active, themeVars) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (!active) {
      cancelAnimationFrame(rafRef.current);
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    const cols = Math.floor(canvas.width / 18);
    const drops = Array(cols).fill(1);
    const chars = "local function end if then return for do while repeat until true false nil and or not";

    function draw() {
      ctx.fillStyle = "rgba(13,17,23,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = themeVars.func;
      ctx.font = "13px 'JetBrains Mono', monospace";

      drops.forEach((y, i) => {
        const c = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(c, i * 18, y * 18);
        if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, themeVars]);

  return canvasRef;
}

// ── Track window width reactively ────────────────────────────────────────────
export function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const fn = () => setWidth(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return width;
}

// ── Live IST clock string ─────────────────────────────────────────────────────
export function useClock() {
  const [clock, setClock] = useState("");

  useEffect(() => {
    const fn = () =>
      setClock(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
        }) + " IST"
      );
    fn();
    const id = setInterval(fn, 1000);
    return () => clearInterval(id);
  }, []);

  return clock;
}

// ── Idle 30 s easter-egg ──────────────────────────────────────────────────────
export function useIdleEasterEgg(push) {
  useEffect(() => {
    let id;
    const reset = () => {
      clearTimeout(id);
      id = setTimeout(
        () => push("⏰ still here? no worries, Aman's code is still cooking 👨‍💻", "info", 5000),
        30_000
      );
    };
    ["mousemove", "keydown", "click"].forEach((ev) =>
      document.addEventListener(ev, reset)
    );
    reset();
    return () => {
      clearTimeout(id);
      ["mousemove", "keydown", "click"].forEach((ev) =>
        document.removeEventListener(ev, reset)
      );
    };
  }, [push]);
}

// ── Keyboard shortcuts + typed-word easter eggs ───────────────────────────────
export function useKeyboardEasterEggs({ push, switchTab, setSidebarOpen, setActivity, setCmdOpen, setMobileSidebarOpen }) {
  const KONAMI = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

  useEffect(() => {
    let konamiSeq = [];
    let typedSeq = "";

    const onKeyDown = (e) => {
      const mod = e.ctrlKey || e.metaKey;

      if ((mod && e.shiftKey && e.key === "P") || (mod && e.key === "p")) {
        e.preventDefault(); setCmdOpen(true); return;
      }
      if (mod && e.key === "f") { e.preventDefault(); setActivity("search"); return; }
      if (mod && e.key === "b") { e.preventDefault(); setSidebarOpen((s) => !s); return; }
      if (mod && e.key === "1") { e.preventDefault(); switchTab("about"); }
      if (mod && e.key === "2") { e.preventDefault(); switchTab("skills"); }
      if (mod && e.key === "3") { e.preventDefault(); switchTab("work"); }
      if (mod && e.key === "4") { e.preventDefault(); switchTab("contact"); }
      if (mod && e.key === "5") { e.preventDefault(); switchTab("pkg"); }
      if (e.key === "Escape") { setCmdOpen(false); setMobileSidebarOpen(false); }

      konamiSeq = [...konamiSeq, e.keyCode].slice(-10);
      if (konamiSeq.join() === KONAMI.join())
        push("🎮 KONAMI CODE UNLOCKED — you clearly have too much time lol", "success", 5000);
    };

    const onKeyPress = (e) => {
      if (document.activeElement.tagName === "INPUT") return;
      typedSeq = (typedSeq + e.key).slice(-10).toLowerCase();
      if (typedSeq.endsWith("aman")) push("👋 hey, that's me! thanks for typing my name lol", "success", 3500);
      if (typedSeq.endsWith("hire")) push("📨 great choice! check contact.lua for details 🔥", "success", 4000);
      if (typedSeq.endsWith("lua")) push("🌙 lua mentioned. based.", "info", 2500);
      if (typedSeq.endsWith("roblox")) push("🎮 roblox mentioned. my home. ❤️", "info", 2500);
      if (typedSeq.endsWith("help")) push('💡 Tip: try Ctrl+P for command palette, or type "aman" 👀', "info", 4000);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keypress", onKeyPress);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keypress", onKeyPress);
    };
  }, [push, switchTab, setSidebarOpen, setActivity, setCmdOpen, setMobileSidebarOpen]);
}
