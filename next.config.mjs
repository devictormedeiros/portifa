/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          pathname: '/portifa-wp/wp-content/uploads/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  