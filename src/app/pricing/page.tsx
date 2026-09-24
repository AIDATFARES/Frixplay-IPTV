import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "Frixplay IPTV – Subscription Plans, Deals & Instant Delivery",
  description: "Choose affordable Frixplay IPTV plans with instant delivery. Stream 50,000+ 4K channels, live sports, anti-freeze servers & a 7-day money-back guarantee!",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Frixplay IPTV – Subscription Plans, Deals & Instant Delivery",
    description: "Choose affordable Frixplay IPTV plans with instant delivery. Stream 50,000+ 4K channels, live sports, anti-freeze servers & a 7-day money-back guarantee!",
    url: "https://www.frixplay.store/pricing",
    siteName: "Frixplay IPTV",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frixplay IPTV – Subscription Plans & Instant Activation",
    description: "Affordable premium IPTV subscriptions with 50K+ live channels, 4K sports, movies & anti-freeze servers. Instant delivery guaranteed.",
  },
};


export default function PricingPage() {
  return (
    <main className="flex-grow pt-4">
      <PricingPageContent />
    </main>
  );
}
