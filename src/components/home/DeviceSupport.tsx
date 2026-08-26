import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DeviceSupport() {
  return (
    <section className="py-20 bg-[#050607] text-white relative z-10 border-y border-white/10 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFB800] mb-3 block">
            MULTI-DEVICE COMPATIBILITY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our IPTV service supports{" "}
            <Link
              href="/installation"
              className="text-[#FFB800] hover:text-[#FFE600] transition-colors"
            >
              all your favorite devices
            </Link>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="flex items-center justify-center w-full">
            <div className="relative w-full max-w-[550px] p-3 bg-white/5 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
              <Image
                src="/devices-support.webp"
                alt="Supported IPTV Devices"
                width={1024}
                height={350}
                sizes="(max-width: 768px) 100vw, 550px"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column: Features List */}
          <div className="space-y-8 w-full">
            {/* Item 1 */}
            <div className="flex gap-4 items-start group w-full">
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 group-hover:bg-[#FFB800] group-hover:text-white transition-colors duration-300 border border-emerald-500/30">
                <Check className="h-4 w-4 stroke-[3]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  Smart TV, Smart Phone, Tablets, Android and TV BOX
                </h3>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                  You can use Our Server services on all Smart Phones & TVs, Android Box, and all devices that can play IPTV powered with different OS (Android, iOS, Windows & ...) via{" "}
                  <Link
                    href="/installation"
                    className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
                  >
                    our installation guide
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4 items-start group w-full">
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 group-hover:bg-[#FFB800] group-hover:text-white transition-colors duration-300 border border-emerald-500/30">
                <Check className="h-4 w-4 stroke-[3]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  Mag Devices & Mag simulators
                </h3>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                  Just send us your Mac Address related to your MAG Device or your Mag simulator (like STB). We send you Mag portal and you have access to our{" "}
                  <Link
                    href="/channels"
                    className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
                  >
                    channels playlist
                  </Link>
                  !
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4 items-start group w-full">
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 group-hover:bg-[#FFB800] group-hover:text-white transition-colors duration-300 border border-emerald-500/30">
                <Check className="h-4 w-4 stroke-[3]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  Laptop & Computers
                </h3>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                  Our Server service is flexible and you can play line on almost all digital devices. You can install an{" "}
                  <Link
                    href="/installation"
                    className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
                  >
                    IPTV player
                  </Link>{" "}
                  on your computer and enjoy watching IPTV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
