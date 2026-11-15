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

  photo: "assets/hugh.jpg", // linkedin profile photo

  // photos from hugh's photos library (and the korea video, 3:24), square crops in assets/win-*.jpg
  trophies: {
    hero: { src: "assets/win-nvidia.jpg", alt: "hugh on stage holding the 1st place top winner check at nvidia's physical ai sprint", cap: "1st place, nvidia physical ai hackathon. san francisco, aug 2026" },
    grid: [
      { src: "assets/win-nsw-2024.jpg", alt: "hugh holding the gold robocup nsw trophy", cap: "1st, robocup nsw 2024" },
      { src: "assets/win-nsw-2023.jpg", alt: "the fort street team in medals behind the trophy and their two robots", cap: "1st, robocup nsw 2023" },
      { src: "assets/win-nationals-2023.jpg", alt: "the team in medals in front of the robocup junior australia banners", cap: "2nd, robocup australia 2023" },
      { src: "assets/win-korea-2023.jpg", alt: "team silverback holding the australian flag behind their robots in korea", cap: "2nd, robocup asia-pacific 2023" },
    ],
  },

  // from hugh's linkedin (honors, experience, education), 2026-11-15. his words, lowercased.
  wins: [
    { what: "1st place, nvidia physical ai hackathon", detail: "san francisco, with nebius, antioch and toloka", when: "2026" },
    { what: "alloy: 0 to 10k followers in a month", detail: "growth engineer. next goal 10k to 100k in 6 months", when: "2026" },
    { what: "lyra: 34 to 65 engineers", detail: "head of growth. content, job ads, internal tooling", when: "2026" },
    { what: "schemagic, acquired by trace", detail: "datasheet pdfs to kicad parts. 10k followers, 600 downloads, paying users", when: "" },
    { what: "robonyx: 900k+ followers", detail: "a robotics account i started. 300k instagram, 250k youtube, 200k facebook, 150k tiktok", when: "2023-25" },
    { what: "1st robocup nsw, twice", detail: "soccer open, the top division", when: "2023, 2024" },
    { what: "2nd robocup asia-pacific", detail: "soccer open", when: "2023" },
    { what: "2nd robocup australia", detail: "soccer open", when: "2023" },
    { what: "2nd of 200 teams, business blueprint", detail: "western sydney uni. pitched my robotics education startup", when: "2023" },
    { what: "hsc shape exhibition", detail: "top 10 projects in nsw. john singleton & michael kirby prize for originality. atar 96.65", when: "2025" },
  ],

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
      // company repo (alloyrobotics/alloy-logger-arduino), so github + meta are set by hand.
      // clip is 0:00.4 to 0:09.4 of the launch video's data-rainbow scene (r2 launches/alloy-logger/renders/data-rainbow_master.mp4)
      title: "alloylogger",
      line: "a black-box recorder for esp32 robots. one library logs the whole control loop and streams it straight to alloy, so claude or chatgpt can tell you what went wrong. no sd card, no laptop. i built it and its launch video.",
      video: { src: "assets/alloylogger.mp4", poster: "assets/alloylogger.jpg", w: 1280, h: 720 },
      meta: "alloy robotics · jul 2026",
      github: "https://github.com/alloyrobotics/alloy-logger-arduino",
      watch: "https://www.instagram.com/reel/Dab5vHvzLS3/",
      watchLabel: "watch the launch",
    },
    {
      // 9s hard-cut montage of "1st Place NSW RoboCup Soccer Open Highlights" (youtube 6FmKRe5V6r8):
      // 0:00, 0:05, 0:09, 0:16, 0:26, 0:29, 0:38.5 (~1.3s each)
      title: "robocup soccer robots",
      badge: "1st nsw",
      line: "robocup junior soccer open, the top division. 1st in nsw in 2023 and 2024, 2nd at nationals and 2nd at asia-pacific in 2023.",
      video: { src: "assets/robocup.mp4", poster: "assets/robocup.jpg", w: 1280, h: 720 },
      meta: "fort street high · 2022-24",
      watch: "https://www.youtube.com/watch?v=6FmKRe5V6r8",
      watchLabel: "watch the highlights",
    },
    {
      // 10s hard-cut montage of the korea video (youtube CMPyQzUTdtk): 1:37, 0:46.6, 2:23, 2:42, 2:20, 2:45,
      // 2:09 "won semis", 3:15 "we got 2nd" flag
      title: "robocup asia-pacific, korea",
      badge: "2nd",
      line: "team silverback took fort street to the asia-pacific soccer open in south korea. won the semifinal, came 2nd overall.",
      video: { src: "assets/robocup-korea.mp4", poster: "assets/robocup-korea.jpg", w: 1280, h: 720 },
      meta: "dec 2023",
      watch: "https://www.youtube.com/watch?v=CMPyQzUTdtk",
      watchLabel: "watch the trip",
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
