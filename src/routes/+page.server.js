export const prerender = true;

import fs from "fs";
/*
export async function load({params}) {
	const slug = "portfolio-2024-f-k5p7e9wxs"
	// const slug = "anime-computing"
	const url = `https://api.are.na/v2/channels/${slug}`;

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	return response.json();
}
*/
export async function load() {
  const cachePath = './static/blocks-cache.json';
  const blocks = JSON.parse(fs.readFileSync(cachePath, 'utf-8'));

	blocks.reverse();
  return { blocks };
}