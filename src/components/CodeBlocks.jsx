import { K, F, S, N, T, O, C, P, I, Line, Sp } from "./Tokens";

// ── about.lua ─────────────────────────────────────────────────────────────────
// Angle: WHO YOU ARE. Personal voice, story, funny/self-aware.
// No skill lists. No project names. Just Aman as a human.

export function CodeAbout({ t }) {
  return (
    <>
      {/* ── File header ────────────────────────────────────────────────────── */}
      <Line t={t}>
        <C t={t}>-- about.lua · the person behind the code</C>
      </Line>
      <Line t={t}>
        <C t={t}>-- warning: may contain strong opinions and dark coffee</C>
      </Line>

      <Line t={t} />

      {/* ── Module declaration ─────────────────────────────────────────────── */}
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

      {/* ── Identity — aligned = signs ─────────────────────────────────────── */}
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
        <S t={t}>"shipping code instead of attending lectures"</S>
      </Line>

      <Line t={t} />

      {/* ── Origin story as long string ────────────────────────────────────── */}
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
        <S t={t}>started building for fun. now it pays rent.</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>the dream is a banger game with a real team.</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>currently: still looking for that team.</S>
      </Line>
      <Line t={t}>
        <S t={t}>{`]]`}</S>
      </Line>

      <Line t={t} />

      {/* ── Personality ────────────────────────────────────────────────────── */}
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
        <F t={t}>seeking</F>
        <Sp n={6} />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"a team that wants to build something real"</S>
      </Line>

      <Line t={t} />

      {/* ── GetQuote function ──────────────────────────────────────────────── */}
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

      {/* ── Module export ──────────────────────────────────────────────────── */}
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
        <C t={t}>// skills.lua — full stack breakdown</C>
      </Line>
      <Line t={t} />

      {/* Type alias */}
      <Line t={t}>
        <K t={t}>type</K>
        <Sp />
        <T t={t}>Level</T>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S t={t}>"expert"</S>
        <Sp />
        <O t={t}>|</O>
        <Sp />
        <S t={t}>"strong"</S>
        <Sp />
        <O t={t}>|</O>
        <Sp />
        <S t={t}>"growing"</S>
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
        <F t={t}>level</F>
        <P t={t}>:</P>
        <Sp />
        <T t={t}>Level</T>
        <P t={t}>;</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>score</F>
        <P t={t}>:</P>
        <Sp />
        <T t={t}>number</T>
        <P t={t}>;</P>
      </Line>
      <Line t={t}>
        <P t={t}>{"}"}</P>
      </Line>
      <Line t={t} />

      {/* gameDevSkills array */}
      <Line t={t} hl>
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
      <Line t={t}>
        <I />
        <P t={t}>{"{ "}</P>
        <F t={t}>name</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"Luau / Roblox Studio"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>level</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"expert"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>score</F>
        <P t={t}>:</P>
        <Sp />
        <N t={t}>90</N>
        <P t={t}>{" },"}</P>
      </Line>
      <Line t={t}>
        <I />
        <P t={t}>{"{ "}</P>
        <F t={t}>name</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"Systems Architecture"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>level</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"strong"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>score</F>
        <P t={t}>:</P>
        <Sp />
        <N t={t}>82</N>
        <P t={t}>{" },"}</P>
      </Line>
      <Line t={t}>
        <I />
        <P t={t}>{"{ "}</P>
        <F t={t}>name</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"Networking / Remotes"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>level</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"strong"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>score</F>
        <P t={t}>:</P>
        <Sp />
        <N t={t}>78</N>
        <P t={t}>{" },"}</P>
      </Line>
      <Line t={t}>
        <I />
        <P t={t}>{"{ "}</P>
        <F t={t}>name</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"Advanced Lua"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>level</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"learning"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>score</F>
        <P t={t}>:</P>
        <Sp />
        <N t={t}>48</N>
        <P t={t}>{" },"}</P>
      </Line>
      <Line t={t}>
        <P t={t}>];</P>
      </Line>
      <Line t={t} />

      {/* webSkills array */}
      <Line t={t} hl>
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
      <Line t={t}>
        <I />
        <P t={t}>{"{ "}</P>
        <F t={t}>name</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"HTML / CSS / JS"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>level</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"strong"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>score</F>
        <P t={t}>:</P>
        <Sp />
        <N t={t}>86</N>
        <P t={t}>{" },"}</P>
      </Line>
      <Line t={t}>
        <I />
        <P t={t}>{"{ "}</P>
        <F t={t}>name</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"TypeScript"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>level</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"strong"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>score</F>
        <P t={t}>:</P>
        <Sp />
        <N t={t}>76</N>
        <P t={t}>{" },"}</P>
      </Line>
      <Line t={t}>
        <I />
        <P t={t}>{"{ "}</P>
        <F t={t}>name</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"Python"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>level</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"growing"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>score</F>
        <P t={t}>:</P>
        <Sp />
        <N t={t}>70</N>
        <P t={t}>{" },"}</P>
      </Line>
      <Line t={t}>
        <I />
        <P t={t}>{"{ "}</P>
        <F t={t}>name</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"React / React Native"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>level</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"growing"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>score</F>
        <P t={t}>:</P>
        <Sp />
        <N t={t}>68</N>
        <P t={t}>{" },"}</P>
      </Line>
      <Line t={t}>
        <I />
        <P t={t}>{"{ "}</P>
        <F t={t}>name</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"C"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>level</F>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"growing"</S>
        <P t={t}>,</P>
        <Sp />
        <F t={t}>score</F>
        <P t={t}>:</P>
        <Sp />
        <N t={t}>61</N>
        <P t={t}>{" },"}</P>
      </Line>
      <Line t={t}>
        <P t={t}>];</P>
      </Line>
      <Line t={t} />

      {/* Export */}
      <Line t={t}>
        <K t={t}>export default</K>
        <Sp />
        <P t={t}>{"{ "}</P>
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
export function CodeWork({ t }) {
  return (
    <>
      {/* File header */}
      <Line t={t}>
        <C t={t}>-- projects.lua — what I've shipped</C>
      </Line>
      <Line t={t}>
        <C t={t}>-- Platform: Roblox Studio + Web</C>
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

      {/* ── GUN SYSTEM ── */}
      <Line t={t}>
        <C t={t}>{"--[[ ─────────────────────────────────────"}</C>
      </Line>
      <Line t={t} hl>
        <C t={t}>{"     GUN SYSTEM  ·  SYS_001  ·  complete"}</C>
      </Line>
      <Line t={t}>
        <C t={t}>{"──────────────────────────────────────]]"}</C>
      </Line>
      <Line t={t}>
        <T t={t}>Projects</T>
        <P t={t}>.</P>
        <F
          t={t}
          onClick={() => window.open("https://github.com/aman", "_blank")}
        >
          GunSystem
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
        <I />
        <I />
        <S t={t}>Modular server-validated gun framework.</S>
      </Line>
      <Line t={t}>
        <I />
        <I />
        <S t={t}>Raycasting, recoil sim, ADS + hipfire,</S>
      </Line>
      <Line t={t}>
        <I />
        <I />
        <S t={t}>custom hit detection, fully networked.</S>
      </Line>
      <Line t={t}>
        <I />
        <S t={t}>]]</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>features</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{"}</P>
      </Line>
      <Line t={t}>
        <I />
        <I />
        <S t={t}>"Raycast + lag compensation"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <I />
        <S t={t}>"Server-authoritative damage"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <I />
        <S t={t}>"Per-gun recoil curves"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <I />
        <S t={t}>"ADS / hipfire spread"</S>
        <P t={t}>,</P>
      </Line>
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
        <S t={t}>"RemoteEvents"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"RaycastAPI"</S>
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
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>link</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S
          t={t}
          onClick={() => window.open("https://github.com/aman", "_blank")}
          title="View on GitHub"
        >
          "github.com/aman/gun-system"
        </S>
      </Line>
      <Line t={t}>
        <P t={t}>{"}"}</P>
      </Line>
      <Line t={t} />

      {/* ── COMBAT SYSTEM ── */}
      <Line t={t}>
        <C t={t}>{"--[[ ─────────────────────────────────────"}</C>
      </Line>
      <Line t={t} hl>
        <C t={t}>{"     COMBAT SYSTEM  ·  SYS_002  ·  complete"}</C>
      </Line>
      <Line t={t}>
        <C t={t}>{"──────────────────────────────────────]]"}</C>
      </Line>
      <Line t={t}>
        <T t={t}>Projects</T>
        <P t={t}>.</P>
        <F
          t={t}
          onClick={() => window.open("https://github.com/aman", "_blank")}
        >
          CombatSystem
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
        <I />
        <I />
        <S t={t}>Melee engine with combo chains,</S>
      </Line>
      <Line t={t}>
        <I />
        <I />
        <S t={t}>hitstun, state machine core,</S>
      </Line>
      <Line t={t}>
        <I />
        <I />
        <S t={t}>damage falloff + knockback physics.</S>
      </Line>
      <Line t={t}>
        <I />
        <S t={t}>]]</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>features</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{"}</P>
      </Line>
      <Line t={t}>
        <I />
        <I />
        <S t={t}>"Finite state machine"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <I />
        <S t={t}>"Combo window detection"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <I />
        <S t={t}>"Hitstun + knockback"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <I />
        <S t={t}>"Region3 hitbox system"</S>
        <P t={t}>,</P>
      </Line>
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
        <S t={t}>"AnimationTrack"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"BodyVelocity"</S>
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
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>link</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S
          t={t}
          onClick={() => window.open("https://github.com/aman", "_blank")}
          title="View on GitHub"
        >
          "github.com/aman/combat-system"
        </S>
      </Line>
      <Line t={t}>
        <P t={t}>{"}"}</P>
      </Line>
      <Line t={t} />

      {/* ── HOSPITAL MANAGEMENT SYSTEM ── */}
      <Line t={t}>
        <C t={t}>{"--[[ ─────────────────────────────────────"}</C>
      </Line>
      <Line t={t} hl>
        <C t={t}>{"     HMS  ·  SYS_003  ·  complete  ·  2024"}</C>
      </Line>
      <Line t={t}>
        <C t={t}>{"──────────────────────────────────────]]"}</C>
      </Line>
      <Line t={t}>
        <T t={t}>Projects</T>
        <P t={t}>.</P>
        <F
          t={t}
          onClick={() => window.open("https://github.com/aman", "_blank")}
        >
          HMS
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
        <I />
        <I />
        <S t={t}>Full production hospital management system.</S>
      </Line>
      <Line t={t}>
        <I />
        <I />
        <S t={t}>Patient records, appointments, billing,</S>
      </Line>
      <Line t={t}>
        <I />
        <I />
        <S t={t}>staff management — built solo in Python.</S>
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
        <S t={t}>"Python"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"SQLite"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"Tkinter"</S>
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
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I />
        <F t={t}>link</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <S
          t={t}
          onClick={() => window.open("https://github.com/aman", "_blank")}
          title="View on GitHub"
        >
          "github.com/aman/hms"
        </S>
      </Line>
      <Line t={t}>
        <P t={t}>{"}"}</P>
      </Line>
      <Line t={t} />

      {/* ── WIP ── */}
      <Line t={t}>
        <C t={t}>-- WIP ─────────────────────────────────</C>
      </Line>
      <Line t={t}>
        <K t={t}>local</K>
        <Sp />
        <F t={t}>wip</F>
        <Sp />
        <O t={t}>=</O>
        <Sp />
        <P t={t}>{"{ "}</P>
        <S t={t}>"Inventory"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"DataStore"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"UI Lib"</S>
        <P t={t}>{" }"}</P>
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
// Updated to use token component API correctly:
//   • All <Line> get t={t}
//   • Spacing via <Sp /> — no JSX whitespace hacks
//   • <I depth={n} t={t} /> for indent guides
//   • Clickable <F> tokens link out where appropriate
//   • Richer inline comments for human readability

export function CodeContact({ t }) {
  // ── link helper — opens URL in new tab ──────────────────────────────────
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

      {/* ── Direct contact fields (highlighted — "edit me") ─────────────── */}
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

      {/* if not project */}
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

      {/* happy path */}
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
// The "hiring manager 30-second scan" file.
// No story. No fluff. Just: here's exactly what you're getting.

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
        <S t={t}>"bugs"</S>
        <P t={t}>:</P>
        <Sp />
        <S
          t={t}
          onClick={link("mailto:noenoeke11@gmail.com")}
          title="Report or just say hi"
        >
          "noenoeke11@gmail.com"
        </S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"description"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"game dev · fullstack · self-taught · delhi"</S>
        <P t={t}>,</P>
      </Line>

      <Line t={t} />

      {/* ── keywords — recruiter / search scan ──────────────────────────────── */}
      <Line t={t} hl>
        <I depth={1} t={t} />
        <S t={t}>"keywords"</S>
        <P t={t}>:</P>
        <Sp />
        <P t={t}>[</P>
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
        <S t={t}>"discord-bot"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"fullstack"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"typescript"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"open-to-collab"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"commission-friendly"</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <P t={t}>],</P>
      </Line>

      <Line t={t} />

      {/* ── dependencies — core languages you always bring ──────────────────── */}
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"dependencies"</S>
        <P t={t}>:</P>
        <Sp />
        <P t={t}>{"{"}</P>
        <Sp />
        <C t={t}>// ships with every build</C>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"lua"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"*"</S>
        <P t={t}>,</P>
        <Sp />
        <C t={t}>// primary — roblox, executors, game systems</C>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"javascript"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"*"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"typescript"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"^5.0.0"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"html"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"*"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"css"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"*"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"scss"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"*"</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>

      <Line t={t} />

      {/* ── peerDependencies — ecosystem / frameworks ───────────────────────── */}
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"peerDependencies"</S>
        <P t={t}>:</P>
        <Sp />
        <P t={t}>{"{"}</P>
        <Sp />
        <C t={t}>// plug me into your stack</C>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"react"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"^18.0.0"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"node"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"^=18"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"express"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"^4.0.0"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"mongodb"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"*"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"discord.js"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"^14.0.0"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"python"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"^3.12"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"java"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"^21.0.0"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"c"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"*"</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>

      <Line t={t} />

      {/* ── devDependencies — things being learned / experimental ───────────── */}
      <Line t={t}>
        <I depth={1} t={t} />
        <S t={t}>"devDependencies"</S>
        <P t={t}>:</P>
        <Sp />
        <P t={t}>{"{"}</P>
        <Sp />
        <C t={t}>// in progress</C>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"advanced-lua-patterns"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"workspace:*"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"metatables-deep-dive"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"workspace:*"</S>
        <P t={t}>,</P>
      </Line>
      <Line t={t}>
        <I depth={2} t={t} />
        <S t={t}>"systems-design"</S>
        <P t={t}>:</P>
        <Sp />
        <S t={t}>"workspace:*"</S>
      </Line>
      <Line t={t}>
        <I depth={1} t={t} />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>

      <Line t={t} />

      {/* ── scripts — how to run me ──────────────────────────────────────────── */}
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

      {/* ── config — the truths that don't fit anywhere else ────────────────── */}
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
        <S t={t}>"commissions"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"collab"</S>
        <P t={t}>,</P>
        <Sp />
        <S t={t}>"rev-share"</S>
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
        <S t={t}>"ship a game worth playing with a team worth keeping"</S>
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
// Angle: PROJECT SHOWCASE. What you've built. Social proof. Links.
// No life story — that's about.lua. No raw deps — that's package.json.

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
    // ── Project card ──
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
      marginTop: 5,
      boxShadow: done ? `0 0 5px ${t.string}66` : `0 0 5px ${t.number}66`,
    }),
    tag: (color) => ({
      display: "inline-block",
      padding: "1px 7px",
      borderRadius: 4,
      background: `${color}18`,
      color: color,
      fontSize: 10,
      fontWeight: 600,
      marginRight: 4,
      marginTop: 5,
      letterSpacing: "0.03em",
      border: `1px solid ${color}28`,
    }),
    // ── Contact ──
    contactRow: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "7px 0",
      borderBottom: `1px solid ${t.comment}12`,
      fontSize: 12.5,
      cursor: "pointer",
      transition: "opacity 0.12s",
    },
    contactIcon: {
      fontSize: 14,
      width: 20,
      textAlign: "center",
      flexShrink: 0,
    },
    contactLabel: {
      color: t.comment,
      width: 60,
      fontSize: 10.5,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      flexShrink: 0,
    },
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

  const projects = [
    {
      name: "Nyxus",
      desc: "Manager library housing 7+ custom UI libs for Roblox executors and in-game interfaces. Full OOP architecture with a unified base — plug in any lib, same API.",
      lang: "Lua",
      url: "https://github.com/wthm4n/Nyxus",
      tags: [
        { label: "lua", color: t.keyword },
        { label: "OOP", color: t.func },
        { label: "roblox", color: t.type },
        { label: "library", color: t.string },
      ],
      done: true,
    },
    {
      name: "amna-v5",
      desc: "Full-featured Discord bot — moderation, music, fun, social commands. Built fully OOP in JavaScript with persistent datastore and a proper backend.",
      lang: "JavaScript",
      url: "https://github.com/wthm4n/amna-v5",
      tags: [
        { label: "discord.js", color: t.type },
        { label: "node", color: t.string },
        { label: "OOP", color: t.func },
        { label: "mongodb", color: t.keyword },
      ],
      done: true,
    },
    {
      name: "BillDashboard",
      desc: "Personal GST billing tool. Generates compliant bills via the official Government GST API. Clean HTML/CSS/JS frontend with a lightweight backend.",
      lang: "JS + Python",
      url: "https://github.com/wthm4n/BillDashboard",
      tags: [
        { label: "html/css", color: t.number },
        { label: "govt-api", color: t.type },
        { label: "billing", color: t.string },
      ],
      done: true,
    },
    {
      name: "MusicBot",
      desc: "Python Discord music bot with advanced search — play by name, URL, or anything. Queue management, controls, the works.",
      lang: "Python",
      url: "https://github.com/wthm4n/MusicBot",
      tags: [
        { label: "python", color: t.type },
        { label: "discord", color: t.func },
        { label: "ffmpeg", color: t.string },
      ],
      done: true,
    },
    {
      name: "DBS Mods",
      desc: "Mods for an open-source Discord bot framework — extended it to make bot creation even simpler. Shipped in both JS and TS.",
      lang: "JS / TS",
      url: "https://github.com/wthm4n/d",
      tags: [
        { label: "typescript", color: t.type },
        { label: "open-source", color: t.string },
        { label: "dx", color: t.func },
      ],
      done: true,
    },
    {
      name: "HMS",
      desc: "Hospital Management System in Python with MongoDB backend. Patient records, appointments, billing — full CRUD.",
      lang: "Python",
      url: "https://github.com/wthm4n/hms",
      tags: [
        { label: "python", color: t.type },
        { label: "mongodb", color: t.keyword },
        { label: "cli", color: t.comment },
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
        <div style={styles.avatar}>👾</div>
        <div>
          <h1 style={styles.h1}>wthm4n / aman-koushal</h1>
          <p style={styles.subtitle}>
            game dev · fullstack · Delhi 🇮🇳 · tfm4n.me
          </p>
        </div>
      </div>

      {/* ── Status badges ───────────────────────────────────────────────────── */}
      <div style={styles.badges}>
        <span style={styles.badge(`${t.string}22`, t.string)}>
          ✅ open to work
        </span>
        <span style={styles.badge(`${t.func}22`, t.func)}>🎮 game dev</span>
        <span style={styles.badge(`${t.type}22`, t.type)}>🌐 fullstack</span>
        <span style={styles.badge(`${t.number}22`, t.number)}>
          🎓 B.Tech CSE AI/ML
        </span>
        <span style={styles.badge(`${t.keyword}22`, t.keyword)}>
          📍 Delhi, IN
        </span>
      </div>

      <hr style={styles.hr} />

      {/* ── Pitch — short, no life story ────────────────────────────────────── */}
      <h2 style={styles.h2}>⚡ What I build</h2>
      <p style={styles.p}>
        Game systems, Discord bots, fullstack web tools — whatever needs
        building. Self-taught, commission-funded, currently doing a B.Tech I
        mostly use as wifi. Looking for a team to make something actually worth
        shipping.
      </p>

      <hr style={styles.hr} />

      {/* ── Projects ────────────────────────────────────────────────────────── */}
      <h2 style={styles.h2}>📦 Projects</h2>
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
          <div style={styles.cardMeta}>{lang} · {url.replace("https://", "")}</div>
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
          Open to commissions, collabs, rev-share, or full-time. DM on Discord
          or email — I respond fast.
        </span>
      </div>
    </div>
  );
}