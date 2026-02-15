/**
 * basePath utility for static asset references.
 *
 * This site is deployed to a subfolder on the server (e.g., example.com/portfolio_2021/).
 * The basePath is set in next.config.js and affects how assets are resolved:
 *
 *   - Next.js <Link> auto-prepends basePath to href — just use bare paths.
 *
 *   - ExportedImage (next-image-export-optimizer) handles basePath via its
 *     own prop — pass the raw path as src (e.g. "/assets/photo.jpg") and
 *     set basePath={BASE_PATH}. Do NOT wrap src with assetPath().
 *
 *   - Raw HTML elements (<a>, <video>, <link>, <iframe>) do NOT get
 *     basePath prepended. Use assetPath() for these to build the full URL.
 *
 * Example:
 *   <Link href="/about" />                              // Next.js adds /portfolio_2021 automatically
 *   <ExportedImage src="/assets/photo.jpg" basePath={BASE_PATH} /> // optimizer handles basePath
 *   <video src={assetPath("/assets/video.mp4")} />     // We add /portfolio_2021 manually
 *   <a href={assetPath("/assets/resume.pdf")} />       // We add /portfolio_2021 manually
 */

/** Must match the basePath in next.config.js */
export const BASE_PATH = "/portfolio_2021";

/** Prepend basePath to a local asset path for use in raw HTML elements */
export function assetPath(path: string): string {
	return `${BASE_PATH}${path}`;
}
