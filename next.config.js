/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  // Uncomment the following line to build a static site.
  // output: "export",

  reactStrictMode: true,
};

module.exports = nextConfig;
