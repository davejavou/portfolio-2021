import IconIsland from "./custom-icons";

export default function Footer() {
	return (
		<footer>
			<div className="flex justify-around w-3/4 lg:w-1/2 mx-auto pt-8">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://cutterscove.com/"
					title="Visit Cutter's Cove (Cat-Friendly)"
				>
					<IconIsland className="fill-current text-blue-light size-6 hover:text-blue-lightest pointer-events-none" />
				</a>
			</div>
			<div className="p-5 text-xs text-center text-gray-lightest">
				Copyright &copy; Dave Cutter {new Date().getFullYear()}
			</div>
		</footer>
	);
}
