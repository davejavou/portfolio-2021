/**
 * basePath utility for static asset references.
 *
 * This site is deployed to a subfolder on the server (e.g., example.com/portfolio_2021/).
 * The basePath is set in next.config.js and affects how assets are resolved:
 *
 *   - Next.js <Link> auto-prepends basePath to href — just use bare paths.
 *
 *   - Next.js <Image> does NOT auto-prepend basePath when images.unoptimized
 *     is true (required for static export). Use assetPath() for Image src.
 *
 *   - Raw HTML elements (<a>, <video>, <link>, <iframe>) also do NOT get
 *     basePath prepended. Use assetPath() for these to build the full URL.
 *
 * Example:
 *   <Link href="/about" />                              // Next.js adds /portfolio_2021 automatically
 *   <Image src={assetPath("/assets/photo.jpg")} />     // We add /portfolio_2021 manually
 *   <video src={assetPath("/assets/video.mp4")} />     // We add /portfolio_2021 manually
 *   <a href={assetPath("/assets/resume.pdf")} />       // We add /portfolio_2021 manually
 */

/** Must match the basePath in next.config.js */
export const BASE_PATH = "/portfolio_2021";

/** Prepend basePath to a local asset path for use in raw HTML elements */
export function assetPath(path: string): string {
	return `${BASE_PATH}${path}`;
}
