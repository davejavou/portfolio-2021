/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio_2021', // Even when running dev, you will need to add this to the URL, ex: http://localhost:3000/portfolio_2021

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // Because my server does not support clean URLs
  trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

module.exports = nextConfig