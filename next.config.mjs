/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Disable server-side features since we're doing static export
  trailingSlash: true,
  // This ensures correct asset paths when deployed to GitHub Pages
  basePath: '',
};

export default nextConfig;
