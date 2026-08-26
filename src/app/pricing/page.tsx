import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "IPTV Subscription Plans & Pricing – Get Instant Access | Flash 4K",
  description: "Choose the perfect premium IPTV subscription plan. Enjoy flexible pricing, 4K streaming, anti-freeze tech and full VOD library. Discover our options and get started!",
  alternates: {
    canonical: "/pricing",
  },
};


export default function PricingPage() {
  return (
    <main className="flex-grow pt-4">
      <PricingPageContent />
    </main>
  );
}
