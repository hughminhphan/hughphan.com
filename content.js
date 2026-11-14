// hand-written content. edit freely; live numbers come from gh-data.js (scripts/refresh.py).
// design follows the hughcandoit hub (clients/hughcandoit/site): plain on purpose, the headline is the one place with character.
window.CONTENT = {
  lede: "i build robots, circuit boards and the agents that make them. then i make videos about it.",

  socials: [
    { label: "instagram", href: "https://www.instagram.com/hugh_candoit/" },
    { label: "x", href: "https://x.com/hughphan_" },
    { label: "linkedin", href: "https://www.linkedin.com/in/hugh-phan-b58b85236/" },
    { label: "github", href: "https://github.com/hughminhphan" },
    { label: "youtube", href: "https://www.youtube.com/channel/UC-yp6ASzzUN6uYCTRFbL9HQ" },
  ],

  // off the clock. clip is 0:48 to 0:58 of "2 years yoyoing" (youtube 7bmZS_2kfas), muted loop,
  // with laser eyes drawn on per frame from apple vision body-pose eye tracking
  yoyo: {
    video: { src: "assets/yoyo.mp4", poster: "assets/yoyo.jpg", w: 1280, h: 720 },
    line: "i also yoyo. 1a, the string trick division. 6th at the sydney regional in 2024, 24th amateur at scales international in 2020.",
    links: [
      { label: "2 years yoyoing", href: "https://www.youtube.com/watch?v=7bmZS_2kfas" },
      { label: "sydney regional run", href: "https://www.youtube.com/watch?v=oXslMd_ie48" },
    ],
  },

  // free skills: link into the gated hub pages so a portfolio visit joins the same email funnel
  skills: [
    { title: "motion kit", line: "claude animates like an after effects animator", img: "assets/motion-thumb.jpg", href: "https://hughcandoit.pages.dev/motion?from=hughphan" },
    { title: "agentic hardware stack", line: "the cad + pcb setup behind a robot in one night", img: "assets/robot-iso.jpg", href: "https://hughcandoit.pages.dev/stack?from=hughphan" },
  ],

  projects: [
    {
      // repo is private (actuate-fast-loop-archive); clip is 0:05 to 0:13 of the stage pitch (youtube mbkhId7g6-c)
      title: "fastloop",
      badge: "1st place",
      line: "1st place at nvidia's physical ai hackathon in sf, with nebius, antioch and toloka. a control plane for robot learning: every robot attempt becomes a versioned, scored experiment that produces the next one.",
      video: { src: "assets/fastloop.mp4", poster: "assets/fastloop.jpg", w: 1104, h: 690 },
      meta: "team spongebob · aug 2026",
      watch: "https://www.youtube.com/watch?v=mbkhId7g6-c",
    },
    {
      repo: "schemagic-sim",
      title: "robonyx simulator",
      line: "real ngspice running in your browser. drag a pot and the led, the wires and the scope all answer live. no account, works offline.",
      video: { src: "assets/robonyx-sim.mp4", poster: "assets/robonyx-sim.jpg", w: 1280, h: 720 },
      live: "https://schemagic.pages.dev",
    },
    {
      repo: "claudemix",
      title: "claudemix",
      line: "one claude code session, two subscriptions. claude orchestrates, gpt subagents execute, through a ~110 line loopback splitter that never touches your claude login.",
    },
    {
      repo: "vector-embedded-finder",
      title: "vector embedded finder",
      line: "local multimodal memory. embed photos, audio, video and pdfs, then search all of it in plain english from raycast.",
    },
    {
      repo: "premiere-folder-watch",
      title: "folder watch",
      line: "a free premiere pro panel that keeps bins in sync with folders on disk. never moves or deletes source media.",
    },
    {
      repo: "FrameSearch",
      title: "framesearch",
      line: "search your own photos and videos by describing them. clip, lancedb and a swiftui app, plus a premiere panel.",
    },
    {
      repo: "schemagic-webapp",
      title: "schemagic",
      line: "kicad symbols and footprints generated straight from a datasheet.",
    },
    {
      repo: "webench-to-kicad",
      title: "webench to kicad",
      line: "turns ti webench power designer reports into kicad 8 schematics.",
    },
    {
      repo: "PROJECTS",
      title: "the early robots",
      line: "a self-balancing bot, a sumobot and friends. plus a diy reflow hotplate.",
    },
  ],

  now: "growth at alloy robotics. most of that is building the agent pipeline that makes our videos: script, voice, 3d plates, motion and review, with a human approve at the end.",
};
