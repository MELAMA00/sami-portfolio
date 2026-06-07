"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";
import { useLanguage } from "@/lib/i18n";
import { fadeLeft, fadeRight, stagger, fadeUp } from "@/lib/motion";

export default function About() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Subtle glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          className="mb-16"
        >
          <span className="section-label">{t.about.label}</span>
          <div className="mt-3 gold-divider max-w-[80px]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left: Bio */}
          <motion.div
            variants={fadeLeft}
          >
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              {t.about.titleA}
              <span style={{ color: "var(--brand-accent)" }}>
                {t.about.titleB}
              </span>
            </h2>

            <p
              className="text-base mb-5 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text-secondary)",
                lineHeight: 1.85,
              }}
            >
              {t.about.bio}
            </p>

            <p
              className="text-base mb-8 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text-secondary)",
                lineHeight: 1.85,
              }}
            >
              {t.about.bio2}
            </p>

            {/* Approach bullets */}
            <div className="space-y-3">
              {t.about.bullets.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "var(--brand-accent)" }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            variants={stagger}
          >
            <motion.div
              variants={fadeRight}
              className="grid grid-cols-2 gap-4"
            >
              {t.about.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  whileHover={{
                    y: -4,
                    borderColor: "var(--brand-accent)",
                    transition: { duration: 0.2 },
                  }}
                  className="p-6 rounded-lg flex flex-col gap-2 transition-all"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span
                    className="text-5xl font-bold leading-none tracking-wide"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--brand-accent)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Info card */}
            <motion.div
              variants={fadeUp}
              className="mt-4 p-6 rounded-lg"
              style={{
                background: "var(--surface-2)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <div className="space-y-3">
                {[
                  { label: t.about.infoLocation, value: t.about.locationValue },
                  { label: t.about.infoEmail, value: personal.email },
                  { label: t.about.infoPhone, value: personal.phone },
                ].map((info) => (
                  <div key={info.label} className="flex items-center justify-between">
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        color: "var(--text-muted)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {info.label}
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
