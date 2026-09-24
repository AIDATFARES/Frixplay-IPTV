import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frixplay IPTV – FAQ: Common Questions, Free Trial & Setup",
  description: "Get quick answers to all Frixplay IPTV questions: subscription plans, free trial access, anti-freeze streaming, device setup, payment methods & 24/7 live help.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frixplay IPTV – FAQ: Common Questions, Free Trial & Setup",
    description: "Get quick answers to all Frixplay IPTV questions: subscription plans, free trial access, anti-freeze streaming, device setup, payment methods & 24/7 live help.",
    url: "https://www.frixplay.store/faq",
    siteName: "Frixplay IPTV",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frixplay IPTV – Frequently Asked Questions & Support",
    description: "Find quick answers on Frixplay IPTV subscriptions, free trial requests, anti-freeze servers, device setup, and 24/7 live support.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
