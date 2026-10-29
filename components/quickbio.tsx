import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBookOpen, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { assetPath, BASE_PATH } from "../lib/assets";

export default function QuickBio() {
	return (
		<div className="bg-white text-gray max-w-prose w-5/6 pb-16 md:pb-8 mx-auto">
			<div className="max-w-64 aspect-square relative mx-auto my-10">
				<ExportedImage
					src="/assets/images/portrait.jpg"
					alt="A Portrait of the Artist."
					className="rounded-full border-4 border-white shadow-xl"
					width={512}
					height={512}
					loading="eager"
					basePath={BASE_PATH}
				/>
			</div>

			<h1 className="my-10 mx-auto font-serif font-bold text-3xl md:text-xl lg:text-2xl">
				Dave Cutter. <br />
				UI/UX Designer &amp; FE Engineer.
			</h1>

			<Link
				href={`/portfolio`}
				title="Dave's Portfolio"
				className="md:hidden btn w-full mb-2"
			>
				<Icon className="tab-icon" icon={faBookOpen} />
				Portfolio
			</Link>

			<div className="flex gap-2 md:flex-col">
				<a
					className="btn grow"
					target="_blank"
					rel="noopener noreferrer"
					href={assetPath("/assets/David-Cutter-Resume.pdf")}
					title="Download Dave Cutter's Resume PDF"
				>
					<Icon className="btn-icon" icon={faFilePdf} />
					Resume
				</a>
				<a
					className="btn grow"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/davejavou/"
					title="Dave Cutter on LinkedIn"
				>
					<Icon className="btn-icon" icon={faLinkedin} />
					LinkedIn
				</a>
			</div>
		</div>
	);
}
