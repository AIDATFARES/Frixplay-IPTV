"use client";

import Link from "next/link";
import { ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "1. What is Flash4K?",
    answer: (
      <>
        Flash4K is a premium IPTV service that offers live TV, VOD movies, TV series, and sports channels in high-quality streaming, including 4K. Check out our{" "}
        <Link
          href="/channels"
          className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
        >
          live TV channels
        </Link>{" "}
        and{" "}
        <a
          href="#pricing"
          className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors cursor-pointer"
        >
          IPTV subscription plans
        </a>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "2. Do I need a subscription to use Flash4K?",
    answer: (
      <>
        Yes, a subscription is required. However, we offer a{" "}
        <a
          href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Flash4K%20IPTV."
          target="_blank"
          rel="noreferrer"
          className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
        >
          free trial
        </a>{" "}
        so you can test the service before committing to our{" "}
        <a
          href="#pricing"
          className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors cursor-pointer"
        >
          subscription plans
        </a>
        .
      </>
    ),
  },
  {
    id: 3,
    question: "3. What devices are compatible with Flash4K?",
    answer: (
      <>
        Flash4K works on Android TV, Firestick, Smart TVs, Android phones, tablets, and apps like Tivimate. Follow our step-by-step{" "}
        <Link
          href="/installation"
          className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
        >
          installation guides
        </Link>{" "}
        to get started.
      </>
    ),
  },
  {
    id: 4,
    question: "4. Can I watch on multiple devices at the same time?",
    answer: (
      <>
        Yes, we offer multi-device support. You can choose an{" "}
        <a
          href="#pricing"
          className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors cursor-pointer"
        >
          IPTV subscription plan
        </a>{" "}
        that allows streaming on more than one device simultaneously. Perfect for families or shared accounts.
      </>
    ),
  },
  {
    id: 5,
    question: "5. Can I watch sports on Flash4K?",
    answer: (
      <>
        Absolutely. We offer a wide selection of live sports channels, including major leagues and international events. Explore our full{" "}
        <Link
          href="/channels"
          className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
        >
          channels catalog
        </Link>
        .
      </>
    ),
  },
  {
    id: 6,
    question: "6. What payment methods do you accept?",
    answer: (
      <>
        We accept PayPal, cryptocurrency (such as Bitcoin), credit cards, and instant bank transfers for quick and secure payments. Contact our{" "}
        <Link
          href="/contact"
          className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
        >
          support team
        </Link>{" "}
        for any payment inquiries.
      </>
    ),
  },
  {
    id: 7,
    question: "7. What kind of content is included?",
    answer: (
      <>
        The service includes live TV channels, sports, movies, TV series, kids&apos; content, international channels, and more – all in HD or 4K quality. Learn more in our{" "}
        <Link
          href="/blog"
          className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
        >
          IPTV articles & guides
        </Link>
        .
      </>
    ),
  },
  {
    id: 8,
    question: "8. Do I need a VPN?",
    answer: (
      <>
        A VPN is not required but is recommended in some regions to ensure unrestricted access and added privacy. Read our{" "}
        <Link
          href="/faq"
          className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
        >
          FAQ knowledge base
        </Link>{" "}
        for further setup details.
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#050607] text-white relative z-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight animate-fade-up">
            Frequently Asked Questions<br />(FAQ)
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-5 leading-relaxed max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Find answers to common questions about our IPTV service, including{" "}
            <a
              href="#pricing"
              className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors cursor-pointer"
            >
              subscriptions
            </a>
            ,{" "}
            <Link
              href="/installation"
              className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
            >
              devices
            </Link>
            , streaming quality, payments, and more. If you need further help, our{" "}
            <Link
              href="/contact"
              className="text-[#FFB800] font-semibold hover:text-[#FFE600] transition-colors"
            >
              support team
            </Link>{" "}
            is here for you.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4 mx-auto animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? "border-[#FFB800]/50 bg-[#0D0F12] shadow-[0_0_20px_rgba(255,184,0,0.1)]" : "border-white/10 glass-panel hover:border-[#FFB800]/30"}`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-5 py-5 sm:px-6 flex items-center justify-between text-left gap-4 bg-transparent cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-300 ${isOpen ? "text-[#FFB800]" : "text-stone-400"}`} />
                    <h3 className={`text-base sm:text-lg font-bold leading-snug transition-colors duration-300 ${isOpen ? "text-[#FFB800]" : "text-white"}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-[#FFB800]" : "text-stone-500"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-stone-300 leading-relaxed bg-transparent border-t border-white/5 pt-4 mt-1">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Knowledge Base */}
        <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#FFB800] to-[#FF7A00] text-white font-bold text-xs sm:text-sm hover:from-[#FF7A00] hover:to-[#FFB800] transition-all duration-300 shadow-[0_4px_15px_rgba(255,184,0,0.3)] hover:scale-105 active:scale-95"
          >
            <span>View Complete FAQ Knowledge Base</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
