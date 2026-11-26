import {
	faAngleLeft,
	faAngleRight,
	faArrowsLeftRight,
	faExternalLinkAlt,
	faPause,
	faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import {
	type ReactNode,
	type PointerEvent as ReactPointerEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { assetPath, BASE_PATH } from "../lib/assets";
import type {
	BeforeAfterSlide,
	ContentType,
	LaptopSlide,
	Slide,
	VideoSlide,
} from "../types/content";
import { photography, portfolio } from "./content";
import { NavSpacer } from "./nav";
import { useProjectCarousel } from "./use-project-carousel";

export function ProjectCarousel({
	slides,
	projectKey,
	carouselId,
	eagerSlideKey,
	title,
}: {
	slides: Slide[];
	projectKey: number;
	carouselId: string;
	eagerSlideKey?: number;
	title: string;
}) {
	const {
		emblaRef,
		selectedIndex,
		scrollSnaps,
		loadedSlides,
		scrollPrev,
		scrollNext,
		scrollTo,
	} = useProjectCarousel({ carouselId, slideCount: slides.length });

	const totalSlides = slides.length;
	const viewportRef = useRef<HTMLDivElement>(null);
	const [viewportHeight, setViewportHeight] = useState<number>();
	const setViewportRef = useCallback(
		(element: HTMLDivElement | null) => {
			viewportRef.current = element;
			emblaRef(element);
		},
		[emblaRef],
	);
	const isLaptopCarousel = slides.every(
		(slide) => slide.type === "laptop" || slide.type === "before-after",
	);

	useEffect(() => {
		const viewport = viewportRef.current;
		if (!viewport || !loadedSlides.has(selectedIndex)) {
			setViewportHeight(undefined);
			return;
		}

		const selectedSlide =
			viewport.firstElementChild?.children.item(selectedIndex);
		if (!(selectedSlide instanceof HTMLElement)) {
			setViewportHeight(undefined);
			return;
		}

		const media = selectedSlide.querySelector<HTMLElement>(
			"[data-carousel-media]",
		);
		const content = selectedSlide.querySelector<HTMLElement>(
			"[data-carousel-content]",
		);
		if (!media || !content) {
			setViewportHeight(undefined);
			return;
		}

		const mobileQuery = window.matchMedia("(max-width: 639px)");
		const updateViewportHeight = () => {
			if (!mobileQuery.matches) {
				setViewportHeight(undefined);
				return;
			}

			const contentStyle = getComputedStyle(content);
			const margins =
				Number.parseFloat(contentStyle.marginTop) +
				Number.parseFloat(contentStyle.marginBottom);
			const height = media.getBoundingClientRect().height + margins;
			if (height > 0) {
				setViewportHeight(height);
			}
		};

		const resizeObserver = new ResizeObserver(updateViewportHeight);
		resizeObserver.observe(media);
		mobileQuery.addEventListener("change", updateViewportHeight);
		updateViewportHeight();

		return () => {
			resizeObserver.disconnect();
			mobileQuery.removeEventListener("change", updateViewportHeight);
		};
	}, [loadedSlides, selectedIndex]);

	return (
		<section
			className={`embla relative max-w-7xl mx-auto${isLaptopCarousel ? " embla-laptop" : ""}`}
			aria-roledescription="carousel"
			aria-label={`Slides for ${title}`}
		>
			<div
				className="overflow-hidden"
				ref={setViewportRef}
				style={viewportHeight ? { height: `${viewportHeight}px` } : undefined}
			>
				<div className="flex">
					{slides.map((slide, index) =>
						loadedSlides.has(index) ? (
							<section
								className="flex-[0_0_100%] min-w-0"
								key={`project-${projectKey}-slide-${slide.key}`}
								aria-roledescription="slide"
								aria-label={`Slide ${index + 1} of ${totalSlides}`}
								aria-hidden={index !== selectedIndex}
								inert={index !== selectedIndex}
							>
								{slideContent(
									slide,
									title,
									slide.type !== "video" && slide.key === eagerSlideKey
										? "eager"
										: "lazy",
									true,
								)}
							</section>
						) : (
							<section
								className="flex-[0_0_100%] min-w-0"
								key={`project-${projectKey}-slide-${slide.key}`}
								aria-roledescription="slide"
								aria-label={`Slide ${index + 1} of ${totalSlides}`}
								aria-hidden={index !== selectedIndex}
								inert={index !== selectedIndex}
							>
								{/* Placeholder for unloaded slide */}
								<div
									className={`mx-auto mt-0 mb-2 max-h-[80vh] w-11/12 max-w-240 ${
										slide.type === "laptop" || slide.type === "before-after"
											? "aspect-[73/54]"
											: "aspect-video"
									}`}
									style={
										slide.type === "laptop" || slide.type === "before-after"
											? { maxWidth: "min(60rem, 108vh)" }
											: undefined
									}
									data-carousel-content
									data-carousel-media
								>
									<div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-200 animate-pulse">
										Loading...
									</div>
								</div>
							</section>
						),
					)}
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

function slideContent(
	slide: Slide,
	title: string,
	loading: "eager" | "lazy" = "lazy",
	isCarousel = false,
) {
	if (slide.type === "laptop") {
		return <LaptopDisplay slide={slide} title={title} loading={loading} />;
	}

	if (slide.type === "before-after") {
		return <BeforeAfterDisplay slide={slide} title={title} loading={loading} />;
	}

	return (
		<div
			className={`flex flex-col ${
				slide.type === "video"
					? `justify-start ${isCarousel ? "mt-8" : "mt-12"}`
					: "justify-center mt-0"
			} content-center mb-2 max-h-[80vh] w-11/12 max-w-240 mx-auto items-center h-auto sm:h-full`}
			data-carousel-content
		>
			{slide.type === "image" && (
				<ExportedImage
					className="object-contain"
					src={slide.ssrc}
					alt={title}
					width={1280}
					height={720}
					basePath={BASE_PATH}
					placeholder="empty"
					loading={loading}
					data-carousel-media
				/>
			)}
			{slide.type === "video" && <AutoplayVideo slide={slide} />}
		</div>
	);
}

function LaptopFrame({
	children,
	loading,
	control,
}: {
	children: ReactNode;
	loading: "eager" | "lazy";
	control?: ReactNode;
}) {
	return (
		<div
			className="relative mx-auto mt-0 mb-2 aspect-[73/54] w-11/12 max-w-240"
			style={{ maxWidth: "min(60rem, 108vh)" }}
			data-carousel-content
			data-carousel-media
		>
			<ExportedImage
				className="absolute inset-0 h-full w-full"
				src="/assets/images/laptop.png"
				alt=""
				width={7300}
				height={5400}
				basePath={BASE_PATH}
				placeholder="empty"
				loading={loading}
			/>
			<div className="absolute left-[14.8%] top-[18.1%] z-10 h-[58.2%] w-[70.1%] overflow-hidden bg-[#333]">
				{children}
			</div>
			{control}
		</div>
	);
}

function LaptopDisplay({
	slide,
	title,
	loading,
}: {
	slide: LaptopSlide;
	title: string;
	loading: "eager" | "lazy";
}) {
	const scrollDrag = useRef<{
		pointerId: number;
		clientY: number;
		scrollTop: number;
	} | null>(null);
	const [isDragging, setIsDragging] = useState(false);
	const image = (
		<ExportedImage
			className={
				slide.scrollable
					? "block h-auto w-full max-w-none select-none"
					: "absolute left-0 top-0 h-auto w-full max-w-none select-none"
			}
			src={slide.ssrc}
			alt={`${title} screen`}
			width={1280}
			height={slide.imageHeight ?? 720}
			basePath={BASE_PATH}
			placeholder="empty"
			loading={loading}
			draggable={false}
		/>
	);
	const handlePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
		if (
			!slide.scrollable ||
			event.pointerType !== "mouse" ||
			event.button !== 0
		) {
			return;
		}

		event.preventDefault();
		scrollDrag.current = {
			pointerId: event.pointerId,
			clientY: event.clientY,
			scrollTop: event.currentTarget.scrollTop,
		};
		event.currentTarget.setPointerCapture(event.pointerId);
		setIsDragging(true);
	};
	const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
		const drag = scrollDrag.current;
		if (!drag || drag.pointerId !== event.pointerId) return;

		event.preventDefault();
		event.currentTarget.scrollTop =
			drag.scrollTop - (event.clientY - drag.clientY);
	};
	const handlePointerEnd = (event: ReactPointerEvent<HTMLElement>) => {
		if (scrollDrag.current?.pointerId !== event.pointerId) return;

		scrollDrag.current = null;
		setIsDragging(false);
	};

	const screen = slide.scrollable ? (
		<section
			className={`laptop-screen-scroll absolute inset-0 overflow-y-auto ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
			aria-label={`Scrollable screen for ${title}`}
			data-embla-no-drag
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerEnd}
			onPointerCancel={handlePointerEnd}
			onLostPointerCapture={handlePointerEnd}
		>
			{image}
		</section>
	) : (
		image
	);

	return <LaptopFrame loading={loading}>{screen}</LaptopFrame>;
}

function BeforeAfterDisplay({
	slide,
	title,
	loading,
}: {
	slide: BeforeAfterSlide;
	title: string;
	loading: "eager" | "lazy";
}) {
	const [position, setPosition] = useState(85);
	const [isAnimating, setIsAnimating] = useState(false);

	return (
		<LaptopFrame
			loading={loading}
			control={
				<button
					className="before-after-toggle absolute left-1/2 z-30 -translate-x-1/2 rounded bg-black/80 px-3 py-3 text-xs font-bold uppercase text-white shadow transition-colors hover:bg-blue-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
					type="button"
					onClick={() => {
						setIsAnimating(true);
						setPosition(position < 50 ? 100 : 0);
					}}
					data-embla-no-drag
					aria-label={position < 50 ? "Show before" : "Show after"}
				>
					{position < 50 ? "Show before" : "Show after"}
				</button>
			}
		>
			<ExportedImage
				className="absolute left-0 top-0 h-auto w-full max-w-none select-none"
				src={slide.beforeSrc}
				alt={`${title} before`}
				width={1280}
				height={786}
				basePath={BASE_PATH}
				placeholder="empty"
				loading={loading}
				draggable={false}
			/>
			<div
				className={`absolute inset-0 overflow-hidden${isAnimating ? " before-after-clip-animated" : ""}`}
				style={{ clipPath: `inset(0 0 0 ${position}%)` }}
				onTransitionEnd={(event) => {
					if (event.propertyName === "clip-path") {
						setIsAnimating(false);
					}
				}}
			>
				<ExportedImage
					className="absolute left-0 top-0 h-auto w-full max-w-none select-none"
					src={slide.afterSrc}
					alt={`${title} after`}
					width={1280}
					height={786}
					basePath={BASE_PATH}
					placeholder="empty"
					loading={loading}
					draggable={false}
				/>
			</div>
			<input
				className="before-after-range"
				type="range"
				min={0}
				max={100}
				value={position}
				onChange={(event) => {
					setIsAnimating(false);
					setPosition(Number(event.currentTarget.value));
				}}
				onPointerDown={() => setIsAnimating(false)}
				onKeyDown={() => setIsAnimating(false)}
				data-embla-no-drag
				aria-label={`${title} before and after comparison`}
				aria-valuetext={`${100 - position}% after visible`}
			/>
			<div
				className={`before-after-divider${isAnimating ? " before-after-divider-animated" : ""}`}
				style={{ left: `${position}%` }}
				aria-hidden="true"
			>
				<span className="before-after-divider-handle">
					<Icon
						icon={faArrowsLeftRight}
						size="xs"
						className="text-white"
						aria-hidden="true"
					/>
				</span>
			</div>
		</LaptopFrame>
	);
}

function AutoplayVideo({ slide }: { slide: VideoSlide }) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [playbackError, setPlaybackError] = useState(false);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					void video.play().catch(() => undefined);
				} else {
					video.pause();
				}
			},
			{ threshold: 0.25 },
		);

		observer.observe(video);

		return () => {
			observer.disconnect();
			video.pause();
		};
	}, []);

	return (
		<div className="relative w-full">
			<video
				ref={videoRef}
				data-carousel-media
				controls={false}
				loop
				muted
				playsInline // Capitalization to get it through NextJS to the browser
				preload="none"
				poster={assetPath(slide.psrc)}
				src={assetPath(slide.ssrc)}
				className="block h-auto max-w-full drop-shadow-lg rounded-lg"
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
			/>
			<button
				type="button"
				className="absolute bottom-4 right-4 flex size-14 items-center justify-center rounded-full bg-black/70 text-white shadow-lg hover:bg-black/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
				onClick={() => {
					const video = videoRef.current;
					if (!video) return;

					setPlaybackError(false);
					if (video.paused) {
						void video.play().catch(() => setPlaybackError(true));
					} else {
						video.pause();
					}
				}}
				aria-label={isPlaying ? "Pause video" : "Play video"}
			>
				<Icon
					icon={isPlaying ? faPause : faPlay}
					aria-hidden="true"
					size="xl"
				/>
			</button>
			{playbackError && (
				<p className="sr-only" role="status">
					Video playback could not be started.
				</p>
			)}
		</div>
	);
}

export default function Projects({
	content,
	className,
}: {
	content?: ContentType;
	className?: string;
}) {
	const contentType = content ?? "portfolio";
	const projects = contentType === "photography" ? photography : portfolio;
	const firstCarousel = projects.find((project) => project.slides.length > 1);
	const firstCarouselVisualSlide = firstCarousel?.slides.find(
		(slide) => slide.type !== "video",
	);

	return (
		<>
			<NavSpacer bg={projects[0].color} className="hidden md:block" />

			{projects.map(
				({
					key: projectKey,
					location,
					title,
					description,
					link,
					credit,
					credit_link,
					color,
					slides,
					caseStudy,
				}) => (
					<div
						key={`project-${projectKey}`}
						style={{
							backgroundColor: color,
							backgroundImage: `linear-gradient(150deg, color-mix(in srgb, ${color} 90%, black), ${color})`,
						}}
						className={className}
					>
						<h2
							className={`px-5 md:px-10 ${
								slides.length === 1 && slides[0].type === "video"
									? "pt-12"
									: "pt-8"
							} text-2xl font-serif text-center ${
								slides.every((slide) => slide.type === "laptop")
									? "-mb-[clamp(1.5rem,7vw,3.5rem)]"
									: slides.some(
												(slide) =>
													slide.type === "image" && slide.embeddedLaptop,
											)
										? "-mb-[clamp(1rem,3vw,2rem)]"
										: ""
							}`}
						>
							{title}
						</h2>

						{slides.length < 2 ? (
							slides.map((slide) => (
								<div key={`project-${projectKey}-slide-${slide.key}`}>
									{slideContent(slide, title)}
								</div>
							))
						) : (
							<ProjectCarousel
								slides={slides}
								projectKey={projectKey}
								carouselId={`${contentType}:${projectKey}`}
								eagerSlideKey={
									projectKey === firstCarousel?.key
										? firstCarouselVisualSlide?.key
										: undefined
								}
								title={title}
							/>
						)}

						<div className="pb-16 px-5 md:px-10 mx-auto w-full md:max-w-prose pt-0">
							<p>{description}</p>
							<p className="mt-3 text-sm md:text-md uppercase">{location}</p>
							{caseStudy && (
								<div className="mt-6 flex justify-center">
									<Link
										href={caseStudy}
										className="inline-flex min-h-14 items-center justify-center rounded-md bg-gray-dark px-6 py-4 text-lg font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-blue-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
									>
										View case study
									</Link>
								</div>
							)}
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
