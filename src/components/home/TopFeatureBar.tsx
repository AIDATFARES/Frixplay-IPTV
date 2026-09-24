"use client";

import Image from "next/image";

export default function TopFeatureBar() {
  const stats = [
    { value: "50K+", label: "LIVE CHANNELS" },
    { value: "150K+", label: "VOD TITLES" },
    { value: "4K", label: "ULTRA HD" },
    { value: "99.9%", label: "UPTIME" },
  ];

  return (
    <section className="bg-[#050607] border-y border-white/10 relative z-10 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: TV Mockup Image Area */}
          <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] xl:aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,184,0,0.15)] border border-white/10 group">
             <Image 
               src="/frixplay-sports-stadium.webp" 
               alt="Frixplay IPTV Live Sports and Channels"
               fill
               className="object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Side: Text Content */}
          <div className="flex flex-col">
            <span className="text-[#FFB800] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
              About the Service
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white leading-[1.1] mb-6 tracking-tight">
              What is <span className="text-[#FFB800]">Frixplay</span>? —<br className="hidden sm:block" /> Best IPTV in USA & Canada
            </h2>
            
            <div className="space-y-5 text-stone-300 text-sm sm:text-base leading-relaxed mb-10 font-medium">
              <p>
                Frixplay IPTV is the premier IPTV subscription service in the USA and Canada, trusted by thousands of subscribers from New York to Toronto, Los Angeles to Vancouver. We deliver live TV, on-demand movies, and live sports to viewers across the United States, Canada, and Europe — all over the internet with no cable box required.
              </p>
              <p>
                In particular, Frixplay runs on any internet-connected device — Smart TVs, Firestick, Android, iOS, and MAG Box — giving you access to a massive library without long-term contracts or equipment rental.
              </p>
              <p>
                From breaking news and blockbuster movies to live football, basketball, and PPV events. It is built for modern households that want one flexible subscription covering everything cable used to do — at a fraction of the price. For reference, the official website is <span className="text-[#FFB800] font-bold">www.frixplay.store</span>.
              </p>
            </div>

            {/* Bottom Stats Grid */}
            <div className="grid grid-cols-4 gap-4 border-t border-white/10 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FFB800] transition-colors">{stat.value}</span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#FFB800] uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
