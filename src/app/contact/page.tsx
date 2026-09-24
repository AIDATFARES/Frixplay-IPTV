"use client";

import { Mail, MessageCircle, ArrowRight, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="flex-grow pt-32 pb-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full relative z-10">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-[#FFE600]/35 bg-[#FFE600]/[0.06] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF7A00]">Contact Support</span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
          <span className="block text-white">Get in Touch with</span>
          <span className="mt-1 block text-[#FFB800]">Our Support Team.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-stone-400">
          We&apos;re here to help you get the best streaming experience. Send us a message and we&apos;ll get back to you quickly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg lg:gap-xl">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-md">
          <div className="glass-panel rounded-xl p-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-md">
              <Mail className="text-primary w-8 h-8" />
            </div>
            <h2 className="font-title-md text-title-md text-on-surface mb-xs">Email Us</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">For general inquiries and support.</p>
            <a
              className="text-primary font-medium hover:text-primary-fixed transition-colors"
              href="mailto:support@frixplay.store"
            >
              support@frixplay.store
            </a>
          </div>

          <div className="glass-panel rounded-xl p-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-md">
              <MessageCircle className="text-emerald-400 w-8 h-8" />
            </div>
            <h2 className="font-title-md text-title-md text-on-surface mb-xs">WhatsApp Support</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">
              Fastest way to reach us for technical issues.
            </p>
            <a
              className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors flex items-center gap-xs"
              href="https://wa.me/213552069874?text=Hello,%20I%20need%20support%20for%20Frixplay."
              target="_blank"
              rel="noreferrer"
            >
              Start Chat <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="glass-panel rounded-xl p-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center mb-md">
              <Clock className="text-on-surface-variant w-8 h-8" />
            </div>
            <h2 className="font-title-md text-title-md text-on-surface mb-xs">Response Time</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              We typically reply in <strong className="text-on-surface">Under 2 hours</strong> during standard business hours.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <div className="glass-panel rounded-xl p-lg md:p-xl h-full">
            <h2 className="font-title-md text-title-md text-on-surface mb-lg border-b border-outline-variant pb-sm">
              Send a Message
            </h2>
            <form className="flex flex-col gap-md" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="bg-surface-container-lowest/80 border border-white/10 focus:border-primary rounded-lg px-md py-sm text-on-surface placeholder:text-outline focus:outline-none transition-all"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="bg-surface-container-lowest/80 border border-white/10 focus:border-primary rounded-lg px-md py-sm text-on-surface placeholder:text-outline focus:outline-none transition-all"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="bg-surface-container-lowest/80 border border-white/10 focus:border-primary rounded-lg px-md py-sm text-on-surface placeholder:text-outline focus:outline-none transition-all"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="bg-surface-container-lowest/80 border border-white/10 focus:border-primary rounded-lg px-md py-sm text-on-surface placeholder:text-outline focus:outline-none transition-all resize-none"
                  id="message"
                  name="message"
                  placeholder="Describe your issue or question in detail..."
                  rows={6}
                ></textarea>
              </div>

              <div className="mt-sm flex justify-end">
                <button
                  className="btn-primary-voltra px-8 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 group"
                  type="submit"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
