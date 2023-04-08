// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = withCss(withPurgeCss());

// module.exports = nextConfig
module.exports = {
  // reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['img.shields.io'],
    formats: ['image/avif', 'image/webp'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'img.shields.io',
    //     port: '',
    //     pathname: '/badge/**',
    //   },
    // ],
  },
}