"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Region = "ALL" | "EUROPE" | "MENA" | "AMERICAS" | "ASIA" | "AFRICA";

interface Country {
  name: string;
  code: string;
  emoji: string;
  region: Region;
}

const ALL_COUNTRIES: Country[] = [
  // EUROPE
  { name: "United Kingdom", code: "gb", emoji: "🇬🇧", region: "EUROPE" },
  { name: "France", code: "fr", emoji: "🇫🇷", region: "EUROPE" },
  { name: "Germany", code: "de", emoji: "🇩🇪", region: "EUROPE" },
  { name: "Spain", code: "es", emoji: "🇪🇸", region: "EUROPE" },
  { name: "Italy", code: "it", emoji: "🇮🇹", region: "EUROPE" },
  { name: "Portugal", code: "pt", emoji: "🇵🇹", region: "EUROPE" },
  { name: "Netherlands", code: "nl", emoji: "🇳🇱", region: "EUROPE" },
  { name: "Belgium", code: "be", emoji: "🇧🇪", region: "EUROPE" },
  { name: "Switzerland", code: "ch", emoji: "🇨🇭", region: "EUROPE" },
  { name: "Austria", code: "at", emoji: "🇦🇹", region: "EUROPE" },
  { name: "Sweden", code: "se", emoji: "🇸🇪", region: "EUROPE" },
  { name: "Norway", code: "no", emoji: "🇳🇴", region: "EUROPE" },
  { name: "Denmark", code: "dk", emoji: "🇩🇰", region: "EUROPE" },
  { name: "Finland", code: "fi", emoji: "🇫🇮", region: "EUROPE" },
  { name: "Ireland", code: "ie", emoji: "🇮🇪", region: "EUROPE" },
  { name: "Poland", code: "pl", emoji: "🇵🇱", region: "EUROPE" },
  { name: "Romania", code: "ro", emoji: "🇷🇴", region: "EUROPE" },
  { name: "Czech Republic", code: "cz", emoji: "🇨🇿", region: "EUROPE" },
  { name: "Hungary", code: "hu", emoji: "🇭🇺", region: "EUROPE" },
  { name: "Greece", code: "gr", emoji: "🇬🇷", region: "EUROPE" },
  { name: "Serbia", code: "rs", emoji: "🇷🇸", region: "EUROPE" },
  { name: "Croatia", code: "hr", emoji: "🇭🇷", region: "EUROPE" },
  { name: "Slovakia", code: "sk", emoji: "🇸🇰", region: "EUROPE" },
  { name: "Bulgaria", code: "bg", emoji: "🇧🇬", region: "EUROPE" },

  // MENA
  { name: "Saudi Arabia", code: "sa", emoji: "🇸🇦", region: "MENA" },
  { name: "UAE", code: "ae", emoji: "🇦🇪", region: "MENA" },
  { name: "Qatar", code: "qa", emoji: "🇶🇦", region: "MENA" },
  { name: "Egypt", code: "eg", emoji: "🇪🇬", region: "MENA" },
  { name: "Morocco", code: "ma", emoji: "🇲🇦", region: "MENA" },

  // AMERICAS
  { name: "United States", code: "us", emoji: "🇺🇸", region: "AMERICAS" },
  { name: "Canada", code: "ca", emoji: "🇨🇦", region: "AMERICAS" },
  { name: "Brazil", code: "br", emoji: "🇧🇷", region: "AMERICAS" },
  { name: "Argentina", code: "ar", emoji: "🇦🇷", region: "AMERICAS" },
  { name: "Mexico", code: "mx", emoji: "🇲🇽", region: "AMERICAS" },

  // ASIA
  { name: "Japan", code: "jp", emoji: "🇯🇵", region: "ASIA" },
  { name: "South Korea", code: "kr", emoji: "🇰🇷", region: "ASIA" },
  { name: "India", code: "in", emoji: "🇮🇳", region: "ASIA" },
  { name: "Australia", code: "au", emoji: "🇦🇺", region: "ASIA" },

  // AFRICA
  { name: "South Africa", code: "za", emoji: "🇿🇦", region: "AFRICA" },
  { name: "Nigeria", code: "ng", emoji: "🇳🇬", region: "AFRICA" },
  { name: "Kenya", code: "ke", emoji: "🇰🇪", region: "AFRICA" },
];

const REGIONS: Region[] = ["ALL", "EUROPE", "MENA", "AMERICAS", "ASIA", "AFRICA"];

export default function GlobalCoverageSection() {
  const [activeRegion, setActiveRegion] = useState<Region>("ALL");
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredCountries = useMemo(
    () => ALL_COUNTRIES.filter((c) => activeRegion === "ALL" || c.region === activeRegion),
    [activeRegion]
  );
  const displayLimit = isExpanded ? filteredCountries.length : 24;
  const visibleCountries = filteredCountries.slice(0, displayLimit);
  const marqueeCountries = [...ALL_COUNTRIES, ...ALL_COUNTRIES];

  return (
    <section className="py-16 md:py-24 relative z-10 bg-[#050607] overflow-hidden border-y border-white/5">
      {/* Top Infinite Marquee */}
      <div className="relative w-full border-b border-white/5 bg-[#080a15] overflow-hidden py-3 mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080a15] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080a15] to-transparent z-10 pointer-events-none" />

        <div className="flex w-[max-content] animate-marquee-fast hover:[animation-play-state:paused]">
          {marqueeCountries.map((country, idx) => (
            <div key={`top-${country.code}-${idx}`} className="flex items-center space-x-2 px-6">
              <img
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={country.name}
                loading="lazy"
                decoding="async"
                width={18}
                height={13}
                className="w-4 h-3 rounded-[2px] object-cover shadow-sm"
              />
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-widest whitespace-nowrap">
                {country.name}
              </span>
              <span className="text-stone-300 px-2">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse,rgba(79,70,229,0.12)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 mb-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full border border-[#FFB800]/30 bg-[#120b29] mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <Globe className="w-3.5 h-3.5 text-[#FFE600]" />
            <span className="text-[10px] font-bold text-[#FF7A00] uppercase tracking-widest">
              GLOBAL COVERAGE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold font-sans uppercase tracking-tight mb-4"
          >
            <span className="text-white block mb-1">AVAILABLE IN</span>
            <span className="bg-gradient-to-r from-[#FFB800] via-purple-400 to-[#FFA500] text-transparent bg-clip-text block">
              150+ COUNTRIES
            </span>
          </motion.h2>

        </div>

        {/* Region Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {REGIONS.map((region) => (
            <button
              key={region}
              onClick={() => {
                setActiveRegion(region);
                setIsExpanded(false);
              }}
              className={`px-5 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeRegion === region
                  ? "bg-red-600/30 text-red-200 border-[#FFE600]/60 shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                  : "bg-[#0c0f1d]/80 text-stone-400 border-white/10 hover:border-white/20 hover:text-stone-200"
              }`}
            >
              {region === "ALL" && activeRegion === "ALL" && (
                <Globe className="w-3 h-3 inline mr-2 text-[#FFE600] mb-0.5" />
              )}
              {region}
            </button>
          ))}
        </motion.div>

        {/* Country Grid with Flag CDN Images */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
          <AnimatePresence>
            {visibleCountries.map((country) => (
              <motion.div
                key={country.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0c0f1e]/90 border border-white/10 hover:border-[#FFB800]/40 hover:bg-[#12162d] rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-all cursor-default group shadow-sm"
              >
                <img
                  src={`https://flagcdn.com/w40/${country.code}.png`}
                  alt={`${country.name} flag`}
                  loading="lazy"
                  decoding="async"
                  width={20}
                  height={15}
                  className="w-5 h-auto rounded-[2px] object-cover shadow-sm group-hover:scale-110 transition-transform"
                />
                <span className="text-xs font-semibold text-stone-200 group-hover:text-white truncate">
                  {country.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show Expand Button */}
        {filteredCountries.length > 24 && !isExpanded && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-8">
            <button
              onClick={() => setIsExpanded(true)}
              className="flex items-center space-x-2 px-6 py-2.5 rounded-full border border-white/15 bg-[#0c0f1e] text-xs font-bold text-stone-300 hover:text-white hover:border-[#FFB800]/40 transition-colors shadow-md"
            >
              <span>SHOW ALL COUNTRIES</span>
              <ChevronDown className="w-4 h-4 text-[#FFE600]" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Bottom Infinite Marquee */}
      <div className="relative w-full border-t border-white/5 bg-[#080a15] overflow-hidden py-3">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080a15] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080a15] to-transparent z-10 pointer-events-none" />

        <div className="flex w-[max-content] animate-marquee-reverse hover:[animation-play-state:paused]">
          {marqueeCountries.map((country, idx) => (
            <div key={`bottom-${country.code}-${idx}`} className="flex items-center space-x-2 px-6">
              <img
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={country.name}
                loading="lazy"
                decoding="async"
                width={18}
                height={13}
                className="w-4 h-3 rounded-[2px] object-cover shadow-sm"
              />
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-widest whitespace-nowrap">
                {country.name}
              </span>
              <span className="text-stone-300 px-2">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
