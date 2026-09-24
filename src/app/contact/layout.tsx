import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frixplay IPTV – 24/7 Customer Support & Free Trial Requests",
  description: "Need fast help or want a free trial? Contact Frixplay IPTV support 24/7 via WhatsApp or email for instant activation, device setup assistance, and billing help.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Frixplay IPTV – 24/7 Customer Support & Free Trial Requests",
    description: "Need fast help or want a free trial? Contact Frixplay IPTV support 24/7 via WhatsApp or email for instant activation, device setup assistance, and billing help.",
    url: "https://www.frixplay.store/contact",
    siteName: "Frixplay IPTV",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frixplay IPTV – 24/7 Customer Support & Inquiries",
    description: "Get 24/7 customer support via WhatsApp or email for instant activation, setup guides, and subscription inquiries.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
