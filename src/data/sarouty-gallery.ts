export interface SaroutyGalleryItem {
  type: "image" | "video";
  src: string;
  alt: { fr: string; en: string };
  category: { fr: string; en: string };
  /** Optional natural dimensions to preserve aspect ratio without cropping. */
  width?: number;
  height?: number;
  /** For videos: a poster/thumbnail image shown before playback. */
  poster?: string;
  /**
   * External URL (e.g. Google Drive/YouTube) to open in a new tab instead of
   * the in-page lightbox — used when the media isn't a directly playable file.
   */
  href?: string;
}

/**
 * SAROUTY PROPERTIES visuals — files live in /public/sarouty/.
 * To add more: drop the asset in /public/sarouty/ and append an entry here.
 */
export const saroutyGallery: SaroutyGalleryItem[] = [
  {
    type: "video",
    src: "/sarouty/mers-sultan-studios-lofts-thumb.png",
    poster: "/sarouty/mers-sultan-studios-lofts-thumb.png",
    href: "https://drive.google.com/file/d/1OtplQea46TBqrbA0ues-m5S-NNCXwXXB/view?usp=drivesdk",
    alt: {
      fr: "Vidéo promotionnelle — Studios & Lofts modernes, Mers Sultan",
      en: "Promotional video — Modern Studios & Lofts, Mers Sultan",
    },
    category: {
      fr: "Property Tour · Vidéo promotionnelle",
      en: "Property Tour · Promotional Video",
    },
    width: 941,
    height: 1672,
  },
  {
    type: "image",
    src: "/sarouty/partnership-residence-affinities.jpg",
    alt: {
      fr: "Annonce de partenariat SAROUTY PROPERTIES x Résidence Affinities",
      en: "SAROUTY PROPERTIES x Résidence Affinities partnership announcement",
    },
    category: { fr: "Contenu Corporate", en: "Corporate Content" },
    width: 1122,
    height: 1402,
  },
  {
    type: "image",
    src: "/sarouty/barometre-immobilier-casablanca-2026.jpg",
    alt: {
      fr: "Infographie Baromètre Immobilier Casablanca 2026 — SAROUTY PROPERTIES",
      en: "Casablanca 2026 Real Estate Barometer infographic — SAROUTY PROPERTIES",
    },
    category: { fr: "Contenu Immobilier", en: "Real Estate Content" },
    width: 1122,
    height: 1402,
  },
  {
    type: "image",
    src: "/sarouty/throne-day-greeting.jpg",
    alt: {
      fr: "Post de vœux pour la Fête du Trône — SAROUTY PROPERTIES",
      en: "Throne Day greeting post — SAROUTY PROPERTIES",
    },
    category: { fr: "Contenu Corporate", en: "Corporate Content" },
    width: 1122,
    height: 1402,
  },
  {
    type: "image",
    src: "/sarouty/mawlid-nabawi-greeting.jpg",
    alt: {
      fr: "Post de vœux pour le Mawlid Nabawi — SAROUTY PROPERTIES",
      en: "Mawlid Nabawi greeting post — SAROUTY PROPERTIES",
    },
    category: { fr: "Contenu Corporate", en: "Corporate Content" },
    width: 1122,
    height: 1402,
  },
];
