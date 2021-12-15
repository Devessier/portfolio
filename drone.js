import sade from 'sade';
import dedent from 'dedent';
import slugify from 'slugify';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const prog = sade('drone');

prog.version('1.0.0');

function generateBlogPostTemplate(blogPostName) {
	return (
		dedent`
---
title: ${blogPostName}
description: Blog post description
datetime: ${new Date().toISOString()}
tags: ['Temporal']
---

Hi from **${blogPostName}** article!
	` + '\n'
	);
}

const WRITING_DIRECTORY = new URL('src/routes/writing', import.meta.url);

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

prog.parse(process.argv);
