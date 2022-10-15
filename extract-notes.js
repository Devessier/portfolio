import { readFileSync, writeFileSync } from 'fs';
import slugify from 'slugify';

const notesFileContent = readFileSync('./src/routes/_notes/index.svx', 'utf-8');

const [, allNotesString] = notesFileContent.split('<!-- NOTES -->');

const notes = allNotesString
	.trim()
	.split('<Note')
	.filter((string) => string.length > 0);

for (const note of notes) {
	const noteWithoutEndingTag = note.replace('\n\n</Note>', '').trim();

	const result = /datetime="(?<datetime>.+)">\n\n## (?<title>.+)\n\n(?<note>[\s\S]+)/.exec(
		noteWithoutEndingTag
	);
	if (result === null || result.groups === undefined) {
		throw new Error('Wtf result!');
	}

	const { datetime, title, note: content } = result.groups;
	const sluggifiedTitle = slugify(title, {
		lower: true,
		strict: true
	});

	// console.log({
	// 	datetime,
	// 	title: sluggifiedTitle,
	// 	content
	// });

	const newNoteContent = `---
title: ${title}
datetime: ${datetime}
---

${content}
`;

	writeFileSync(`./src/routes/note/${sluggifiedTitle}.svx`, newNoteContent);
}
