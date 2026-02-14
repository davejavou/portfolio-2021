import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBookOpen, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function QuickBio() {
	return (
		<div className="bg-white text-gray max-w-prose w-5/6 lg:mt-nav-height pb-8 mx-auto">
			<div className="max-w-72 aspect-square relative mx-auto my-10">
				<Image
					src="/portfolio_2021/assets/images/portrait.jpg"
					alt="A Portrait of the Artist."
					className="rounded-full border-4 border-white shadow-xl"
					width={512}
					height={512}
					loading="eager"
				/>
			</div>

			<h1 className="my-10 mx-auto font-serif font-bold text-3xl md:text-2xl lg:text-4xl">
				Dave Cutter. <br />
				Designer &amp; <span className="inline-block">FE Developer.</span>
			</h1>
			<h2 className="my-10 text-lg text-gray-lightest">
				Senior Product Designer & Frontend Developer at{" "}
				<a
					className="text-blue-light hover:text-blue-lightest"
					href="https://factsmgt.com.au/"
					title="Nelnet International"
					target="_blank"
					rel="noopener"
				>
					Nelnet
				</a>
				. Previously at{" "}
				<a
					href="https://www.artprocessors.net/"
					className="text-blue-light hover:text-blue-lightest"
					title="ESPN/Disney"
					target="_blank"
					rel="noopener"
				>
					Art Processors
				</a>
				,{" "}
				<a
					href="https://www.espn.com.au/"
					className="text-blue-light hover:text-blue-lightest"
					title="ESPN"
					target="_blank"
					rel="noopener"
				>
					ESPN
				</a>{" "}
				&amp;{" "}
				<a
					className="text-blue-light hover:text-blue-lightest"
					rel="noopener"
					href="https://sports.yahoo.com/"
					title="Yahoo! Sports"
					target="_blank"
				>
					Yahoo!
				</a>
			</h2>
			<Link
				href={`/portfolio`}
				title="Dave's Portfolio"
				className="md:hidden btn btn-blue w-full mb-2"
			>
				<Icon className="tab-icon" icon={faBookOpen} />
				Portfolio
			</Link>
			<a
				className="btn btn-blue w-full mb-2"
				target="_blank"
				rel="noopener"
				href="/portfolio_2021/assets/David-Cutter-Resume.pdf"
				title="Download Dave Cutter's Resume PDF"
			>
				<Icon className="btn-icon" icon={faFilePdf} />
				Resume
			</a>
			<a
				className="btn btn-blue w-full mb-2"
				target="_blank"
				rel="noopener"
				href="https://www.linkedin.com/in/davejavou/"
				title="Dave Cutter on LinkedIn"
			>
				<Icon className="btn-icon" icon={faLinkedin} />
				LinkedIn
			</a>
			<a
				className="btn btn-blue w-full mb-2"
				target="_blank"
				rel="noopener"
				href="https://github.com/davejavou"
				title="Dave Cutter on GitHub"
			>
				<Icon className="btn-icon" icon={faGithub} />
				GitHub
			</a>
		</div>
	);
}
