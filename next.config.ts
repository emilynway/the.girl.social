import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Short link for the Instagram bio
      { source: "/sunday-yin", destination: "/events/sunday-yin", permanent: false },
    ];
  },
};

export default nextConfig;
