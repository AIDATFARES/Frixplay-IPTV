import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frequently Asked Questions – IPTV Setup & Billing | Flash 4K",
  description: "Have questions about our premium IPTV service? Find fast answers about setup, channels, payments, and troubleshooting in the comprehensive Flash 4K FAQ.",
  alternates: {
    canonical: "/faq",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
