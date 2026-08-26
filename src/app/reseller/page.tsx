import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata = {
  title: "Build Your IPTV Reseller Business – High-Margin Plans | Flash 4K",
  description: "Start your profitable IPTV reseller business today. Enjoy high margins, a powerful management panel, instant setup and flexible credit packages. Get started now!",
  alternates: {
    canonical: "/reseller",
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow pt-4">
      <ResellerPageContent />
    </main>
  );
}
