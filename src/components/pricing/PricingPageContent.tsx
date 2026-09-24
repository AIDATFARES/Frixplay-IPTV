"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, CreditCard, Headphones, HelpCircle, MonitorSmartphone, ShieldCheck, Sparkles, Tv, Zap } from "lucide-react";

type Plan = {
  id: string;
  duration: string;
  months: number;
  price: number;
  oldPrice?: number;
  saving: string;
  popular?: boolean;
  isTrial?: boolean;
};

const plans: Plan[] = [
  { id: "24-hours", duration: "24 Hours", months: 0, price: 0, saving: "Free Trial", isTrial: true },
  { id: "1-month", duration: "1 Month", months: 1, price: 14.99, saving: "" },
  { id: "3-months", duration: "3 Months", months: 3, price: 35, saving: "Save 22%" },
  { id: "6-months", duration: "6 Months", months: 6, price: 49.99, saving: "Save 44%" },
  { id: "12-months", duration: "12 Months", months: 12, price: 69.99, oldPrice: 80, saving: "Save 61%", popular: true },
];

const planFeatures = [
  "+50,000 Channels",
  "+120,000 Films & Series",
  "200,000+ VODs",
  "All supported devices",
  "4K, Full HD & HD quality",
  "99.9% server stability",
  "Updated TV guide (EPG)",
  "24/7 support",
];

const includedFeatures = [
  { icon: Tv, title: "+50,000 Channels", text: "Explore live channels from around the world, including sports, news and entertainment." },
  { icon: MonitorSmartphone, title: "200,000+ VODs", text: "Enjoy +120,000 Films & Series and a massive, regularly refreshed video-on-demand library." },
  { icon: Zap, title: "Anti-freeze Technology", text: "Optimized streaming technology helps deliver a smoother experience at busy times." },
  { icon: Headphones, title: "24/7 Support", text: "The Frixplay support team is here to help with setup and streaming questions." },
  { icon: Sparkles, title: "Fast Setup", text: "Your Frixplay details are sent after payment so you can start setting up quickly." },
  { icon: CreditCard, title: "TV Guide (EPG)", text: "Browse your channel schedule more easily with an electronic programme guide." },
];

const billingQuestions = [
  { question: "1. Which payment methods can I use?", answer: <>Available payment options are shown when you place your order. <Link className="font-semibold text-[#FFB800] hover:text-[#FFE600] transition-colors" href="/contact">Contact Frixplay support</Link> if you need help before purchasing.</> },
  { question: "2. Is my payment protected?", answer: "Please use the official Frixplay payment process and never share payment details through an unverified link or message." },
  { question: "3. Will my subscription renew automatically?", answer: <>Renewal details are provided when you order. If you have any questions about your subscription period or renewal, <Link className="font-semibold text-[#FFB800] hover:text-[#FFE600] transition-colors" href="/contact">contact support</Link> before your plan expires.</> },
  { question: "4. Can I change my plan or number of connections?", answer: <>Yes. <Link className="font-semibold text-[#FFB800] hover:text-[#FFE600] transition-colors" href="/contact">Contact the support team</Link> with your order email and the plan or connection change you need, and they will advise on the available options.</> },
];

export default function PricingSection() {
  const [devices, setDevices] = useState(1);

  function priceFor(plan: Plan) {
    return (plan.price * devices).toFixed(2);
  }

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to purchase the Frixplay IPTV ${plan.duration} plan with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden bg-[#050607] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[780px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/20 via-[#060814] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#FFE600]/35 bg-[#FFE600]/[0.06] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF7A00]">Frixplay IPTV</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="block text-white">Choose Your Exclusive</span>
            <span className="mt-1 block text-[#FFB800]">Subscription Plans &amp; Pricing.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-stone-400 sm:text-base">Choose the Frixplay plan that fits you, with secure checkout and helpful 24/7 support.</p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-stone-500">Need help getting started? Visit our <Link className="font-semibold text-[#FFE600] hover:text-[#FF7A00]" href="/installation">installation guide</Link> or browse the <Link className="font-semibold text-[#FFE600] hover:text-[#FF7A00]" href="/channels">channel list</Link> before you order.</p>
        </header>

        <div className="mx-auto mt-10 max-w-2xl" role="radiogroup" aria-label="Number of device connections">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-stone-400">Choose your connections</p>
          <div className="grid grid-cols-3 rounded-2xl border border-[#FFB800]/30 bg-[#050607]/90 p-1.5 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button key={count} type="button" role="radio" aria-checked={selected} onClick={() => setDevices(count)} className={`rounded-xl px-4 py-3 text-sm font-bold transition-all ${selected ? "bg-red-600 text-white shadow-lg shadow-red-600/30" : "text-stone-400 hover:text-white"}`}>
                  {count} {count === 1 ? "Device" : "Devices"}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6 items-stretch">
          {plans.map((plan) => (
            <article key={plan.id} className={`relative flex flex-col rounded-3xl p-6 text-white transition-all duration-300 ${plan.isTrial ? "glass-panel border-2 border-[#FFB800]/60 shadow-[0_0_25px_rgba(239,68,68,0.15)] hover:-translate-y-2" : plan.popular ? "glass-panel border-2 border-[#FFB800] shadow-[0_10px_40px_rgba(239,68,68,0.25)] xl:-translate-y-3" : "glass-panel shadow-xl hover:-translate-y-1"}`}>
              {plan.popular && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-[#FFB800] bg-red-600 px-4 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">Most popular</span>}
              <h3 className="text-center text-2xl font-bold text-white">{plan.duration}</h3>
              <p className="mt-1 text-center text-sm text-stone-500 font-medium">{plan.isTrial ? "Trial" : "Subscription"}</p>
              <div className="mt-3 flex items-baseline justify-center gap-2">
                <p className="text-4xl font-black tracking-tight text-white">{plan.isTrial ? "Free" : `$${priceFor(plan)}`}</p>
                {plan.oldPrice && <p className="text-lg font-semibold text-stone-400 line-through">${(plan.oldPrice * devices).toFixed(2)}</p>}
              </div>
              {plan.saving ? (
                <p className="mx-auto mt-3 rounded-full border border-red-200 bg-[#FFB800]/10 px-3.5 py-1 text-center text-[11px] font-bold text-red-600">{plan.saving}</p>
              ) : (
                <div className="h-7 mt-3" />
              )}
              <ul className="mt-6 flex-grow space-y-3 border-t border-white/5 pt-5">
                {planFeatures.map((feature) => <li className="flex gap-2.5 text-sm font-medium text-stone-300" key={feature}><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB800]" strokeWidth={3} />{feature}</li>)}
              </ul>
              <button type="button" onClick={() => handleOrder(plan)} className="mt-7 w-full rounded-full bg-gradient-to-r from-[#FFB800] to-[#FF7A00] py-3.5 text-sm font-bold text-white shadow-[0_4px_15px_rgba(16,185,129,0.3)] transition-all hover:from-[#FF7A00] hover:to-[#FFB800] hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)] active:scale-[0.98]">Buy now</button>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-stone-400">Reliable support for every Frixplay IPTV subscription.</p>

        <section className="mt-20 grid gap-8 rounded-3xl border border-white/10 bg-[#0b0f1c]/80 p-6 shadow-2xl lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FF7A00]">Diamond plan</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">24 Months — our best subscription value</h2>
            <p className="mt-4 max-w-2xl leading-7 text-stone-400">Enjoy uninterrupted Frixplay IPTV streaming across supported devices, with fast activation, 4K and Full HD quality, a TV guide, and ongoing support.</p>
            <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-stone-300 sm:grid-cols-2">
              {["4K & High Definition", "+50,000 Channels", "+120,000 Films & Series", "200,000+ VODs", "All supported devices", "Updated TV guide"].map((feature) => <p className="flex items-center gap-2" key={feature}><Check className="h-4 w-4 text-[#FFE600]" strokeWidth={3} />{feature}</p>)}
            </div>
          </div>
          <div className="rounded-3xl glass-panel p-7 text-white border-2 border-red-600 shadow-2xl">
            <h3 className="text-center text-xl font-bold text-white">24 Months</h3>
            <p className="mt-1 text-center text-sm text-stone-500 font-medium">Subscription</p>
            <p className="mt-3 text-center text-4xl font-black text-white">${(99.95 * devices).toFixed(2)}</p>
            <p className="mx-auto mt-3 w-fit rounded-full border border-red-200 bg-[#FFB800]/10 px-3.5 py-1 text-xs font-bold text-red-600">Best value</p>
            <ul className="mt-6 space-y-3 border-t border-white/5 pt-5">{planFeatures.map((feature) => <li className="flex gap-2.5 text-sm font-medium text-stone-300" key={feature}><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB800]" strokeWidth={3} />{feature}</li>)}</ul>
            <button type="button" onClick={() => handleOrder({ id: "24-months", duration: "24 Months", months: 24, price: 99.95, saving: "Best value" })} className="mt-7 w-full rounded-full bg-gradient-to-r from-[#FFB800] to-[#FF7A00] py-3.5 text-sm font-bold text-white shadow-[0_4px_15px_rgba(16,185,129,0.3)] transition-all hover:from-[#FF7A00] hover:to-[#FFB800] hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)] active:scale-[0.98]">Buy now</button>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-3xl font-bold text-white">Every plan includes</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map(({ icon: Icon, title, text }) => <article className="rounded-2xl border border-white/10 bg-[#050607]/80 p-6 text-center" key={title}><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFB800]/15 text-[#FF7A00]"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-lg font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-stone-400">{text}</p></article>)}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[1140px]">
          <h2 className="text-center text-3xl font-extrabold text-white">Billing &amp; Subscription FAQ</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {billingQuestions.map((item) => (
              <div className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0f1419]/90 shadow-xl hover:border-[#FFB800]/40 transition-colors" key={item.question}>
                <div className="bg-[#18202a] border-b border-white/10 px-5 py-4 flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#FFB800] shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.question}
                  </h3>
                </div>
                <div className="p-5 text-sm text-stone-300 leading-relaxed bg-[#0f1419]/60 flex-1">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-[#FF7A00]"><ShieldCheck className="h-5 w-5 text-[#FFB800]" />Secure ordering and friendly Frixplay support.</div>
      </div>
    </section>
  );
}
