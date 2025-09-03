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
  devIndicators: false,
  devTools: {
    enabled: false, 
  },
};

export default nextConfig;
