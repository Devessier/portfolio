/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export type WritingPreview = {
	title: string;
	slug: string;
	description: string;
	datetime: string;
	tags: string[];
};

export interface Tag {
	title: string;
	slug: string;
}

export interface ArticlePreview {
	title: string;
	description: string;
	datetime: string;
	formattedDatetime: string;
	slug: string;
	tags: Tag[];
}
