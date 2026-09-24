import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frixplay IPTV Blog – Streaming Guides, App Reviews & Tips",
  description: "Master your streaming setup with expert guides from Frixplay IPTV. Discover top IPTV players, speed optimization tips, and device troubleshooting tutorials.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Frixplay IPTV Blog – Streaming Guides, App Reviews & Tips",
    description: "Master your streaming setup with expert guides from Frixplay IPTV. Discover top IPTV players, speed optimization tips, and device troubleshooting tutorials.",
    url: "https://www.frixplay.store/blog",
    siteName: "Frixplay IPTV",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frixplay IPTV Blog – Tutorials, Reviews & Tips",
    description: "Learn how to optimize your IPTV experience, discover top streaming players, and get expert setup advice.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
