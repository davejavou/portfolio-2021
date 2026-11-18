import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { portfolio } from "../components/content";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Main from "../components/main";
import Nav, { MobileNav, NavSpacer } from "../components/nav";
import { ProjectCarousel } from "../components/projects";
import { BASE_PATH } from "../lib/assets";

const themeColor = "#CCB100";

const sections = [
	{
		key: "brief",
		title: "🎨 A Reinvention",
		image: "/assets/case-studies/spt-bridge/spt-bridge.png",
		alt: "SPT Bridge project overview",
		scope: "Move data from devices to cloud.",
		text: "Our data Bridge is difficult and frustrating.",
		workflow: [
			"Download files and identify athletes by serial-number in filenames",
			"Upload files to each athlete online",
			"Trim and segment each performance before resetting devices",
		],
		details: "Let's automate most of this process & eliminate pain points.",
		label: "Product goal",
		detailsTwo:
			"Moving data from the devices to the cloud is essential. If frustrating, the rest of the product is absolutely useless. No one even sees their dashboard without data. The Bridge is the product's first essential foot forward and it has to be right!",
		bullets: [
			"Automate uploads and file management.",
			"Simplify athlete accounts and remember identities. (No more serial numbers!)",
			"Keep data changes undoable and session trimming inside Bridge.",
			"Handle device errors gracefully and make firmware updates easy.",
		],
	},
	{
		key: "research",
		title: "🔎 Research In The Field (Locker rooms too)",
		image: "/assets/case-studies/spt-bridge/interviews.png",
		alt: "Qualitative interviews findings",
		text: "Coaches and small teams operated Bridge. Athletes and sports scientists all relied on the data so we investigated the whole journey and everyone involved.",
		details:
			"Users were worried about losing data. Serial-number filenames were hard to work with, repeated setup was exhausting, and uploads often happened late at night after everything else was done. Trimming and tagging after upload felt like separate jobs and were frequently skipped.",
		bullets: [
			"Coaches needed clear collection, tracking, setup, and fast upload.",
			"Everyone needed confidence that effort and data were captured safely, and feared accidental deletion.",
			"Sports scientists needed timely, trusted, and well-tagged data; year-on-year and date-range comparisons proved especially valuable.",
			"Archiving, account-free athlete access, and printouts addressed practical needs, backed by competitor and interface-pattern research.",
		],
		research:
			"I worked with 20 coaches, athletes, and sports scientists. Everyone took part in a survey about priorities, pain points, and moments that worked. Ten went further with interviews and observations of the tools in the field and the locker room. I also reviewed competitor approaches and surveyed broader design patterns for data-uploading.",
		callout:
			"In user research we learned that printing a poster for the locker room wall is sometimes more valued than the interactive dashboard on screen. We took that knowledge into the Game Traka platform. Lead with user needs, not the technology.",
	},
	{
		key: "journey",
		title: "📍 Mapping the ups, downs, and side quests.",
		image: "/assets/case-studies/spt-bridge/journey-map.png",
		alt: "Journey map for the SPT Bridge experience",
		text: "The research led to journeys for coaches, athletes, and sports scientists. We were looking beyond the golden path. In short, there were too many opportunities to feel delayed, uncertain, or disappointed along the way.",
		bullets: [
			"Automate transfer and remember athlete names instead of serial numbers.",
			"Use headshots and printouts to reconnect the interface with the field, and archive before clearing with reversible steps.",
			"Trim and segment inside Bridge before uploading; uploading should feel like the final, confident done step.",
			"Design for device, cloud, firmware, account, and lost-device failures while keeping alternatives and recovery visible.",
		],
	},
	{
		key: "iterations",
		title: "✏️ Iterating Wireframes & Prototypes",
		image: "/assets/case-studies/spt-bridge/wireframes.png",
		alt: "SPT Bridge wireframes",
		text: "By gathering around the evolving sketches and wireframes often, the product, design, and engineering decisions stayed right on top of hardware, software, and usability realities.",
		details:
			"Discovery, journey mapping, wireframes, high-resolution design, prototyping, and implementation overlapped. That kept decisions testable and let us resolve edge cases and usability issues early. It was a nine-month project, and collaboration was tight and immediate.",
		bullets: [
			"Technical reviews surfaced hardware and software constraints early",
			"Sports-science review and usability testing kept our users front-and-center",
			"Realistic prototypes helped everyone make decisions with confidence",
			"Sharing design and implementation accelerated the whole project",
		],
	},
	{
		key: "mock-code",
		title: "💎 Hi-Res Design & Code",
		image: "/assets/case-studies/spt-bridge/mocks.png",
		alt: "Hi-res design and code for SPT Bridge",
		text: "The final experience turned a collection of devices and data files into one clear path: collect, trim, upload.",
		details:
			"Bridge now supported automatic transfer, remembered athlete identities, handled trimming and segmentation, and ensured safe data and updated hardware, all while establishing a foundation for Gametraka's next chapter.",
		production:
			"Design work did not stop at polished screens. We continued to evolve the expeerience in code as the product moved to the production environment and encountered living data, device edge cases, and the constraints of the deployed app.",
		bullets: [
			"Stayed with implementation as designs became software.",
			"Improved the experience against real data.",
			"Usability testing refined hierarchy, guidance, and recovery paths.",
			"I took the lead on front-end engineering, working to realise the experience in code.",
		],
	},
	{
		key: "wireframes",
		title: "🚀 So. Much. Better.",
		text: "This redesign saw a 3,100% year-on-year increase in data uploads.",
		details:
			"The biggest lesson was to treat complexity as a design responsibility, not a user's burden. After the redesign, users focused expertise to their work with athletes, rather than needing to be experts in the technology. The product was safer, simpler, and more useful.",
		bullets: [
			"Protect data and make recovery visible before asking people to clear or delete.",
			"Simplify the core job before expanding feature coverage and question familiar habits when the interface can make them safer.",
			"Pair technical knowledge with on-field research and keep product, design, and engineering loops close.",
			"Make upload the last, satisfying step — 'I love getting my cuppa, watching the upload, and walking away.'",
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
					content="A case study of simplifying a complex data workflow."
				/>
			</Head>

			<Main fullWidth>
				<Nav fullWidth />
				<NavSpacer bg={themeColor} className="hidden md:block" />

				<Link
					href="/portfolio"
					className="fixed right-3 top-3 z-50 flex items-center gap-2 rounded-full bg-gray px-4 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-lg md:hidden"
				>
					<Icon icon={faAngleLeft} />
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
							<h1 className="max-w-4xl text-pretty text-5xl leading-[0.95] font-serif font-bold md:text-7xl lg:text-8xl">
								SPT Bridge
							</h1>
							<Link
								href="/portfolio"
								className="hidden md:inline-flex items-center gap-2 mt-6 text-base text-white hover:underline"
							>
								<Icon icon={faAngleLeft} />
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
								<p className="text-pretty text-xl leading-relaxed md:text-2xl">
									SPT Bridge moved data from the devices worn on-field to the
									Game Traka platform. An unavoidable first step for coaches,
									athletes, and sports scientists. Best foot forward.
								</p>
								<p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-gray-light">
									I redesigned the end-to-end product, from device management to
									assignments, trimming, and upload. The result contributed to a
									3,100% YoY increase in engagement.
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
									<h2 className="text-pretty text-3xl font-serif font-bold md:text-5xl">
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
											className="mx-auto block h-auto max-h-140 max-w-full w-auto"
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
										<p className="mb-8 text-pretty font-serif text-3xl font-bold leading-tight md:text-4xl">
											{section.scope}
										</p>
									)}
									<p className="text-pretty text-lg leading-relaxed md:text-xl">
										{section.text}
									</p>
									{"workflow" in section && (
										<ul className="mt-6 space-y-3">
											{section.workflow.map((item) => (
												<li
													key={item}
													className="relative text-pretty pl-5 before:absolute before:left-0 before:content-['-']"
												>
													{item}
												</li>
											))}
										</ul>
									)}
									{"details" in section && (
										<p
											className="mt-6 text-pretty text-lg leading-relaxed md:text-xl"
											style={{ color: themeColor }}
										>
											{section.details}
										</p>
									)}
									{"production" in section && (
										<p className="mt-6 text-pretty text-lg leading-relaxed md:text-xl">
											{section.production}
										</p>
									)}
									{"research" in section && (
										<p className="mt-6 text-pretty text-lg leading-relaxed md:text-xl">
											{section.research}
										</p>
									)}
									{"label" in section && (
										<p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-white/60">
											{section.label}
										</p>
									)}
									{"detailsTwo" in section && (
										<p
											className="mt-3 text-pretty text-lg leading-relaxed md:text-xl"
											style={{ color: themeColor }}
										>
											{section.detailsTwo}
										</p>
									)}
									{"bullets" in section && (
										<ul className="mt-8 space-y-3 border-t border-white/20 pt-8">
											{section.bullets.map((bullet) => (
												<li
													key={bullet}
													className="relative text-pretty pl-5 before:absolute before:left-0 before:content-['-']"
												>
													{bullet}
												</li>
											))}
										</ul>
									)}
									{"callout" in section && (
										<aside className="mt-10 text-pretty border-l-4 border-yellow px-5 py-2 text-lg leading-relaxed md:text-xl">
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
									<p className="mt-3 text-pretty leading-relaxed">
										A beautiful UI matters but in this project, flow, trust and
										data integrity were paramount. I wanted to show how good
										design can make a high-stakes, technically complex workflow
										feel calm, clear, and straightforward.
									</p>
								</div>
								<div>
									<p className="text-sm font-bold uppercase text-gray-light">
										What I learned…
									</p>
									<p className="mt-3 text-pretty leading-relaxed">
										Domain experts are invaluable. Working closely with
										engineering and sports science led to safer decisions and a
										far simpler product, this was the kind of collaboration that
										turns complexity into confidence!
									</p>
								</div>
							</div>

							<div className="mt-12 border-t border-gray-light/30 pt-8">
								<Link
									href="/portfolio"
									className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-gray-dark px-6 py-4 text-lg font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-blue-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-dark"
								>
									<Icon icon={faAngleLeft} />
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
