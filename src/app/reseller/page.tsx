import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata = {
  title: "Frixplay IPTV – Reseller Program, Credits & Panel Access",
  description: "Launch your IPTV business with Frixplay IPTV. Get a high-speed reseller panel, low credit costs, sub-reseller tools, instant activation & 99.9% server uptime!",
  alternates: {
    canonical: "/reseller",
  },
  openGraph: {
    title: "Frixplay IPTV – Reseller Program, Credits & Panel Access",
    description: "Launch your IPTV business with Frixplay IPTV. Get a high-speed reseller panel, low credit costs, sub-reseller tools, instant activation & 99.9% server uptime!",
    url: "https://www.frixplay.store/reseller",
    siteName: "Frixplay IPTV",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frixplay IPTV – Start an IPTV Reseller Business",
    description: "Earn high recurring profits with Frixplay IPTV reseller credits. Automated panel & full sub-reseller management.",
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow pt-4">
      <ResellerPageContent />
    </main>
  );
}
