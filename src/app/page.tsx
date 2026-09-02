import HeroSection from "@/components/home/HeroSection";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

import TopFeatureBar from "@/components/home/TopFeatureBar";
import BrandMarquee from "@/components/home/BrandMarquee";
import MovieStrips from "@/components/home/MovieStrips";
import ChannelCategories from "@/components/home/ChannelCategories";
import DeviceSupport from "@/components/home/DeviceSupport";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import LatestArticlesSection from "@/components/home/LatestArticlesSection";
import SupportCtaSection from "@/components/home/SupportCtaSection";

export default function Home() {
  return (
    <main className="flex-col flex min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition & Brand Marquee */}
      <BrandMarquee />
      <TopFeatureBar />
      <MovieStrips />
      <div className="w-full bg-[#050607] pt-12 pb-2">
        <h3 className="text-center text-xl md:text-2xl font-bold text-white tracking-wide">
          Live Premium Sports
        </h3>
      </div>
      <BrandMarquee 
        imagesFolder="usa_channels" 
        images={[
          "Serie-A-1.webp", "21o-XGlGl9L.webp", "Sans-titre-11.webp",
          "Sans-titre-6-1-2.webp", "Sans-titre-9-1-2.webp", "NBA-IPTV-1-1.webp",
          "NFL-IPTV-1-1.webp", "CL-IPTV-1-1.webp", "Premier-League-1-1.webp",
          "Design-sans-titre-3-1.webp", "F1-IPTV-1-1.webp", "MLS-1.webp", "l2.webp", "l3.webp"
        ]}
        cardClassName="flex-shrink-0 w-[120px] h-[160px] md:w-[140px] md:h-[185px] relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black hover:border-[#FFB800]/60 hover:scale-105 transition-all duration-300 group"
        imageClassName="object-cover rounded-xl"
      />

      {/* Channel & Installation Quick Links */}
      <div className="w-full bg-[#050607] py-6 px-4 text-center border-t border-white/5 relative z-20">
        <p className="text-center text-sm md:text-base text-stone-400 max-w-3xl mx-auto">
          Find the comprehensive <Link prefetch={false} className="font-semibold text-[#FFB800] hover:text-[#FFE600]" href="/channels">Flash4K Channel List</Link> or navigate to our <Link prefetch={false} className="font-semibold text-[#FFB800] hover:text-[#FFE600]" href="/installation">Flash4K Installation Guide</Link> for a quick start.
        </p>
      </div>

      <PricingSection />
      <ChannelCategories />

      {/* Device Support & How It Works */}
      <DeviceSupport />
      <HowItWorksSection />

      {/* Info & Articles */}
      <FAQSection />
      <LatestArticlesSection />

      {/* Social Proof & Conversion */}
      <TestimonialsSection />
      <SupportCtaSection />
    </main>
  );
}
