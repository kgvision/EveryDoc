// Providers — real sign-in URLs, plus the brand hex used to tint each
// service's dot (blended with the page's accent color, see styles.css).
export const PROVIDERS = {
  'Netflix': { url: 'https://www.netflix.com/login', hex: '#c0533a' },
  'Hulu': { url: 'https://auth.hulu.com/web/login', hex: '#7a8a5e' },
  'Disney+': { url: 'https://www.disneyplus.com/login', hex: '#56633f' },
  'Max': { url: 'https://auth.max.com/login', hex: '#8c491a' },
  'Prime Video': { url: 'https://www.primevideo.com/ap/signin', hex: '#728157' },
  'Apple TV+': { url: 'https://tv.apple.com/login', hex: '#645c50' },
  'Peacock': { url: 'https://www.peacocktv.com/signin', hex: '#b2622d' },
  'Paramount+': { url: 'https://www.paramountplus.com/account/signin/', hex: '#8fa073' },
  'PBS': { url: 'https://account.pbs.org/accounts/login', hex: '#474238' },
  'YouTube': { url: 'https://accounts.google.com/ServiceLogin?service=youtube', hex: '#d67f48' },
};

// Category dot colors — each is a step from the (fixed) design-system ramps,
// blended with the page's accent at render time so it stays legible across
// palettes. See --dot-* in styles.css.
export const CATEGORIES = [
  { name: 'Nature & Wildlife', ramp: 'var(--ramp-accent2-500)', titles: [
    { title: 'Our Planet', year: 2019, runtime: '8 × 50m', free: false, providers: ['Netflix'], synopsis: "Ocean-to-ice survey of habitats in flux, narrated with unusual candour about what's being lost." },
    { title: 'My Octopus Teacher', year: 2020, runtime: '85m', free: false, providers: ['Netflix'], synopsis: 'A filmmaker returns daily to a kelp forest and builds a friendship with one curious cephalopod.' },
    { title: 'The Year Earth Changed', year: 2021, runtime: '48m', free: false, providers: ['Apple TV+'], synopsis: 'What wildlife did while the world stayed indoors — quieter cities, bolder animals.' },
  ] },
  { name: 'True Crime', ramp: 'var(--ramp-accent-700)', titles: [
    { title: 'Making a Murderer', year: 2015, runtime: '10 × 60m', free: false, providers: ['Netflix'], synopsis: 'A decade inside one Wisconsin case, and the machinery of a conviction.' },
    { title: 'The Keepers', year: 2017, runtime: '7 × 55m', free: false, providers: ['Netflix'], synopsis: 'Former students turn investigators to reopen the unsolved death of their teacher.' },
    { title: 'The Jinx', year: 2015, runtime: '6 × 45m', free: false, providers: ['Max'], synopsis: "An heir sits for interviews he probably shouldn't have agreed to." },
  ] },
  { name: 'History', ramp: 'var(--ramp-neutral-700)', titles: [
    { title: 'Apollo 11', year: 2019, runtime: '93m', free: false, providers: ['Max', 'Hulu'], synopsis: 'Restored 70mm footage, no narration — the mission as it was actually witnessed.' },
    { title: '13th', year: 2016, runtime: '100m', free: true, providers: ['Netflix', 'YouTube'], synopsis: 'Traces a line from abolition to mass incarceration through one constitutional clause.' },
    { title: 'The Vietnam War', year: 2017, runtime: '10 × 90m', free: true, providers: ['PBS'], synopsis: 'Ten parts, many sides, assembled from archives and the people who were there.' },
  ] },
  { name: 'Science & Space', ramp: 'var(--ramp-accent-500)', titles: [
    { title: 'Cosmos: Possible Worlds', year: 2020, runtime: '13 × 45m', free: false, providers: ['Disney+', 'Hulu'], synopsis: 'A tour of deep time and deeper space, built on what we might still become.' },
    { title: 'Fantastic Fungi', year: 2019, runtime: '81m', free: false, providers: ['Netflix'], synopsis: 'Time-lapse mycology arguing that the network under the forest runs the place.' },
    { title: 'Particle Fever', year: 2013, runtime: '99m', free: true, providers: ['YouTube'], synopsis: 'Physicists wait years for one collider result, and then get it.' },
  ] },
  { name: 'Music & Art', ramp: 'var(--ramp-accent2-700)', titles: [
    { title: 'Summer of Soul', year: 2021, runtime: '118m', free: false, providers: ['Hulu', 'Disney+'], synopsis: 'A Harlem festival lost in a basement for fifty years, finally screened.' },
    { title: 'The Beatles: Get Back', year: 2021, runtime: '3 × 150m', free: false, providers: ['Disney+'], synopsis: 'Sixty hours of rehearsal tape cut into a fly-on-the-wall record of a band working.' },
    { title: '20 Feet from Stardom', year: 2013, runtime: '91m', free: false, providers: ['Max', 'Prime Video'], synopsis: 'The backing singers behind decades of hits step out front.' },
  ] },
  { name: 'Sports', ramp: 'var(--ramp-accent-600)', titles: [
    { title: 'Free Solo', year: 2018, runtime: '100m', free: false, providers: ['Disney+', 'Hulu'], synopsis: 'El Capitan without a rope, and the people who had to film it.' },
    { title: 'The Last Dance', year: 2020, runtime: '10 × 50m', free: false, providers: ['Netflix', 'Disney+'], synopsis: 'One final championship season, told with the archive nobody had seen.' },
    { title: 'Icarus', year: 2017, runtime: '121m', free: false, providers: ['Netflix'], synopsis: 'An amateur doping experiment collides with a state-run programme.' },
  ] },
  { name: 'Politics & Society', ramp: 'var(--ramp-neutral-600)', titles: [
    { title: 'Knock Down the House', year: 2019, runtime: '87m', free: false, providers: ['Netflix'], synopsis: 'Four first-time candidates run primary campaigns nobody expected them to win.' },
    { title: "Won't You Be My Neighbor?", year: 2018, runtime: '94m', free: true, providers: ['Max', 'PBS'], synopsis: "A portrait of children's television as a radical act of kindness." },
    { title: 'The Social Dilemma', year: 2020, runtime: '94m', free: false, providers: ['Netflix'], synopsis: 'The people who built the feeds explain what they think they built.' },
  ] },
  { name: 'Food & Travel', ramp: 'var(--ramp-accent2-600)', titles: [
    { title: "Chef's Table", year: 2015, runtime: '6 × 50m', free: false, providers: ['Netflix'], synopsis: 'One kitchen per episode, shot like a feature and paced like a meal.' },
    { title: 'Jiro Dreams of Sushi', year: 2011, runtime: '81m', free: false, providers: ['Max', 'Prime Video'], synopsis: 'A Tokyo counter, ten seats, and sixty years of refining the same motions.' },
    { title: 'Somebody Feed Phil', year: 2018, runtime: '6 × 50m', free: false, providers: ['Netflix'], synopsis: 'A very enthusiastic host eats his way through cities and makes friends.' },
  ] },
  { name: 'Biography', ramp: 'var(--ramp-accent-800)', titles: [
    { title: 'RBG', year: 2018, runtime: '98m', free: false, providers: ['Hulu', 'Prime Video'], synopsis: 'A legal career assembled brief by brief into an unlikely late-life icon.' },
    { title: 'Amy', year: 2015, runtime: '128m', free: false, providers: ['Prime Video', 'Paramount+'], synopsis: 'Home footage and voice notes retell a talent the tabloids had already flattened.' },
    { title: 'They Call Me Magic', year: 2022, runtime: '4 × 50m', free: false, providers: ['Apple TV+'], synopsis: 'Four parts on a basketball career and the announcement that reframed it.' },
  ] },
];

export const TOTAL_TITLES = CATEGORIES.reduce((n, c) => n + c.titles.length, 0);

export const FILTERS = ['All', 'Free with ads', 'Series', 'Under 100m'];

export function matchesFilter(title, filter, query) {
  const q = query.trim().toLowerCase();
  if (q && !(title.title + ' ' + title.synopsis).toLowerCase().includes(q)) return false;
  if (filter === 'Free with ads') return title.free;
  if (filter === 'Series') return title.runtime.includes('×');
  if (filter === 'Under 100m') return !title.runtime.includes('×') && parseInt(title.runtime, 10) < 100;
  return true;
}

export function initials(title) {
  return title
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}
