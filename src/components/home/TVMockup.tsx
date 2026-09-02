import Image from "next/image";

export default function TVMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[1250px] flex items-center justify-center">
      {/* Background Ambient Glow Behind Mockup */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800]/25 via-[#FF7A00]/30 to-purple-500/25 blur-[100px] rounded-full transform scale-125 pointer-events-none animate-pulse duration-1000" />

      {/* Floating Animated Container */}
      <div
        className="relative z-10 w-full animate-fade-up opacity-0 [animation-delay:400ms] group"
      >
        <div className="animate-float w-full transition-transform duration-500 filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)] group-hover:scale-[1.03] group-hover:-translate-y-2">
          <Image
            alt="Flash4K streaming on TV, phone, tablet, and laptop"
            className="h-auto w-full object-contain filter drop-shadow-[0_12px_30px_rgba(6,182,212,0.2)]"
            height={1000}
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            src="/bunnystream-iptv-transparent.webp"
            width={1800}
          />
        </div>
      </div>
    </div>
  );
}
