import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	// View Transitions (ignored in browsers that don't support it).
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

	return <Component style={{ background: "purple" }} {...pageProps} />;
}
