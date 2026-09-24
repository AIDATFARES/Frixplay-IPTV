import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frixplay IPTV – Refund Policy & Satisfaction Guarantee",
  description: "Frixplay IPTV Refund Policy: We guarantee reliable streaming performance with clear terms, transparent cancellation, and a 7-day satisfaction window.",
  alternates: {
    canonical: "/refund-policy",
  },
  openGraph: {
    title: "Frixplay IPTV – Refund Policy & Satisfaction Guarantee",
    description: "Frixplay IPTV Refund Policy: We guarantee reliable streaming performance with clear terms, transparent cancellation, and a 7-day satisfaction window.",
    url: "https://www.frixplay.store/refund-policy",
    siteName: "Frixplay IPTV",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frixplay IPTV – Refund Policy & Money-Back Terms",
    description: "Frixplay IPTV customer satisfaction commitment, transparent refund terms, and money-back guidelines.",
  },
};

const sections = [
  {
    title: "Our Commitment to You",
    content: [
      "At Frixplay IPTV, we uphold the standard of our IPTV subscription service. This policy specifies when refunds may be applicable, ensuring that we maintain a transparent and just process for every customer.",
    ],
  },
  {
    title: "Refund Eligibility",
    content: ["You could be entitled to a total or partial refund in the following cases:"],
    items: [
      "Technical Failures: Service is completely non-functional on your compatible device for 72+ consecutive hours due to a fault on our side.",
      "Duplicate Payments: Accidental duplicate charge for the same subscription period.",
      "Initial 7 Day Window for new customers: Request within 7 days of first purchase after attempting support-led troubleshooting.",
    ],
  },
  {
    title: "How to Request a Refund",
    content: ["To seek a refund, kindly follow these steps:"],
    items: [
      <>Connect with our support team using our <Link className="font-semibold text-[#FFE600] hover:text-[#FF7A00]" href="/contact">Contact page</Link>.</>,
      "Please use the subject: 'Refund Request'.",
      "Please provide your complete name, the email linked to your subscription, and the purpose of your inquiry.",
    ],
  },
  {
    title: "Sample Refund Request Message",
    content: [
      <>Contact: Send a message via our <Link className="font-semibold text-[#FFE600] hover:text-[#FF7A00]" href="/contact">Contact page</Link></>,
      "Message Title: Refund Request",
      "Hello,",
      "I am writing to ask for a refund regarding my IPTV subscription.",
      "My Name: [Your Full Name]",
      "My Email: [Your Subscription Email]",
      "Reason for Refund: [Concise explanation of your concern, for example, technical errors, billing duplicates, etc.]",
      "Thank you.",
    ],
  },
  {
    title: "What We Need to Process Your Refund",
    content: [],
    items: [
      "Account email used at checkout",
      "Order/transaction ID from {Payment Gateway Name}",
      "Brief reason and steps already tried with support",
      "Device/app details (e.g., Firestick + IPTV Smarters)",
    ],
  },
  {
    title: "Processing Timeline",
    content: [],
    items: [
      "0–3 business days: Analysis executed by support team",
      "Same day after approval: The refund has been initiated, returning funds to your original method ({Payment Gateway 1} / {Payment Gateway 2}).",
      "5–10 business days: Funds manifest according to bank/card issuer.",
    ],
    after: "Expect to receive an email update at every step. Response times may increase on weekends or holidays.",
  },
  {
    title: "Exceptions (When Refunds Are Not Provided)",
    content: ["Refunds will be denied in these outlined cases:"],
    items: [
      <>You are discontent with the <Link className="font-semibold text-[#FFE600] hover:text-[#FF7A00]" href="/channels">channel list</Link> or provided content.</>,
      "Your connection speed is too slow or unstable to stream effectively.",
      "Your actions have breached our Terms of Service, including account sharing.",
      "Geo-blocking problems in your region are unfortunately outside of our influence and control.",
    ],
  },
  {
    title: "How to Avoid Refund Requests",
    content: [],
    items: [
      "Check Compatibility: Confirm your device/app supports M3U/Portal before purchase.",
      "Stable Internet: Use 30 Mbps+ and 5GHz Wi-Fi or Ethernet for 4K.",
      <>Use Setup Guides: Follow our step by step <Link className="font-semibold text-[#FFE600] hover:text-[#FF7A00]" href="/installation">Installation page</Link>.</>,
      <>Ask Support First: Most issues are solved in minutes—please <Link className="font-semibold text-[#FFE600] hover:text-[#FF7A00]" href="/contact">contact support</Link>.</>,
    ],
  },
];

export default function RefundPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
  return (
    <main className="flex-grow px-5 pb-20 pt-12 sm:px-8 md:pt-16 text-format-legal">
      <article className="mx-auto max-w-4xl">
        <header className="border-b border-white/10 pb-10 text-center mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-[#FFE600]/35 bg-[#FFE600]/[0.06] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF7A00]">Legal information</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="block text-white">Refund &amp; Money-Back</span>
            <span className="mt-1 block text-[#FFB800]">Official Policy.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-stone-400">Last adjusted: {currentDate}</p>
        </header>

        <div className="mt-10 space-y-10 text-base leading-7 text-on-surface-variant">
          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-white">{index + 1}. {section.title}</h2>
              {section.content.map((paragraph, i) => <p className="mt-4" key={i}>{paragraph}</p>)}
              {section.items && section.items.length > 0 && <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-tertiary">{section.items.map((item, i) => <li key={i}>{item}</li>)}</ul>}
              {section.after && <p className="mt-4">{section.after}</p>}
            </section>
          ))}
          <section>
            <h2 className="text-2xl font-bold text-white">9. Contact Us</h2>
            <p className="mt-4">If you have any questions regarding our Refund Policy, please contact our <Link className="font-semibold text-[#FFE600] hover:text-[#FF7A00]" href="/contact">support team</Link>.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
