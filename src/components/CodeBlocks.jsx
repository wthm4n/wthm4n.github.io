import { K, F, S, N, T, O, C, P, I, Line } from "./Tokens";

// ── about.lua ─────────────────────────────────────────────────────────────────
export function CodeAbout({ t }) {
  return (
    <>
      <Line>
        <C t={t}>-- about.lua</C>
      </Line>
      <Line>
        <C t={t}>-- @author : Aman</C>
      </Line>
      <Line>
        <C t={t}>-- @location : Delhi, India 🇮🇳</C>
      </Line>
      <Line>
        <C t={t}>-- @status : open_to_work = true</C>
      </Line>
      <Line />
      <Line>
        <K t={t}>local</K> <T t={t}>Aman</T> <O t={t}>=</O> <P t={t}>{"{}"}</P>
      </Line>
      <Line />
      <Line hl>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>name</F> <O t={t}>=</O> <S t={t}>"Aman"</S>
      </Line>
      <Line>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>location</F> <O t={t}>=</O> <S t={t}>"New Delhi, India 🇮🇳"</S>
      </Line>
      <Line>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>role</F> <O t={t}>=</O> <S t={t}>"Roblox Developer"</S>
      </Line>
      <Line>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>status</F> <O t={t}>=</O> <S t={t}>"open_to_work"</S>
      </Line>
      <Line>
        <T t={t}>Aman</T>
        <P t={t}>.</P>
        <F t={t}>engine</F> <O t={t}>=</O> <S t={t}>"Roblox Studio"</S>
      </Line>
      <Line />
      <Line>
        <K t={t}>function</K> <T t={t}>Aman</T>
        <P t={t}>:</P>
        <F t={t}>GetBio</F>
        <P t={t}>()</P>
      </Line>
      <Line>
        <I />
        <K t={t}>return</K> <P t={t}>{"{"}</P>
      </Line>
      <Line>
        <I />
        <I />
        <F t={t}>bio</F> <O t={t}>=</O> <S t={t}>[[</S>
      </Line>
      <Line>
        <I />
        <I />
        <I />
        <S t={t}>Self-taught dev from Delhi who got</S>
      </Line>
      <Line>
        <I />
        <I />
        <I />
        <S t={t}>hooked on Roblox and never stopped.</S>
      </Line>
      <Line>
        <I />
        <I />
        <I />
        <S t={t}>Luau is home. Also builds for web.</S>
      </Line>
      <Line>
        <I />
        <I />
        <I />
        <S t={t}>Currently learning Advanced Lua.</S>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>]]</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <F t={t}>learning</F> <O t={t}>=</O>{" "}
        <S t={t}>"Advanced Lua patterns"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <F t={t}>interests</F> <O t={t}>=</O> <P t={t}>{"{"}</P>
        <S t={t}>"game feel"</S>
        <P t={t}>,</P> <S t={t}>"systems"</S>
        <P t={t}>,</P> <S t={t}>"metatables"</S>
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <P t={t}>{"}"}</P>
      </Line>
      <Line>
        <K t={t}>end</K>
      </Line>
      <Line />
      <Line>
        <K t={t}>function</K> <T t={t}>Aman</T>
        <P t={t}>:</P>
        <F t={t}>GetStack</F>
        <P t={t}>()</P>
      </Line>
      <Line>
        <I />
        <K t={t}>return</K> <P t={t}>{"{"}</P>
      </Line>
      <Line>
        <I />
        <I />
        <F t={t}>primary</F> <O t={t}>=</O> <P t={t}>{"{"}</P>
        <S t={t}>"Luau"</S>
        <P t={t}>,</P> <S t={t}>"TypeScript"</S>
        <P t={t}>,</P> <S t={t}>"HTML/CSS/JS"</S>
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <F t={t}>secondary</F> <O t={t}>=</O> <P t={t}>{"{"}</P>
        <S t={t}>"Python"</S>
        <P t={t}>,</P> <S t={t}>"C"</S>
        <P t={t}>,</P> <S t={t}>"SCSS"</S>
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <F t={t}>frameworks</F> <O t={t}>=</O> <P t={t}>{"{"}</P>
        <S t={t}>"React"</S>
        <P t={t}>,</P> <S t={t}>"React Native"</S>
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <F t={t}>learning</F> <O t={t}>=</O> <P t={t}>{"{"}</P>
        <S t={t}>"Advanced Lua"</S>
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <P t={t}>{"}"}</P>
      </Line>
      <Line>
        <K t={t}>end</K>
      </Line>
      <Line />
      <Line>
        <K t={t}>return</K> <T t={t}>Aman</T>
      </Line>
    </>
  );
}

// ── skills.ts ────────────────────────────────────────────────────────────────
export function CodeSkills({ t }) {
  return (
    <>
      <Line>
        <C t={t}>// skills.ts — full stack breakdown</C>
      </Line>
      <Line />
      <Line>
        <K t={t}>type</K> <T t={t}>Level</T> <O t={t}>=</O>{" "}
        <S t={t}>"expert"</S> <O t={t}>|</O> <S t={t}>"strong"</S>{" "}
        <O t={t}>|</O> <S t={t}>"growing"</S> <O t={t}>|</O>{" "}
        <S t={t}>"learning"</S>
        <P t={t}>;</P>
      </Line>
      <Line />
      <Line>
        <K t={t}>interface</K> <T t={t}>Skill</T> <P t={t}>{"{"}</P>
      </Line>
      <Line>
        <I />
        <F t={t}>name</F>
        <P t={t}>:</P> <T t={t}>string</T>
        <P t={t}>;</P>
      </Line>
      <Line>
        <I />
        <F t={t}>level</F>
        <P t={t}>:</P> <T t={t}>Level</T>
        <P t={t}>;</P>
      </Line>
      <Line>
        <I />
        <F t={t}>score</F>
        <P t={t}>:</P> <T t={t}>number</T>
        <P t={t}>;</P>
      </Line>
      <Line>
        <P t={t}>{"}"}</P>
      </Line>
      <Line />
      <Line hl>
        <K t={t}>const</K> <F t={t}>gameDevSkills</F>
        <P t={t}>:</P> <T t={t}>Skill</T>
        <P t={t}>[]</P> <O t={t}>=</O> <P t={t}>[</P>
      </Line>
      <Line>
        <I />
        <P t={t}>{"{"}</P> <F t={t}>name</F>
        <P t={t}>:</P> <S t={t}>"Luau / Roblox Studio"</S>
        <P t={t}>,</P> <F t={t}>level</F>
        <P t={t}>:</P> <S t={t}>"expert"</S>
        <P t={t}>,</P> <F t={t}>score</F>
        <P t={t}>:</P> <N t={t}>90</N> <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <P t={t}>{"{"}</P> <F t={t}>name</F>
        <P t={t}>:</P> <S t={t}>"Systems Architecture"</S>
        <P t={t}>,</P> <F t={t}>level</F>
        <P t={t}>:</P> <S t={t}>"strong"</S>
        <P t={t}>,</P> <F t={t}>score</F>
        <P t={t}>:</P> <N t={t}>82</N> <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <P t={t}>{"{"}</P> <F t={t}>name</F>
        <P t={t}>:</P> <S t={t}>"Networking / Remotes"</S>
        <P t={t}>,</P> <F t={t}>level</F>
        <P t={t}>:</P> <S t={t}>"strong"</S>
        <P t={t}>,</P> <F t={t}>score</F>
        <P t={t}>:</P> <N t={t}>78</N> <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <P t={t}>{"{"}</P> <F t={t}>name</F>
        <P t={t}>:</P> <S t={t}>"Advanced Lua"</S>
        <P t={t}>,</P> <F t={t}>level</F>
        <P t={t}>:</P> <S t={t}>"learning"</S>
        <P t={t}>,</P> <F t={t}>score</F>
        <P t={t}>:</P> <N t={t}>48</N> <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <P t={t}>];</P>
      </Line>
      <Line />
      <Line hl>
        <K t={t}>const</K> <F t={t}>webSkills</F>
        <P t={t}>:</P> <T t={t}>Skill</T>
        <P t={t}>[]</P> <O t={t}>=</O> <P t={t}>[</P>
      </Line>
      <Line>
        <I />
        <P t={t}>{"{"}</P> <F t={t}>name</F>
        <P t={t}>:</P> <S t={t}>"HTML / CSS / JS"</S>
        <P t={t}>,</P> <F t={t}>level</F>
        <P t={t}>:</P> <S t={t}>"strong"</S>
        <P t={t}>,</P> <F t={t}>score</F>
        <P t={t}>:</P> <N t={t}>86</N> <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <P t={t}>{"{"}</P> <F t={t}>name</F>
        <P t={t}>:</P> <S t={t}>"TypeScript"</S>
        <P t={t}>,</P> <F t={t}>level</F>
        <P t={t}>:</P> <S t={t}>"strong"</S>
        <P t={t}>,</P> <F t={t}>score</F>
        <P t={t}>:</P> <N t={t}>76</N> <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <P t={t}>{"{"}</P> <F t={t}>name</F>
        <P t={t}>:</P> <S t={t}>"Python"</S>
        <P t={t}>,</P> <F t={t}>level</F>
        <P t={t}>:</P> <S t={t}>"growing"</S>
        <P t={t}>,</P> <F t={t}>score</F>
        <P t={t}>:</P> <N t={t}>70</N> <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <P t={t}>{"{"}</P> <F t={t}>name</F>
        <P t={t}>:</P> <S t={t}>"React / React Native"</S>
        <P t={t}>,</P> <F t={t}>level</F>
        <P t={t}>:</P> <S t={t}>"growing"</S>
        <P t={t}>,</P> <F t={t}>score</F>
        <P t={t}>:</P> <N t={t}>68</N> <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <P t={t}>{"{"}</P> <F t={t}>name</F>
        <P t={t}>:</P> <S t={t}>"C"</S>
        <P t={t}>,</P> <F t={t}>level</F>
        <P t={t}>:</P> <S t={t}>"growing"</S>
        <P t={t}>,</P> <F t={t}>score</F>
        <P t={t}>:</P> <N t={t}>61</N> <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <P t={t}>];</P>
      </Line>
      <Line />
      <Line>
        <K t={t}>export default</K> <P t={t}>{"{"}</P>{" "}
        <F t={t}>gameDevSkills</F>
        <P t={t}>,</P> <F t={t}>webSkills</F> <P t={t}>{"}"}</P>
        <P t={t}>;</P>
      </Line>
    </>
  );
}

// ── projects.lua ─────────────────────────────────────────────────────────────
export function CodeWork({ t }) {
  return (
    <>
      <Line>
        <C t={t}>-- projects.lua — what I've shipped</C>
      </Line>
      <Line>
        <C t={t}>-- Platform: Roblox Studio</C>
      </Line>
      <Line />
      <Line>
        <K t={t}>local</K> <T t={t}>Projects</T> <O t={t}>=</O>{" "}
        <P t={t}>{"{}"}</P>
      </Line>
      <Line />
      <Line>
        <C t={t}>{"--[[ ─────────────────────────────────"}</C>
      </Line>
      <Line hl>
        <C t={t}>{" GUN SYSTEM SYS_001"}</C>
      </Line>
      <Line>
        <C t={t}>{"──────────────────────────────────]]"}</C>
      </Line>
      <Line>
        <T t={t}>Projects</T>
        <P t={t}>.</P>
        <F t={t}>GunSystem</F> <O t={t}>=</O> <P t={t}>{"{"}</P>
      </Line>
      <Line>
        <I />
        <F t={t}>description</F> <O t={t}>=</O> <S t={t}>[[</S>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>Modular server-validated gun framework.</S>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>Raycasting, recoil sim, ADS + hipfire,</S>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>custom hit detection, fully networked.</S>
      </Line>
      <Line>
        <I />
        <S t={t}>]]</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <F t={t}>features</F> <O t={t}>=</O> <P t={t}>{"{"}</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"Raycast + lag compensation"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"Server-authoritative damage"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"Per-gun recoil curves"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"ADS / hipfire spread"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <F t={t}>tech</F> <O t={t}>=</O> <P t={t}>{"{"}</P>
        <S t={t}>"Luau"</S>
        <P t={t}>,</P> <S t={t}>"RemoteEvents"</S>
        <P t={t}>,</P> <S t={t}>"RaycastAPI"</S>
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <F t={t}>status</F> <O t={t}>=</O> <S t={t}>"complete"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <P t={t}>{"}"}</P>
      </Line>
      <Line />
      <Line>
        <C t={t}>{"--[[ ─────────────────────────────────"}</C>
      </Line>
      <Line hl>
        <C t={t}>{" COMBAT SYSTEM SYS_002"}</C>
      </Line>
      <Line>
        <C t={t}>{"──────────────────────────────────]]"}</C>
      </Line>
      <Line>
        <T t={t}>Projects</T>
        <P t={t}>.</P>
        <F t={t}>CombatSystem</F> <O t={t}>=</O> <P t={t}>{"{"}</P>
      </Line>
      <Line>
        <I />
        <F t={t}>description</F> <O t={t}>=</O> <S t={t}>[[</S>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>Melee engine with combo chains,</S>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>hitstun, state machine core,</S>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>damage falloff + knockback physics.</S>
      </Line>
      <Line>
        <I />
        <S t={t}>]]</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <F t={t}>features</F> <O t={t}>=</O> <P t={t}>{"{"}</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"Finite state machine"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"Combo window detection"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"Hitstun + knockback"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"Region3 hitbox system"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <F t={t}>tech</F> <O t={t}>=</O> <P t={t}>{"{"}</P>
        <S t={t}>"Luau"</S>
        <P t={t}>,</P> <S t={t}>"AnimationTrack"</S>
        <P t={t}>,</P> <S t={t}>"BodyVelocity"</S>
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <F t={t}>status</F> <O t={t}>=</O> <S t={t}>"complete"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <P t={t}>{"}"}</P>
      </Line>
      <Line />
      <Line>
        <C t={t}>-- WIP ──────────────────────────────</C>
      </Line>
      <Line>
        <K t={t}>local</K> <F t={t}>wip</F> <O t={t}>=</O> <P t={t}>{"{"}</P>
        <S t={t}>"Inventory"</S>
        <P t={t}>,</P> <S t={t}>"DataStore"</S>
        <P t={t}>,</P> <S t={t}>"UI Lib"</S>
        <P t={t}>{"}"}</P>
      </Line>
      <Line />
      <Line>
        <K t={t}>return</K> <T t={t}>Projects</T>
      </Line>
    </>
  );
}

// ── contact.lua ──────────────────────────────────────────────────────────────
export function CodeContact({ t }) {
  return (
    <>
      <Line>
        <C t={t}>-- contact.lua — reach out</C>
      </Line>
      <Line>
        <C t={t}>-- update the values below 👇</C>
      </Line>
      <Line />
      <Line>
        <K t={t}>local</K> <T t={t}>Contact</T> <O t={t}>=</O>{" "}
        <P t={t}>{"{}"}</P>
      </Line>
      <Line />
      <Line hl>
        <T t={t}>Contact</T>
        <P t={t}>.</P>
        <F t={t}>email</F> <O t={t}>=</O> <S t={t}>"aman@example.com"</S>{" "}
        <C t={t}>-- ← your email</C>
      </Line>
      <Line>
        <T t={t}>Contact</T>
        <P t={t}>.</P>
        <F t={t}>github</F> <O t={t}>=</O> <S t={t}>"github.com/aman"</S>{" "}
        <C t={t}>-- ← your github</C>
      </Line>
      <Line>
        <T t={t}>Contact</T>
        <P t={t}>.</P>
        <F t={t}>discord</F> <O t={t}>=</O> <S t={t}>"aman#0000"</S>{" "}
        <C t={t}>-- ← your discord</C>
      </Line>
      <Line>
        <T t={t}>Contact</T>
        <P t={t}>.</P>
        <F t={t}>twitter</F> <O t={t}>=</O> <S t={t}>"@aman"</S>{" "}
        <C t={t}>-- ← your twitter</C>
      </Line>
      <Line />
      <Line>
        <T t={t}>Contact</T>
        <P t={t}>.</P>
        <F t={t}>open_to</F> <O t={t}>=</O> <P t={t}>{"{"}</P>
      </Line>
      <Line>
        <I />
        <S t={t}>"Roblox game systems"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <S t={t}>"Gun / combat commissions"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <S t={t}>"Full game dev collabs"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <S t={t}>"Web projects (React / TS)"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <P t={t}>{"}"}</P>
      </Line>
      <Line />
      <Line>
        <K t={t}>function</K> <T t={t}>Contact</T>
        <P t={t}>:</P>
        <F t={t}>HireMe</F>
        <P t={t}>(</P>
        <F t={t}>project</F>
        <P t={t}>)</P>
      </Line>
      <Line>
        <I />
        <K t={t}>if</K> <K t={t}>not</K> <F t={t}>project</F> <K t={t}>then</K>
      </Line>
      <Line>
        <I />
        <I />
        <K t={t}>return</K> <S t={t}>"dm me anything, i'll respond"</S>
      </Line>
      <Line>
        <I />
        <K t={t}>end</K>
      </Line>
      <Line>
        <I />
        <K t={t}>return</K> <S t={t}>"let's build it 🔥"</S>
      </Line>
      <Line>
        <K t={t}>end</K>
      </Line>
      <Line />
      <Line>
        <K t={t}>return</K> <T t={t}>Contact</T>
      </Line>
    </>
  );
}

// ── package.json ─────────────────────────────────────────────────────────────
export function CodePkg({ t }) {
  return (
    <>
      <Line>
        <P t={t}>{"{"}</P>
      </Line>
      <Line>
        <I />
        <S t={t}>"name"</S>
        <P t={t}>:</P> <S t={t}>"aman-portfolio"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <S t={t}>"version"</S>
        <P t={t}>:</P> <S t={t}>"2025.2.0"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <S t={t}>"author"</S>
        <P t={t}>:</P> <S t={t}>"Aman &lt;Delhi, India&gt;"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <S t={t}>"description"</S>
        <P t={t}>:</P> <S t={t}>"Roblox dev. Gun systems. Good code."</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <S t={t}>"license"</S>
        <P t={t}>:</P> <S t={t}>"open-to-work"</S>
        <P t={t}>,</P>
      </Line>
      <Line />
      <Line hl>
        <I />
        <S t={t}>"skills"</S>
        <P t={t}>:</P> <P t={t}>[</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"luau"</S>
        <P t={t}>,</P> <S t={t}>"typescript"</S>
        <P t={t}>,</P> <S t={t}>"javascript"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"html"</S>
        <P t={t}>,</P> <S t={t}>"css"</S>
        <P t={t}>,</P> <S t={t}>"scss"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"python"</S>
        <P t={t}>,</P> <S t={t}>"c"</S>
        <P t={t}>,</P> <S t={t}>"react"</S>
        <P t={t}>,</P> <S t={t}>"react-native"</S>
      </Line>
      <Line>
        <I />
        <P t={t}>],</P>
      </Line>
      <Line />
      <Line>
        <I />
        <S t={t}>"engines"</S>
        <P t={t}>:</P> <P t={t}>{"{"}</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"roblox-studio"</S>
        <P t={t}>:</P> <S t={t}>"latest"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"luau"</S>
        <P t={t}>:</P> <S t={t}>"^0.6"</S>
      </Line>
      <Line>
        <I />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line />
      <Line>
        <I />
        <S t={t}>"dependencies"</S>
        <P t={t}>:</P> <P t={t}>{"{"}</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"roblox-ts"</S>
        <P t={t}>:</P> <S t={t}>"^2.3.0"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"@rbxts/net"</S>
        <P t={t}>:</P> <S t={t}>"^3.0.0"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"tailwindcss"</S>
        <P t={t}>:</P> <S t={t}>"^3.4.0"</S>
      </Line>
      <Line>
        <I />
        <P t={t}>{"}"}</P>
        <P t={t}>,</P>
      </Line>
      <Line />
      <Line>
        <I />
        <S t={t}>"scripts"</S>
        <P t={t}>:</P> <P t={t}>{"{"}</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"build"</S>
        <P t={t}>:</P> <S t={t}>"rbxtsc"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"watch"</S>
        <P t={t}>:</P> <S t={t}>"rbxtsc -w"</S>
        <P t={t}>,</P>
      </Line>
      <Line>
        <I />
        <I />
        <S t={t}>"contact"</S>
        <P t={t}>:</P> <S t={t}>"echo hire aman"</S>
      </Line>
      <Line>
        <I />
        <P t={t}>{"}"}</P>
      </Line>
      <Line>
        <P t={t}>{"}"}</P>
      </Line>
    </>
  );
}

// ── README.md ────────────────────────────────────────────────────────────────
export function CodeReadme({ t }) {
  return (
    <>
      <Line>
        <span style={{ color: t.type }}># aman-portfolio</span>
      </Line>
      <Line />
      <Line>
        <span style={{ color: t.type }}>## About</span>
      </Line>
      <Line>
        <span style={{ color: t.fg }}>Roblox developer from Delhi, India.</span>
      </Line>
      <Line>
        <span style={{ color: t.fg }}>
          Specializes in game systems — gun systems,
        </span>
      </Line>
      <Line>
        <span style={{ color: t.fg }}>combat engines, and more.</span>
      </Line>
      <Line />
      <Line>
        <span style={{ color: t.type }}>## Stack</span>
      </Line>
      <Line>
        <span style={{ color: t.string }}>- Luau / Roblox Studio</span>
      </Line>
      <Line>
        <span style={{ color: t.string }}>
          - TypeScript / React / React Native
        </span>
      </Line>
      <Line>
        <span style={{ color: t.string }}>- HTML / CSS / SCSS / JS</span>
      </Line>
      <Line>
        <span style={{ color: t.string }}>- Python / C</span>
      </Line>
      <Line />
      <Line>
        <span style={{ color: t.type }}>## Projects</span>
      </Line>
      <Line>
        <span style={{ color: t.string }}>- Gun System (complete)</span>
      </Line>
      <Line>
        <span style={{ color: t.string }}>- Combat System (complete)</span>
      </Line>
      <Line>
        <span style={{ color: t.string }}>- Inventory System (WIP)</span>
      </Line>
      <Line />
      <Line>
        <span style={{ color: t.type }}>## Contact</span>
      </Line>
      <Line>
        <K t={t}>Email:</K> <S t={t}>aman@example.com</S>
      </Line>
      <Line>
        <K t={t}>GitHub:</K> <S t={t}>github.com/aman</S>
      </Line>
      <Line>
        <K t={t}>Discord:</K> <S t={t}>aman#0000</S>
      </Line>
      <Line />
      <Line>
        <C t={t}>{"> open to work — hit me up 🔥"}</C>
      </Line>
    </>
  );
}
