/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'dev-ecommerce-cdn.azureedge.net',
      'stg-ecommerce-cdn.azureedge.net',

  // Test
  'media.vneconomy.vn',
],
  },
};

module.exports = nextConfig;