/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: "export",
	// Required because of server folder structure. Without this line, the JS would look in / instead of /portfolio_2021
	// Must match the BASE_PATH in lib/assets.ts
	basePath: "/portfolio_2021",

	// Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
	// Because my server does not support clean URLs
	trailingSlash: true,

	images: {
		loader: "custom",
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},

	transpilePackages: ["next-image-export-optimizer"],

	env: {
		nextImageExportOptimizer_imageFolderPath: "public/assets",
		nextImageExportOptimizer_exportFolderPath: "out",
		nextImageExportOptimizer_quality: "75",
		nextImageExportOptimizer_storePicturesInWEBP: "true",
		nextImageExportOptimizer_exportFolderName: "optimized",
		nextImageExportOptimizer_generateAndUseBlurImages: "true",
		nextImageExportOptimizer_remoteImageCacheTTL: "0",
	},
};

module.exports = nextConfig;
