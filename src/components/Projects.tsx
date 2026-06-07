"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";

const bezier = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Language-independent metadata for each card (image + external link).
// Order matches t.projects.cards.
const projectMeta: { img: string; href: string | null }[] = [
  { img: "/proj-4.jpg", href: null },
  { img: "/proj-2.jpeg", href: null },
  { img: "/proj-5.jpg", href: "https://youtu.be/Hh-4iu0oWL0?si=y1FYf0uxsjVg4V2B" },
  { img: "/proj-3.jpg", href: null },
  { img: "/proj-1.jpeg", href: "https://youtu.be/PmKlf7ah67U?si=eFLvwqbEoFtkw73g" },
  { img: "/proj-6.jpg", href: "https://vt.tiktok.com/ZSQesCmA2/" },
  { img: "/proj-7.jpeg", href: "https://youtu.be/IgocrbGiyDo?si=dioHHvfibPiQ4MzN" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: bezier },
  },
};

const CARD_WIDTH = 336; // 320px card + 16px gap
const SPEED = 45; // px per second
const NUM_CARDS = projectMeta.length;
const TOTAL_WIDTH = NUM_CARDS * CARD_WIDTH; // one set width in px
const DURATION_S = TOTAL_WIDTH / SPEED; // seconds to scroll one full set
const DURATION_MS = DURATION_S * 1000;
const CARD_DURATION_MS = (CARD_WIDTH / TOTAL_WIDTH) * DURATION_MS;

export default function Projects() {
  const { t } = useLanguage();

  // Zip translated card text with shared image/link metadata
  const cards = t.projects.cards.map((c, i) => ({ ...c, ...projectMeta[i] }));
  // Duplicate for seamless infinite loop
  const loopCards = [...cards, ...cards];

  const trackRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const offsetMsRef = useRef(0); // "already elapsed" ms when animation was last started
  const resumeTimeRef = useRef(0); // Date.now() when animation last resumed
  const [activeIdx, setActiveIdx] = useState(0);

  // Compute how many ms into the cycle we currently are
  const getOffsetMs = () => {
    if (isPausedRef.current) return offsetMsRef.current;
    return (offsetMsRef.current + (Date.now() - resumeTimeRef.current)) % DURATION_MS;
  };

  // Apply a given offset (ms) to the track's CSS animation
  const applyOffset = (offsetMs: number) => {
    const el = trackRef.current;
    if (!el) return;
    const delaySec = -(offsetMs / 1000);
    el.style.animation = "none";
    void el.offsetHeight; // force reflow
    el.style.animation = `carousel-scroll ${DURATION_S}s linear infinite`;
    el.style.animationDelay = `${delaySec}s`;
    el.style.animationPlayState = isPausedRef.current ? "paused" : "running";
  };

  // Start animation on mount
  useEffect(() => {
    resumeTimeRef.current = Date.now();
    applyOffset(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Tick to update the active dot indicator
  useEffect(() => {
    const id = setInterval(() => {
      if (!isPausedRef.current) {
        const offset = getOffsetMs();
        setActiveIdx(Math.floor((offset / DURATION_MS) * NUM_CARDS) % NUM_CARDS);
      }
    }, 200);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseEnter = () => {
    if (isPausedRef.current) return;
    isPausedRef.current = true;
    offsetMsRef.current = getOffsetMs();
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    if (!isPausedRef.current) return;
    isPausedRef.current = false;
    resumeTimeRef.current = Date.now();
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  const scroll = (dir: "left" | "right") => {
    const current = getOffsetMs();
    const jump = dir === "right" ? CARD_DURATION_MS : -CARD_DURATION_MS;
    const next = ((current + jump) % DURATION_MS + DURATION_MS) % DURATION_MS;
    offsetMsRef.current = next;
    resumeTimeRef.current = Date.now();
    applyOffset(next);
    setActiveIdx(Math.floor((next / DURATION_MS) * NUM_CARDS) % NUM_CARDS);
  };

  const jumpToIdx = (i: number) => {
    const next = (i / NUM_CARDS) * DURATION_MS;
    offsetMsRef.current = next;
    resumeTimeRef.current = Date.now();
    applyOffset(next);
    setActiveIdx(i);
  };

  return (
    <section
      id="projects"
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Glow */}
      <div
        className="absolute right-0 top-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header row with arrows */}
        <motion.div
          variants={stagger}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <motion.span variants={fadeUp} className="section-label">
              {t.projects.label}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-3 tracking-wide"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              {t.projects.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-2 max-w-[460px] text-sm"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text-muted)",
              }}
            >
              {t.projects.intro}
            </motion.p>
          </div>

          {/* Scroll arrows */}
          <motion.div variants={fadeUp} className="flex gap-2 shrink-0 mb-1">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("left")}
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
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{
                border: "1px solid var(--brand-accent)",
                background: "rgba(201,168,76,0.08)",
                color: "var(--brand-accent)",
              }}
              aria-label={t.projects.next}
            >
              <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Carousel — full bleed */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--surface) 0%, transparent 100%)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--surface) 0%, transparent 100%)",
          }}
        />

        {/* Entry animation wrapper */}
        <motion.div
          variants={stagger}
          className="pb-4"
          style={{
            paddingLeft: "calc((100vw - 1200px) / 2 + 24px)",
          }}
        >
          {/* Track — driven by CSS animation */}
          <div
            ref={trackRef}
            className="flex gap-4"
            style={{
              width: `${loopCards.length * CARD_WIDTH}px`,
              willChange: "transform",
            }}
          >
            {loopCards.map((card, i) => (
              <motion.div
                key={`${card.title}-${i}`}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
                className={`relative overflow-hidden rounded-xl group shrink-0 ${
                  card.href ? "cursor-pointer" : "cursor-default"
                }`}
                style={{
                  width: "320px",
                  height: "440px",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Clickable overlay — opens external link */}
                {card.href && (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={card.title}
                    className="absolute inset-0 z-20"
                  />
                )}

                {/* Photo */}
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="320px"
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.45) 45%, transparent 100%)",
                  }}
                />

                {/* Gold top bar on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "var(--brand-accent)" }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div
                    className="mb-2 text-xs tracking-widest uppercase"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--brand-accent)",
                    }}
                  >
                    {card.label}
                  </div>

                  <h3
                    className="mb-3 leading-snug"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    {card.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs"
                        style={{
                          fontFamily: "var(--font-body)",
                          background: "rgba(201,168,76,0.1)",
                          border: "1px solid rgba(201,168,76,0.22)",
                          color: "var(--brand-accent)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="max-w-[1200px] mx-auto px-6 mt-6 flex gap-2 justify-center">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => jumpToIdx(i)}
            className="h-1 rounded-full transition-all duration-500"
            style={{
              width: i === activeIdx ? "28px" : "8px",
              background: i === activeIdx ? "var(--brand-accent)" : "var(--border)",
            }}
            aria-label={`${t.nav.projects} ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
