"use client";

import { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Headphones,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Zap,
} from "lucide-react";

type CreditPlan = {
  id: string;
  credits: number;
  price: number;
  oldPrice?: number;
  popular?: boolean;
  bestValue?: boolean;
};

const creditPlans: CreditPlan[] = [
  {
    id: "120-credits",
    credits: 120,
    price: 299,
  },
  {
    id: "240-credits",
    credits: 240,
    price: 559,
    popular: true,
  },
  {
    id: "360-credits",
    credits: 360,
    price: 799,
    bestValue: true,
  },
  {
    id: "600-credits",
    credits: 600,
    price: 1199,
  },
];

const planFeatures = [
  "Each credit hour equals 1 month",
  "Free Trial Everyday",
  "Customize groups",
  "Pay As You Go!",
  "Credits Not Expire",
  "24/7 support",
  "Create Sub-Resellers",
];

const advantages = [
  {
    icon: ShoppingCart,
    title: "COMPATIBLE WITH ALL DEVICES",
    description:
      "Our IPTV service is compatible with all devices: Smart TV, Android devices, MAG, Apple TV, Firestick & more.",
  },
  {
    icon: Server,
    title: "EFFICIENT SERVERS",
    description:
      "We have large, high-capacity servers equipped with anti-freeze technology to provide you with the best quality of service.",
  },
  {
    icon: Headphones,
    title: "EXPERT SUPPORT",
    description:
      "Our dedicated technical support team is available 7 days a week to help you and your reseller business whenever needed.",
  },
  {
    icon: Zap,
    title: "FULL CONTROL PANEL",
    description:
      "Manage customer lines, edit channels, generate unlimited free test accounts, and create sub-resellers effortlessly.",
  },
];

const resellerFaqs = [
  {
    question: "DOES THE CONTROL PANEL EXPIRE?",
    answer:
      "No, your reseller control panel does not expire. Once activated, your panel remains active permanently, and your credits never expire.",
  },
  {
    question: "CAN I RENEW A SUBSCRIPTION?",
    answer:
      "Yes! You can easily extend or renew any client subscription directly from your Xtream reseller panel with a single click.",
  },
  {
    question: "CAN I CHANGE A SUBSCRIPTION FROM ONE DEVICE TO ANOTHER?",
    answer:
      "Absolutely. You can modify lines, switch device types, or update M3U playlists and Xtream Codes parameters at any time inside your dashboard.",
  },
  {
    question: "WHAT IF THE SUBSCRIPTION DOES NOT WORK FOR MY CLIENT?",
    answer:
      "Our expert support team is available 7 days a week to assist you with fast client setup, line diagnostics, and troubleshooting.",
  },
  {
    question: "HOW TO SELL IPTV SUBSCRIPTIONS?",
    answer:
      "You can sell IPTV subscriptions through your website, social media channels, local network, or direct clients. You set your own pricing and keep 100% of your profit margin.",
  },
  {
    question: "DOES YOUR IPTV SERVER SUPPORT ALL DEVICES?",
    answer:
      "Yes! Our servers support Smart TVs (Samsung, LG), Android TV/Boxes, Amazon Firestick, MAG boxes, Formuler, Enigma2, iOS, Windows, Mac, and Apple TV.",
  },
  {
    question: "HOW CAN I ACTIVATE A MAG BOX?",
    answer:
      "Inside your reseller panel, select 'Add MAG Device', enter the client's MAC address (00:1A:79:XX:XX:XX), and assign their subscription package instantly.",
  },
  {
    question: "CAN I STOP A SUBSCRIPTION?",
    answer:
      "Yes, you have complete authority to disable, pause, modify, or extend customer lines whenever necessary directly from your control panel.",
  },
  {
    question: "WHAT IF A STREAM STARTS BUFFERING?",
    answer:
      "Our servers feature automatic load balancing and anti-freeze technology with 99.9% uptime. If a client experiences buffering, you can switch line servers or adjust stream codecs in the panel.",
  },
  {
    question: "WHAT IF THE SERVER STOPS WORKING FOREVER?",
    answer:
      "We operate redundant multi-location server clusters across Europe and North America to guarantee continuous reliability, zero downtime, and backup streaming nodes.",
  },
  {
    question: "HOW TO CREATE A PANEL FOR A SUB RESELLER?",
    answer:
      "Inside your master panel, navigate to 'Sub-Reseller Management', create a new account username/password, and assign credit balance from your account.",
  },
];

export default function ResellerPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOrderPanel = (plan?: CreditPlan) => {
    const message = plan
      ? `Hello! I would like to order the IPTV Reseller Panel with ${plan.credits} Credits for $${plan.price}.`
      : `Hello! I am interested in becoming an IPTV Reseller and would like to request panel access.`;
    window.open(
      `https://wa.me/213552069874?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleFreeTrial = () => {
    const message = `Hello! I am interested in testing an IPTV Reseller Panel free trial account.`;
    window.open(
      `https://wa.me/213552069874?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#050607] py-16 sm:py-20 lg:py-24 text-format-marketing">
      {/* Background radial gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/25 via-[#060814] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* HERO SECTION */}
        <header className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FFB800]/30 bg-[#FFB800]/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FFE600]">
            <Sparkles className="h-3.5 w-3.5" />
            IPTV Reseller Program
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white">
            <span className="block text-white">Become an IPTV Reseller</span>
            <span className="mt-1 block text-[#FFB800]">And Start Earning Easy Money.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-stone-300 sm:text-base sm:leading-8">
            Our IPTV reseller program helps you meet the expectations of your customers, enabling you to provide them with the best possible solutions. Join us and enjoy dozens of benefits with our program now.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handleFreeTrial}
              className="rounded-full bg-[#FFB800] px-8 py-3.5 text-base font-bold text-white shadow-[0_0_25px_rgba(255,184,0,0.4)] transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_35px_rgba(255,184,0,0.6)] active:scale-[0.98]"
            >
              Free Trial
            </button>
          </div>
        </header>

        {/* OUR RESELLER PLANS */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight">
              <span className="block text-white">Our Exclusive</span>
              <span className="mt-1 block text-[#FFB800]">IPTV Reseller Plans.</span>
            </h2>
            <p className="mt-3 text-base font-bold text-stone-300">
              We provide you with the best servers at the right price
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {creditPlans.map((plan) => (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-3xl glass-panel p-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-4 border-[#FFB800] shadow-[0_10px_40px_rgba(255,184,0,0.25)] scale-102"
                    : plan.bestValue
                    ? "border-4 border-emerald-500 shadow-[0_10px_40px_rgba(16,185,129,0.2)]"
                    : "border border-white/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FFB800] px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md">
                    Most Popular
                  </span>
                )}
                {plan.bestValue && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FFB800] to-[#FF7A00] px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md">
                    Best Value
                  </span>
                )}

                <div className="text-center">
                  <span className="text-xs font-black uppercase tracking-widest text-[#FFB800]">
                    PREMIUM IPTV
                  </span>
                  <h3 className="mt-1 text-2xl font-black text-white">
                    {plan.credits} Credit
                  </h3>
                </div>

                <div className="my-5 rounded-2xl bg-stone-100 py-4 text-center">
                  <span className="text-4xl font-black text-[#FFB800]">
                    ${plan.price}
                  </span>
                </div>

                <ul className="flex-grow space-y-3 border-t border-white/5 pt-4 text-xs font-semibold text-stone-300">
                  {planFeatures.map((feature) => (
                    <li className="flex items-center gap-2" key={feature}>
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-100 text-[#FFB800]">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleOrderPanel(plan)}
                  className="mt-6 w-full rounded-2xl bg-[#FFB800] py-3.5 text-sm font-extrabold text-white shadow-[0_4px_15px_rgba(255,184,0,0.3)] transition-all duration-300 hover:bg-red-700 hover:shadow-[0_6px_20px_rgba(255,184,0,0.4)] active:scale-[0.98]"
                >
                  Get A Panel
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* ADVANTAGES OF IPTV RESELLER */}
        <div className="mt-28">
          <h2 className="text-center text-3xl sm:text-4xl font-black leading-tight tracking-tight">
            <span className="block text-white">Advantages of</span>
            <span className="mt-1 block text-[#FFB800]">IPTV Reseller Program.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10 bg-[#050607]/90 backdrop-blur-md shadow-xl hover:border-[#FFB800]/40 transition-colors"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFB800]/15 text-[#FFB800] mb-5">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-stone-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="mx-auto mt-28 max-w-4xl">
          <h2 className="text-center text-3xl sm:text-4xl font-black leading-tight tracking-tight">
            <span className="block text-white">Frequently Asked</span>
            <span className="mt-1 block text-[#FFB800]">Questions & Answers.</span>
          </h2>

          <div className="mt-10 space-y-3">
            {resellerFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-white/10 bg-[#050607]/90 shadow-md transition-colors hover:border-[#FFB800]/30"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left font-bold text-white transition-colors hover:glass-panel/[0.03]"
                  >
                    <h3 className="text-sm sm:text-base tracking-wide uppercase font-extrabold flex items-center gap-3">
                      <span className="text-[#FFB800]">▶</span>
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-[#FFB800]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-stone-400" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 bg-[#0a0d0d]/80 px-6 py-4 text-sm text-stone-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={() => handleOrderPanel()}
              className="rounded-full bg-red-600 px-10 py-4 text-base font-extrabold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(255,184,0,0.5)] transition-all duration-300 hover:bg-[#FFB800] hover:shadow-[0_0_40px_rgba(255,184,0,0.7)] active:scale-[0.98]"
            >
              Become Reseller
            </button>
          </div>
        </div>

        {/* TRUST BADGE */}
        <div className="mt-16 flex items-center justify-center gap-2 text-xs font-semibold text-stone-400">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>Official Xtream Codes Reseller Panel — 99.9% Uptime Guarantee</span>
        </div>
      </div>
    </section>
  );
}
