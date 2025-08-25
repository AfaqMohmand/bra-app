import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "out",
  images: {
    unoptimized: true,
    domains: [
      "i.pinimg.com",
      "img.drz.lazcdn.com",
      "shyaway.static.n7.io",
      "encrypted-tbn0.gstatic.com",
      "assets.myntassets.com",
      "n.nordstrommedia.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
