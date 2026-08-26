"use client";

import { Apple, Box, ChevronDown, Download, HelpCircle, Monitor, Satellite, Smartphone, Tv } from "lucide-react";
import { useState } from "react";

const devices = [
  { id: "smart-tv", label: "Smart TV", icon: Monitor, title: "Smart TV Setup (Samsung, LG, Sony, etc.)", app: "Smart IPTV or IPTV Smarters", note: "Samsung TVs commonly use Smart IPTV, while LG TVs can use IPTV Smarters or SS IPTV." },
  { id: "firestick", label: "Firestick", icon: Tv, title: "Firestick Setup", app: "IPTV Smarters Pro or TiviMate", note: "Install your preferred IPTV player from the Amazon Appstore, then sign in with the details from your welcome email." },
  { id: "android", label: "Android", icon: Smartphone, title: "Android Setup", app: "IPTV Smarters Pro or TiviMate", note: "Download your player from Google Play and use your supplied playlist details to sign in." },
  { id: "ios", label: "iOS", icon: Apple, title: "iPhone & iPad Setup", app: "IPTV Smarters Player", note: "Install a compatible player from the App Store and enter the credentials from your welcome email." },
  { id: "mag", label: "MAG Box", icon: Box, title: "MAG Box Setup", app: "Portal URL", note: "Send your MAG device MAC address to support so we can activate your portal before setup." },
  { id: "enigma", label: "Enigma2", icon: Satellite, title: "Enigma2 Setup", app: "XtreamTV or E-Channelizer", note: "Use a compatible Enigma2 plugin and add the playlist details supplied with your subscription." },
];

const faqs = [
  { question: "1. How do I install IPTV on a Smart TV?", answer: "Install a compatible player such as Smart IPTV or IPTV Smarters from your TV's app store, then add the M3U URL or Xtream credentials from your welcome email." },
  { question: "2. Where do I find my M3U URL?", answer: "Your M3U URL is included in the welcome email sent after activation. Contact support if you need it resent." },
  { question: "3. How can I reduce buffering?", answer: "Use a stable internet connection, restart your device and router, and select an appropriate quality setting for your connection." },
  { question: "4. How do I set up Flash 4K using Xtream Codes API?", answer: "Choose Xtream Codes API in your player and enter the server URL, username, and password from your welcome email." },
  { question: "5. Can I connect using a MAC address (Portal URL)?", answer: "Yes. MAG and compatible portal devices can be activated using their MAC address. Send it to our support team for assistance." },
];

export default function DeviceSetupGuide() {
  const [activeDevice, setActiveDevice] = useState("smart-tv");
  const device = devices.find((item) => item.id === activeDevice) ?? devices[0];
  const DeviceIcon = device.icon;

  return (
    <section className="mb-16 md:mb-[100px]">
      <header className="mx-auto mb-9 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Device Setup Instructions</h2>
        <p className="mt-3 text-base text-stone-400">Select your device to receive clear setup instructions.</p>
      </header>

      <div className="mb-7 flex flex-wrap justify-center gap-2">
        {devices.map((item) => {
          const Icon = item.icon;
          const active = item.id === activeDevice;
          return <button className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${active ? "border-red-600 bg-red-600 text-white shadow-lg shadow-red-600/30" : "border-white/15 glass-panel/[0.03] text-stone-400 hover:border-[#FFB800]/60 hover:text-white"}`} key={item.id} onClick={() => setActiveDevice(item.id)} type="button"><Icon className="h-4 w-4" />{item.label}</button>;
        })}
      </div>

      <article className="mx-auto max-w-[940px] rounded-3xl border border-white/10 bg-[#121620]/90 p-7 sm:p-10 shadow-2xl">
        <div className="flex items-center gap-3 border-b border-white/10 pb-5">
          <DeviceIcon className="h-7 w-7 text-[#FFE600]" />
          <h3 className="text-xl font-bold text-white sm:text-2xl">{device.title}</h3>
        </div>
        <div className="mt-8 space-y-8">
          <SetupStep number="1" title="Install IPTV App">Navigate to your device&apos;s app store, find <strong>{device.app}</strong>, and install the app.</SetupStep>
          <div className="rounded-xl border-l-4 border-[#FFB800] bg-red-950/30 px-4 py-3 text-sm leading-5 text-stone-300">{device.note}</div>
          <SetupStep number="2" title="Configure your playlist">Launch the IPTV app, open its settings, and enter the playlist details supplied in your welcome email.</SetupStep>
          <CodeLine label="M3U URL" text="Use the secure playlist URL from your welcome email" />
          <SetupStep number="3" title="Add EPG (optional)">Enable the TV guide by entering your EPG URL in the app&apos;s settings menu.</SetupStep>
          <CodeLine label="EPG URL" text="Use the EPG URL from your welcome email" />
          <SetupStep number="4" title="Start Watching">Reopen the app to load your playlist and start watching Flash 4K channels.</SetupStep>
        </div>
      </article>

      <div className="mx-auto mt-16 max-w-[1140px]">
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Installation FAQ</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <div className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0f1419]/90 shadow-xl hover:border-[#FFB800]/40 transition-colors" key={faq.question}>
              <div className="bg-[#18202a] border-b border-white/10 px-5 py-4 flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#FFB800] shrink-0" />
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {faq.question}
                </h3>
              </div>
              <div className="p-5 text-sm text-stone-300 leading-relaxed bg-[#0f1419]/60 flex-1">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SetupStep({ children, number, title }: { children: React.ReactNode; number: string; title: string }) {
  return <div className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-extrabold text-white shadow-md">{number}</span><div><h4 className="text-base font-bold text-white sm:text-lg">{title}</h4><p className="mt-1 text-sm leading-6 text-stone-300">{children}</p></div></div>;
}

function CodeLine({ label, text }: { label: string; text: string }) {
  return <div className="rounded-xl bg-black/40 border border-white/5 px-4 py-3 font-mono text-xs text-stone-400"><span className="font-bold text-[#FFE600]">{label}:</span> {text}</div>;
}
