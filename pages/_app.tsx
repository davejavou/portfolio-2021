import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import { Nunito, Raleway } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";

// Prevent Font Awesome from adding its CSS since we did it manually above.
// (See https://fontawesome.com/docs/web/use-with/react/use-with#nextjs for more details.)
// Goal is to avoid FOUC (Flash of Unstyled Content) when using Font Awesome icons.
config.autoAddCss = false;

// Load Fonts
// Goal is to avoid FOUT (Flash of Unstyled Text) when using Google Fonts.
// By using the next/font/google package, we can ensure that the fonts are loaded and applied before rendering the page content.
const raleway = Raleway({ subsets: ["latin"], weight: ["600", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["600", "700"] });

export default function App({ Component, pageProps }: AppProps) {
	// View Transitions
	const router = useRouter();
	useEffect(() => {
		// Start a view transition before Next.js changes the route.
		const handleRouteChange = () => {
			if (document.startViewTransition) {
				document.startViewTransition();
			}
		};
		// Listen for route changes and trigger the view transition.
		router.events.on("beforeHistoryChange", handleRouteChange);
		return () => {
			router.events.off("beforeHistoryChange", handleRouteChange);
		};
	}, [router.events]);

	return (
		<Component
			style={{ background: "purple" }}
			className={`${raleway.className} ${nunito.className}`}
			{...pageProps}
		/>
	);
}
