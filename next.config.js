// /** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};

module.exports = nextConfig;
