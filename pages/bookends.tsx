import {
	faAngleLeft,
	faAngleRight,
	faCalendarCheck,
	faClock,
	faFlask,
	faSliders,
	faXmark,
	type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import useEmblaCarousel from "embla-carousel-react";
import Head from "next/head";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Main from "../components/main";
import Nav, { NavSpacer } from "../components/nav";
import { assetPath, BASE_PATH } from "../lib/assets";

const themeColor = "#276254";
const assets = "/assets/case-studies/bookends";
const summary =
	"When home is also the office, what tells you the workday is over? Bookends is a service design proposal that gives remote workers a standing invitation to their local library and a reason to step away.";

const storyboards = [
	{
		image: "board-1.png",
		title: "Emily finds a stopping point",
		caption:
			"A Thursday booking gives Emily a reason to close her laptop. At the library she picks up a book she can talk about with colleagues.",
	},
	{
		image: "board-2.png",
		title: "Tom gets a little company",
		caption:
			"After a long day alone, Tom settles in with a book and exchanges a few words with librarians and neighbours.",
	},
	{
		image: "board-3.png",
		title: "Farah tries a future version",
		caption:
			"A suggested walking route, familiar faces and a coffee on arrival make the visit feel easy and welcoming.",
	},
];

function StorySection({
	title,
	text,
	detail,
	icon,
	alternate = false,
}: {
	title: string;
	text: string;
	detail?: string;
	icon: IconDefinition;
	alternate?: boolean;
}) {
	return (
		<section className={alternate ? "bg-gray" : "bg-gray-dark"}>
			<div className="mx-auto grid max-w-5xl gap-4 px-5 py-12 sm:grid-cols-[5.5rem_1fr] sm:gap-6 md:px-10 md:py-16">
				<Icon
					icon={icon}
					aria-hidden="true"
					className="text-5xl text-emerald-200 sm:mt-1 sm:text-7xl"
				/>
				<div>
					<h2 className="text-pretty font-serif text-2xl font-bold md:text-3xl">
						{title}
					</h2>
					<p className="mt-3 max-w-prose text-pretty leading-relaxed md:text-lg">
						{text}
					</p>
					{detail && (
						<p className="mt-3 max-w-prose text-pretty leading-relaxed md:text-lg">
							{detail}
						</p>
					)}
				</div>
			</div>
		</section>
	);
}

export default function Bookends() {
	const viewerRef = useRef<HTMLDialogElement>(null);
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const [activeBoardIndex, setActiveBoardIndex] = useState(0);
	const activeBoard = storyboards[activeBoardIndex];

	useEffect(() => {
		if (!emblaApi) return;

		const updateActiveBoard = () =>
			setActiveBoardIndex(emblaApi.selectedScrollSnap());
		emblaApi.on("select", updateActiveBoard);

		return () => {
			emblaApi.off("select", updateActiveBoard);
		};
	}, [emblaApi]);

	return (
		<Layout>
			<Head>
				<title>Case Study: Bookends - Dave Cutter</title>
				<meta name="description" content={summary} />
				<meta property="og:title" content="Bookends - Dave Cutter" />
				<meta property="og:description" content={summary} />
			</Head>

			<Main>
				<Nav />
				<NavSpacer bg={themeColor} className="hidden md:block" />

				<article>
					<header
						className="px-5 py-12 md:px-10 md:py-20"
						style={{
							backgroundColor: themeColor,
							backgroundImage: `linear-gradient(150deg, color-mix(in srgb, ${themeColor} 90%, black), ${themeColor})`,
						}}
					>
						<div className="mx-auto max-w-5xl">
							<p className="mb-4 text-sm uppercase tracking-[0.2em]">
								Case Study
							</p>
							<h1 className="font-serif text-5xl font-bold leading-[0.95] md:text-7xl lg:text-8xl">
								Bookends
							</h1>
							<p className="mt-4 max-w-prose text-pretty text-lg leading-relaxed md:text-2xl">
								Community service design for isolated remote workers
							</p>
							<Link
								href="/portfolio"
								className="mt-6 inline-flex items-center gap-2 text-base text-white hover:underline"
							>
								<Icon icon={faAngleLeft} />
								Back to portfolio
							</Link>
						</div>
					</header>

					<section
						aria-label="Project summary"
						className="bg-white px-5 py-10 text-gray md:px-10 md:py-16"
					>
						<div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[2fr_1fr]">
							<p className="text-pretty text-xl leading-relaxed md:text-2xl">
								{summary}
							</p>
							<div className="border-t border-gray-light/30 pt-4 md:border-l md:border-t-0 md:pl-8">
								<p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-gray-light">
									2023 project
								</p>
								<p>Service design and behavioural public policy</p>
							</div>
						</div>
					</section>

					<StorySection
						icon={faClock}
						title="When does the workday end?"
						text="Leaving the office gives the workday a clear ending. At home, the laptop is still within reach, one more email can stretch into the evening, and a day of calls can pass without a casual conversation. I saw an opportunity for local libraries to offer both a reason to log off and a familiar place to spend time in the neighbourhood."
					/>
					<StorySection
						alternate
						icon={faCalendarCheck}
						title="Book once, visit each week"
						text="Employers would share the invitation through their wellbeing programmes. Workers would opt in through a short online form and choose a branch, a work-from-home day and a time. Each week, a reading nook would be held in their name and a reminder would show them where to go and what’s waiting."
						detail="The state would build a shared platform that connects to existing library reservation systems, and library staff would add reading nooks alongside bookable spaces like meeting rooms. The reservation renews automatically, so at the end of the workday there’s already a chair, a reading light and a book waiting."
					/>

					<section className="bg-gray-dark px-5 py-12 md:px-10 md:py-16">
						<div className="mx-auto max-w-5xl">
							<h2 className="font-serif text-2xl font-bold md:text-3xl">
								Three people, three possibilities
							</h2>
							<div className="mt-5 grid gap-6 lg:grid-cols-3">
								{storyboards.map((board) => {
									const { image, title, caption } = board;
									const src = `${assets}/${image}`;
									return (
										<figure key={image}>
											<button
												type="button"
												className="block w-full cursor-zoom-in rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
												aria-label={`View full-size storyboard: ${title}`}
												aria-haspopup="dialog"
												onClick={(event) => {
													const viewer = viewerRef.current;
													if (!viewer) return;
													event.currentTarget.focus();
													const boardIndex = storyboards.indexOf(board);
													flushSync(() => setActiveBoardIndex(boardIndex));
													viewer.showModal();
													viewer.scrollTop = 0;
													window.requestAnimationFrame(() => {
														emblaApi?.reInit();
														emblaApi?.scrollTo(boardIndex, true);
													});
												}}
											>
												<ExportedImage
													src={src}
													alt={`Six-panel storyboard. ${caption}`}
													width={4412}
													height={5082}
													basePath={BASE_PATH}
													placeholder="empty"
													className="block h-auto w-full rounded-sm"
													sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw"
												/>
											</button>
											<figcaption className="mt-3 text-pretty leading-relaxed">
												<h3 className="font-bold">{title}</h3>
												<p>{caption}</p>
											</figcaption>
										</figure>
									);
								})}
							</div>
						</div>
					</section>

					<dialog
						ref={viewerRef}
						aria-labelledby="storyboard-viewer-title"
						className="m-auto max-h-[94dvh] w-[96vw] max-w-5xl overflow-y-auto overscroll-contain rounded-md bg-gray-dark p-0 text-white backdrop:bg-black/80"
					>
						<div className="sticky top-0 flex items-center justify-between gap-3 bg-gray-dark px-4 py-2">
							<h2 id="storyboard-viewer-title" className="font-bold">
								{activeBoard?.title}
							</h2>
							<div className="flex shrink-0 items-center">
								<button
									type="button"
									className="grid size-11 cursor-pointer place-items-center rounded-md text-2xl hover:bg-gray focus-visible:outline-2 focus-visible:outline-white"
									onClick={() => emblaApi?.scrollPrev()}
									aria-label="Previous storyboard"
								>
									<Icon icon={faAngleLeft} aria-hidden="true" />
								</button>
								<button
									type="button"
									className="grid size-11 cursor-pointer place-items-center rounded-md text-2xl hover:bg-gray focus-visible:outline-2 focus-visible:outline-white"
									onClick={() => emblaApi?.scrollNext()}
									aria-label="Next storyboard"
								>
									<Icon icon={faAngleRight} aria-hidden="true" />
								</button>
								<span
									className="mx-2 h-8 w-px bg-white/40"
									aria-hidden="true"
								/>
								<form method="dialog">
									<button
										type="submit"
										aria-label="Close storyboard"
										className="grid size-11 cursor-pointer place-items-center rounded-md text-2xl hover:bg-gray focus-visible:outline-2 focus-visible:outline-white"
									>
										<Icon icon={faXmark} aria-hidden="true" />
									</button>
								</form>
							</div>
						</div>
						<section
							className="embla"
							aria-label="Storyboards"
							aria-roledescription="carousel"
						>
							<div className="overflow-hidden" ref={emblaRef}>
								<ul className="m-0 flex list-none p-0">
									{storyboards.map((board, index) => (
										<li
											key={board.image}
											className="min-w-0 flex-[0_0_100%]"
											aria-roledescription="slide"
											aria-label={`Slide ${index + 1} of ${storyboards.length}`}
											aria-hidden={index !== activeBoardIndex}
											inert={index !== activeBoardIndex}
										>
											<ExportedImage
												src={`${assets}/${board.image}`}
												alt={`Six-panel storyboard. ${board.caption}`}
												width={4412}
												height={5082}
												basePath={BASE_PATH}
												placeholder="empty"
												className="block max-h-[82dvh] h-auto w-full object-contain"
												sizes="100vw"
											/>
										</li>
									))}
								</ul>
							</div>
						</section>
					</dialog>

					<StorySection
						alternate
						icon={faFlask}
						title="Testing the idea in Kingston"
						text="I proposed Kingston Libraries as a pilot site because it has a centrally managed network of suburban branches in an area with many remote workers. Two groups would make up an effectiveness study. One group would get advice on switching off and instructions for booking library space. The other group would get the same support plus access to recurring reservations. Together, the two groups would provide a clear comparison: sign-ups, visit frequency and duration, and missed bookings would show how people used the service. Surveys and interviews would explore whether it helped people switch off or feel more connected."
					/>
					<StorySection
						icon={faSliders}
						title="Keep the choice with visitors"
						text="Make the online form accessible, explain how weekly bookings work before people opt in, and make cancellation as easy as signing up. Offer paper and in-person registration, and work with residents and library staff to make sure the service fits alongside existing library use. Visitors decide how to spend the time, whether it’s reading quietly or chatting with a neighbour."
					/>

					<section className="bg-white px-5 py-10 text-gray md:px-10 md:py-16">
						<div className="mx-auto max-w-5xl">
							<h2 className="font-serif text-2xl font-bold">Further reading</h2>
							<ul className="mt-4 space-y-2">
								<li>
									<a
										className="underline underline-offset-4"
										href="https://doi.org/10.1080/1359432X.2018.1541886"
									>
										Remote work and wellbeing
									</a>{" "}
									· Charalampous et al., 2019
								</li>
								<li>
									<a
										className="underline underline-offset-4"
										href="https://doi.org/10.1016/j.lisr.2015.01.001"
									>
										Libraries as shared spaces
									</a>{" "}
									· Di Marino and Lapintie, 2015
								</li>
								<li>
									<a
										className="underline underline-offset-4"
										href="https://www.penguin.co.uk/books/56784/nudge-by-richard-h-thaler-cass-r-sunstein/9780141999937"
									>
										Nudge
									</a>{" "}
									· Thaler and Sunstein
								</li>
							</ul>
							<p className="mt-6">
								Read the{" "}
								<a
									className="underline underline-offset-4"
									href={assetPath(
										"/assets/case-studies/bookends/bookends-2023.pdf",
									)}
								>
									full Bookends proposal (PDF)
								</a>
								.
							</p>
							<Link
								href="/portfolio"
								className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-md bg-gray-dark px-6 py-4 font-bold uppercase tracking-wide text-white hover:bg-blue-light"
							>
								<Icon icon={faAngleLeft} />
								Back to portfolio
							</Link>
						</div>
					</section>
				</article>

				<div className="bg-gray shadow-inner md:hidden">
					<Footer />
				</div>
			</Main>
		</Layout>
	);
}
