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
		title: "🎨 A new visual language",
		image: "/assets/case-studies/spt-bridge/spt-bridge.png",
		alt: "SPT Bridge project overview",
		scope: "Redesign our Bridge!",
		text: "The current Bridge is difficult and tedious.",
		workflow: [
			"Download files larger than 10 MB from each device",
			"Identify players by serial-number filenames",
			"Upload files to each player online",
			"Trim and segment each performance",
			"Clear devices",
		],
		details:
			"Let's automate most of this process and eliminate pain points, reduce frustration and delight users.",
		label: "Product goal",
		detailsTwo:
			"Moving data from the devices to the cloud is essential. If it is frustrating or difficult, the rest of the product is useless — bad data or garbage data destroys the product.",
		bullets: [
			"Automatic download and upload — no more file handling",
			"Data changes that are lossless or reversible, never deleted",
			"Time data automatically, with useful ranges and comparisons",
			"Simplify player accounts, which are rarely used outside coach staff",
			"Do trimming and segmentation in Bridge, not afterwards",
			"Handle device errors gracefully",
			"Make firmware updates easy",
			"Make every page a useful printout",
		],
		callout:
			"Directly from user research, we learned that printing a large view for the locker room wall can be more effective than an interactive dashboard. Lead with user needs, not the technology.",
	},
	{
		key: "gametraka",
		title: "🔎 Field research (locker rooms too!)",
		image: "/assets/case-studies/spt-bridge/interviews.png",
		alt: "Qualitative interview findings",
		text: "Coaches and small coaching teams operated Bridge. Athletes and sports scientists relied on the data it produced, so the whole journey had to make sense — not only the person tapping the screen.",
		details:
			"Users were worried about losing data. Serial-number filenames were hard to reconcile, repeated setup was exhausting, and uploads often happened late at night after everything else was done. Trimming and tagging felt like separate jobs — so they were frequently skipped.",
		bullets: [
			"Coaches needed clear collection, tracking, setup and fast upload",
			"Athletes needed confidence that their effort was captured",
			"Sports scientists needed trustworthy, timely and well-tagged data",
			"Everyone shared the fear of complex steps and permanent deletion",
			"Archiving felt safer than clearing a device and watching data disappear",
			"Year-on-year and date-range comparisons made patterns visible",
			"Player users without accounts were a practical, highly requested need",
			"Printouts helped the bridge from screen to training field",
			"Competitor research reviewed how similar products handled device-to-cloud workflows",
			"A broader survey of bulk-data upload patterns identified familiar, proven interaction models",
		],
		research:
			"I worked with 20 coaches, athletes and sports scientists. Everyone took part in a survey about priorities, pain points and moments that worked; ten went further with interviews and observations of the tools in the field and the locker room. I also reviewed competitor approaches and surveyed broader design patterns for bulk data uploading.",
	},
	{
		key: "journey",
		title: "🧭 Making the complex feel obvious",
		image: "/assets/case-studies/spt-bridge/journey-map.png",
		alt: "Journey map for the SPT Bridge experience",
		text: "The research led to journeys for coaches, athletes and sports scientists. We were looking beyond the happy path — there were too many opportunities to feel delayed, uncertain or disappointed along the way.",
		bullets: [
			"Automate transfer instead of asking people to manage files",
			"Remember player names and identities instead of serial numbers",
			"Archive before clearing, with reversible steps",
			"Keep trimming and segmentation in one coherent upload flow",
			"Design for device, cloud, firmware, account and lost-device failures",
			"Use headshots and printouts to reconnect the interface with the field",
			"Keep the core path clear without hiding alternatives or recovery",
		],
	},
	{
		key: "interviews",
		title: "✏️ Iterating together",
		image: "/assets/case-studies/spt-bridge/wireframes.png",
		alt: "SPT Bridge wireframes",
		text: "Hardware, server, data and cloud constraints could easily have become someone else's problem. Instead, product and engineering decisions stayed close, and I reviewed the direction with the engineering team and in-house sports scientist.",
		details:
			"Discovery, journey mapping, wireframes, high-resolution design, prototyping and implementation overlapped. That kept decisions testable and let us resolve edge cases early rather than lose them in handoff. It was a nine-month project, and the loop stayed unusually short.",
		bullets: [
			"Technical reviews surfaced firmware and server constraints early",
			"Sports-science input protected the meaning of the performance data",
			"Realistic prototypes helped people make decisions with confidence",
			"Sharing design and implementation reduced translation loss",
		],
	},
	{
		key: "golden-path",
		title: "💎 Final Mocks and Code",
		image: "/assets/case-studies/spt-bridge/06 Golden Path.png",
		alt: "Golden path for SPT Bridge",
		text: "The final experience turned a collection of devices and data files into one clear job: collect it, check it, understand it.",
		details:
			"Bridge now supported direct transfer, remembered player identities, data validation, trimming and segmentation, practical printouts, reversible clearing and firmware updates — all while establishing a foundation for Gametraka's next chapter.",
		production:
			"The design did not stop at polished screens. We continued to evolve it in code as the team moved from mockups to the real production environment — working with living data, device edge cases and the constraints of the deployed application.",
		bullets: [
			"Stayed close to implementation as static designs became usable interfaces",
			"Tested the experience against real data, not idealized sample records",
			"Used usability testing to refine hierarchy, feedback and recovery paths",
			"Allowed implementation findings to reshape the final design",
		],
	},
	{
		key: "wireframes",
		title: "🚀 So. Much. Better.",
		text: "Reducing friction in the device-to-platform workflow contributed to a 3,100% year-on-year increase in telemetry uploads.",
		details:
			"The biggest lesson was to treat complexity as a design responsibility, not a user burden. Domain experts helped us protect the integrity of the data; the interface helped people act on it without becoming experts in the software.",
		bullets: [
			"Protect data and make recovery visible before asking people to clear or delete",
			"Simplify the core job before expanding feature coverage",
			"Question familiar habits when the interface can make them safer",
			"Pair technical knowledge with on-field research",
			"Keep product, design and engineering loops close",
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
					content="Case study: redesigning SPT Bridge to move athlete data from on-field devices to the Game Traka platform."
				/>
				<meta property="og:title" content="SPT Bridge — Dave Cutter" />
				<meta
					property="og:description"
					content="A case study of simplifying a complex athlete data workflow."
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
									SPT Bridge moved GPS and biometric data from the devices worn
									on-field to the Game Traka platform — making an athlete's
									effort useful to coaches, athletes and sports scientists.
								</p>
								<p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-light">
									I redesigned the end-to-end workflow, from device collection
									to platform analysis. The result contributed to a 3,100%
									year-on-year increase in telemetry uploads.
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
									{"scope" in section && (
										<p className="mb-6 text-sm font-bold uppercase tracking-[0.16em] text-white/60">
											Scope
										</p>
									)}
									{"scope" in section && (
										<p className="mb-8 font-serif text-3xl font-bold leading-tight md:text-4xl">
											{section.scope}
										</p>
									)}
									<p className="text-lg leading-relaxed md:text-xl">
										{section.text}
									</p>
									{"workflow" in section && (
										<ul className="mt-6 space-y-3">
											{section.workflow.map((item) => (
												<li
													key={item}
													className="relative pl-5 before:absolute before:left-0 before:content-['-']"
												>
													{item}
												</li>
											))}
										</ul>
									)}
									{"details" in section && (
										<p className="mt-6 text-lg leading-relaxed md:text-xl">
											{section.details}
										</p>
									)}
									{"production" in section && (
										<p className="mt-6 text-lg leading-relaxed md:text-xl">
											{section.production}
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
										<>
											{section.key === "bridge" && (
												<p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-white/60">
													Stakeholder priorities
												</p>
											)}
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
										</>
									)}
									{"callout" in section && (
										<aside className="mt-10 border-l-4 border-yellow px-5 py-2 text-lg leading-relaxed md:text-xl">
											{section.callout}
										</aside>
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

							<div className="mt-12 grid gap-8 border-t border-gray-light/30 pt-8 md:grid-cols-2">
								<div>
									<p className="text-sm font-bold uppercase text-gray-light">
										What I wanted to show you…
									</p>
									<p className="mt-3 leading-relaxed">
										A beautiful interface matters — but in this project, trust
										and data integrity mattered more. I wanted to show how good
										design can make a high-stakes, technically complex workflow
										feel calm, clear and human.
									</p>
								</div>
								<div>
									<p className="text-sm font-bold uppercase text-gray-light">
										What I learned…
									</p>
									<p className="mt-3 leading-relaxed">
										Domain experts are invaluable when they have room to share
										their knowledge. Working closely with engineering and sports
										science led to safer decisions and a simpler product — the
										kind of collaboration that turns complexity into confidence.
									</p>
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
