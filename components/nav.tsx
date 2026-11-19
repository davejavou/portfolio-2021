import {
	faBookOpen,
	faCameraRetro,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "../lib/cn";

export function NavSpacer({
	className,
	bg,
}: {
	className?: string;
	bg?: string;
}) {
	return (
		<div
			className={`${className} h-nav-height w-full block shrink-0`}
			style={{ background: bg }}
		>
			&nbsp;
		</div>
	);
}

export default function Nav({ fullWidth = false }: { fullWidth?: boolean }) {
	const { pathname } = useRouter();

	return (
		<nav
			aria-label="Main navigation"
			className={`z-20 hidden md:flex fixed -top-px h-nav-height w-full bg-gray/90 ${fullWidth ? "" : "md:w-md-nav-width lg:w-lg-nav-width"}`}
		>
			<Link
				href="/portfolio"
				className={cn("tab", {
					"tab-active":
						pathname === "/" ||
						pathname === "/portfolio" ||
						pathname === "/spt-bridge",
				})}
			>
				Portfolio
			</Link>
			<Link
				href={`/photography`}
				className={cn("tab", { "tab-active": pathname === "/photography" })}
			>
				Photos
			</Link>
			<Link
				href={`/about`}
				className={cn("tab", { "tab-active": pathname === "/about" })}
			>
				About
			</Link>
		</nav>
	);
}

export function MobileNav() {
	const { pathname } = useRouter();

	return (
		<nav
			aria-label="Main navigation"
			className="mobile-nav z-20 flex md:hidden fixed bottom-0 h-nav-height w-full bg-gray/90"
		>
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
				className={cn("tab", {
					"tab-active": pathname === "/portfolio" || pathname === "/spt-bridge",
				})}
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
				Photos
			</Link>
		</nav>
	);
}
