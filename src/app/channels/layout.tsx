import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live IPTV Channels & VOD – Premium 4K Entertainment | Flash4K",
  description: "Explore over 50,000 live TV channels, premium sports and a massive VOD library. Discover endless entertainment in HD and 4K. Start streaming your favorites today!",
  alternates: {
    canonical: "/channels",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
