export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${compact ? "py-1" : "py-1.5"}`}>
      {/* Icon Badge */}
      <div
        className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FFB800] via-[#FF8C00] to-[#FF5500] text-black shadow-[0_0_20px_rgba(255,184,0,0.45)] ${
          compact ? "w-8 h-8" : "w-10 h-10"
        } shrink-0`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={compact ? "w-4 h-4 fill-black" : "w-5 h-5 fill-black"}
        >
          <path d="M5 4.5v15c0 .9 1 1.45 1.76.98l12-7.5c.74-.46.74-1.5 0-1.96l-12-7.5C6 3.05 5 3.6 5 4.5z" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-tight text-white ${compact ? "text-xl" : "text-2xl"}`}>
            FRIX<span className="text-[#FFB800]">PLAY</span>
          </span>
          <span className="rounded-md border border-[#FFB800]/40 bg-[#FFB800]/10 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#FFB800]">
            IPTV
          </span>
        </div>
        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-stone-400 mt-0.5">
          Ultra 4K Streaming
        </span>
      </div>
    </div>
  );
}
