import Image from "next/image";

interface BrandMarqueeProps {
  imagesFolder?: string;
  images?: string[];
  cardClassName?: string;
  imageClassName?: string;
}

export default function BrandMarquee({
  imagesFolder = "brands",
  images,
  cardClassName,
  imageClassName
}: BrandMarqueeProps) {
  const defaultBrands = [
    "0.webp", "1.webp", "10-National-Geographic-Channel.webp", "10.webp", "11.webp",
    "13.webp", "14.webp", "15.webp", "16 (1).webp", "17.webp", "2.webp", "20-disney.webp",
    "21.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp"
  ];

  const brandList = images || defaultBrands;
  const repeatList = brandList.length < 10
    ? [...brandList, ...brandList, ...brandList, ...brandList]
    : [...brandList, ...brandList];

  return (
    <div className="w-full overflow-hidden bg-[#050607] py-6 relative flex items-center">
      {/* Left/Right Gradient Masks for smooth fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050607] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050607] to-transparent z-10 pointer-events-none" />

      {/* The scrolling container */}
      <div
        className={`flex gap-6 md:gap-8 px-6 items-center w-max ${brandList.length < 10 ? 'animate-marquee-fast' : 'animate-marquee'}`}
      >
        {repeatList.map((brand, i) => (
          <div
            key={i}
            className={cardClassName || "flex-shrink-0 w-[100px] h-[50px] md:w-[140px] md:h-[65px] relative bg-white rounded-xl p-3 hover:scale-105 transition-all duration-300 shadow-[0_4px_15px_rgba(255,184,0,0.1)] hover:shadow-[0_6px_20px_rgba(255,184,0,0.25)] border border-[#FFB800]/15"}
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src={`/${imagesFolder}/${brand}`}
                alt="Channel Logo"
                fill
                sizes="(max-width: 640px) 100px, (max-width: 1024px) 140px, 160px"
                className={imageClassName || "object-contain drop-shadow-md rounded-lg"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
