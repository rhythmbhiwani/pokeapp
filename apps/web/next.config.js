const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

module.exports = nextConfig;
