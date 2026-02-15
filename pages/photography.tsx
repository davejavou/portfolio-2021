import Head from "next/head";
import { aboutDave } from "../components/content";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Main from "../components/main";
import Nav, { MobileNav, NavSpacer } from "../components/nav";
import Projects from "../components/projects";

export default function Photography() {
	return (
		<Layout>
			<Head>
				<title>Dave Cutter's Photography</title>
				<meta name="description" content={aboutDave} />
			</Head>

			<Main>
				<Nav />

				<Projects
					content="photography"
					className="[&_img]:shadow-xl [&_img]:rounded-lg" // Add shadow and rounded corners to all images in photography projects
				/>

				<div className="md:hidden bg-gray shadow-inner">
					<Footer />
					<NavSpacer />
					<MobileNav />
				</div>
			</Main>
		</Layout>
	);
}
