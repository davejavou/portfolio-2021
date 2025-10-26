/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: "export",
	// Required because of server folder structure. Without this line, the JS would look in / instead of /portfolio_2021
	basePath: "/portfolio_2021",

	// Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
	// Because my server does not support clean URLs
	trailingSlash: true,

	// Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
	// skipTrailingSlashRedirect: true,

	// Optional: Change the output directory `out` -> `dist`
	// distDir: 'dist',

	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
