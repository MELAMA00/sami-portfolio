"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, X, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { fadeUp, stagger, staggerFast, scaleSpring } from "@/lib/motion";
import { saroutyGallery, type SaroutyGalleryItem } from "@/data/sarouty-gallery";

export default function SaroutyCaseStudy() {
  const { t, lang } = useLanguage();
  const cs = t.caseStudySarouty;
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const close = () => setLightbox(null);

  const getStep = () => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return 280;
    const gap = parseFloat(window.getComputedStyle(el).columnGap || "16");
    return (el.firstElementChild as HTMLElement).offsetWidth + gap;
  };

  const scrollCarousel = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? getStep() : -getStep(), behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * getStep(), behavior: "smooth" });
  };

  const handleTrackScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / getStep());
    setActiveIdx(Math.max(0, Math.min(idx, saroutyGallery.length - 1)));
  };

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const activeItem: SaroutyGalleryItem | null =
    lightbox !== null ? saroutyGallery[lightbox] : null;

  return (
    <section
      id="sarouty-case-study"
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Glow — secondary accent signals the new marketing chapter */}
      <div
        className="absolute right-0 top-1/3 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at right, rgba(111,168,201,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div variants={stagger} className="mb-16 text-center">
          <motion.span
            variants={fadeUp}
            className="section-label"
            style={{ color: "var(--accent-secondary)" }}
          >
            {cs.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 tracking-wide max-w-[820px] mx-auto"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.15,
            }}
          >
            {cs.heroTitle}
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mt-6"
          >
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ fontFamily: "var(--font-dm-sans)", color: "var(--text-muted)" }}
            >
              <Calendar size={12} style={{ color: "var(--accent-secondary)" }} />
              {cs.period}
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ fontFamily: "var(--font-dm-sans)", color: "var(--text-muted)" }}
            >
              <MapPin size={12} style={{ color: "var(--accent-secondary)" }} />
              {cs.location}
            </span>
            <span
              className="px-2.5 py-1 rounded text-xs"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                background: "rgba(111,168,201,0.08)",
                border: "1px solid rgba(111,168,201,0.25)",
                color: "var(--accent-secondary)",
              }}
            >
              {cs.role}
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[680px] mx-auto text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", lineHeight: 1.8 }}
          >
            {cs.heroIntro}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-[680px] mx-auto text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", lineHeight: 1.8 }}
          >
            {cs.heroIntro2}
          </motion.p>
        </motion.div>

        {/* Pillars */}
        <motion.div variants={fadeUp} className="mb-6">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-jetbrains-mono)", color: "var(--text-muted)" }}
          >
            {cs.pillarsLabel}
          </span>
        </motion.div>

        <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {cs.pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: "var(--accent-secondary)", transition: { duration: 0.2 } }}
              className="p-6 rounded-lg transition-all"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--accent-secondary)",
              }}
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--accent-secondary)" }}
                >
                  {pillar.number}
                </span>
                <h3
                  className="text-sm font-semibold leading-snug"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)", letterSpacing: "0.02em" }}
                >
                  {pillar.title}
                </h3>
              </div>

              <motion.div variants={staggerFast} className="flex flex-wrap gap-1.5">
                {pillar.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={scaleSpring}
                    className="px-2.5 py-1 rounded-full text-xs"
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

        {/* Mers Sultan featured project */}
        <motion.div
          variants={fadeUp}
          className="mb-20 rounded-xl p-8 md:p-10"
          style={{
            background: "var(--surface)",
            border: "1px solid rgba(111,168,201,0.2)",
          }}
        >
          <span
            className="section-label"
            style={{ color: "var(--accent-secondary)" }}
          >
            {cs.mersSultanLabel}
          </span>
          <h3
            className="mt-3 mb-2"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            {cs.mersSultanTitle}
          </h3>
          <p
            className="mb-6 max-w-[640px] text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            {cs.mersSultanSubtitle}
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-6">
            {cs.mersSultanItems.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "var(--accent-secondary)" }}
                />
                <span
                  className="text-sm"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p
            className="text-xs italic"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}
          >
            {cs.mersSultanNote}
          </p>
        </motion.div>

        {/* Selected work gallery */}
        <motion.div variants={fadeUp} className="mb-10 text-center">
          <span className="section-label" style={{ color: "var(--accent-secondary)" }}>
            {cs.galleryLabel}
          </span>
          <h3
            className="mt-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 3.2vw, 2.25rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            {cs.galleryTitle}
          </h3>
          <p
            className="mt-3 max-w-[560px] mx-auto text-sm"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}
          >
            {cs.galleryIntro}
          </p>
        </motion.div>

        {saroutyGallery.length === 0 ? (
          <motion.div
            variants={fadeUp}
            className="rounded-xl py-16 px-6 text-center"
            style={{
              border: "1px dashed rgba(111,168,201,0.3)",
              background: "var(--surface)",
            }}
          >
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}
            >
              {cs.galleryEmpty}
            </p>
          </motion.div>
        ) : (
          <>
            {/* Carousel arrows */}
            <div className="flex justify-end gap-2 mb-4">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollCarousel("left")}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface-2)",
                  color: "var(--text-secondary)",
                }}
                aria-label={t.projects.prev}
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollCarousel("right")}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{
                  border: "1px solid var(--accent-secondary)",
                  background: "rgba(111,168,201,0.08)",
                  color: "var(--accent-secondary)",
                }}
                aria-label={t.projects.next}
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>

            {/* Carousel track */}
            <div className="relative -mx-6 px-6">
              {/* Left fade */}
              <div
                className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, var(--background) 0%, transparent 100%)" }}
              />
              {/* Right fade */}
              <div
                className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, var(--background) 0%, transparent 100%)" }}
              />

              <motion.div
                ref={trackRef}
                variants={stagger}
                onScroll={handleTrackScroll}
                className="no-scrollbar flex items-start gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
              >
                {saroutyGallery.map((item, i) => {
                  const alt = item.alt[lang];
                  const category = item.category[lang];
                  const ratio = item.width && item.height ? item.width / item.height : 0.75;
                  const media = (
                    <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: ratio }}>
                      <Image
                        src={item.type === "video" ? item.poster ?? item.src : item.src}
                        alt={alt}
                        fill
                        sizes="(max-width: 640px) 220px, 260px"
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                          <span
                            className="w-11 h-11 rounded-full flex items-center justify-center"
                            style={{ background: "rgba(8,8,8,0.7)", border: "1px solid rgba(255,255,255,0.4)" }}
                          >
                            <Play size={16} color="#fff" fill="#fff" />
                          </span>
                        </div>
                      )}
                      <div
                        className="absolute bottom-0 left-0 right-0 px-3 py-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "#fff",
                          background: "linear-gradient(to top, rgba(8,8,8,0.85), transparent)",
                        }}
                      >
                        {category}
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <motion.a
                      key={item.src + i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeUp}
                      whileHover={{ y: -4 }}
                      className="group block shrink-0 snap-start w-[220px] sm:w-[260px]"
                      style={{ border: "1px solid var(--border)", borderRadius: "0.5rem" }}
                      aria-label={alt}
                    >
                      {media}
                    </motion.a>
                  ) : (
                    <motion.button
                      key={item.src + i}
                      variants={fadeUp}
                      whileHover={{ y: -4 }}
                      onClick={() => setLightbox(i)}
                      className="group block shrink-0 snap-start w-[220px] sm:w-[260px] text-left"
                      style={{ border: "1px solid var(--border)", borderRadius: "0.5rem" }}
                      aria-label={alt}
                    >
                      {media}
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>

            {/* Dot indicators */}
            <div className="mt-6 flex gap-2 justify-center">
              {saroutyGallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    width: i === activeIdx ? "28px" : "8px",
                    background: i === activeIdx ? "var(--accent-secondary)" : "var(--border)",
                  }}
                  aria-label={`${cs.galleryTitle} ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Tools & workflow */}
        <motion.div variants={fadeUp} className="mt-20 text-center">
          <span className="section-label" style={{ color: "var(--accent-secondary)" }}>
            {cs.toolsLabel}
          </span>
          <h3
            className="mt-3 mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            {cs.toolsTitle}
          </h3>
        </motion.div>

        <motion.div variants={staggerFast} className="flex flex-wrap justify-center gap-2.5">
          {cs.tools.map((tool) => (
            <motion.span
              key={tool}
              variants={scaleSpring}
              whileHover={{ scale: 1.05 }}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium cursor-default"
              style={{
                fontFamily: "var(--font-dm-sans)",
                background: "rgba(111,168,201,0.08)",
                border: "1px solid rgba(111,168,201,0.22)",
                color: "var(--accent-secondary)",
              }}
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            style={{ background: "rgba(8,8,8,0.92)" }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.alt[lang]}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={close}
              className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
              aria-label="Close"
            >
              <X size={18} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {activeItem.type === "video" ? (
                <video
                  src={activeItem.src}
                  controls
                  autoPlay
                  className="max-w-[90vw] max-h-[85vh] rounded-lg"
                />
              ) : (
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt[lang]}
                  width={activeItem.width ?? 1200}
                  height={activeItem.height ?? 1500}
                  className="max-w-[90vw] max-h-[85vh] w-auto h-auto rounded-lg object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
