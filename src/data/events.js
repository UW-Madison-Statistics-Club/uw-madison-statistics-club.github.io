// Fall 2026 schedule. Regular meetings are Thursdays, 6:00–7:00 PM in 2532 Morgridge Hall.
// Set `weekOf: true` to display "Week of <date>" when only the week is known, and use
// `endDate` for multi-day events.
// `time`, `location`, and `description` are optional and hidden when left out.
// Add `type: "date"` for important dates that aren't club meetings (outside competitions,
// academic calendar) — they stay in the same list but are styled as a lighter "Key date" row.
// Add `dataChallenge: true` to show an event in the Data Challenge page's timeline and link
// its Events card to that page (`hideDataChallengeLink: true` keeps it off the card).
// Add `link: { href, label }` to show a link (e.g. workshop materials) on the event.
export const upcomingEvents = [
  {
    title: "Workshop: Graduating from Notebooks",
    dataChallenge: true,
    hideDataChallengeLink: true,
    date: "2026-10-08",
    time: "6:00–7:00 PM",
    location: "2532 Morgridge Hall",
    description:
      "Presented by Spencer Venancio. Move your analysis out of notebooks and into source files, a clean project structure, Git, and GitHub. Follow along in Python or R.",
    link: { href: "https://github.com/spencervenancio/gfnb", label: "Workshop materials on GitHub" },
  },
  {
    title: "Careers in Statistics Panel",
    date: "2026-10-15",
    time: "6:00–7:00 PM",
    location: "2532 Morgridge Hall",
  },
  {
    title: "MinneMUDAC 2026",
    date: "2026-10-17",
    type: "date",
  },
  {
    title: "Guest Speaker: Industry",
    date: "2026-10-22",
    time: "6:00–7:00 PM",
    location: "2532 Morgridge Hall",
  },
  {
    title: "Guest Speaker: Academia",
    date: "2026-10-29",
    time: "6:00–7:00 PM",
    location: "2532 Morgridge Hall",
  },
  {
    title: "Data Challenge Final Presentations",
    dataChallenge: true,
    date: "2026-11-05",
    time: "6:00–7:00 PM",
    location: "2532 Morgridge Hall",
  },
  {
    title: "Journal Club Pilot",
    date: "2026-11-12",
    time: "6:00–7:00 PM",
    location: "2532 Morgridge Hall",
  },
  {
    title: "Probability Bee",
    date: "2026-11-19",
    time: "6:00–7:00 PM",
    location: "2532 Morgridge Hall",
  },
  {
    title: "Thanksgiving Break",
    date: "2026-11-26",
    endDate: "2026-11-29",
    type: "date",
  },
  {
    title: "New Board Member Event",
    date: "2026-12-03",
    time: "6:00–7:00 PM",
    location: "2532 Morgridge Hall",
  },
  {
    title: "Last Day of Class",
    date: "2026-12-09",
    type: "date",
  },
  {
    title: "Study Day",
    date: "2026-12-10",
    type: "date",
  },
  {
    title: "Final Exams Begin",
    date: "2026-12-11",
    type: "date",
  },
];

export const pastEvents = [
  {
    title: "Data Challenge Kickoff",
    dataChallenge: true,
    date: "2026-10-01",
    time: "6:00–7:00 PM",
    location: "2532 Morgridge Hall",
    description: "The Fall 2026 challenge, Food Need vs. Demand, officially begins.",
  },
  {
    title: "Kickoff Meeting",
    date: "2026-09-24",
    time: "6:00–7:00 PM",
    location: "2532 Morgridge Hall",
  },
  {
    title: "Org Fair",
    date: "2026-09-09",
    endDate: "2026-09-10",
  },
];

const dayFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
});
const shortFormatter = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" });

const toDate = (isoDate) => new Date(`${isoDate}T00:00:00`);

// Shared by the Events page and homepage so date display stays consistent.
export function formatEventDate(event) {
  if (event.weekOf) return `Week of ${shortFormatter.format(toDate(event.date))}`;
  if (event.endDate) {
    const end = toDate(event.endDate);
    return `${shortFormatter.format(toDate(event.date))}–${shortFormatter.format(end)}, ${end.getFullYear()}`;
  }
  return dayFormatter.format(toDate(event.date));
}
