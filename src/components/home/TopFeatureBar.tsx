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
               src="/about-tv-bg.webp" 
               alt="Flash4K Service on TV"
               fill
               className="object-cover group-hover:scale-105 transition-transform duration-700"
             />
             {/* Gradient Overlay for realism and contrast */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                
                {/* Fake App Bar to simulate a Smart TV interface */}
                <div className="flex items-center gap-3 backdrop-blur-md bg-white/5 border border-white/10 p-3 rounded-xl w-max opacity-90">
                   <div className="w-10 h-10 bg-[#E50914] rounded-lg flex items-center justify-center font-bold text-white text-xs shadow-lg">NF</div>
                   <div className="w-10 h-10 bg-[#00A8E1] rounded-lg flex items-center justify-center font-bold text-white text-xs shadow-lg">PR</div>
                   <div className="w-10 h-10 bg-[#000000] border border-white/20 rounded-lg flex items-center justify-center font-bold text-white text-xs shadow-lg">HB</div>
                   <div className="w-10 h-10 bg-gradient-to-br from-[#FFB800] to-[#FF7A00] rounded-lg flex items-center justify-center font-black text-black text-xs shadow-lg">4K</div>
                </div>
             </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="flex flex-col">
            <span className="text-[#FFB800] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
              About the Service
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white leading-[1.1] mb-6 tracking-tight">
              What is <span className="text-[#FFB800]">Flash4K</span>? —<br className="hidden sm:block" /> Best IPTV in USA & Canada
            </h2>
            
            <div className="space-y-5 text-stone-300 text-sm sm:text-base leading-relaxed mb-10 font-medium">
              <p>
                Flash4K is the premier IPTV subscription service in the USA and Canada, trusted by thousands of subscribers from New York to Toronto, Los Angeles to Vancouver. We deliver live TV, on-demand movies, and live sports to viewers across the United States, Canada, and Europe — all over the internet with no cable box required.
              </p>
              <p>
                In particular, Flash4K runs on any internet-connected device — Smart TVs, Firestick, Android, iOS, and MAG Box — giving you access to a massive library without long-term contracts or equipment rental.
              </p>
              <p>
                From breaking news and blockbuster movies to live football, basketball, and PPV events. It is built for modern households that want one flexible subscription covering everything cable used to do — at a fraction of the price. For reference, the official website is <span className="text-[#FFB800] font-bold">flash4k-iptv.shop</span>.
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
