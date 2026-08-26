"use client";

import Link from "next/link";
import { CirclePlay, Sparkles, MessageSquare } from "lucide-react";

export default function BlogOfferCard() {
  return (
    <div className="my-10 rounded-2xl border border-[#FFB800]/30 bg-gradient-to-r from-[#0a0d1b] via-[#121730] to-[#0a0d1b] p-6 md:p-8 shadow-[0_0_30px_rgba(255,184,0,0.12)] relative overflow-hidden not-prose">
      {/* Background Ambient Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFB800]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        <div className="space-y-3 text-center md:text-left w-full md:w-2/3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB800]/30 bg-[#FFB800]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#FFE600]">
            <Sparkles className="w-3 h-3 text-[#FFB800]" />
            <span>FLASH 4K PREMIUM IPTV OFFER</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
            Stream 2026 NFL Games in <span className="text-[#FFB800]">4K & 60FPS</span>
          </h3>
          <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
            Get instant access to over 50,000 live sports channels, 120,000+ movies & series, and 24/7 priority sports coverage across all your favorite devices.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFB800] to-[#FF7A00] px-6 py-3 text-xs font-black uppercase tracking-wider text-stone-950 shadow-[0_0_20px_rgba(255,184,0,0.3)] hover:scale-105 transition-transform"
          >
            <CirclePlay className="w-4 h-4" />
            View Subscription Plans
          </Link>
          <a
            href="https://wa.me/213552069874?text=Hello%2C%20I%20am%20interested%20in%20Flash4K%20IPTV%20for%20live%20NFL%20streaming."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-[#080b18] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:border-[#FFE600] hover:text-[#FFE600] transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            Instant WhatsApp Trial
          </a>
        </div>
      </div>
    </div>
  );
}
