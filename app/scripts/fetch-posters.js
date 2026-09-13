#!/usr/bin/env node
// Looks up a TMDb poster image for each title Everdoc lists, and writes
// the results to src/posters.json (title -> full image URL, or null if
// TMDb had no match). Run this on a machine with normal internet access —
// this sandbox's network policy blocks api.themoviedb.org.
//
// Usage:
//   TMDB_API_KEY=xxxxxxxx node scripts/fetch-posters.js
//
// Requires Node 18+ (for global fetch).

const fs = require('fs');
const path = require('path');

const TITLES = [
  'Our Planet', 'My Octopus Teacher', 'The Year Earth Changed',
  'Making a Murderer', 'The Keepers', 'The Jinx',
  'Apollo 11', '13th', 'The Vietnam War',
  'Cosmos: Possible Worlds', 'Fantastic Fungi', 'Particle Fever',
  'Summer of Soul', 'The Beatles: Get Back', '20 Feet from Stardom',
  'Free Solo', 'The Last Dance', 'Icarus',
  'Knock Down the House', "Won't You Be My Neighbor?", 'The Social Dilemma',
  "Chef's Table", 'Jiro Dreams of Sushi', 'Somebody Feed Phil',
  'RBG', 'Amy', 'They Call Me Magic',
];

const API_KEY = process.env.TMDB_API_KEY;
if (!API_KEY) {
  console.error('Set TMDB_API_KEY first, e.g.: TMDB_API_KEY=xxxx node scripts/fetch-posters.js');
  process.exit(1);
}

const IMG_BASE = 'https://image.tmdb.org/t/p/w500';

async function lookup(title) {
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(title)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const hit = (data.results || []).find((r) => (r.media_type === 'movie' || r.media_type === 'tv') && r.poster_path);
  return hit ? IMG_BASE + hit.poster_path : null;
}

(async () => {
  const out = {};
  for (const title of TITLES) {
    process.stdout.write(`Looking up "${title}"... `);
    try {
      const url = await lookup(title);
      out[title] = url;
      console.log(url || '(no poster found)');
    } catch (e) {
      console.log('ERROR: ' + e.message);
      out[title] = null;
    }
    await new Promise((r) => setTimeout(r, 250)); // stay well under TMDb's rate limit
  }
  const outPath = path.join(__dirname, '..', 'src', 'posters.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n');
  console.log(`\nWrote ${outPath}`);
})();
