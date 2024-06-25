/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export type WritingPreview = {
	title: string;
	description?: string;
	datetime: string;
	tags: string[];
} & (
	| {
			external: true;
			url: string;
			slug?: undefined;
	  }
	| {
			external?: undefined;
			url?: undefined;
			slug: string;
	  }
);

export interface YoutubeVideo {
	id: string;
	title: string;
}

export interface Tag {
	title: string;
	slug: string;
}

export type ArticlePreview = {
	title: string;
	description?: string;
	datetime: string;
	formattedDatetime: string;
	tags: Tag[];
} & (
	| {
			external: true;
			url: string;
			slug: undefined;
	  }
	| {
			external: undefined;
			url: undefined;
			slug: string;
	  }
);

export interface TalkPreview {
	title: string;
	description: string;
	datetime: string;
	tags: string[];
	link: string;
}

export interface TalkPreviewFormatted {
	title: string;
	description: string;
	datetime: string;
	formattedDatetime: string;
	tags: string[];
	link: string;
}

export type NotePreview = {
	title: string;
	slug: string;
	datetime: string;
};
