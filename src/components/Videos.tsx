"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

type Platform = "tiktok" | "instagram";

interface VideoCard {
  platform: Platform;
  name: string;
  href: string;
}

const videoCards: VideoCard[] = [
  { platform: "tiktok", name: "TikTok", href: "https://vt.tiktok.com/ZSQeWoqM2/" },
  { platform: "tiktok", name: "TikTok", href: "https://vt.tiktok.com/ZSQe7PxhR/" },
  { platform: "tiktok", name: "TikTok", href: "https://vt.tiktok.com/ZSQe7B2cg/" },
  { platform: "instagram", name: "Instagram Reels", href: "https://www.instagram.com/reel/C4rPHc2K5WO/" },
  { platform: "instagram", name: "Instagram Reels", href: "https://www.instagram.com/reel/C4QPDNyqhon/" },
  { platform: "instagram", name: "Instagram Reels", href: "https://www.instagram.com/reel/DRYD7N5DLLs/" },
];

function TikTokIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.1v12.66a2.59 2.59 0 1 1-1.79-2.46V9.99a5.7 5.7 0 1 0 4.89 5.64V9.01a7.35 7.35 0 0 0 4.3 1.38V7.28a4.3 4.3 0 0 1-3.16-1.46Z" />
    </svg>
  );
}

function InstagramIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Videos() {
  const { t } = useLanguage();

  return (
    <section
      id="videos"
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Glow */}
      <div
        className="absolute left-0 bottom-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="section-label">{t.videos.label}</span>
          <h2
            className="mt-4 tracking-wide"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            {t.videos.title}
          </h2>
          <p
            className="mt-3 max-w-[500px] mx-auto text-sm"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--text-muted)",
            }}
          >
            {t.videos.intro}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videoCards.map((card, i) => (
            <motion.a
              key={`${card.platform}-${i}`}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col p-6 rounded-xl transition-colors duration-300"
              style={{
                background: "var(--background)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--brand-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "var(--brand-accent)",
                }}
              >
                {card.platform === "tiktok" ? <TikTokIcon /> : <InstagramIcon />}
              </div>

              {/* Platform name */}
              <h3
                className="mb-1"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                {card.name}
              </h3>

              <div
                className="text-xs mb-6"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--text-muted)",
                  letterSpacing: "0.05em",
                }}
              >
                {card.platform === "tiktok" ? "Short Video" : "Reel"}
              </div>

              {/* CTA */}
              <span
                className="mt-auto inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--brand-accent)",
                }}
              >
                {t.videos.button}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
