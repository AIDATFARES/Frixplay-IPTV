import Link from "next/link";
import Image from "next/image";
import DeviceSetupGuide from "@/components/installation/DeviceSetupGuide";
import { Clock3, Download, Headphones, Link2, Monitor, PlayCircle } from "lucide-react";

export const metadata = {
  title: "How to Install IPTV on Any Device – Easy Setup Guide | Flash4K",
  description: "Learn how to quickly set up Flash4K on Smart TV, Firestick, Android, iOS and MAG. Follow our simple step-by-step installation guide and start streaming today!",
  alternates: {
    canonical: "/installation",
  },
};


export default function Installation() {
  return (
    <main className="mx-auto w-full max-w-[1440px] flex-grow px-5 pb-20 pt-12 sm:px-8 md:px-12 text-format-technical">
      <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
        <span className="inline-flex rounded-full border border-[#FFE600]/35 bg-[#FFE600]/[0.06] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF7A00]">Installation Guide</span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
          <span className="block text-white">How to Setup IPTV Service</span>
          <span className="mt-1 block text-[#FFB800]">On Any Device Quickly.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-6 text-stone-400">Comprehensive step-by-step instructions to configure Flash4K on all your devices.</p>
        <p className="mx-auto mt-2 max-w-2xl text-base leading-6 text-stone-400">Flash4K works on Smart TVs, Firestick, Android, iOS, MAG, and more. New to Flash4K? Check <Link className="font-semibold text-[#FFE600] hover:text-[#FF7A00]" href="/pricing">Flash4K Pricing</Link>, or browse the <Link className="font-semibold text-[#FFE600] hover:text-[#FF7A00]" href="/channels">Flash4K Channel List</Link> before you start.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-x-9 gap-y-4 text-sm font-semibold text-stone-300">
          <span className="inline-flex items-center gap-2"><Monitor className="h-4 w-4 text-[#FFE600]" />15+ Devices Supported</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#FF7A00]" />5–15 Minutes Setup</span>
          <span className="inline-flex items-center gap-2"><Headphones className="h-4 w-4 text-[#FFE600]" />24/7 Support Available</span>
        </div>
      </header>

      <section className="mb-20 border-y border-white/[0.07] glass-panel/[0.02] py-14 sm:mb-24 sm:py-16">
        <div className="mx-auto max-w-[1000px] px-5">
          <header className="mx-auto mb-10 max-w-[560px] text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Quick Start Guide</h2>
            <p className="mt-3 text-stone-400">Get started with Flash4K quickly and easily in three straightforward steps.</p>
          </header>
          <div className="grid gap-5 md:grid-cols-3">
            <QuickStartCard icon={Download} step="1" title="Download App">Download and install a suitable IPTV player app on your device from the app store or the official site.</QuickStartCard>
            <QuickStartCard icon={Link2} step="2" title="Add M3U URL">Input your Flash4K M3U playlist URL and EPG URL, which are included in your welcome email.</QuickStartCard>
            <QuickStartCard icon={PlayCircle} step="3" title="Start Streaming">Gain immediate access to live channels, movies and TV shows in stunning 4K quality.</QuickStartCard>
          </div>

          {/* Apps Platform Logos Banner */}
          <div className="mt-12 flex justify-center items-center">
            <Image
              src="/apps-platform-logos.webp"
              alt="Supported IPTV Apps & Platforms"
              width={768}
              height={89}
              priority
              className="w-full max-w-3xl h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <DeviceSetupGuide />

      <section className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-white">Need help with setup?</h2>
        <p className="mt-2 text-stone-400">Our support team is available 24/7 to assist you with installation.</p>
        <Link className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#FFE600]/40 bg-[#FFB800]/10 px-7 py-3 font-semibold text-red-200 transition-colors hover:bg-[#FFB800]/20" href="/contact">
          Contact Support
        </Link>
      </section>
    </main>
  );
}

function QuickStartCard({ children, icon: Icon, step, title }: { children: React.ReactNode; icon: typeof Download; step: string; title: string }) {
  return (
    <article className="glass-panel rounded-xl p-7 text-center transition-transform hover:-translate-y-1">
      <Icon className="mx-auto h-9 w-9 text-[#FFE600]" />
      <h3 className="mt-5 text-lg font-bold text-white">{step}. {title}</h3>
      <p className="mt-3 text-sm leading-6 text-stone-400">{children}</p>
    </article>
  );
}
