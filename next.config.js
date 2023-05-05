// /** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  basePath: "/RATIO25-client",
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true,
  },
};

module.exports = nextConfig;
