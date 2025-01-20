import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const slug = "portfolio-2024-f-k5p7e9wxs";

const API_URL = `https://api.are.na/v2/channels/${slug}`;
const OUTPUT_DIR = './static/images'; // Directory for downloaded images
const CACHE_FILE = './static/blocks-cache.json';

async function downloadImages() {
	try {
		const response = await fetch(API_URL);
		const data = await response.json();

		if (!fs.existsSync(OUTPUT_DIR)) {
			fs.mkdirSync(OUTPUT_DIR, { recursive: true });
		}

		const cache = [];
		const blocks = data.contents;

		// blocks.forEach(async (block) => {
		for (const block of blocks) {
			if(block.class !== "Image") { return };
			const url = block.image.thumb.url;
			const ext = path.extname(block.image.filename);
			const filename = `${block.id}${ext}`;

			const imageResponse = await fetch(url);
			const imageBuffer = await imageResponse.buffer();
			fs.writeFileSync(path.join(OUTPUT_DIR, filename), imageBuffer);

			const obj = { 
				id: block.id,
				title: block.title,
				description: block.description,
				description_html: block.description_html,
				filename: filename
			};

			cache.push(obj);
		}

    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
	} catch (err) {
			console.error('Error downloading images:', err);
	}
}

downloadImages()
  .then(() => {
    console.log(`Images and cache file written successfully to ${OUTPUT_DIR}`);
	})
  .catch(console.error);