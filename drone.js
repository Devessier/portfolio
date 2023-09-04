import sade from 'sade';
import outdent from 'outdent';
import slugify from 'slugify';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const prog = sade('drone');

prog.version('1.0.0');

function generateBlogPostTemplate(blogPostName) {
	return outdent`
		---
		title: ${blogPostName}
		description: Blog post description
		datetime: ${new Date().toISOString()}
		tags: ['Temporal']
		---

		Hi from **${blogPostName}** article!

	`;
}

function generateNoteTemplate(noteName) {
	return outdent`
		---
		title: ${noteName}
		datetime: ${new Date().toISOString()}
		---

		Hi from **${noteName}**!

	`;
}

const WRITING_DIRECTORY = new URL('src/routes/(portfolio)/writing', import.meta.url);
const NOTES_DIRECTORY = new URL('src/routes/(portfolio)/note', import.meta.url);

prog
	.command('generate-article <title>')
	.describe('Scaffold a blog post using a predefined template')
	.example("generate-article 'My journey as a Vue.js developer'")
	.action(async (title) => {
		const template = generateBlogPostTemplate(title);
		const slug = slugify(title, {
			lower: true
		});

		const blogPostPath = join(WRITING_DIRECTORY.pathname, `${slug}.svx`);

		await writeFile(blogPostPath, template);

		console.log(`Blog post has been generated at ${blogPostPath}`);
	});

prog
	.command('update-article-datetime <title>')
	.describe('Update the datetime of a blog post')
	.example("update-article-datetime 'My journey as a Vue.js developer'")
	.action(async (title) => {
		const filePath = join(WRITING_DIRECTORY.pathname, `${title}.svx`);
		const fileContent = await readFile(filePath, 'utf8');
		const fileContentLines = fileContent.split('\n');

		const datetimeLine = fileContentLines.find((line) => line.includes('datetime:'));
		if (datetimeLine !== undefined) {
			const currentDateTime = new Date().toISOString();

			const newFileContent = fileContentLines.map((line) => {
				if (line.startsWith('datetime:')) {
					return `datetime: ${currentDateTime}`;
				}

				return line;
			});

			await writeFile(filePath, newFileContent.join('\n'));
		}
	});

prog
	.command('create-note <title>')
	.describe('Create a note')
	.example("create-note 'Always set expiration parameter with AWS S3'")
	.action(async (title) => {
		const template = generateNoteTemplate(title);
		const slug = slugify(title, {
			lower: true
		});

		const notePath = join(NOTES_DIRECTORY.pathname, `${slug}.svx`);

		await writeFile(notePath, template);

		console.log(`Note has been generated at ${notePath}`);
	});

prog
	.command('feed-series-config <series-config>')
	.describe('Fetches data about articles of a series and replace the series config')
	.example('feed-series-config ./src/routes/writing/_series/turing-visualizer.json')
	.action(async (seriesConfigPath) => {
		const rawConfig = await readFile(seriesConfigPath, 'utf8');
		/** @type {{ parts: { slug: string; title?: string }[] }}  */
		const parsedConfig = JSON.parse(rawConfig);

		for (const [index, { slug }] of parsedConfig.parts.entries()) {
			const pathToArticle = join(WRITING_DIRECTORY.pathname, `${slug}.svx`);
			const articleContent = await readFile(pathToArticle, 'utf8');

			const title = articleContent.match(/title: (.*)/)[1];
			if (typeof title !== 'string') {
				throw new Error('title must be defined in frontmatter');
			}

			parsedConfig.parts[index].title = title;
		}

		await writeFile(seriesConfigPath, JSON.stringify(parsedConfig, null, 4));
	});

prog.parse(process.argv);
