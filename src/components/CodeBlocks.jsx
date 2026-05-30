import { K, F, S, N, T, O, C, P, I, Line, Sp } from "./Tokens";

// ── about.lua ─────────────────────────────────────────────────────────────────
// Angle: WHO YOU ARE. Personal voice, story, funny/self-aware.
// No skill lists. No project names. Just Aman as a human.

export function CodeAbout({ t }) {
  return (
    <>
      {/* ── File header ─────────────────────────────────────────────────── */}
      <Line t={t}>
        <C t={t}>-- about.lua · the person behind the code</C>
      </Line>
      <Line t={t}>
        <C t={t}>-- warning: may contain strong opinions and dark coffee</C>
      </Line>

      <Line t={t} />

      {/* ── Module declaration ──────────────────────────────────────────── */}
      <Line t={t}>
        <K t={t}>local</K>
        <Sp />
        <T t={t}>Aman</T>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{}"}</P>
      </Line>

      <Line t={t} />

      {/* ── Identity — aligned = signs ──────────────────────────────────── */}
      <Line t={t} hl>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>name</F>
        <Sp n={7} />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"Aman Koushal"</S>
      </Line>
      <Line t={t}>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>age</F>
        <Sp n={8} />
        <O t={t}>=</O>
        <Sp />
        <N t={t}>20</N>
      </Line>
      <Line t={t}>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>location</F>
        <Sp n={4} />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"Delhi, India 🇮🇳"</S>
      </Line>
      <Line t={t}>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>studying</F>
        <Sp n={4} />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"B.Tech CSE (AI/ML) · KCC ITM, Noida"</S>
      </Line>
      <Line t={t}>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>actually_doing</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"building Samita instead of attending lectures"</S>
      </Line>

      <Line t={t} />

      {/* ── Origin story as long string ─────────────────────────────────── */}
      <Line t={t}>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>origin</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>{`[[`}</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>self-taught. no bootcamp. no roadmap.</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>just stackoverflow, a lot of pain,</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>and the occasional anime ost at 2am.</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>started building for fun. now building Samita.</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>the dream is a real AI that actually knows you.</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>currently: getting there.</S>
      </Line>
      <Line t={t}>
        <S t={t}>{`]]`}</S>
      </Line>

      <Line t={t} />

      {/* ── Personality ─────────────────────────────────────────────────── */}
      <Line t={t}>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>fuel</F>
        <Sp n={9} />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{"}</P>
        <S t={t}>"dark coffee"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"chocolate"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"anime"</S>
        <P t={t}>{"}"}</P>
      </Line>
      <Line t={t}>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>open_to_work</F>
        <Sp n={2} />
        <O t={t}>=</O>
        <Sp />
        <K t={t}>true</K>
        <Sp />
        <C t={t}>-- yes, even weekends</C>
      </Line>
      <Line t={t}>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>currently_building</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"Samita — local AI with memory + voice + personality"</S>
      </Line>
      <Line t={t}>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>seeking</F>
        <Sp n={6} />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"a team that wants to build something real"</S>
      </Line>

      <Line t={t} />

      {/* ── GetQuote function ────────────────────────────────────────────── */}
      <Line t={t}>
        <K t={t}>function</K>
        <Sp />
        <T t={t}>Aman</T>
        <P t={t}>:</P>
        <F t={t}>GetQuote</F>
        <P t={t}>()</P>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <C t={t}>-- unsolicited life advice from a 20 year old</C>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <K t={t}>return</K>
        <Sp />
        <S t={t}>"build it. if it breaks, you learned something."</S>
      </Line>
      <Line t={t}>
        <K t={t}>end</K>
      </Line>

      <Line t={t} />

      {/* ── Module export ───────────────────────────────────────────────── */}
      <Line t={t}>
        <K t={t}>return</K>
        <Sp />
        <T t={t}>Aman</T>
      </Line>
    </>
  );
}

// ── skills.lua ─────────────────────────────────────────────────────────────────
export function CodeSkills({ t }) {
  return (
    <>
      {/* File header */}
      <Line t={t}>
        <C t={t}>-- skills.lua · what I reach for when building</C>
      </Line>
      <Line t={t} />

      {/* Type alias — no percentages, no fake numbers */}
      <Line t={t}>
        <K t={t}>type</K>
        <Sp />
        <T t={t}>Level</T>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"daily"</S>
        <Sp />
        <O t={t}>|</O>
        <Sp />
        <S t={t}>"frequent"</S>
        <Sp />
        <O t={t}>|</O>
        <Sp />
        <S t={t}>"occasional"</S>
        <Sp />
        <O t={t}>|</O>
        <Sp />
        <S t={t}>"learning"</S>
        <P t={t}>;</P>
      </Line>
      <Line t={t} />

      {/* Interface */}
      <Line t={t}>
        <K t={t}>interface</K>
        <Sp />
        <T t={t}>Skill</T>
        <Sp />
        <P t={t}>{"{"}</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>name</F>
        <P t={t}>:</P>
        <Sp />
        <T t={t}>string</T>
        <P t={t}>;</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>use</F>
        <P t={t}>:</P>
        <Sp />
        <T t={t}>Level</T>
        <P t={t}>;</P>
      </Line>
      <Line t={t}>
        <P t={t}>{"}"}</P>
      </Line>
      <Line t={t} />

      {/* ── AI / Python stack — the Samita stack ── */}
      <Line t={t} hl>
        <C t={t}>{"-- ─── AI / Python  (the Samita stack) ─────────────────"}</C>
      </Line>
      <Line t={t}>
        <K t={t}>const</K>
        <Sp />
        <F t={t}>aiStack</F>
        <P t={t}>:</P>
        <Sp />
        <T t={t}>Skill</T>
        <P t={t}>[]</P>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>[</P>
      </Line>
      {[
        ["Python", "daily"],
        ["Ollama / Local LLMs", "daily"],
        ["ChromaDB / Vector Search", "frequent"],
        ["Whisper (Speech-to-Text)", "frequent"],
        ["APScheduler", "frequent"],
        ["SQLite", "daily"],
        ["Resemblyzer (Speaker Verify)", "frequent"],
        ["Textual TUI", "frequent"],
      ].map(([name, use]) => (
        <Line t={t} key={name}>
          <I />
          <P t={t}>{"{ "}</P>
          <F t={t}>name</F>
          <P t={t}>:</P>
          <Sp />
          <S t={t}>{`"${name}"`}</S>
          <P t={t}>,</P>
          <Sp />
          <F t={t}>use</F>
          <P t={t}>:</P>
          <Sp />
          <S t={t}>{`"${use}"`}</S>
          <Sp />
          <P t={t}>{"},"}</P>
        </Line>
      ))}
      <Line t={t}>
        <P t={t}>];</P>
      </Line>
      <Line t={t} />

      {/* ── Game Dev / Lua ── */}
      <Line t={t} hl>
        <C t={t}>{"-- ─── Game Dev / Lua ───────────────────────────────────"}</C>
      </Line>
      <Line t={t}>
        <K t={t}>const</K>
        <Sp />
        <F t={t}>gameDevSkills</F>
        <P t={t}>:</P>
        <Sp />
        <T t={t}>Skill</T>
        <P t={t}>[]</P>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>[</P>
      </Line>
      {[
        ["Luau / Roblox Studio", "daily"],
        ["Game System Design", "daily"],
        ["Networking / RemoteEvents", "frequent"],
        ["OOP Architecture", "daily"],
        ["Moon Animator + VFX", "frequent"],
      ].map(([name, use]) => (
        <Line t={t} key={name}>
          <I />
          <P t={t}>{"{ "}</P>
          <F t={t}>name</F>
          <P t={t}>:</P>
          <Sp />
          <S t={t}>{`"${name}"`}</S>
          <P t={t}>,</P>
          <Sp />
          <F t={t}>use</F>
          <P t={t}>:</P>
          <Sp />
          <S t={t}>{`"${use}"`}</S>
          <Sp />
          <P t={t}>{"},"}</P>
        </Line>
      ))}
      <Line t={t}>
        <P t={t}>];</P>
      </Line>
      <Line t={t} />

      {/* ── Web / Fullstack ── */}
      <Line t={t} hl>
        <C t={t}>{"-- ─── Web / Fullstack ──────────────────────────────────"}</C>
      </Line>
      <Line t={t}>
        <K t={t}>const</K>
        <Sp />
        <F t={t}>webSkills</F>
        <P t={t}>:</P>
        <Sp />
        <T t={t}>Skill</T>
        <P t={t}>[]</P>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>[</P>
      </Line>
      {[
        ["TypeScript / JavaScript", "daily"],
        ["React / Vite", "frequent"],
        ["HTML / CSS", "daily"],
        ["Node.js / Express", "frequent"],
        ["MongoDB", "frequent"],
        ["C", "occasional"],
      ].map(([name, use]) => (
        <Line t={t} key={name}>
          <I />
          <P t={t}>{"{ "}</P>
          <F t={t}>name</F>
          <P t={t}>:</P>
          <Sp />
          <S t={t}>{`"${name}"`}</S>
          <P t={t}>,</P>
          <Sp />
          <F t={t}>use</F>
          <P t={t}>:</P>
          <Sp />
          <S t={t}>{`"${use}"`}</S>
          <Sp />
          <P t={t}>{"},"}</P>
        </Line>
      ))}
      <Line t={t}>
        <P t={t}>];</P>
      </Line>
      <Line t={t} />

      {/* Export */}
      <Line t={t}>
        <K t={t}>export default</K>
        <Sp />
        <P t={t}>{"{ "}</P>
        <F t={t}>aiStack</F>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>gameDevSkills</F>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>webSkills</F>
        <P t={t}>{" };"}</P>
      </Line>
    </>
  );
}

// ── projects.lua ──────────────────────────────────────────────────────────────
// Angle: Samita dominates. Everything else supports.
export function CodeWork({ t }) {
  return (
    <>
      {/* File header */}
      <Line t={t}>
        <C t={t}>-- projects.lua — what I've built</C>
      </Line>
      <Line t={t}>
        <C t={t}>-- flagship first. always.</C>
      </Line>
      <Line t={t} />

      {/* Module declaration */}
      <Line t={t}>
        <K t={t}>local</K>
        <Sp />
        <T t={t}>Projects</T>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{}"}</P>
      </Line>
      <Line t={t} />

      {/* ═══════════════════════════════════════════════════════════════════
          SAMITA — flagship block, extra large
          ═══════════════════════════════════════════════════════════════════ */}
      <Line t={t}>
        <C t={t}>{"--[[═══════════════════════════════════════════════════"}</C>
      </Line>
      <Line t={t} hl>
        <C t={t}>{"      ⭐  SAMITA AI  ·  FLAGSHIP  ·  active           "}</C>
      </Line>
      <Line t={t}>
        <C t={t}>{"       Personality-driven local AI assistant           "}</C>
      </Line>
      <Line t={t}>
        <C t={t}>{"═══════════════════════════════════════════════════]]  "}</C>
      </Line>
      <Line t={t}>
        <T t={t}>Projects</T>
        <P t={t}>.</P>
        <F
          t={t}
          onClick={() =>
            window.open("https://github.com/wthm4n/samita", "_blank")
          }
          title="View Samita on GitHub"
        >
          Samita
        </F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{"}</P>
      </Line>

      {/* tagline */}
      <Line t={t}>
        <I />
        <F t={t}>tagline</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>[[</S>
      </Line>
      <Line t={t}>
        <I /><I />
        <S t={t}>Not a chatbot. A local AI assistant built to feel</S>
      </Line>
      <Line t={t}>
        <I /><I />
        <S t={t}>like a real companion — one that remembers you,</S>
      </Line>
      <Line t={t}>
        <I /><I />
        <S t={t}>recognizes your voice, and gets smarter over time.</S>
      </Line>
      <Line t={t}>
        <I />
        <S t={t}>]]</S>
        <P t={t}>,</P>
      </Line>

      {/* architecture */}
      <Line t={t}>
        <I />
        <F t={t}>architecture</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{"}</P>
        <Sp />
        <C t={t}>-- 7 subsystems, all wired together</C>
      </Line>
      {[
        ["agent",  "planner + tool execution + sandbox"],
        ["memory", "SQLite + ChromaDB · 4 memory layers"],
        ["voice",  "Whisper STT + Resemblyzer speaker verify"],
        ["brain",  "Ollama (Qwen 2.5 Coder) + personality layer"],
        ["search", "DuckDuckGo web search integration"],
        ["scheduler", "APScheduler · reminders + timed tasks"],
        ["ui",     "Textual TUI · full terminal interface"],
      ].map(([key, val]) => (
        <Line t={t} key={key}>
          <I /><I />
          <F t={t}>{key}</F>
          <P t={t}>:</P>
          <Sp />
          <S t={t}>{`"${val}"`}</S>
          <P t={t}>,</P>
        </Line>
      ))}
      <Line t={t}>
        <I />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>

      {/* memory layers */}
      <Line t={t}>
        <I />
        <F t={t}>memoryLayers</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{"}</P>
        <Sp />
        <C t={t}>-- how Samita remembers</C>
      </Line>
      {[
        ["conversations", "full message history in SQLite"],
        ["facts",         "user facts extracted and stored"],
        ["events",        "timestamped events + reminders"],
        ["semantic",      "ChromaDB vector embeddings for recall"],
      ].map(([key, val]) => (
        <Line t={t} key={key}>
          <I /><I />
          <F t={t}>{key}</F>
          <P t={t}>:</P>
          <Sp />
          <S t={t}>{`"${val}"`}</S>
          <P t={t}>,</P>
        </Line>
      ))}
      <Line t={t}>
        <I />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>

      {/* request routing */}
      <Line t={t}>
        <I />
        <F t={t}>routing</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{"}</P>
        <Sp />
        <C t={t}>-- auto-classifies every request</C>
      </Line>
      {[
        "chat",
        "memory_recall",
        "fact_storage",
        "reminder",
        "web_search",
        "agent_task",
      ].map((r) => (
        <Line t={t} key={r}>
          <I /><I />
          <S t={t}>{`"${r}"`}</S>
          <P t={t}>,</P>
        </Line>
      ))}
      <Line t={t}>
        <I />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>

      {/* tech */}
      <Line t={t}>
        <I />
        <F t={t}>tech</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{"}</P>
      </Line>
      {[
        ["language",  "Python"],
        ["llm",       "Ollama · Qwen 2.5 Coder"],
        ["memory",    "SQLite + ChromaDB"],
        ["voice",     "Whisper + Resemblyzer"],
        ["scheduler", "APScheduler"],
        ["interface", "Textual TUI"],
        ["search",    "DuckDuckGo API"],
      ].map(([key, val]) => (
        <Line t={t} key={key}>
          <I /><I />
          <F t={t}>{key}</F>
          <P t={t}>:</P>
          <Sp />
          <S t={t}>{`"${val}"`}</S>
          <P t={t}>,</P>
        </Line>
      ))}
      <Line t={t}>
        <I />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>

      <Line t={t}>
        <I />
        <F t={t}>status</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"active development"</S>
        <P t={t}>,</P>
        <Sp />
        <C t={t}>-- main focus right now</C>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>link</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S
          t={t}
          onClick={() =>
            window.open("https://github.com/wthm4n/samita", "_blank")
          }
          title="View on GitHub"
        >
          "github.com/wthm4n/samita"
        </S>
      </Line>
      <Line t={t}>
        <P t={t}>{"}"}</P>
      </Line>
      <Line t={t} />

      {/* ── SIMUX ── */}
      <Line t={t}>
        <C t={t}>{"--[[ ─────────────────────────────────────"}</C>
      </Line>
      <Line t={t} hl>
        <C t={t}>{"     SIMUX  ·  SYS_002  ·  complete"}</C>
      </Line>
      <Line t={t}>
        <C t={t}>{"──────────────────────────────────────]]"}</C>
      </Line>
      <Line t={t}>
        <T t={t}>Projects</T>
        <P t={t}>.</P>
        <F
          t={t}
          onClick={() =>
            window.open("https://github.com/wthm4n/simux", "_blank")
          }
        >
          Simux
        </F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{"}</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>description</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>[[</S>
      </Line>
      <Line t={t}>
        <I /><I />
        <S t={t}>Online judge platform. Submit code, get a verdict.</S>
      </Line>
      <Line t={t}>
        <I /><I />
        <S t={t}>React frontend, Node API, isolated Docker worker,</S>
      </Line>
      <Line t={t}>
        <I /><I />
        <S t={t}>RabbitMQ queue, Python judge. Full pipeline.</S>
      </Line>
      <Line t={t}>
        <I />
        <S t={t}>]]</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>tech</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{ "}</P>
        <S t={t}>"React"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"Node.js"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"Docker"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"Python"</S>
        <P t={t}>{" }"}</P>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>status</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"complete"</S>
      </Line>
      <Line t={t}>
        <P t={t}>{"}"}</P>
      </Line>
      <Line t={t} />

      {/* ── AMNA V5 ── */}
      <Line t={t}>
        <C t={t}>{"--[[ ─────────────────────────────────────"}</C>
      </Line>
      <Line t={t} hl>
        <C t={t}>{"     AMNA V5  ·  SYS_003  ·  complete"}</C>
      </Line>
      <Line t={t}>
        <C t={t}>{"──────────────────────────────────────]]"}</C>
      </Line>
      <Line t={t}>
        <T t={t}>Projects</T>
        <P t={t}>.</P>
        <F
          t={t}
          onClick={() =>
            window.open("https://github.com/wthm4n/amna-v5", "_blank")
          }
        >
          AmnaV5
        </F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{"}</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>description</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>[[</S>
      </Line>
      <Line t={t}>
        <I /><I />
        <S t={t}>Full-featured Discord bot — V5 of an evolving system.</S>
      </Line>
      <Line t={t}>
        <I /><I />
        <S t={t}>Moderation, music, fun, social commands, leveling,</S>
      </Line>
      <Line t={t}>
        <I /><I />
        <S t={t}>OOP architecture, persistent MongoDB datastore.</S>
      </Line>
      <Line t={t}>
        <I />
        <S t={t}>]]</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>tech</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{ "}</P>
        <S t={t}>"discord.js"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"Node.js"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"MongoDB"</S>
        <P t={t}>{" }"}</P>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>status</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"complete"</S>
      </Line>
      <Line t={t}>
        <P t={t}>{"}"}</P>
      </Line>
      <Line t={t} />

      {/* ── COMBAT / GUN SYSTEMS ── */}
      <Line t={t}>
        <C t={t}>{"--[[ ─────────────────────────────────────"}</C>
      </Line>
      <Line t={t} hl>
        <C t={t}>{"     ROBLOX SYSTEMS  ·  SYS_004–005  ·  complete"}</C>
      </Line>
      <Line t={t}>
        <C t={t}>{"──────────────────────────────────────]]"}</C>
      </Line>
      <Line t={t}>
        <T t={t}>Projects</T>
        <P t={t}>.</P>
        <F
          t={t}
          onClick={() =>
            window.open(
              "https://github.com/wthm4n/Roblox-Studio",
              "_blank"
            )
          }
        >
          RobloxSystems
        </F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{"}</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>includes</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{"}</P>
      </Line>
      {[
        ["CombatSystem", "state machine · hitbox · combo chains · knockback"],
        ["GunSystem",    "raycasting · lag compensation · per-gun recoil curves"],
        ["GojoDomain",   "cinematic domain expansion · env overhaul · ability trigger"],
        ["NPCAISystem",  "personality-based NPC AI · pathfinding · squad behavior"],
        ["AIDirector",   "dynamic difficulty scaling · pacing manager · stress calc"],
      ].map(([name, desc]) => (
        <Line t={t} key={name}>
          <I /><I />
          <F t={t}>{name}</F>
          <P t={t}>:</P>
          <Sp />
          <S t={t}>{`"${desc}"`}</S>
          <P t={t}>,</P>
        </Line>
      ))}
      <Line t={t}>
        <I />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>tech</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{ "}</P>
        <S t={t}>"Luau"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"Roblox Studio"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"OOP"</S>
        <P t={t}>{" }"}</P>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>status</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"complete"</S>
      </Line>
      <Line t={t}>
        <P t={t}>{"}"}</P>
      </Line>
      <Line t={t} />

      {/* Return */}
      <Line t={t}>
        <K t={t}>return</K>
        <Sp />
        <T t={t}>Projects</T>
      </Line>
    </>
  );
}

// ── contact.lua ──────────────────────────────────────────────────────────────
export function CodeContact({ t }) {
  const link = (url) => () => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <>
      {/* ── File header ─────────────────────────────────────────────────── */}
      <Line t={t}>
        <C t={t}>-- contact.lua · all the ways to reach Aman</C>
      </Line>
      <Line t={t}>
        <C t={t}>-- edit the strings below, then ship it 🚀</C>
      </Line>

      <Line t={t} />

      {/* ── Table declaration ───────────────────────────────────────────── */}
      <Line t={t}>
        <K t={t}>local</K>
        <Sp />
        <T t={t}>Contact</T>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{}"}</P>
      </Line>

      <Line t={t} />

      {/* ── Direct contact fields ────────────────────────────────────────── */}
      <Line t={t} hl>
        <T t={t}>Contact</T>
        <P t={t}>.</P>
        <F
          t={t}
          onClick={link("mailto:noenoeke11@gmail.com")}
          title="Send an email"
        >
          email
        </F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"noenoeke11@gmail.com"</S>
        <Sp />
        <C t={t}>-- primary inbox, replies within 24 h</C>
      </Line>

      <Line t={t}>
        <T t={t}>Contact</T>
        <P t={t}>.</P>
        <F t={t} onClick={link("https://tfm4n.me")} title="Open site">
          site
        </F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"tfm4n.me"</S>
        <Sp />
        <C t={t}>-- portfolio & links</C>
      </Line>

      <Line t={t}>
        <T t={t}>Contact</T>
        <P t={t}>.</P>
        <F
          t={t}
          onClick={link("https://github.com/wthm4n")}
          title="Open GitHub profile"
        >
          github
        </F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"github.com/wthm4n"</S>
        <Sp />
        <C t={t}>-- source code & open-source work</C>
      </Line>

      <Line t={t}>
        <T t={t}>Contact</T>
        <P t={t}>.</P>
        <F t={t} title="Find on Discord">
          discord
        </F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"tfm4n"</S>
        <Sp />
        <C t={t}>-- fastest response, ping any time</C>
      </Line>

      <Line t={t} />

      {/* ── Availability table ───────────────────────────────────────────── */}
      <Line t={t}>
        <T t={t}>Contact</T>
        <P t={t}>.</P>
        <F t={t}>open_to</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{"}</P>
      </Line>

      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"AI engineering roles"</S>
        <P t={t}>,</P>
        <Sp />
        <C t={t}>-- my main focus now</C>
      </Line>

      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"Roblox game systems"</S>
        <P t={t}>,</P>
        <Sp />
        <C t={t}>-- datastores, replication, economy</C>
      </Line>

      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"Gun / combat commissions"</S>
        <P t={t}>,</P>
        <Sp />
        <C t={t}>-- projectile, hitbox, animation rigs</C>
      </Line>

      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"Full game dev collabs"</S>
        <P t={t}>,</P>
        <Sp />
        <C t={t}>-- long-term team or rev-share welcome</C>
      </Line>

      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"Web projects (React / TS)"</S>
        <P t={t}>,</P>
        <Sp />
        <C t={t}>-- dashboards, tools, portfolio sites</C>
      </Line>

      <Line t={t}>
        <P t={t}>{"}"}</P>
      </Line>

      <Line t={t} />

      {/* ── HireMe function ─────────────────────────────────────────────── */}
      <Line t={t}>
        <K t={t}>function</K>
        <Sp />
        <T t={t}>Contact</T>
        <P t={t}>:</P>
        <F t={t}>HireMe</F>
        <P t={t}>(</P>
        <F t={t}>project</F>
        <P t={t}>)</P>
      </Line>

      <Line t={t}>
        <I depth={1} t={t} />
        <K t={t}>if</K>
        <Sp />
        <K t={t}>not</K>
        <Sp />
        <F t={t}>project</F>
        <Sp />
        <K t={t}>then</K>
      </Line>

      <Line t={t}>
        <I depth={2} t={t} />
        <K t={t}>return</K>
        <Sp />
        <S t={t}>"dm me anything — I'll respond"</S>
      </Line>

      <Line t={t}>
        <I depth={1} t={t} />
        <K t={t}>end</K>
      </Line>

      <Line t={t}>
        <I depth={1} t={t} />
        <K t={t}>return</K>
        <Sp />
        <S t={t}>"let's build it 🔥"</S>
      </Line>

      <Line t={t}>
        <K t={t}>end</K>
      </Line>

      <Line t={t} />

      {/* ── Module export ───────────────────────────────────────────────── */}
      <Line t={t}>
        <K t={t}>return</K>
        <Sp />
        <T t={t}>Contact</T>
      </Line>
    </>
  );
}

// ── package.json ─────────────────────────────────────────────────────────────
// Angle: TECHNICAL SPEC. Hard skills, deps, config.
// Now correctly reflects Samita as the main project.

export function CodePkg({ t }) {
  const link = (url) => () => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <>
      <Line t={t}>
        <P t={t}>{"{"}</P>
      </Line>

      {/* ── Identity ────────────────────────────────────────────────────────── */}
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"name"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"aman-koushal"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"version"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"20.0.0"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"license"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"MIT"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"author"</S>
        <P t={t}>:</P>
        <Sp />
        <S
          t={t}
          onClick={link("mailto:noenoeke11@gmail.com")}
          title="Send email"
        >
          "Aman Koushal &lt;noenoeke11@gmail.com&gt;"
        </S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"homepage"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t} onClick={link("https://tfm4n.me")} title="Open site">
          "https://tfm4n.me"
        </S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"repository"</S>
        <P t={t}>:</P>
        <Sp />
        <S
          t={t}
          onClick={link("https://github.com/wthm4n")}
          title="Open GitHub"
        >
          "https://github.com/wthm4n"
        </S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"description"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"AI engineer · game dev · fullstack · self-taught · delhi"</S>
        <P t={t}>,</P>
      </Line>

      <Line t={t} />

      {/* ── keywords ────────────────────────────────────────────────────────── */}
      <Line t={t} hl>
        <I depth={1} t={t} />
        <S t={t}>"keywords"</S>
        <P t={t}>:</P>
        <Sp />
        <P t={t}>[</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"ai-engineering"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"local-llm"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"rag"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"voice-ai"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"game-dev"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"lua"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"roblox"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"fullstack"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"open-to-collab"</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <P t={t}>],</P>
      </Line>

      <Line t={t} />

      {/* ── dependencies ────────────────────────────────────────────────────── */}
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"dependencies"</S>
        <P t={t}>:</P>
        <Sp />
        <P t={t}>{"{"}</P>
        <Sp />
        <C t={t}>// ships with every build</C>
      </Line>
      {[
        ["python",     "*",       "primary — Samita, AI systems"],
        ["lua",        "*",       "roblox, executors, game systems"],
        ["javascript", "*",       "bots, web, tooling"],
        ["typescript", "^5.0.0",  ""],
        ["html",       "*",       ""],
        ["css",        "*",       ""],
      ].map(([name, ver, note]) => (
        <Line t={t} key={name}>
          <I depth={2} t={t} />
          <S t={t}>{`"${name}"`}</S>
          <P t={t}>:</P>
          <Sp />
          <S t={t}>{`"${ver}"`}</S>
          <P t={t}>,</P>
          {note && (
            <>
              <Sp />
              <C t={t}>{`// ${note}`}</C>
            </>
          )}
        </Line>
      ))}
      <Line t={t}>
        <I depth={1} t={t} />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>

      <Line t={t} />

      {/* ── peerDependencies ────────────────────────────────────────────────── */}
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"peerDependencies"</S>
        <P t={t}>:</P>
        <Sp />
        <P t={t}>{"{"}</P>
        <Sp />
        <C t={t}>// plug me into your stack</C>
      </Line>
      {[
        ["ollama",       "*"],
        ["chromadb",     "*"],
        ["react",        "^18.0.0"],
        ["node",         "^18"],
        ["discord.js",   "^14.0.0"],
        ["mongodb",      "*"],
        ["python",       "^3.12"],
      ].map(([name, ver]) => (
        <Line t={t} key={name}>
          <I depth={2} t={t} />
          <S t={t}>{`"${name}"`}</S>
          <P t={t}>:</P>
          <Sp />
          <S t={t}>{`"${ver}"`}</S>
          <P t={t}>,</P>
        </Line>
      ))}
      <Line t={t}>
        <I depth={1} t={t} />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>

      <Line t={t} />

      {/* ── scripts ─────────────────────────────────────────────────────────── */}
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"scripts"</S>
        <P t={t}>:</P>
        <Sp />
        <P t={t}>{"{"}</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"hire"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"mailto:noenoeke11@gmail.com"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"collab"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"discord: tfm4n"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"visit"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"open https://tfm4n.me"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"build"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"ship clean code, on deadline"</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>

      <Line t={t} />

      {/* ── config ──────────────────────────────────────────────────────────── */}
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"config"</S>
        <P t={t}>:</P>
        <Sp />
        <P t={t}>{"{"}</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"timezone"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"Asia/Kolkata"</S>
        <P t={t}>,</P>
        <Sp />
        <C t={t}>// IST — UTC+5:30</C>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"response_time"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"&lt;24h"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"open_to"</S>
        <P t={t}>:</P>
        <Sp />
        <P t={t}>[</P>
        <S t={t}>"ai-roles"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"commissions"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"collab"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"full-time"</S>
        <P t={t}>]</P>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"studying"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"B.Tech CSE AI/ML · KCC ITM Noida"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"goal"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"build AI that actually knows you"</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <P t={t}>{"}"}</P>
      </Line>

      <Line t={t}>
        <P t={t}>{"}"}</P>
      </Line>
    </>
  );
}

// ── README.md ─────────────────────────────────────────────────────────────────
// Angle: PROJECT SHOWCASE. Samita first and large. Everything else secondary.

export function CodeReadme({ t }) {
  const link = (url) => window.open(url, "_blank", "noopener,noreferrer");

  const styles = {
    root: {
      padding: "24px 28px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      color: t.fg,
      fontSize: "13.5px",
      lineHeight: 1.6,
      maxWidth: "100%",
      overflowY: "auto",
    },
    banner: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 16,
    },
    avatar: {
      width: 54,
      height: 54,
      borderRadius: "50%",
      background: `linear-gradient(135deg, ${t.func}, ${t.type})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 24,
      flexShrink: 0,
      boxShadow: `0 0 0 2px ${t.func}44`,
    },
    h1: {
      margin: 0,
      fontSize: 20,
      fontWeight: 700,
      color: t.type,
      letterSpacing: "-0.3px",
    },
    subtitle: { margin: "3px 0 0", fontSize: 12, color: t.comment },
    badges: { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 },
    badge: (bg, fg) => ({
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: "3px 10px",
      borderRadius: 20,
      fontSize: 11,
      fontWeight: 600,
      background: bg,
      color: fg,
      letterSpacing: "0.02em",
    }),
    hr: {
      border: "none",
      borderTop: `1px solid ${t.comment}22`,
      margin: "16px 0",
    },
    h2: {
      fontSize: 13,
      fontWeight: 700,
      color: t.fg2 ?? t.type,
      margin: "18px 0 10px",
      paddingBottom: 5,
      borderBottom: `1px solid ${t.comment}22`,
      display: "flex",
      alignItems: "center",
      gap: 7,
      letterSpacing: "0.01em",
    },
    p: { margin: "0 0 10px", color: t.fg, fontSize: 12.5, lineHeight: 1.65 },
    // ── Flagship card ─────────────────────────────────────────────────────
    flagshipCard: {
      padding: "16px 18px",
      borderRadius: 10,
      background: `${t.func}0d`,
      border: `1px solid ${t.func}33`,
      borderLeft: `3px solid ${t.func}`,
      marginBottom: 14,
      cursor: "pointer",
      transition: "border-color 0.15s, background 0.15s",
    },
    flagshipTitle: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 6,
    },
    flagshipName: {
      fontWeight: 800,
      color: t.func,
      fontSize: 15,
      fontFamily: "monospace",
      letterSpacing: "-0.3px",
    },
    flagshipBadge: {
      fontSize: 10,
      fontWeight: 700,
      background: `${t.func}22`,
      color: t.func,
      padding: "2px 8px",
      borderRadius: 12,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
    flagshipDesc: {
      fontSize: 12.5,
      color: t.fg,
      lineHeight: 1.6,
      marginBottom: 10,
    },
    subsystemGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
      gap: 5,
      marginBottom: 10,
    },
    subsystem: (color) => ({
      fontSize: 11,
      padding: "4px 8px",
      borderRadius: 5,
      background: `${color}12`,
      border: `1px solid ${color}28`,
      color: color,
      fontFamily: "monospace",
    }),
    // ── Regular project card ──
    card: {
      padding: "10px 13px",
      borderRadius: 8,
      background: `${t.comment}09`,
      border: `1px solid ${t.comment}1a`,
      marginBottom: 8,
      cursor: "pointer",
      transition: "border-color 0.15s, background 0.15s",
    },
    cardTop: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 8,
    },
    cardName: {
      fontWeight: 700,
      color: t.func,
      fontSize: 13,
      fontFamily: "monospace",
    },
    cardDesc: { fontSize: 12, color: t.fg, marginTop: 3, lineHeight: 1.5 },
    cardMeta: { fontSize: 11, color: t.comment, marginTop: 4 },
    statusDot: (done) => ({
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: done ? t.string : t.number,
      flexShrink: 0,
      marginTop: 4,
      boxShadow: done ? `0 0 4px ${t.string}66` : `0 0 4px ${t.number}66`,
    }),
    tag: (color) => ({
      display: "inline-block",
      fontSize: 10,
      padding: "1px 7px",
      borderRadius: 10,
      background: `${color}18`,
      color: color,
      marginRight: 4,
      marginTop: 5,
      fontFamily: "monospace",
    }),
    contactRow: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "6px 0",
      borderBottom: `1px solid ${t.comment}11`,
      cursor: "pointer",
      transition: "opacity 0.15s",
    },
    contactIcon: { fontSize: 14, flexShrink: 0, width: 20, textAlign: "center" },
    contactLabel: { fontSize: 11.5, color: t.comment, width: 60, flexShrink: 0 },
    contactValue: {
      color: t.func,
      fontFamily: "monospace",
      fontSize: 12,
      textDecoration: "underline",
      textDecorationStyle: "dotted",
      textDecorationColor: `${t.func}66`,
    },
    callout: {
      marginTop: 18,
      padding: "11px 15px",
      borderRadius: 8,
      background: `${t.func}10`,
      border: `1px solid ${t.func}28`,
      borderLeft: `3px solid ${t.func}`,
      fontSize: 12.5,
      color: t.fg,
      display: "flex",
      alignItems: "center",
      gap: 10,
      lineHeight: 1.5,
    },
  };

  const samitaSubsystems = [
    { label: "agent + planner", color: t.func },
    { label: "vector memory (RAG)", color: t.type },
    { label: "voice + speaker verify", color: t.keyword },
    { label: "local LLM (Ollama)", color: t.string },
    { label: "personality layer", color: t.number },
    { label: "web search", color: t.func },
    { label: "reminder scheduler", color: t.type },
    { label: "terminal UI", color: t.comment },
  ];

  const projects = [
    {
      name: "Simux",
      desc: "Online judge platform. React frontend, Node API, isolated Docker worker, Python judge. Submit code — get a verdict.",
      lang: "React · Node · Docker · Python",
      url: "https://github.com/wthm4n/simux",
      tags: [
        { label: "docker", color: t.func },
        { label: "queue", color: t.type },
        { label: "judge", color: t.keyword },
        { label: "fullstack", color: t.string },
      ],
      done: true,
    },
    {
      name: "Amna V5",
      desc: "Fifth version of a Discord bot platform. Moderation, music, leveling, social. Full OOP, MongoDB persistence.",
      lang: "JavaScript · Node · MongoDB",
      url: "https://github.com/wthm4n/amna-v5",
      tags: [
        { label: "discord.js", color: t.type },
        { label: "OOP", color: t.func },
        { label: "mongodb", color: t.keyword },
      ],
      done: true,
    },
    {
      name: "Roblox Systems",
      desc: "Combat system, gun system, NPC AI director, domain expansion — all OOP, all in Luau. Moon Animator rigs, custom VFX.",
      lang: "Lua · Roblox Studio",
      url: "https://github.com/wthm4n/Roblox-Studio",
      tags: [
        { label: "luau", color: t.keyword },
        { label: "state machine", color: t.func },
        { label: "raycasting", color: t.type },
        { label: "OOP", color: t.string },
      ],
      done: true,
    },
  ];

  const contacts = [
    {
      icon: "📧",
      label: "Email",
      value: "noenoeke11@gmail.com",
      url: "mailto:noenoeke11@gmail.com",
    },
    { icon: "🌐", label: "Site", value: "tfm4n.me", url: "https://tfm4n.me" },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/wthm4n",
      url: "https://github.com/wthm4n",
    },
    { icon: "💬", label: "Discord", value: "tfm4n", url: null },
  ];

  return (
    <div style={styles.root}>
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div style={styles.banner}>
        <div style={styles.avatar}>🤖</div>
        <div>
          <h1 style={styles.h1}>wthm4n / aman-koushal</h1>
          <p style={styles.subtitle}>
            AI engineer · game dev · fullstack · Delhi 🇮🇳 · tfm4n.me
          </p>
        </div>
      </div>

      {/* ── Status badges ───────────────────────────────────────────────────── */}
      <div style={styles.badges}>
        <span style={styles.badge(`${t.string}22`, t.string)}>
          ✅ open to work
        </span>
        <span style={styles.badge(`${t.func}22`, t.func)}>🤖 AI engineer</span>
        <span style={styles.badge(`${t.keyword}22`, t.keyword)}>🎮 game dev</span>
        <span style={styles.badge(`${t.type}22`, t.type)}>🌐 fullstack</span>
        <span style={styles.badge(`${t.number}22`, t.number)}>
          🎓 B.Tech CSE AI/ML
        </span>
        <span style={styles.badge(`${t.comment}22`, t.comment)}>
          📍 Delhi, IN
        </span>
      </div>

      <hr style={styles.hr} />

      <h2 style={styles.h2}>⚡ What I build</h2>
      <p style={styles.p}>
        Currently deep in AI engineering — building Samita, a local AI assistant
        with persistent memory, voice interaction, and autonomous task execution.
        Also: game systems, Discord bots, fullstack web tools. Self-taught,
        commission-funded, doing a B.Tech I mostly use as wifi.
      </p>

      <hr style={styles.hr} />

      {/* ── ⭐ SAMITA FLAGSHIP BLOCK ─────────────────────────────────────────── */}
      <h2 style={styles.h2}>⭐ Flagship — Samita AI</h2>

      <div
        style={styles.flagshipCard}
        onClick={() => link("https://github.com/wthm4n/samita")}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${t.func}66`;
          e.currentTarget.style.background = `${t.func}15`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = `${t.func}33`;
          e.currentTarget.style.background = `${t.func}0d`;
        }}
      >
        <div style={styles.flagshipTitle}>
          <span style={styles.flagshipName}>Samita</span>
          <span style={styles.flagshipBadge}>active</span>
        </div>

        <p style={styles.flagshipDesc}>
          A personality-driven AI assistant designed to feel less like a chatbot
          and more like a real companion. Built around a local LLM with
          persistent memory, semantic recall, voice interaction, autonomous task
          execution, and intelligent request routing — fully self-hosted,
          runs locally via Ollama.
        </p>

        <div style={styles.subsystemGrid}>
          {samitaSubsystems.map(({ label, color }) => (
            <span key={label} style={styles.subsystem(color)}>
              {label}
            </span>
          ))}
        </div>

        <div style={{ fontSize: 11, color: t.comment, fontFamily: "monospace" }}>
          Python · Ollama · SQLite + ChromaDB · Whisper · Resemblyzer ·
          APScheduler · Textual TUI ·{" "}
          <span
            style={{
              color: t.func,
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}
          >
            github.com/wthm4n/samita
          </span>
        </div>
      </div>

      <hr style={styles.hr} />

      {/* ── Other Projects ───────────────────────────────────────────────────── */}
      <h2 style={styles.h2}>📦 Other Projects</h2>
      {projects.map(({ name, desc, lang, tags, done, url }) => (
        <div
          key={name}
          style={styles.card}
          onClick={() => link(url)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `${t.func}40`;
            e.currentTarget.style.background = `${t.func}08`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = `${t.comment}1a`;
            e.currentTarget.style.background = `${t.comment}09`;
          }}
        >
          <div style={styles.cardTop}>
            <div style={{ flex: 1 }}>
              <span style={styles.cardName}>{name}</span>
              <p style={{ ...styles.cardDesc, margin: "3px 0 0" }}>{desc}</p>
              <div>
                {tags.map(({ label, color }) => (
                  <span key={label} style={styles.tag(color)}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={styles.statusDot(done)}
              title={done ? "shipped" : "wip"}
            />
          </div>
          <div style={styles.cardMeta}>{lang}</div>
        </div>
      ))}

      <hr style={styles.hr} />

      {/* ── Contact ─────────────────────────────────────────────────────────── */}
      <h2 style={styles.h2}>📬 Find me</h2>
      {contacts.map(({ icon, label, value, url }) => (
        <div
          key={label}
          style={styles.contactRow}
          onClick={() => url && link(url)}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.65";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          <span style={styles.contactIcon}>{icon}</span>
          <span style={styles.contactLabel}>{label}</span>
          <span style={styles.contactValue}>{value}</span>
        </div>
      ))}

      {/* ── CTA callout ─────────────────────────────────────────────────────── */}
      <div style={styles.callout}>
        🔥
        <span>
          Open to AI engineering roles, commissions, collabs, rev-share, or
          full-time. DM on Discord or email — I respond fast.
        </span>
      </div>
    </div>
  );
}