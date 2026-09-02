import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, List, Monitor, Laptop, Smartphone, Tablet, Tv, Film, Zap, Headphones } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-88px)] pt-6 sm:pt-8 lg:pt-10 pb-16 flex items-start justify-center bg-[#050607] overflow-hidden text-center">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-family-bg.webp"
          alt="Flash4K Background"
          priority
          fill
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/40 to-[#050607]/10" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 flex flex-col items-center gap-5 pt-0 -mt-2 sm:-mt-4">

        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#FFB800] shadow-[0_0_8px_rgba(255,184,0,0.8)] animate-pulse"></span>
          <span className="text-xs font-bold text-white tracking-widest uppercase font-mono">
            LIVE NOW: Cinematic 4K Streaming
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] drop-shadow-2xl text-center">
          <span className="text-[#FFB800]">Flash4K</span> <span className="text-white">The Best IPTV</span> <br />
          <span className="text-white">Service Provider for</span> <br />
          <span className="text-white">2026</span>
        </h1>

        {/* Promotional Sub-Headline */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 drop-shadow-lg">
          <span className="text-white">Get High-Quality Streaming for Just </span>
          <a href="#pricing" className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer">
            $4.2/Month!
          </a>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-stone-300 font-normal leading-[1.6] max-w-[850px] mt-5">
          Choose from{" "}
          <Link prefetch={false} href="/channels" className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors">
            50,000+ Live Channels
          </Link>
          , +120,000 Films & Series, and 200,000+ VODs. Enjoy your time with excellent image quality up to 4K on{" "}
          <Link prefetch={false} href="/installation" className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors">
            any device of your choice
          </Link>{" "}
          including Smart TV, Android Box, PC, tablet, and smartphone—anytime and anywhere.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-8 justify-center">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Flash4K%20IPTV."
            target="_blank"
            rel="noreferrer"
            aria-label="Get free trial"
            className="group relative py-4 px-10 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#FFB800] to-[#FF7A00] hover:from-[#FF7A00] hover:to-[#FFB800] transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-105 hover:-translate-y-1 shadow-[0_0_30px_rgba(255,184,0,0.3)] hover:shadow-[0_0_40px_rgba(255,184,0,0.6)] active:scale-95"
          >
            <span>Get Free Trial</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#pricing"
            aria-label="View plans"
            className="py-4 px-10 rounded-full text-base sm:text-lg font-bold text-white bg-transparent border-[1.5px] border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-105 hover:-translate-y-1 active:scale-95 cursor-pointer"
          >
            <List className="h-5 w-5" />
            <span>View Plans</span>
          </a>
        </div>

        {/* Device Icons & Feature Cards */}
        <div className="w-full max-w-[1200px] flex flex-col items-center gap-8 pt-10">
          
          {/* Device Icons */}
          <div className="flex items-center justify-center gap-8 sm:gap-16">
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <Monitor className="w-8 h-8 text-white group-hover:text-[#FFB800] transition-colors" strokeWidth={1.5} />
              <span className="text-xs font-bold text-white tracking-wide">Smart TV</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <Laptop className="w-8 h-8 text-white group-hover:text-[#FFB800] transition-colors" strokeWidth={1.5} />
              <span className="text-xs font-bold text-white tracking-wide">Laptop / PC</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <Smartphone className="w-8 h-8 text-white group-hover:text-[#FFB800] transition-colors" strokeWidth={1.5} />
              <span className="text-xs font-bold text-white tracking-wide">Android</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <Tablet className="w-8 h-8 text-white group-hover:text-[#FFB800] transition-colors" strokeWidth={1.5} />
              <span className="text-xs font-bold text-white tracking-wide">IOS</span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-4">
            <div className="bg-[#0A0A0A]/90 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex items-center gap-4 hover:border-[#FFB800]/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl border border-[#FFB800]/30 flex items-center justify-center bg-black shrink-0 group-hover:scale-110 transition-transform">
                <Tv className="w-6 h-6 text-[#FFB800]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white leading-tight">+50,000 Channels</span>
                <span className="text-[11px] text-stone-400 mt-0.5">150+ Countries 🇺🇸🇬🇧🇨🇦</span>
              </div>
            </div>
            <div className="bg-[#0A0A0A]/90 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex items-center gap-4 hover:border-[#FFB800]/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl border border-[#FFB800]/30 flex items-center justify-center bg-black shrink-0 group-hover:scale-110 transition-transform">
                <Film className="w-6 h-6 text-[#FFB800]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white leading-tight">200,000+ VOD</span>
                <span className="text-[11px] text-stone-400 mt-0.5">Movies & Series 4K</span>
              </div>
            </div>
            <div className="bg-[#0A0A0A]/90 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex items-center gap-4 hover:border-[#FFB800]/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl border border-[#FFB800]/30 flex items-center justify-center bg-black shrink-0 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-[#FFB800]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white leading-tight">60 FPS 4K Ultra HD</span>
                <span className="text-[11px] text-stone-400 mt-0.5">Crystal Clear Sports</span>
              </div>
            </div>
            <div className="bg-[#0A0A0A]/90 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex items-center gap-4 hover:border-[#FFB800]/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl border border-[#FFB800]/30 flex items-center justify-center bg-black shrink-0 group-hover:scale-110 transition-transform">
                <Headphones className="w-6 h-6 text-[#FFB800]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white leading-tight">24/7 Live Support</span>
                <span className="text-[11px] text-stone-400 mt-0.5">WhatsApp & Email</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
