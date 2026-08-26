import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Support – Fast & Reliable Help for IPTV | Flash 4K",
  description: "Need help with your IPTV subscription? Contact the Flash 4K support team via email or WhatsApp. Fast response times and expert technical assistance. Reach out today!",
  alternates: {
    canonical: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
