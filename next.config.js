/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
    prependData: `@import "./base.scss`,
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
};

module.exports = nextConfig;
