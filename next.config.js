/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CLUSTER: process.env.REACT_APP_CLUSTER,
  },
  images: {
    domains: [
      "i.scdn.co",
      "resources.tidal.com",
      "encrypted-tbn1.gstatic.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
      "www.highsnobiety.com",
      "kajabi-storefronts-production.kajabi-cdn.com"
    ],
  },
};

module.exports = nextConfig;
