import {
	faAngleLeft,
	faAngleRight,
	faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import useEmblaCarousel from "embla-carousel-react";
import ExportedImage from "next-image-export-optimizer";
import { useCallback, useEffect, useState } from "react";
import { BASE_PATH, assetPath } from "../lib/assets";
import type { ContentType, Slide } from "../types/content";
import { photography, portfolio } from "./content";
import { NavSpacer } from "./nav";

function Carousel({
	slides,
	projectKey,
	title,
}: {
	slides: Slide[];
	projectKey: number;
	title: string;
}) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
	const scrollTo = useCallback(
		(index: number) => emblaApi?.scrollTo(index),
		[emblaApi],
	);

	useEffect(() => {
		if (!emblaApi) return;

		setScrollSnaps(emblaApi.scrollSnapList());

		const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
		emblaApi.on("select", onSelect);
		onSelect();

		return () => {
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi]);

	const totalSlides = slides.length;

	return (
		<section
			className="embla relative max-w-7xl mx-auto"
			aria-roledescription="carousel"
			aria-label={`Slides for ${title}`}
		>
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex">
					{slides.map((slide) => (
						<div
							className="flex-[0_0_100%] min-w-0"
							key={`project-${projectKey}-slide-${slide.key}`}
						>
							{slideContent(slide, title)}
						</div>
					))}
				</div>
			</div>

			<button
				type="button"
				className="embla-arrow left-2 md:left-8"
				onClick={scrollPrev}
				aria-label="Previous slide"
			>
				<Icon icon={faAngleLeft} />
			</button>
			<button
				type="button"
				className="embla-arrow right-2 md:right-8"
				onClick={scrollNext}
				aria-label="Next slide"
			>
				<Icon icon={faAngleRight} />
			</button>

			<div className="embla-dots">
				{scrollSnaps.map((snap, index) => (
					<button
						type="button"
						key={`dot-${projectKey}-${snap}`}
						className={`embla-dot${index === selectedIndex ? " embla-dot-active" : ""}`}
						onClick={() => scrollTo(index)}
						aria-label={`Go to slide ${index + 1} of ${totalSlides}`}
					/>
				))}
			</div>
		</section>
	);
}

function slideContent(slide: Slide, title: string) {
	return (
		<div className="flex flex-col justify-center content-center my-4 max-h-[80vh] w-11/12 max-w-240 mx-auto">
			{slide.type === "image" && (
				<ExportedImage
					className="object-contain"
					src={slide.ssrc}
					alt={title}
					width={1280}
					height={720}
					basePath={BASE_PATH}
				/>
			)}
			{slide.type === "video" && (
				<video
					autoPlay
					loop
					muted
					playsInline // Capitalization to get it through NextJS to the browser
					preload="metadata"
					poster={assetPath(slide.psrc)}
					src={assetPath(slide.ssrc)}
					className="drop-shadow-lg rounded-lg"
				/>
			)}
		</div>
	);
}

export default function Projects({ content }: { content?: ContentType }) {
	const projects = content === "photography" ? photography : portfolio;

	return (
		<>
			<NavSpacer bg={projects[0].color} className="hidden md:block" />

			{projects.map(
				({
					key: projectKey,
					location,
					year,
					title,
					description,
					link,
					credit,
					credit_link,
					color,
					slides,
				}) => (
					<div key={`project-${projectKey}`} style={{ background: color }}>
						<div className="flex justify-between text-sm md:text-md uppercase px-5 md:px-10 py-8 -mb-8">
							<span>
								{location}, {year}
							</span>
						</div>

						{slides.length < 2 ? (
							slides.map((slide) => (
								<div key={`project-${projectKey}-slide-${slide.key}`}>
									{slideContent(slide, title)}
								</div>
							))
						) : (
							<Carousel slides={slides} projectKey={projectKey} title={title} />
						)}

						<div className="pb-16 px-5 md:px-10 mx-auto w-full md:max-w-prose">
							<h2 className="text-2xl font-serif pb-2">{title}</h2>
							<p>{description}</p>
							{link && (
								<a
									href={link}
									className="mt-2 flex items-center"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Icon
										className="fill-current inline h-3 w-3 mr-2"
										icon={faExternalLinkAlt}
									/>
									{title}
								</a>
							)}
							{credit && (
								<p className="mt-2 text-xs text-blue-lightest">
									{credit_link ? (
										<a
											href={credit_link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{credit}
										</a>
									) : (
										credit
									)}
								</p>
							)}
						</div>
					</div>
				),
			)}
		</>
	);
}
