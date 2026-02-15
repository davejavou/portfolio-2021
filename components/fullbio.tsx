import ExportedImage from "next-image-export-optimizer";
import { BASE_PATH, assetPath } from "../lib/assets";
import { NavSpacer } from "./nav";

export default function FullBio() {
	return (
		<div className="md:min-h-screen bg-blue flex flex-col">
			<NavSpacer className="hidden md:block" />
			<div className="p-5 max-w-prose m-auto">
				<div className="relative w-full my-5 transform rotate-4 -mt-6 md:mt-4">
					<ExportedImage
						src="/assets/images/at-work.jpg"
						className="shadow-lg rounded-md"
						alt="Candid at the water cooler"
						width={1200}
						height={689}
						loading="eager"
						basePath={BASE_PATH}
					/>
				</div>
				<h2 className="mb-8 font-serif font-bold text-2xl lg:text-3xl">
					<span className="md:hidden">About </span>Dave{" "}
					<small className="text-xs font-light italic">(On Right)</small>
				</h2>
				<p className="mt-5 mb-10 text-lg leading-relaxed max-w-prose text-pretty">
					I’m a designer and front-end engineer with 25 years experience in
					media &amp; software development for startup &amp; enterprise clients.
					I specialize in responsive design, intuitive UI, and elegant code. I’m
					a Professional Design Member of AIGA and an Adobe Certified Expert in
					Photoshop. (A.C.E.) In my free time I raise a family, sail, and study
					the History &amp; Philosophy of Science at the University of
					Melbourne.
				</p>
				<p className="mt-5 mb-10 text-lg leading-relaxed max-w-prose text-pretty">
					<strong>Dev Highlights:</strong> HTML, CSS, Javascript, React,
					Typescript, Tailwind, ShadCN, Angular, Vue, PHP, XML/XSLT, JQuery,
					VbScript, & Coldfusion.
				</p>
				<p className="mt-5 mb-10 text-lg leading-relaxed max-w-prose text-pretty">
					<strong>Design Highlights:</strong> User & Humanity Centered Design,
					UI, UX, Research, Figma, Sketch, Adobe, & Design Systems.
				</p>

				{/* Footer */}

				<ul className="my-20 text-sm leading-relaxed text-center text-blue-lightest">
					<li className="uppercase">Made in Melbourne</li>
					{/* Originally Created July 2021 */}
					<li className="italic">
						<a
							href="https://omny.fm/shows/triple-m-rock-interviews/triple-m-melbourne-lockdown-number-5-parody-song"
							target="_blank"
							rel="noopener noreferrer"
						>
							"During Lockdown Number Five"
						</a>
					</li>
					<li className="mt-4">
						Design Inspired by{" "}
						<a
							href="http://charliewaite.me/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Charlie Waite's Portfolio.
						</a>
					</li>
					<li>Portrait of Dave with Tie by A. Labbett.</li>
					<li>Portrait of Dave with Monsters Inc. by C. Heldt.</li>
					<li>
						Icons by{" "}
						<a
							href="https://fontawesome.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							FontAwesome.
						</a>
					</li>
					<li className="mt-4 font-bold">Updated February 2026</li>
				</ul>
			</div>
		</div>
	);
}
