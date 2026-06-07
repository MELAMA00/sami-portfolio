"use client";

import { motion } from "framer-motion";
import { clients } from "@/data/portfolio";
import { useLanguage } from "@/lib/i18n";
import { fadeUp, stagger } from "@/lib/motion";

export default function Clients() {
  const { t } = useLanguage();
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "var(--background)",
        borderTop: "1px solid rgba(201,168,76,0.12)",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Label */}
        <motion.div
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.span variants={fadeUp} className="section-label">
            {t.clients.label}
          </motion.span>
        </motion.div>

        {/* Client logos strip */}
        <motion.div
          variants={stagger}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-0"
        >
          {clients.map((client, i) => (
            <motion.div
              key={client}
              variants={fadeUp}
              className="flex items-center"
            >
              <motion.span
                whileHover={{ color: "var(--brand-accent)", scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-2 text-sm font-semibold tracking-wide cursor-default transition-colors"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: "var(--text-muted)",
                }}
              >
                {client}
              </motion.span>
              {i < clients.length - 1 && (
                <span
                  className="hidden md:block w-1.5 h-1.5 rounded-full"
                  style={{ background: "rgba(201,168,76,0.3)" }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
