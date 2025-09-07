/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["devictormedeiros.com", "localhost", "wp.vanzillotta.com"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
};

export default nextConfig;
