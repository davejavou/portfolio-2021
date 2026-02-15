import Head from "next/head";
import { useWindowSize } from "usehooks-ts";
import { aboutDaveCutter } from "../components/content";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Main from "../components/main";
import Nav, { MobileNav, NavSpacer } from "../components/nav";
import Projects from "../components/projects";

export default function Portfolio() {
	// Determine Mobile vs Desktop for conditional Nav and Footer
	const { width } = useWindowSize();
	const isMobile = width < 768;
	const isDesktop = width >= 768;

	return (
		<Layout>
			<Head>
				<title>Dave Cutter's Portfolio</title>
				<meta name="description" content={aboutDaveCutter} />
			</Head>

			<Main>
				{isDesktop && <Nav />}
				<Projects />
				{isMobile && (
					<div className="md:hidden bg-gray shadow-inner">
						<Footer />
						<NavSpacer />
						<MobileNav />
					</div>
				)}
			</Main>
		</Layout>
	);
}
