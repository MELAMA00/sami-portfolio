"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import { personal } from "@/data/portfolio";
import { useLanguage } from "@/lib/i18n";

const fadeOpacity = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      className="relative py-10"
      style={{
        borderTop: "1px solid rgba(201,168,76,0.2)",
        background: "var(--background)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <motion.div
            variants={fadeOpacity}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-left"
          >
            <p
              className="text-sm"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "var(--text-muted)",
              }}
            >
              © 2025{" "}
              <span style={{ color: "var(--brand-accent)" }}>
                {personal.name}
              </span>{" "}
              · {t.footer.builtWith}
            </p>
          </motion.div>

          {/* Right: Social links */}
          <motion.div
            variants={fadeOpacity}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <motion.a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: "var(--brand-accent)" }}
              whileTap={{ scale: 0.95 }}
              className="transition-colors"
              style={{ color: "var(--text-muted)" }}
              aria-label="LinkedIn"
            >
              <ExternalLink size={18} />
            </motion.a>
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.15, color: "var(--brand-accent)" }}
              whileTap={{ scale: 0.95 }}
              className="transition-colors"
              style={{ color: "var(--text-muted)" }}
              aria-label="Email"
            >
              <Mail size={18} />
            </motion.a>

            <span
              className="text-xs"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                color: "var(--text-muted)",
              }}
            >
              SK
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
