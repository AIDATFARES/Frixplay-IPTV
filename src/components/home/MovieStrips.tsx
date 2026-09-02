import Image from "next/image";
import Link from "next/link";

export default function MovieStrips() {
  const row1 = [
    "46803563a8701aa615fb654fb4ef7639.webp", "6da9e60dfd50f7ad0e5e344ee94e4c7e.webp",
    "8f516efb87c6d10460e585bb938d8fe1.webp", "bf75b83425cb9b5d998ae005d5ee7147.webp",
    "dffs.webp", "f33fe284009a72dbbd043f18f05ace39.webp", "new-movie1-e1736574874664.jpg.webp",
    "new-movie10-e1736574986310.jpg.webp", "new-movie12-e1736575004499.jpg.webp",
    "new-movie13-e1736575043741.jpg.webp", "new-movie18-e1736575106703.jpg.webp",
    "new-movie19-e1736575114454.jpg.webp", "new-movie2-e1736574891758.jpg.webp"
  ];

  const row2 = [
    "new-movie20-e1736575123747.jpg.webp", "new-movie22-e1736575140704.jpg.webp",
    "new-movie23-e1736575149450.jpg.webp", "new-movie24-e1736575160161.jpg.webp",
    "new-movie3-e1736574911385.jpg.webp", "new-movie4-e1736574926107.jpg.webp",
    "new-movie5-e1736574938665.jpg.webp", "new-movie6-e1736574948584.jpg.webp",
    "new-movie7-e1736574959152.jpg.webp", "new-movie8-e1736574969539.jpg.webp",
    "new-movie9-e1736574978899.jpg.webp", "oMutDMODnbCZf46w0dK4wncQmDB.webp"
  ];

  return (
    <section className="w-full overflow-hidden bg-[#0a0a0a] py-16 relative flex flex-col gap-6">
      {/* Section Header */}
      <div className="text-center mb-8 px-4 z-20">
        <span className="inline-block py-1 px-4 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-4">
          Endless Entertainment
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          THE ULTIMATE <span className="text-[#FFB800]">CINEMATIC</span> EXPERIENCE
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-8">
          Explore a massive library of 200,000+ Films & Series. From the latest blockbuster hits to timeless classics, all available instantly in crystal-clear 4K Ultra HD.
        </p>
        <Link
          href="/channels"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#FFB800] text-white text-sm md:text-base font-medium bg-black/20 hover:bg-[#FFB800]/10 transition-colors duration-300 gap-2"
        >
          View Flash4K Channel List <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      {/* Top Strip Title */}
      <div className="text-center z-10 relative mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
          Latest Blockbuster Movies
        </h3>
      </div>

      {/* Top Strip (Right to Left) */}
      <div className="relative flex w-max items-center">
        <div className="flex gap-4 md:gap-6 px-2 md:px-3 animate-marquee" style={{ animationDuration: '50s' }}>
          {[...row1, ...row1].map((movie, i) => (
            <div key={i} className="flex-shrink-0 w-[140px] h-[200px] md:w-[200px] md:h-[300px] relative rounded-md overflow-hidden shadow-2xl border border-white/5 hover:scale-105 hover:border-white/30 hover:z-10 transition-all duration-300">
              <Image src={`/movies/${movie}`} alt="Movie Poster" fill sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 200px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Middle Text */}
      <div className="text-center z-10 relative my-6">
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
          4K Image Film Source
        </h3>
      </div>

      {/* Bottom Strip (Left to Right) */}
      <div className="relative flex w-max items-center">
        <div className="flex gap-4 md:gap-6 px-2 md:px-3 animate-marquee-reverse" style={{ animationDuration: '50s' }}>
          {[...row2, ...row2].map((movie, i) => (
            <div key={i} className="flex-shrink-0 w-[140px] h-[200px] md:w-[200px] md:h-[300px] relative rounded-md overflow-hidden shadow-2xl border border-white/5 hover:scale-105 hover:border-white/30 hover:z-10 transition-all duration-300">
              <Image src={`/movies/${movie}`} alt="Movie Poster" fill sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 200px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
