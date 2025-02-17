import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "dev-ecommerce-cdn.azureedge.net",
      "stg-ecommerce-cdn.azureedge.net",

      // Test
      "media.vneconomy.vn"
    ],
  },
};

export default nextConfig;
