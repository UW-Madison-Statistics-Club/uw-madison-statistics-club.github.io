// Executive board recruitment, shown on the /board/ page and in the site-wide banner.
// Each cycle, update `term`, `deadline`, `timeline`, `interviewDays`, and the roles.
// The application form is built into /board/ and submits to Formspree (formspree.io), which
// emails each application to the club account and keeps them in its dashboard.
// `formspreeId` is the ID from the form's endpoint, https://formspree.io/f/<formspreeId>.
// While it's empty, the form shows but can't be submitted.
// `deadline` is the last day applications are accepted (11:59 PM). The banner hides itself
// after that day, even if nobody rebuilds the site; set `open: false` to hide it right away.
export const boardApplication = {
  open: true,
  term: "Spring 2027",
  deadline: "2026-11-22",
  deadlineLabel: "Sunday, Nov 22 at 11:59 PM",
  formspreeId: "xqpqaqrz",
  timeCommitment:
    "Expect about 2–4 hours a week: the Thursday 6:00–7:00 PM meeting plus your role's planning, with more in the weeks your events happen.",

  // `featured: true` shows a role as a wide card above the others. `spots` is optional.
  roles: [
    {
      title: "Vice President",
      featured: true,
      spots: "1 spot",
      duties:
        "The President's partner in running the club. Runs meetings when the President is out, keeps the board's plans on track, and helps manage the budget. The VP is a natural fit to lead the club as President in Fall 2027.",
    },
    {
      title: "Data Challenge Director",
      spots: "1–2 spots",
      duties:
        "Runs the club's flagship competition: lines up a client and dataset, forms teams, recruits judges, sets prizes, and runs presentation day. Planning starts over winter break.",
    },
    {
      title: "Speaker Series Director",
      spots: "1 spot",
      duties:
        "Brings in speakers from industry and academia and organizes the careers panel. A great way to build professional connections.",
    },
    {
      title: "Community Director",
      spots: "1 spot",
      duties:
        "Plans the socials that keep people coming back: poker nights, game night, the Probability Bee, and Journal Club.",
    },
    {
      title: "Marketing Director",
      spots: "1 spot",
      duties:
        "Runs our Instagram, LinkedIn, and Discord announcements, makes flyers, and grows attendance at every event.",
    },
  ],

  eligibility: [
    "You're a UW–Madison student enrolled at least half-time (6+ credits) in Spring 2027.",
    "Any major or year. You don't need to be a statistics major.",
    "You can stay on the board for at least two semesters. This group will run the club in Fall 2027, so students who'll be here through next year get priority.",
    "Coming to a club event first helps, but it isn't required.",
  ],

  timeline: [
    { date: "Thu, Nov 12", label: "Applications open" },
    { date: "Sun, Nov 22", label: "Applications due at 11:59 PM" },
    { date: "Nov 23 – Dec 1", label: "15-minute interviews with the current board, in person or on Zoom (none over Thanksgiving)" },
    { date: "Wed, Dec 2", label: "Decisions sent by email" },
    { date: "Jan 2027", label: "New board starts with the spring semester" },
  ],

  // Shown on the page after someone submits.
  confirmation:
    "We'll email you to schedule a 15-minute interview between Nov 23 and Dec 1, where we'll talk through your pitch. Decisions go out by email on Wednesday, Dec 2.",

  // Interview slots applicants can check on the form.
  interviewDays: ["Mon, Nov 23", "Tue, Nov 24", "Wed, Nov 25", "Mon, Nov 30", "Tue, Dec 1"],
  interviewTimes: [
    { label: "Morning", hours: "9 AM–12 PM" },
    { label: "Afternoon", hours: "12–5 PM" },
    { label: "Evening", hours: "5–9 PM" },
  ],

  // The one real question. Interviews dig into each applicant's pitch.
  // `maxChars` caps the answer (2,000 characters is about 300 words).
  pitch: {
    prompt:
      "Pitch one idea to help the Stats Club grow. It can be something brand new, or a fix to something we already run (the Data Challenge, speaker talks, poker nights, Probability Bee, Journal Club).",
    parts: [
      { label: "The idea and who it's for.", detail: "If it's a fix: what isn't working now, and why do you think that is?" },
      { label: "Why it would work:", detail: "what makes you think people would come?" },
      { label: "Its biggest weakness,", detail: "and how you'd handle it." },
      { label: "How we'd know it worked:", detail: "what would you measure?" },
    ],
    note: "Up to 300 words. Be specific: “more socials” or “more advertising” isn't an idea yet.",
    maxChars: 2000,
  },
};
