import {
	faBookOpen,
	faCameraRetro,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export function NavSpacer({ className, bg }) {
	return (
		<div
			className={`${className} h-nav-height w-full block shrink-0`}
			style={{ background: bg }}
		>
			&nbsp;
		</div>
	);
}

export default function Nav() {
	const { pathname } = useRouter();

	return (
		<div className="z-20 hidden md:flex fixed -top-px h-nav-height w-full md:w-md-nav-width lg:w-lg-nav-width">
			<Link
				href={`/`}
				className={cn("tab", {
					"tab-active": pathname === "/" || pathname === "/portfolio",
				})}
			>
				Portfolio
			</Link>
			<Link
				href={`/photography`}
				className={cn("tab", { "tab-active": pathname === "/photography" })}
			>
				Photography
			</Link>
			<Link
				href={`/about`}
				className={cn("tab", { "tab-active": pathname === "/about" })}
			>
				About
			</Link>
		</div>
	);
}

export function MobileNav() {
	const { pathname } = useRouter();

	return (
		<div className="z-20 flex md:hidden fixed -bottom-px h-nav-height w-full">
			<Link
				href={`/`}
				title="About Dave Cutter"
				className={cn("tab", {
					"tab-active": pathname === "/" || pathname === "/about",
				})}
			>
				<Icon className="tab-icon" icon={faUser} />
				About
			</Link>
			<Link
				href={`/portfolio`}
				title="Dave's Portfolio"
				className={cn("tab", { "tab-active": pathname === "/portfolio" })}
			>
				<Icon className="tab-icon" icon={faBookOpen} />
				Portfolio
			</Link>
			<Link
				href={`/photography`}
				title="Dave's Photography"
				className={cn("tab", { "tab-active": pathname === "/photography" })}
			>
				<Icon className="tab-icon" icon={faCameraRetro} />
				Photography
			</Link>
		</div>
	);
}
