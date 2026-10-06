import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Short link for the Instagram bio
      { source: "/sunday-yin", destination: "/events/sunday-yin", permanent: false },
      // Short link for the "can't make it" button in the confirmation email
      {
        source: "/sunday-yin/cancel",
        destination: "/events/sunday-yin/cancel",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
