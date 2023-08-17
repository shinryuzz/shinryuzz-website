const remarkPrism = require("remark-prism");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// const withMDX = require("@zeit/next-mdx")({
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [],
    remarkPlugins: [remarkPrism],
    providerImportSource: "@mdx-js/react",
  },
});

module.exports = nextConfig;

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
});