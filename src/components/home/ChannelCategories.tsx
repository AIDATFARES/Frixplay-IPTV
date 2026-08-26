import { Check, Monitor, Globe2, Tv, Headphones } from "lucide-react";
import Link from "next/link";

export default function ChannelCategories() {
  const features = [
    {
      icon: Monitor,
      title: "For all devices",
      desc: "Our IPTV is 100% compatible with all operating systems, applications, TV boxes and devices available on the market.",
    },
    {
      icon: Globe2,
      title: "Global Content",
      desc: "Our IPTV subscription offers thousands of channels, movies, and series with the fastest and most stable server",
    },
    {
      icon: Tv,
      title: "Best quality FHD/4K",
      desc: "Enjoy your favorite shows, movies and events with the highest quality and performance.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "We offer 24/7 support to help you throughout your subscription, including installation, activation, and technical issues.",
    },
  ];

  const checks = [
    "Access +50,000 Channels",
    "Access +120,000 Films & Series",
    "Access 200,000+ VODs",
    "Automatic channel updates",
    "Works with all your devices",
    "Works with all IPTV apps",
  ];

  return (
    <section className="relative z-10 bg-[#050607] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        
        {/* Heading above Red Box */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#FFB800]"></span>
            <span className="text-[#FFB800] text-sm font-bold tracking-[0.2em] uppercase">Premium Quality</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#FFB800]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight animate-fade-up">
            We Are Proud to Offer the <br className="hidden md:block" />
            <span className="text-[#FFB800]">Premium IPTV Service.</span>
          </h2>
        </div>

        {/* White Feature Box */}
        <div 
          className="glass-panel rounded-2xl md:rounded-3xl p-8 md:p-12 mb-20 shadow-xl border border-white/10 animate-fade-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="mb-6 inline-flex p-4 rounded-full border border-white/10 bg-white/5">
                    <Icon className="w-8 h-8 text-[#FFB800]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-stone-400 text-[15px] leading-relaxed max-w-[280px] mx-auto font-medium">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Intro section */}
        <div 
          className="text-center mb-16 animate-fade-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#FFB800] mb-6 tracking-tight">
            IPTVFlash4K subscription prices
          </h2>
          <p className="text-stone-300 text-sm md:text-base max-w-3xl mx-auto mb-8 font-medium">
            Buying iptv from <span className="font-bold text-white">Flash 4K</span> allows you to enjoy +50,000 Channels, +120,000 Films &amp; Series, and 200,000+ VODs.
          </p>
          <p className="text-2xl md:text-[28px] font-semibold text-white">
            High-Quality IPTV Servers <span className="text-[#FFB800]">with 24/7 Uptime</span> and Zero Buffering!
          </p>
        </div>

        {/* 3x2 Grid of Feature Pills */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          {checks.map((text, i) => (
            <div key={i} className="flex items-center gap-4 bg-transparent border border-[#3b3552] rounded-full py-4 px-6 hover:border-[#FFB800] transition-colors duration-300 group">
              <Check className="w-5 h-5 text-[#FFB800] shrink-0" strokeWidth={3} />
              <span className="text-sm md:text-[15px] font-bold text-white transition-colors">{text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
