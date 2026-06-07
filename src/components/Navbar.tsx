"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "experience", "skills", "projects", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNav = useCallback((href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  /* Language toggle — FR | EN */
  const LangToggle = ({ className = "" }: { className?: string }) => (
    <div
      className={cn("flex items-center gap-1.5 select-none", className)}
      style={{ fontFamily: "var(--font-body)" }}
      aria-label="Language switcher"
    >
      <button
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
        className="text-sm font-semibold transition-colors duration-200"
        style={{
          color: lang === "fr" ? "var(--brand-accent)" : "var(--text-muted)",
        }}
      >
        FR
      </button>
      <span className="text-sm" style={{ color: "var(--text-muted)" }}>
        |
      </span>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className="text-sm font-semibold transition-colors duration-200"
        style={{
          color: lang === "en" ? "var(--brand-accent)" : "var(--text-muted)",
        }}
      >
        EN
      </button>
    </div>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-[#080808]/80 border-b border-[#222]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-3xl font-bold tracking-wide select-none"
          style={{ fontFamily: "var(--font-display)", color: "var(--brand-accent)" }}
        >
          SK
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={cn(
                "text-sm font-medium transition-colors duration-200 relative group",
                activeSection === link.href.slice(1)
                  ? "text-[var(--brand-accent)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              )}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-0.5 left-0 h-px bg-[var(--brand-accent)] transition-all duration-300",
                  activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </button>
          ))}
        </nav>

        {/* CTA + language toggle (desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNav("#contact")}
            className="text-sm px-5 py-2 rounded border border-[var(--brand-accent)] text-[var(--brand-accent)] hover:bg-[var(--brand-accent)] hover:text-[#080808] transition-all duration-200 font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.nav.cta}
          </motion.button>
          <LangToggle />
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <LangToggle />
          <button
            className="text-[var(--text-primary)] p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#0e0e0e] border-b border-[#222]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "text-left text-base font-medium transition-colors",
                    activeSection === link.href.slice(1)
                      ? "text-[var(--brand-accent)]"
                      : "text-[var(--text-secondary)]"
                  )}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                onClick={() => handleNav("#contact")}
                className="mt-2 text-sm px-5 py-2.5 rounded border border-[var(--brand-accent)] text-[var(--brand-accent)] font-medium text-left"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t.nav.cta}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
