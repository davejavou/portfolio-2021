import IconIsland from "./custom-icons";

export default function Footer() {
	return (
		<footer>
			<div className="flex justify-around w-3/4 lg:w-1/2 mx-auto pt-8 pb-5">
				<a
					target="_blank"
					rel="noopener"
					href="https://cutterscove.com/"
					title="Watch the fish at Cutter's Cove"
				>
					<IconIsland className="fill-current text-blue-light h-6 w-6 hover:text-blue-lightest" />
				</a>
			</div>
			<div className="p-5 text-xs text-center text-gray-lightest">
				Copyright &copy; Dave Cutter {new Date().getFullYear()}
			</div>
		</footer>
	);
}
