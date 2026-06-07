"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { fadeUp, stagger, staggerFast, scaleSpring } from "@/lib/motion";

// Icons keyed by category order (stable across languages)
const categoryIcons = ["🎬", "🎨", "📱", "✍️", "📊", "🎤"];

export default function Skills() {
  const { t } = useLanguage();
  return (
    <section
      id="skills"
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.span variants={fadeUp} className="section-label">
            {t.skills.label}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 tracking-wide"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            {t.skills.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-[500px] mx-auto text-sm"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--text-muted)",
            }}
          >
            {t.skills.intro}
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {t.skills.categories.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.name}
              variants={fadeUp}
              whileHover={{
                y: -6,
                borderColor: "var(--brand-accent)",
                transition: { duration: 0.2 },
              }}
              className="p-6 rounded-lg transition-all"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{categoryIcons[idx]}</span>
                <h3
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--brand-accent)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {skillGroup.name}
                </h3>
              </div>

              {/* Skill badges */}
              <motion.div
                variants={staggerFast}
                className="flex flex-wrap gap-2"
              >
                {skillGroup.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={scaleSpring}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium cursor-default"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
