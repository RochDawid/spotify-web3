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
    ],
  },
};

module.exports = nextConfig;
