/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
      },
    ],
  },
  devIndicators: {
    buildActivity: false, // removes build spinner
  },
  experimental: {
    // 👇 this flag disables the new DevTools badge
    // (available since Next.js 14.1)
    nextScriptWorkers: false,
  },
  devTools: {
    enabled: false, // 👈 THIS is the key setting
  },
};

export default nextConfig;
