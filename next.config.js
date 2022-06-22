/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CLUSTER: process.env.REACT_APP_CLUSTER,
  },
  images: {
    domains: [
      "latinomp3.co",
      "www.buenamusica.com"
    ],
  },
};

module.exports = nextConfig;
