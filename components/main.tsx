export default function Main({ children }: { children: React.ReactNode }) {
	return (
		<main className="relative flex flex-col md:min-h-screen md:ml-md-sidebar-width lg:ml-lg-sidebar-width">
			{children}
		</main>
	);
}
