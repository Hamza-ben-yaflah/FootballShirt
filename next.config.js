/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = {
//   images: {
//     domains: ["images.ctfassets.net"],
//   },
// };

const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // optional
  modifyVars: {
    "@primary-color": "#63B32F",
    "@heading-color": "#606060",
    "@label-color": "#000000",
    "@card-head-color": "#000000",
    "@checkbox-color": "#63B32F",
    "@menu-dark-bg": "#000000",
  },
  // optional
  lessVarsFilePath: "./src/styles/variables.less",
  // optional
  lessVarsFilePathAppendToEndOfContent: false,

  cssLoaderOptions: {},
  images: {
    domains: ["cdn.chec.io"],
  },

  webpack(config) {
    return config;
  },

  future: {
    webpack5: true,
  },
});
