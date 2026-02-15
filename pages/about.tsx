import Head from "next/head";
import { aboutDave } from "../components/content";
import Footer from "../components/footer";
import FullBio from "../components/fullbio";
import Layout from "../components/layout";
import Main from "../components/main";
import Nav, { MobileNav, NavSpacer } from "../components/nav";
import QuickBio from "../components/quickbio";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>About Dave Cutter</title>
				<meta name="description" content={aboutDave} />
			</Head>

			<Main>
				<Nav />
				<div className="md:hidden bg-white">
					<QuickBio />
				</div>
				<FullBio />
				<div className="md:hidden bg-gray shadow-inner">
					<Footer />
					<NavSpacer />
					<MobileNav />
				</div>
			</Main>
		</Layout>
	);
}
