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
	const isPortfolio = ["/", "/portfolio", "/spt-bridge"].includes(pathname);
	const isPhotography = pathname === "/photography";
	const isAbout = pathname === "/about";

	return (
		<nav
			aria-label="Main navigation"
			className={`z-20 hidden md:flex fixed -top-px h-nav-height w-full bg-gray/90 ${fullWidth ? "" : "md:w-md-nav-width lg:w-lg-nav-width"}`}
		>
			<Link
				href="/portfolio"
				aria-current={isPortfolio ? "page" : undefined}
				className={cn("tab", { "tab-active": isPortfolio })}
			>
				Portfolio
			</Link>
			<Link
				href={`/photography`}
				aria-current={isPhotography ? "page" : undefined}
				className={cn("tab", { "tab-active": isPhotography })}
			>
				Photos
			</Link>
			<Link
				href={`/about`}
				aria-current={isAbout ? "page" : undefined}
				className={cn("tab", { "tab-active": isAbout })}
			>
				About
			</Link>
		</nav>
	);
}

export function MobileNav() {
	const { pathname } = useRouter();
	const isAbout = pathname === "/" || pathname === "/about";
	const isPortfolio = pathname === "/portfolio" || pathname === "/spt-bridge";
	const isPhotography = pathname === "/photography";

	return (
		<nav
			aria-label="Main navigation"
			className="mobile-nav z-20 flex md:hidden sticky top-0 h-nav-height w-full bg-gray/90"
		>
			<Link
				href={`/`}
				title="About Dave Cutter"
				aria-current={isAbout ? "page" : undefined}
				className={cn("tab", { "tab-active": isAbout })}
			>
				<Icon className="tab-icon" icon={faUser} />
				About
			</Link>
			<Link
				href={`/portfolio`}
				title="Dave's Portfolio"
				aria-current={isPortfolio ? "page" : undefined}
				className={cn("tab", { "tab-active": isPortfolio })}
			>
				<Icon className="tab-icon" icon={faBookOpen} />
				Portfolio
			</Link>
			<Link
				href={`/photography`}
				title="Dave's Photography"
				aria-current={isPhotography ? "page" : undefined}
				className={cn("tab", { "tab-active": isPhotography })}
			>
				<Icon className="tab-icon" icon={faCameraRetro} />
				Photos
			</Link>
		</nav>
	);
}
