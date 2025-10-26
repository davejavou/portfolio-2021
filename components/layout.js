import Head from "next/head";
import Footer from "./footer";
import QuickBio from "./quickbio";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/portfolio_2021/assets/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/portfolio_2021/assets/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/portfolio_2021/assets/favicon-16x16.png"
				/>
			</Head>
			<Sidebar>
				<QuickBio />
				<Footer />
			</Sidebar>
			{children}
		</>
	);
}
