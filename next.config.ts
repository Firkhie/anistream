import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "s4.anilist.co",
      },
    ],
  },
};

export default nextConfig;
