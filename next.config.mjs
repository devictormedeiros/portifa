/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['devictormedeiros.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'devictormedeiros.com',
        pathname: '/portifa-wp/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
