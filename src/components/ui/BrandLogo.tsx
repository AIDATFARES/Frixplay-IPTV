import Image from "next/image";

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      alt="Flash4K"
      className={`block shrink-0 object-contain object-left drop-shadow-[0_2px_10px_rgba(255,184,0,0.2)] ${compact ? "h-11 w-32" : "h-16 w-48"}`}
      src="/flash4k-iptv-logo.webp"
      width={192}
      height={64}
      sizes="(max-width: 768px) 128px, 192px"
      priority
    />
  );
}
