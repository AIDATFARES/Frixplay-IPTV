"use client";

import { motion } from "framer-motion";
import { Cpu, Tv2, Clock, ShieldCheck, Wifi, Sparkles } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Cpu,
      title: "Anti-Freeze 10.0 Tech",
      desc: "Custom H.265/HEVC encoding guarantees 0% buffering, even during high-demand live sports broadcasts.",
      color: "text-primary",
    },
    {
      icon: Tv2,
      title: "True 4K 60FPS Streaming",
      desc: "Ultra High Definition with 60 frames per second crisp motion for every sports action.",
      color: "text-tertiary",
    },
    {
      icon: Clock,
      title: "7-Day Catchup TV",
      desc: "Missed a match or movie? Rewind and rewatch any broadcast from the past 7 days on demand.",
      color: "text-secondary",
    },
    {
      icon: ShieldCheck,
      title: "99.99% Server Uptime",
      desc: "Redundant global cloud network with failover nodes ensures non-stop broadcast reliability.",
      color: "text-[#FFE600]",
    },
    {
      icon: Wifi,
      title: "Low Bandwidth Mode",
      desc: "Smart compression allows smooth HD streaming even on modest internet connections (8+ Mbps).",
      color: "text-primary",
    },
    {
      icon: Sparkles,
      title: "Complete EPG Guide",
      desc: "Full Electronic Program Guide with schedule times, match info, and movie descriptions.",
      color: "text-tertiary",
    },
  ];

  return (
    <section className="py-xl relative z-10 bg-surface-container-lowest/40">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-xs block"
          >
            Built for Extreme Performance
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-semibold text-on-background mb-sm"
          >
            Flash 4K for Flawless Streaming
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body-lg text-body-lg text-on-surface-variant"
          >
            Experience the future of IPTV technology with Next-Gen infrastructure designed specifically for live sports events.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-panel rounded-xl p-lg border border-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-md rounded-xl bg-surface-container-high w-fit mb-md group-hover:scale-110 transition-transform">
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-xs group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
