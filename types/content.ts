export type ImageSlide = {
	key: number;
	type: "image";
	ssrc: string;
	zsrc: string;
};

export type VideoSlide = {
	key: number;
	type: "video";
	ssrc: string;
	psrc: string;
};

export type YoutubeSlide = {
	key: number;
	type: "youtube";
	ssrc: string;
	zsrc: string;
};

export type Slide = ImageSlide | VideoSlide | YoutubeSlide;

export type Project = {
	key: number;
	client: string;
	location: string;
	year: number;
	title: string;
	description: string;
	color: string;
	slides: Slide[];
	link?: string;
	credit?: string;
	credit_link?: string;
};

export type ContentType = "photography" | "portfolio";
