"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { useLanguage, type ExperienceT } from "@/lib/i18n";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/motion";

export default function Experience() {
  const { t } = useLanguage();
  const experiences = t.experience.items;
  return (
    <section
      id="experience"
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at left, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <span className="section-label">{t.experience.label}</span>
          <h2
            className="mt-4 tracking-wide"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            {t.experience.title}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop only */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={`${exp.company}-${exp.role}`}
                  className="relative md:grid md:grid-cols-2 md:gap-12 md:mb-8"
                >
                  {/* Timeline dot — center */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10">
                    <motion.div
                      variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
                      transition={{ type: "spring", stiffness: 300, delay: i * 0.1 }}
                      className="w-3 h-3 rounded-full border-2"
                      style={{
                        background: "var(--brand-accent)",
                        borderColor: "var(--surface)",
                      }}
                    />
                  </div>

                  {/* Card positioned left or right */}
                  {isLeft ? (
                    <>
                      <motion.div
                        variants={fadeLeft}
                        transition={{ delay: i * 0.08 }}
                        whileHover={{
                          y: -4,
                          borderColor: "var(--brand-accent)",
                          transition: { duration: 0.2 },
                        }}
                        className="col-start-1 rounded-lg p-6 md:text-right transition-all"
                        style={{
                          background: "var(--background)",
                          border: "1px solid var(--border)",
                          borderLeft: "3px solid var(--brand-accent)",
                        }}
                      >
                        <TimelineCard exp={exp} />
                      </motion.div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <motion.div
                        variants={fadeRight}
                        transition={{ delay: i * 0.08 }}
                        whileHover={{
                          y: -4,
                          borderColor: "var(--brand-accent)",
                          transition: { duration: 0.2 },
                        }}
                        className="col-start-2 rounded-lg p-6 transition-all"
                        style={{
                          background: "var(--background)",
                          border: "1px solid var(--border)",
                          borderLeft: "3px solid var(--brand-accent)",
                        }}
                      >
                        <TimelineCard exp={exp} />
                      </motion.div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  exp,
}: {
  exp: ExperienceT;
}) {
  return (
    <div>
      <div className="mb-1">
        <span
          className="text-xs font-medium"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            color: "var(--brand-accent)",
          }}
        >
          {exp.company}
        </span>
      </div>

      <h3
        className="mb-3 leading-tight"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.15rem",
          fontWeight: 600,
          color: "var(--text-primary)",
        }}
      >
        {exp.role}
      </h3>

      <div className="flex flex-wrap gap-3 mb-4">
        <div
          className="flex items-center gap-1.5 text-xs"
          style={{
            fontFamily: "var(--font-dm-sans)",
            color: "var(--text-muted)",
          }}
        >
          <Calendar size={11} style={{ color: "var(--brand-accent)" }} />
          {exp.period}
        </div>
        <div
          className="flex items-center gap-1.5 text-xs"
          style={{
            fontFamily: "var(--font-dm-sans)",
            color: "var(--text-muted)",
          }}
        >
          <MapPin size={11} style={{ color: "var(--brand-accent)" }} />
          {exp.location}
        </div>
      </div>

      <p
        className="text-sm mb-4 leading-relaxed"
        style={{
          fontFamily: "var(--font-dm-sans)",
          color: "var(--text-secondary)",
          lineHeight: 1.75,
        }}
      >
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded text-xs"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.2)",
              color: "var(--brand-accent)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
