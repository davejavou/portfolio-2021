/**
 * basePath utility for static asset references.
 *
 * This site is deployed at the domain root. Keep BASE_PATH empty in sync with
 * next.config.js so local asset paths resolve directly from `/`:
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
 *   <Link href="/about" />                              // Next.js uses /about
 *   <ExportedImage src="/assets/photo.jpg" basePath={BASE_PATH} /> // optimizer handles basePath
 *   <video src={assetPath("/assets/video.mp4")} />     // Resolves to /assets/video.mp4
 *   <a href={assetPath("/assets/resume.pdf")} />       // Resolves to /assets/resume.pdf
 */

/** Must match the basePath in next.config.js */
export const BASE_PATH = "";

/** Prepend basePath to a local asset path for use in raw HTML elements */
export function assetPath(path: string): string {
	return BASE_PATH ? `${BASE_PATH}${path}` : path;
}
