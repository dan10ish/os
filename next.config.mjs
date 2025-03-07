/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // This ensures correct asset paths when deployed to a subdomain
  basePath: '',
  // Disable server-side features since we're doing static export
  trailingSlash: true,
};

export default nextConfig;
