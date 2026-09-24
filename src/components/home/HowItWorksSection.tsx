import Image from "next/image";
import Link from "next/link";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-[#050607] text-white relative z-10 border-b border-white/10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* ========================================================================= */}
        {/* PART 1: How does it work? Frixplay Timeline */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFB800] mb-2 block">
            EASY 3-STEP PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFB800] tracking-tight">
            How does it work? Frixplay IPTV
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Get your{" "}
            <a
              href="#pricing"
              className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors cursor-pointer"
            >
              IPTV subscription
            </a>{" "}
            in 3 easy steps. Choose the right plan, complete the payment, and receive your login details. Within minutes you can enjoy your favorite programs.
          </p>
        </div>

        {/* Timeline Steps Container */}
        <div className="relative max-w-[960px] mx-auto mb-28">
          {/* Vertical Dashed Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-white/20 hidden md:block" />

          {/* STEP 1 */}
          <div className="relative mb-16 md:mb-20">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-[#FFB800] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,184,0,0.6)]">
                Step One
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Card */}
              <div className="glass-panel text-white p-8 rounded-2xl shadow-xl relative border border-white/10"
              >
                <h3 className="text-xl font-extrabold text-[#FFB800] mb-3">
                  <a
                    href="#pricing"
                    className="hover:text-red-700 transition-colors cursor-pointer"
                  >
                    Place your order.
                  </a>
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  After placing your order from our{" "}
                  <a
                    href="#pricing"
                    className="text-[#FFB800] font-semibold hover:text-red-700 transition-colors cursor-pointer"
                  >
                    pricing plans
                  </a>
                  , you will receive your subscription details within 20 minutes at most by email or{" "}
                  <Link
                    href="/contact"
                    className="text-[#FFB800] font-semibold hover:text-red-700 transition-colors"
                  >
                    WhatsApp
                  </Link>
                  .
                </p>
              </div>

              {/* Right Image */}
              <div className="overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-xl"
              >
                <Image
                  src="/frixplay-step-order.webp"
                  alt="Place your Frixplay IPTV order online"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative mb-16 md:mb-20">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-[#FFB800] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,184,0,0.6)]">
                Step Two
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Image */}
              <div className="overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-xl order-2 md:order-1"
              >
                <Image
                  src="/frixplay-step-setup.webp"
                  alt="Instant installation and setup"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Card */}
              <div className="glass-panel text-white p-8 rounded-2xl shadow-xl relative border border-white/10 order-1 md:order-2"
              >
                <h3 className="text-xl font-extrabold text-[#FFB800] mb-3">
                  <Link
                    href="/installation"
                    className="hover:text-red-700 transition-colors"
                  >
                    Installation & Setup
                  </Link>
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Follow our step-by-step{" "}
                  <Link
                    href="/installation"
                    className="text-[#FFB800] font-semibold hover:text-red-700 transition-colors"
                  >
                    installation guide
                  </Link>{" "}
                  to configure IPTV on Smart TV, Firestick, Android, iOS, and PC effortlessly.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-[#FFB800] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,184,0,0.6)]">
                Step Three
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Card */}
              <div className="glass-panel text-white p-8 rounded-2xl shadow-xl relative border border-white/10"
              >
                <h3 className="text-xl font-extrabold text-[#FFB800] mb-3">
                  <Link
                    href="/channels"
                    className="hover:text-red-700 transition-colors"
                  >
                    Watch and enjoy.
                  </Link>
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Stream all your favorite live sports, 4K movies, and premium channels from our complete{" "}
                  <Link
                    href="/channels"
                    className="text-[#FFB800] font-semibold hover:text-red-700 transition-colors"
                  >
                    channels catalog
                  </Link>
                  .
                </p>
              </div>

              {/* Right Image */}
              <div className="overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-xl"
              >
                <Image
                  src="/frixplay-step-watch.webp"
                  alt="Watch and enjoy live TV"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: Getting Started with Frixplay Is Easy */}
        {/* ========================================================================= */}
        <div className="pt-10 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFB800] tracking-tight">
              Getting Started with Frixplay Is Easy
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-4 leading-relaxed">
              Enjoy high quality IPTV streaming with Frixplay. Watch{" "}
              <Link
                href="/channels"
                className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
              >
                live TV channels
              </Link>
              , movies, and sports anytime, anywhere.
            </p>
          </div>

          <div className="space-y-16 max-w-[1080px] mx-auto">
            {/* Feature Block 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-white/5"
              >
                <Image
                  src="/frixplay-feature-sports.webp"
                  alt="Complete IPTV Subscription Experience"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="space-y-4"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFB800] leading-snug">
                  <a
                    href="#pricing"
                    className="hover:text-[#FFE600] transition-colors cursor-pointer"
                  >
                    We Offer You A Complete IPTV Subscription Experience
                  </a>
                </h3>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  Enjoy uninterrupted IPTV 4K/HD with an{" "}
                  <a
                    href="#pricing"
                    className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors cursor-pointer"
                  >
                    IPTV subscription
                  </a>{" "}
                  from Frixplay. Choose from 1, 3, 6 or 12 months packages and experience continuous entertainment with full access to our{" "}
                  <Link
                    href="/channels"
                    className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
                  >
                    streaming library
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Feature Block 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 order-2 md:order-1"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFB800] leading-snug">
                  <Link
                    href="/channels"
                    className="hover:text-[#FFE600] transition-colors"
                  >
                    +50,000 Channels & 200,000+ VODs With Our IPTV Smarters Pro
                  </Link>
                </h3>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  Unlock a world of entertainment with over{" "}
                  <Link
                    href="/channels"
                    className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
                  >
                    +50,000 live channels and +120,000 films & series
                  </Link>{" "}
                  for the ultimate viewing experience. Check out our{" "}
                  <a
                    href="#pricing"
                    className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors cursor-pointer"
                  >
                    subscription plans
                  </a>{" "}
                  to start watching immediately.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-white/5 order-1 md:order-2"
              >
                <Image
                  src="/frixplay-feature-channels.webp"
                  alt="+50,000 Live Channels & VODs"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>

            {/* Feature Block 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-white/5"
              >
                <Image
                  src="/frixplay-feature-epg.webp"
                  alt="Live TV and TV Guide EPG"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="space-y-4"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFB800] leading-snug">
                  <Link
                    href="/installation"
                    className="hover:text-[#FFE600] transition-colors"
                  >
                    Live TV With IPTV Smarters Pro and TV Guide (EPG)
                  </Link>
                </h3>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  With Frixplay you get access to an interactive TV guide (EPG), Live TV, and replay options. Read our{" "}
                  <Link
                    href="/installation"
                    className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
                  >
                    IPTV setup guide
                  </Link>{" "}
                  or explore our{" "}
                  <Link
                    href="/faq"
                    className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
                  >
                    FAQ support
                  </Link>{" "}
                  for complete device instructions.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
