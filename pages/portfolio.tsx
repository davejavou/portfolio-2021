import Head from "next/head";
import { aboutDaveCutter } from "../components/content";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Main from "../components/main";
import Nav, { MobileNav, NavSpacer } from "../components/nav";
import Projects from "../components/projects";

export default function Portfolio() {
	return (
		<Layout>
			<Head>
				<title>Dave Cutter's Portfolio</title>
				<meta name="description" content={aboutDaveCutter} />
			</Head>

			<Main>
				<Nav />
				<Projects />
				<div className="md:hidden bg-gray shadow-inner">
					<Footer />
					<NavSpacer />
					<MobileNav />
				</div>
			</Main>
		</Layout>
	);
}
