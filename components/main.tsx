export default function Main({
	children,
	fullWidth = false,
}: {
	children: React.ReactNode;
	fullWidth?: boolean;
}) {
	return (
		<main
			className={`relative flex flex-col md:min-h-screen ${fullWidth ? "" : "md:ml-md-sidebar-width lg:ml-lg-sidebar-width"}`}
		>
			{children}
		</main>
	);
}
