import { join, parse } from 'node:path';
import fs from 'node:fs/promises';
import sharp from 'sharp';
import rimraf from 'rimraf';

const IN_DIRECTORY = new URL('img', import.meta.url);
const OUT_DIRECTORY = new URL('static/img', import.meta.url);

function getName(path) {
	const { name } = parse(path);

	return name;
}

rimraf.sync(OUT_DIRECTORY.pathname);

await fs.mkdir(OUT_DIRECTORY);

const files = await fs.readdir(IN_DIRECTORY);

for (const path of files) {
	const WIDTHS = [
		{
			size: 15,
			id: 'tiny',
			formats: ['jpeg']
		},
		{
			size: 640,
			id: '640',
			formats: ['jpeg', 'webp']
		},
		{
			size: 768,
			id: '768',
			formats: ['jpeg', 'webp']
		},
		{
			size: 1024,
			id: '1024',
			formats: ['jpeg', 'webp']
		},
		{
			size: 1366,
			id: '1366',
			formats: ['jpeg', 'webp']
		},
		{
			size: 1600,
			id: '1600',
			formats: ['jpeg', 'webp']
		},
		{
			size: 1920,
			id: '1920',
			formats: ['jpeg', 'webp']
		},
		{
			size: null,
			id: 'full',
			formats: ['jpeg', 'webp']
		}
	];

	const name = getName(path);

	console.log('name', name);

	for (const { size, id, formats } of WIDTHS) {
		for (const format of formats) {
			console.log(`processing ${name}-${id}.${format}...`);
			sharp(join(IN_DIRECTORY.pathname, path))
				.resize({
					width: size
				})
				.toFormat(format)
				.toFile(join(OUT_DIRECTORY.pathname, `${name}-${id}.${format}`));
		}
	}
}

console.log('saving...');
