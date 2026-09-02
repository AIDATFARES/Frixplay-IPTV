import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPTV News, Guides & Streaming Tips | Flash4K Blog",
  description: "Stay updated with the latest in 4K streaming technology, new channel additions, setup guides and troubleshooting tips to optimize your Flash4K experience.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
