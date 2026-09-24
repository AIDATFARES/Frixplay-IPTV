import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 240, 320],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/how-does-iptv-work",
        destination: "/blog/how-iptv-works",
        permanent: true,
      },
      {
        source: "/blog/iptv-vs-streaming-services-2026",
        destination: "/blog/iptv-vs-streaming-services",
        permanent: true,
      },
      {
        source: "/blog/iptv-keeps-freezing-causes-fixes",
        destination: "/blog/iptv-keeps-freezing-fixes",
        permanent: true,
      },
      {
        source: "/blog/iptv-buffering-after-a-few-minutes",
        destination: "/blog/iptv-buffering-after-few-minutes",
        permanent: true,
      },
      {
        source: "/blog/iptv-works-on-one-device-but-not-another",
        destination: "/blog/iptv-works-on-one-device-not-another",
        permanent: true,
      },
      {
        source: "/blog/how-to-set-up-iptv-on-smart-tv-2026",
        destination: "/blog/how-to-setup-iptv-on-smart-tv",
        permanent: true,
      },
      {
        source: "/blog/iptv-vs-cable-tv-2026",
        destination: "/blog/iptv-vs-cable-tv",
        permanent: true,
      },
      // Legacy URL fallbacks
      {
        source: "/blog/how-to-watch-nfl-games-live-2026",
        destination: "/channels",
        permanent: true,
      },
      {
        source: "/blog/how-to-watch-nba-games-live-2026",
        destination: "/channels",
        permanent: true,
      },
      {
        source: "/blog/watch-nfl-nba-mlb-nhl-iptv-2026",
        destination: "/channels",
        permanent: true,
      },
      {
        source: "/blog/iptv-audio-video-out-of-sync-2026",
        destination: "/blog/iptv-keeps-freezing-fixes",
        permanent: true,
      },
      {
        source: "/blog/iptv-channel-switching-slow-2026",
        destination: "/blog/iptv-keeps-freezing-fixes",
        permanent: true,
      },
      {
        source: "/blog/iptv-internet-speed-2026",
        destination: "/blog/how-iptv-works",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-player-for-smart-tv-2026",
        destination: "/blog/how-to-setup-iptv-on-smart-tv",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

