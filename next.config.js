/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   "images.unsplash.com",
    //   "plus.unsplash.com",
    //   "res.cloudinary.com",
    //   "w7.pngwing.com",
    //   "images.pexels.com",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
