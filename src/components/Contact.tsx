"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { personal } from "@/data/portfolio";
import { useLanguage } from "@/lib/i18n";
import { fadeUp, fadeLeft, stagger } from "@/lib/motion";

export default function Contact() {
  const { t } = useLanguage();

  const infoItems = [
    {
      icon: <Mail size={18} />,
      label: t.contact.infoEmail,
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: <Phone size={18} />,
      label: t.contact.infoPhone,
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <MapPin size={18} />,
      label: t.contact.infoLocation,
      value: t.contact.locationValue,
      href: null,
    },
    {
      icon: <ExternalLink size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/samikessar",
      href: personal.linkedin,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.span variants={fadeUp} className="section-label">
            {t.contact.label}
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
            {t.contact.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-[480px] mx-auto text-sm"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--text-muted)",
            }}
          >
            {t.contact.intro}
          </motion.p>
        </motion.div>

        {/* Full-width contact info */}
        <motion.div
          variants={fadeLeft}
          className="max-w-[900px] mx-auto"
        >
          <h3
            className="mb-8 text-2xl font-semibold text-center"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            {t.contact.joinTitle}
          </h3>

          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 rounded-lg"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    color: "var(--brand-accent)",
                  }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div
                    className="text-xs mb-0.5"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--text-muted)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm hover:text-[var(--brand-accent)] transition-colors break-words"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      className="text-sm break-words"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div
            className="p-6 rounded-lg max-w-[640px] mx-auto"
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(201,168,76,0.15)",
              borderLeft: "3px solid var(--brand-accent)",
            }}
          >
            <p
              className="text-sm italic leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text-secondary)",
              }}
            >
              &ldquo;{t.hero.tagline}&rdquo;
            </p>
            <p
              className="mt-2 text-xs"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--brand-accent)",
              }}
            >
              {t.contact.quoteAuthor}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
