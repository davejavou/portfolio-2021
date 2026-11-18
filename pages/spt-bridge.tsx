import Head from "next/head";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Main from "../components/main";
import Nav, { MobileNav, NavSpacer } from "../components/nav";
import { ProjectCarousel } from "../components/projects";
import { portfolio } from "../components/content";
import { BASE_PATH } from "../lib/assets";

const themeColor = "#CCB100";

const sections = [
	{
		key: "bridge",
		title: "1. Problem & Business Context",
		image: "/assets/case-studies/spt-bridge/01 Bridge.png",
		alt: "SPT Bridge project overview",
		text: "SPT Bridge connects SPT devices - GPS telemetry and biometric Bluetooth hardware worn in a player's on-field jersey - to the Game Traka training platform. After every game or practice, coaches and players pair the devices to a computer and upload athletic data to well-tagged events for analysis.",
		details:
			"The current Bridge is difficult and tedious: users download files larger than 10 MB from each device, identify players by serial-number filenames, upload files to each player online, trim and segment performances, and clear the devices. We set out to automate as much of this process as possible, eliminate pain points, reduce frustration, and delight users.",
		label: "Why the redesign mattered",
		detailsTwo:
			"Moving data from the devices to the cloud is essential to the product. If the handoff is frustrating or unreliable, the rest of the analytics experience has little value. Bad or missing data harms the trust and usefulness of the whole platform.",
		bullets: [
			"Automatic download and upload, with no file handling",
			"Data changes that are lossless or revertible, never deleted",
			"Automatic timing with useful date ranges and comparisons",
			"Simplified player accounts for the coach staff who use them",
			"Useful printable views on every page",
			"Trimming and segmenting in Bridge, not in a separate system",
			"Graceful handling of device errors and easy firmware updates",
			"Compatibility with the upcoming Gametraka redesign",
		],
	},
	{
		key: "gametraka",
		title: "2. Users, Pain Points & Research",
		image: "/assets/case-studies/spt-bridge/05 Qualitative Interviews.png",
		alt: "Qualitative interview findings",
		text: "The primary users were coaches and the small coaching-staff teams who operated Bridge. Athletes and sports scientists relied on the resulting data, so each role had to be considered across the journey.",
		details:
			"Users fear losing data, find serial-number filenames difficult to reconcile, and are burdened by repeated account and device setup. Uploading usually happens late at night after all other activities, while trimming and tagging are skipped or treated as separate, exhausting jobs.",
		bullets: [
			"Coaches: clear collection, device tracking, player setup, and fast upload",
			"Athletes: confidence that effort and performance data are captured correctly",
			"Sports scientists: trustworthy, timely, well-tagged data for analysis",
			"Shared pain: complex workflows, uncertain deletion, and fear of lost data",
			"Archive rather than delete: users dislike losing data and clearing devices without reassurance",
			"Player tracking and date-range comparisons, including year-on-year views",
			"Support for player users without accounts, a highly requested coach workflow",
			"Device and player printouts for on-field sharing and collection",
			"Trimming and segmenting as part of the upload workflow",
		],
		research:
			"We ran two research modes with 20 participants: coaches, athletes, and sports scientists. Everyone completed a survey covering ways of working, priorities, pain points, and positive moments. With 10 interested participants, we conducted longer interviews and observed the tools in the field and in the locker room.",
	},
	{
		key: "journey",
		title: "3. Design Explorations & Decisions",
		image: "/assets/case-studies/spt-bridge/04 Journey Map.png",
		alt: "Journey map for the SPT Bridge experience",
		text: "With the quantitative and qualitative findings in hand, we mapped journeys for coaches, athletes, and sports scientists. The maps showed not only the golden path, but also moments of pain, delight, delay, and risk.",
		bullets: [
			"Automate download and upload rather than ask users to manage files",
			"Replace serial numbers with remembered player names and identities",
			"Archive data instead of deleting it, with reversible device-clearing steps",
			"Bring trimming and segmenting into the one upload workflow",
			"Support device, cloud, firmware, account, and lost-device error states",
			"Use player headshots and printable views to aid physical collection",
			"Keep the golden path clear while preserving alternative and recovery paths",
		],
	},
	{
		key: "interviews",
		title: "4. Engineering & Product Collaboration",
		image: "/assets/case-studies/spt-bridge/07 Wireframes.png",
		alt: "SPT Bridge wireframes",
		text: "Engineering and product decisions were made together. I translated hardware, server, data, and cloud constraints into workflows and testable states, then reviewed the direction with the engineering team and in-house sports scientist.",
		details:
			"Discovery, mapping, wireframes, high-resolution design, rich prototyping, and front-end implementation remained closely connected. This allowed the team to validate direction early, resolve edge cases without handoff gaps, and deliver steadily over a nine-month project.",
		bullets: [
			"Technical reviews exposed hardware, firmware, and server constraints early",
			"Sports-science input protected the meaning and integrity of performance data",
			"Prototypes helped stakeholders make decisions about real workflows",
			"Design and implementation shared the same owner to reduce translation loss",
		],
	},
	{
		key: "golden-path",
		title: "5. Hi-Res Design & Production",
		image: "/assets/case-studies/spt-bridge/06 Golden Path.png",
		alt: "Golden path for SPT Bridge",
		text: "The reinvented Bridge experience made the path from physical device to usable platform data clearer and more reliable.",
		details:
			"The final workflow supported direct data transfer, remembered player identities, data validation, trimming and segmentation, useful printouts, reversible clearing, firmware updates, and an experience designed for the next Gametraka platform.",
	},
	{
		key: "wireframes",
		title: "6. Outcomes & Lessons Learned",
		text: "The work contributed to a 3,100% year-on-year increase in telemetry data uploads, demonstrating the impact of reducing friction in the device-to-platform workflow.",
		details:
			"The project showed the value of involving domain experts while keeping workflows simple. Complex steps should be automated or moved into the appropriate moment rather than left for users to reconstruct after the fact.",
		bullets: [
			"Protect data and make recovery visible before asking users to delete or clear",
			"Validate and simplify the core task before expanding feature coverage",
			"Do not design around familiar but inefficient habits without question",
			"Pair technical knowledge with on-field research to make safer decisions",
			"Close product, design, and engineering loops to deliver complex products faster",
		],
	},
] as const;

const bridgeProject = portfolio.find(
	(project) => project.title === "SPT Bridge",
);

export default function SptBridge() {
	return (
		<Layout hideSidebar>
			<Head>
				<title>Case Study: SPT Bridge — Dave Cutter</title>
				<meta
					name="description"
					content="Case study: SPT Bridge, a mobile app for connecting athlete devices to the Game Traka platform."
				/>
				<meta property="og:title" content="SPT Bridge — Dave Cutter" />
				<meta
					property="og:description"
					content="A case study of the SPT Bridge athlete data platform."
				/>
			</Head>

			<Main fullWidth>
				<Nav fullWidth />
				<NavSpacer bg={themeColor} className="hidden md:block" />

				<Link
					href="/portfolio"
					className="fixed right-3 top-3 z-50 rounded-full bg-gray px-4 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-lg md:hidden"
				>
					Back to portfolio
				</Link>

				<article>
					<header
						className="px-5 md:px-10 py-12 md:py-20"
						style={{
							backgroundColor: themeColor,
							backgroundImage:
								"linear-gradient(150deg, color-mix(in srgb, #CCB100 90%, black), #CCB100)",
						}}
					>
						<div className="mx-auto max-w-5xl">
							<p className="mb-4 text-sm uppercase tracking-[0.2em]">
								Case Study
							</p>
							<h1 className="max-w-4xl text-5xl leading-[0.95] font-serif font-bold md:text-7xl lg:text-8xl">
								SPT Bridge
							</h1>
							<Link
								href="/portfolio"
								className="hidden md:inline-block mt-6 text-base text-white hover:underline"
							>
								Back to portfolio
							</Link>
						</div>
					</header>

					<section className="bg-white px-5 py-10 text-gray md:px-10 md:py-16">
						<div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[2fr_1fr]">
							<div>
								<p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-gray-light">
									Summary
								</p>
								<p className="text-xl leading-relaxed md:text-2xl">
									SPT Bridge connects SPT GPS telemetry and biometric Bluetooth
									devices to the Game Traka training platform. After games and
									practice, coaches and players upload athletic data to tagged
									events for analysis.
								</p>
								<p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-light">
									Redesigning a difficult, error-prone workflow contributed to a
									3,100% year-on-year increase in telemetry data uploads.
								</p>
							</div>
							<div className="border-t border-gray-light/30 pt-4 md:border-t-0 md:border-l md:pl-8">
								<p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-gray-light">
									My Role
								</p>
								<p>Lead Product Designer</p>
								<p>Front-end Engineer</p>
								<p>Product strategy</p>
							</div>
						</div>
					</section>

					{sections.map((section, index) => (
						<section
							key={section.key}
							className={index % 2 === 0 ? "bg-gray-dark" : "bg-gray"}
						>
							<div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-20">
								<div className="mb-8 md:mb-12">
									<p className="mb-3 text-sm uppercase tracking-[0.16em] text-white/60">
										{String(index + 1).padStart(2, "0")}
									</p>
									<h2 className="text-3xl font-serif font-bold md:text-5xl">
										{section.title}
									</h2>
								</div>

								{"image" in section && (
									<figure>
										<ExportedImage
											src={section.image}
											alt={section.alt}
											width={2000}
											height={1200}
											basePath={BASE_PATH}
											className="h-auto w-full"
											sizes="(max-width: 768px) 100vw, 1280px"
											loading={index === 0 ? "eager" : "lazy"}
										/>
									</figure>
								)}
								{section.key === "wireframes" && bridgeProject && (
									<ProjectCarousel
										slides={bridgeProject.slides}
										projectKey={bridgeProject.key}
										carouselId="case-study:spt-bridge"
										title={bridgeProject.title}
										eagerImageSlideKey={
											bridgeProject.slides.find(
												(slide) => slide.type === "image",
											)?.key
										}
									/>
								)}

								<div className="mx-auto mt-8 max-w-prose md:mt-12">
									<p className="text-lg leading-relaxed md:text-xl">
										{section.text}
									</p>
									{"details" in section && (
										<p className="mt-6 text-lg leading-relaxed md:text-xl">
											{section.details}
										</p>
									)}
									{"research" in section && (
										<p className="mt-6 text-lg leading-relaxed md:text-xl">
											{section.research}
										</p>
									)}
									{"label" in section && (
										<p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-white/60">
											{section.label}
										</p>
									)}
									{"detailsTwo" in section && (
										<p className="mt-3 text-lg leading-relaxed md:text-xl">
											{section.detailsTwo}
										</p>
									)}
									{"bullets" in section && (
										<ul className="mt-8 space-y-3 border-t border-white/20 pt-8">
											{section.bullets.map((bullet) => (
												<li
													key={bullet}
													className="relative pl-5 before:absolute before:left-0 before:content-['-']"
												>
													{bullet}
												</li>
											))}
										</ul>
									)}
								</div>
							</div>
						</section>
					))}

					<section className="bg-white px-5 py-12 text-gray md:px-10 md:py-20">
						<div className="mx-auto max-w-5xl">
							<p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-gray-light">
								Behind the work
							</p>
							<div className="grid gap-8 border-t border-gray-light/30 pt-8 md:grid-cols-3">
								<div>
									<p className="text-sm font-bold uppercase text-gray-light">
										My Role
									</p>
									<p>Lead Product Designer & Front-end Engineer</p>
								</div>
								<div>
									<p className="text-sm font-bold uppercase text-gray-light">
										Company
									</p>
									<p>Sports Performance Tracking</p>
								</div>
								<div>
									<p className="text-sm font-bold uppercase text-gray-light">
										Date
									</p>
									<p>2019</p>
								</div>
							</div>

							<div className="mt-8 grid gap-8 border-t border-gray-light/30 pt-8 md:grid-cols-2">
								<div>
									<p className="text-sm font-bold uppercase text-gray-light">
										Lead Developer
									</p>
									<p>Danielle Madeley</p>
								</div>
								<div>
									<p className="text-sm font-bold uppercase text-gray-light">
										Sports Scientist
									</p>
									<p>Ben Sharpe</p>
								</div>
							</div>

							<div className="mt-12 border-t border-gray-light/30 pt-8">
								<Link
									href="/portfolio"
									className="inline-flex min-h-14 items-center justify-center rounded-md bg-gray-dark px-6 py-4 text-lg font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-blue-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-dark"
								>
									Back to portfolio
								</Link>
							</div>
						</div>
					</section>
				</article>

				<div className="md:hidden bg-gray shadow-inner">
					<Footer />
					<NavSpacer />
					<MobileNav />
				</div>
			</Main>
		</Layout>
	);
}
