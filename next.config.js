/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: "export",
	// Keep in sync with BASE_PATH in lib/assets.ts; empty deploys at the domain root.
	basePath: "",

	// Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
	// Because my server does not support clean URLs
	trailingSlash: true,

	images: {
		loader: "custom",
		imageSizes: [128],
		deviceSizes: [640, 1280, 1920],
	},

	transpilePackages: ["next-image-export-optimizer"],

	env: {
		nextImageExportOptimizer_imageFolderPath: "public/assets",
		nextImageExportOptimizer_exportFolderPath: "out",
		nextImageExportOptimizer_quality: "75",
		nextImageExportOptimizer_storePicturesInWEBP: "true",
		nextImageExportOptimizer_exportFolderName: "optimized",
		nextImageExportOptimizer_generateAndUseBlurImages: "false",
		nextImageExportOptimizer_remoteImageCacheTTL: "0",
	},
};

module.exports = nextConfig;
