import sade from 'sade';
import dedent from 'dedent';
import slugify from 'slugify';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const prog = sade('drone');

prog.version('1.0.0');

function generateBlogPostTemplate(blogPostName) {
	return dedent`
---
title: ${blogPostName}
description: Blog post description
datetime: ${new Date().toISOString()}
tags: ['Temporal']
---

Hi from **${blogPostName}** article!
	`;
}

prog
	.command('generate-article <title>')
	.describe('Scaffold a blog post using a predefined template')
	.example("generate-article 'My journey as a Vue.js developer'")
	.action(async (title) => {
		const WRITING_DIRECTORY = new URL('src/routes/writing', import.meta.url);
		const template = generateBlogPostTemplate(title);
		const slug = slugify(title, {
			lower: true
		});

		const blogPostPath = join(WRITING_DIRECTORY.pathname, `${slug}.svx`);

		await writeFile(blogPostPath, template);

		console.log(`Blog post has been generated at ${blogPostPath}`);
	});

prog.parse(process.argv);
