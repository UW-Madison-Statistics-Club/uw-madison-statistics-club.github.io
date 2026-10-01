export const site = {
  name: "UW–Madison Statistics Club",
  shortName: "Stat Club",
  tagline: "Data, statistics, and community at UW–Madison.",
  email: "uwstatclub@gmail.com",
  instagram: "https://www.instagram.com/statsclubuwmadison/",
  linkedin: "https://www.linkedin.com/company/undergraduate-statistics-club-uw-madison/",
  discord: "https://discord.gg/7uJsEbEFWY",
  wisconsinOrgsUrl: "https://win.wisc.edu/",
};

// paths are relative to the site's base URL (see astro.config.mjs `base`)
export const nav = [
  { path: "", label: "Home" },
  { path: "about/", label: "About" },
  { path: "events/", label: "Events" },
  { path: "data-challenge/", label: "Data Challenge" },
  { path: "resources/", label: "Resources" },
  { path: "contact/", label: "Join / Contact" },
];
