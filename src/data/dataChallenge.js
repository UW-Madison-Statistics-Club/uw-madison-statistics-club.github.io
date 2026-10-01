// Copy for the Data Challenge page, adapted from the Fall 2026 kickoff slides.
// Meeting dates in the timeline come from events marked `dataChallenge: true` in events.js;
// add deadlines that aren't meetings (registration, submissions) to `milestones` below.
// Leave a string or array empty to hide that part of the page.
export const dataChallenge = {
  season: "Fall 2026",
  theme: "Food Need vs. Demand",
  summary:
    "Where Minnesotans need food help, where they actually ask for it, and why the two don't line up.",
  teamSize: "up to 4",
  registrationUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScCXXfV85mU8m5Z_5dqqWqkXUfNuVNqYnnpjsaU934X_yrx1A/viewform?usp=header",

  client: {
    name: "The Food Group",
    description:
      "Teams work with real data from The Food Group, a Minnesota hunger-relief organization that runs a food bank, a HelpLine connecting callers to SNAP and food resources, and MarketBucks, which matches SNAP dollars spent at farmers markets. Treat them as a real client: every result should connect to a decision their staff could make.",
  },

  coreIdea: [
    "Need is the help a household must have. Demand is the help a household actually asks for. A food shelf visit measures demand: some people in need never show up (stigma, no car, never heard of it), and some people who show up aren't food insecure.",
    "Because resources follow visits, they follow demand. Easy-to-reach areas draw more food and funding, while high-need areas that are hard to reach draw little, and the data gives no warning. Your findings feed four real decisions: how to allocate resources, where new food shelves are needed, how to argue for a policy, and how The Food Group measures its own results.",
  ],

  tracks: [
    {
      name: "Analysis track",
      summary: "Answer four questions about need vs. demand with statistics you can defend.",
      points: [
        "Judged by a panel against a rubric",
        "Deliverable: 5–7 minute talk, slides, and code",
      ],
    },
    {
      name: "Prediction track",
      summary:
        "Forecast July 2026 food shelf visits, pounds distributed, and individuals served for every Minnesota county.",
      points: [
        "Scored automatically (RMSLE) against held-out data",
        "Deliverable: one predictions.csv",
      ],
    },
  ],
  scoringNote:
    "Every team does both tracks. Overall ranking is 80% analysis + 20% prediction, with a separate award for the best forecast.",

  questions: [
    {
      label: "Q1",
      title: "Do need estimates match food shelf activity?",
      description:
        "Compare Feeding America's Map the Meal Gap county estimates with food shelf activity. Which counties break the pattern, and what explains the mismatch?",
    },
    {
      label: "Q4",
      title: "Do grocery prices drive food shelf traffic?",
      description:
        "When grocery prices rise, do more people come to food shelves — right away, or after a delay?",
    },
    {
      label: "Q5",
      title: "SNAP and food shelves: partners or substitutes?",
      description:
        "Do SNAP enrollment and food shelf use move together, or does one replace the other? What happens when SNAP benefits change?",
    },
    {
      label: "Q6",
      title: "Build a measure of hidden need",
      description:
        "Create a new metric, using public data beyond demand, that flags places where need is probably bigger than the activity data shows.",
    },
  ],

  rubric: [
    { criterion: "Q1, Q4, Q5: complete, insightful, actionable", weight: "30%" },
    { criterion: "Appropriate, correctly applied methods", weight: "25%" },
    { criterion: "Q6: a measure of need that goes beyond demand", weight: "15%" },
    { criterion: "Outside data: well chosen and properly cited", weight: "10%" },
    { criterion: "Creativity and value to The Food Group", weight: "10%" },
    { criterion: "Communication, with every member engaged", weight: "10%" },
  ],
  rubricNote:
    "Each analysis criterion is scored 1–4; the rubric is adapted from MinneMUDAC's. Undergrad methods are enough to win — a method you can explain beats a complex one.",

  deliverables: [
    "predictions.csv for the prediction track (due Sat, Oct 31, 11:59 PM)",
    "Code in your team's private repo that reproduces your predictions and every number in your slides (due Sat, Oct 31, 11:59 PM)",
    "Slide deck (PDF) answering Q1, Q4, Q5, and Q6, emailed to uwstatclub@gmail.com (due Thu, Nov 5, 3:00 PM)",
    "5–7 minute presentation plus Q&A with judges (Thu, Nov 5, 6:00 PM)",
  ],

  rules: [
    {
      title: "The data is not public",
      text: "The Food Group's files are internal. Keep them in the club's private repo, never on public GitHub, Kaggle, or an open link. Findings can go in portfolios; raw data can't.",
    },
    {
      title: "Nothing dated after June 30, 2026",
      text: "For the forecast, use no July data from any source. Breaking this rule zeroes your prediction score.",
    },
    {
      title: "Free, public outside data only",
      text: "Anything you had to buy, or got privately, disqualifies your team. Map the Meal Gap is required — request it from Feeding America early, since approval takes time.",
    },
    {
      title: "AI is allowed, with a catch",
      text: "\"The AI suggested it\" is not a reason. Know where every number came from.",
    },
  ],

  // Deadlines that aren't club meetings. Deadlines without a set time are 11:59 PM.
  milestones: [
    { title: "Team registration closes", date: "2026-10-09", time: "11:59 PM" },
    { title: "predictions.csv and code due", date: "2026-10-31", time: "11:59 PM" },
    { title: "Slides due", date: "2026-11-05", time: "3:00 PM" },
  ],

  faq: [],
};
