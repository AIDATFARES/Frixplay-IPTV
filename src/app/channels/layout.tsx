import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frixplay IPTV – 50,000+ Live Channels & 4K Sports List (2026)",
  description: "Explore the complete Frixplay IPTV channel list. 50,000+ live channels, live sports (EPL, NFL, PPV) & 120K+ movies in 4K/FHD with zero buffering and instant access!",
  alternates: {
    canonical: "/channels",
  },
  openGraph: {
    title: "Frixplay IPTV – 50,000+ Live Channels & 4K Sports List (2026)",
    description: "Explore the complete Frixplay IPTV channel list. 50,000+ live channels, live sports (EPL, NFL, PPV) & 120K+ movies in 4K/FHD with zero buffering and instant access!",
    url: "https://www.frixplay.store/channels",
    siteName: "Frixplay IPTV",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frixplay IPTV – 50,000+ Live Channels & 4K Sports List",
    description: "Stream live sports, international channels, and 120K+ movies in 4K and FHD with zero buffering on Frixplay IPTV.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
