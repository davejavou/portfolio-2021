export type ImageSlide = {
	key: number;
	type: "image";
	ssrc: string;
	zsrc: string;
};

export type LaptopSlide = {
	key: number;
	type: "laptop";
	ssrc: string;
	scrollable?: boolean;
	imageHeight?: number;
};

export type BeforeAfterSlide = {
	key: number;
	type: "before-after";
	beforeSrc: string;
	afterSrc: string;
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

export type Slide =
	| ImageSlide
	| LaptopSlide
	| BeforeAfterSlide
	| VideoSlide
	| YoutubeSlide;

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
	caseStudy?: string;
	credit?: string;
	credit_link?: string;
};

export type ContentType = "photography" | "portfolio";
