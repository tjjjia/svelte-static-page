export const prerender = true;

import fs from "fs";
export async function load() {
  const cachePath = './static/google-sheets.json';
  const rows = JSON.parse(fs.readFileSync(cachePath, 'utf-8'));

  return { rows };
}