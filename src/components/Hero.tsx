"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const bezier = [0.22, 1, 0.36, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: bezier },
  },
};

export default function Hero() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Background radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--brand-accent) 1px, transparent 1px), linear-gradient(90deg, var(--brand-accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full py-20 pt-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="section-label">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-5 leading-[1.05] tracking-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(3rem, 7vw, 5rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              Sami{" "}
              <span style={{ color: "var(--brand-accent)" }}>Kessar</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base mb-3"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text-secondary)",
                letterSpacing: "0.05em",
              }}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-10 max-w-[500px]"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              &ldquo;{t.hero.tagline}&rdquo;
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#projects")}
                className="flex items-center gap-2 px-7 py-3.5 rounded text-sm font-semibold transition-all duration-200"
                style={{
                  background: "var(--brand-accent)",
                  color: "#080808",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {t.hero.ctaProjects}
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-7 py-3.5 rounded text-sm font-medium border transition-all duration-200"
                style={{
                  border: "1px solid var(--brand-accent)",
                  color: "var(--brand-accent)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                <Mail size={16} />
                {t.hero.ctaContact}
              </motion.button>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              variants={itemVariants}
              className="mt-14 pt-8 grid grid-cols-3 gap-6"
              style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}
            >
              {[
                { val: t.hero.stats.exp, lbl: t.hero.stats.expLbl },
                { val: t.hero.stats.audience, lbl: t.hero.stats.audienceLbl },
                { val: t.hero.stats.companyVal, lbl: t.hero.stats.companyLbl },
              ].map((s) => (
                <div key={s.lbl}>
                  <div
                    className="text-3xl font-bold mb-0.5 tracking-wide"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--brand-accent)",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {s.lbl}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Profile photo ── */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: bezier }}
              className="flex items-center justify-center order-1 lg:order-2"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div
                  className="absolute -inset-4 rounded-2xl"
                  style={{
                    background:
                      "radial-gradient(ellipse, rgba(201,168,76,0.15) 0%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />

                {/* Gold corner accents */}
                <div
                  className="absolute -top-2 -left-2 w-10 h-10"
                  style={{
                    borderTop: "2px solid var(--brand-accent)",
                    borderLeft: "2px solid var(--brand-accent)",
                    borderRadius: "4px 0 0 0",
                  }}
                />
                <div
                  className="absolute -top-2 -right-2 w-10 h-10"
                  style={{
                    borderTop: "2px solid var(--brand-accent)",
                    borderRight: "2px solid var(--brand-accent)",
                    borderRadius: "0 4px 0 0",
                  }}
                />
                <div
                  className="absolute -bottom-2 -left-2 w-10 h-10"
                  style={{
                    borderBottom: "2px solid var(--brand-accent)",
                    borderLeft: "2px solid var(--brand-accent)",
                    borderRadius: "0 0 0 4px",
                  }}
                />
                <div
                  className="absolute -bottom-2 -right-2 w-10 h-10"
                  style={{
                    borderBottom: "2px solid var(--brand-accent)",
                    borderRight: "2px solid var(--brand-accent)",
                    borderRadius: "0 0 4px 0",
                  }}
                />

                {/* Photo */}
                <div
                  className="relative overflow-hidden rounded-xl"
                  className="w-[260px] h-[330px] sm:w-[320px] sm:h-[400px] lg:w-[380px] lg:h-[480px]"
                  style={{
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  <Image
                    src="/sami-profile.png"
                    alt="Sami Kessar — Social Media Manager"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="380px"
                  />
                  {/* Subtle bottom gradient overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-32"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 100%)",
                    }}
                  />
                  {/* Name tag at bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div
                      className="px-3 py-2 rounded-lg backdrop-blur-sm"
                      style={{
                        background: "rgba(8,8,8,0.7)",
                        border: "1px solid rgba(201,168,76,0.3)",
                      }}
                    >
                      <div
                        className="text-sm font-semibold"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--brand-accent)",
                        }}
                      >
                        {t.hero.photoRole}
                      </div>
                      <div
                        className="text-xs"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--text-muted)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {t.hero.photoCaption}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden sm:block absolute -right-12 top-12 px-3 py-2 rounded-lg"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid rgba(201,168,76,0.3)",
                  }}
                >
                  <div
                    className="text-xs font-medium"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--brand-accent)",
                    }}
                  >
                    {t.hero.badgeExpVal}
                  </div>
                  <div
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {t.hero.badgeExpLbl}
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="hidden sm:block absolute -left-12 bottom-16 px-3 py-2 rounded-lg"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid rgba(201,168,76,0.3)",
                  }}
                >
                  <div
                    className="text-xs font-medium"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--brand-accent)",
                    }}
                  >
                    {t.hero.badgeAudVal}
                  </div>
                  <div
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {t.hero.badgeAudLbl}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("#about")}
      >
        <span
          className="text-xs tracking-widest"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--text-muted)",
          }}
        >
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} style={{ color: "var(--brand-accent)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
