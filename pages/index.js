import Head from "next/head";
import { aboutDaveCutter } from "../components/content";
import Footer from "../components/footer";
import FullBio from "../components/fullbio";
import Layout from "../components/layout";
import Main from "../components/main";
import Nav, { MobileNav, NavSpacer } from "../components/nav";
import Projects from "../components/projects";
import QuickBio from "../components/quickbio";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Dave Cutter's Portfolio</title>
				<meta name="description" content={aboutDaveCutter} />
			</Head>

			<Main>
				<Nav />
				<div className="md:hidden bg-white">
					<QuickBio />
					<FullBio />
					<div className="bg-gray shadow-inner">
						<Footer />
						<NavSpacer />
						<MobileNav />
					</div>
				</div>
				<div className="hidden md:block">
					<Projects />
				</div>
			</Main>
		</Layout>
	);
}
