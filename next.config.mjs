/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eurasia.travel',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;

