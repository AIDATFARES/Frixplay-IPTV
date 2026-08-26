"use client";

import Link from "next/link";
import { 
  Baby, 
  Check, 
  Film, 
  Globe2, 
  Layers3, 
  Monitor, 
  Newspaper, 
  Trophy, 
  CirclePlay,
  Radio
} from "lucide-react";
import { motion } from "framer-motion";
import BrandMarquee from "@/components/home/BrandMarquee";

// Category Overview Cards
const categoryCards = [
  {
    icon: Trophy,
    title: "Sports Channels",
    items: [
      "Football, basketball, UFC, boxing, F1, and more",
      "HD/FHD and 4K 60FPS streams available",
      "Sky Sports, TNT, BeIN, ESPN, DAZN & PPV"
    ],
    count: "12,500+ Channels",
    tag: "MOST POPULAR"
  },
  {
    icon: Film,
    title: "Movie & VOD Content",
    items: [
      "Premium movie networks & cinema channels",
      "Curated 4K VOD library updated daily",
      "HBO, Cinemax, Sky Cinema, Starz & VOD"
    ],
    count: "200,000+ VODs"
  },
  {
    icon: Newspaper,
    title: "News Channels",
    items: [
      "Global, national and regional news networks",
      "24/7 breaking news and special live coverage",
      "BBC News, CNN, Sky News, Fox, CNBC, Bloomberg"
    ],
    count: "3,200+ Channels"
  },
  {
    icon: Baby,
    title: "Kids & Family",
    items: [
      "Cartoons, learning & family entertainment",
      "Dedicated child-friendly programming",
      "Disney, Cartoon Network, Nickelodeon, Boomerang"
    ],
    count: "2,800+ Channels"
  },
  {
    icon: Monitor,
    title: "Entertainment",
    items: [
      "Reality TV, variety, music, lifestyle & drama",
      "Popular everyday cable and satellite networks",
      "US, UK, Canadian & European top entertainment"
    ],
    count: "15,000+ Channels"
  },
  {
    icon: Globe2,
    title: "International",
    items: [
      "150+ country packages & regional channels",
      "Local sports, news, culture & native audio",
      "Europe, Americas, MENA, Asia & Africa"
    ],
    count: "+50,000 Channels"
  },
  {
    icon: Layers3,
    title: "Series & Shows",
    items: [
      "Latest released seasons with daily updates",
      "Complete boxsets, timeless classics & VOD",
      "Netflix, Amazon, Apple TV+, HBO Max & Disney+"
    ],
    count: "+120,000 Films & Series"
  }
];

export default function ChannelsPage() {
  return (
    <main className="min-h-screen bg-[#050607] text-white pt-24 pb-24 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_65%)] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_65%)] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Header Banner */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex rounded-full border border-[#FFE600]/35 bg-[#FFE600]/[0.06] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF7A00] mb-6"
          >
            <Radio className="w-3.5 h-3.5 mr-2 text-[#FFE600] animate-pulse inline" />
            <span>+50,000 CHANNELS · +120,000 FILMS &amp; SERIES · 200,000+ VODS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight"
          >
            <span className="block text-white">Popular Flash 4K</span>
            <span className="mt-1 block text-[#FFB800]">Live Channels &amp; VOD.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-stone-300 leading-relaxed"
          >
            Browse our full channel lineup featuring live sports, movies, news, entertainment, and on-demand series in 4K &amp; HD quality from over 150+ countries.
          </motion.p>
        </div>

        {/* SECTION 1: Category Cards Grid */}
        <section className="mb-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="relative min-h-[240px] rounded-xl border border-white/10 border-t-2 border-t-cyan-400 bg-[#050607] px-6 pb-6 pt-14 shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:border-[#FFE600]/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300 group"
                >
                  {/* Top Floating Badge Icon */}
                  <span className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#060814] bg-[#FFE600] text-stone-950 shadow-[0_6px_20px_rgba(6,182,212,0.4)] group-hover:scale-110 group-hover:bg-[#FF7A00] transition-transform">
                    <Icon className="h-6 w-6" strokeWidth={2.5} />
                  </span>

                  {/* Optional Popular Tag */}
                  {category.tag && (
                    <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-amber-500 to-[#FFA500] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-stone-950 shadow-md">
                      {category.tag}
                    </span>
                  )}

                  <h3 className="text-center text-xl font-extrabold text-white tracking-wide">
                    {category.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300 leading-tight">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FFE600]" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Total Available</span>
                    <span className="text-xs font-black text-[#FF7A00]">{category.count}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* SECTION: Channel Brand Marquee Strip */}
        <section className="mb-16 rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <BrandMarquee />
        </section>

        {/* SECTION 3: CTA Bottom Box */}
        <section className="mt-16 bg-gradient-to-r from-red-950/70 via-purple-950/70 to-red-950/70 rounded-3xl border border-[#FFB800]/30 p-8 sm:p-12 text-center shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <CirclePlay className="w-10 h-10 text-[#FF7A00] mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl font-black uppercase text-white">Ready to start watching?</h2>
            <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
              Choose your subscription plan to receive instant access credentials on WhatsApp within minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFB800] to-[#FFA500] text-stone-950 font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-105 transition-transform"
              >
                View IPTV Subscription Plans
              </Link>
              <a
                href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Flash4K%20IPTV."
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full bg-[#12162a] border border-white/20 text-white font-black text-sm uppercase tracking-wider hover:border-[#FFE600] transition-colors"
              >
                Get Free Trial via WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

