"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "en";

/* ──────────────────────────────────────────────────────────────
   Translation dictionary
   Technical terms kept as-is across languages:
   Reels, Live, Field, Brand Content, Podcast, Animation,
   Morning Show, Micro-Trottoir, Reportage, Tournage
─────────────────────────────────────────────────────────────── */

export interface ProjectCardT {
  label: string;
  title: string;
  tags: string[];
}

export interface ExperienceT {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
}

export interface SkillCategoryT {
  name: string;
  items: string[];
}

export interface StatT {
  value: string;
  label: string;
}

export interface Translation {
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    subtitle: string;
    tagline: string;
    ctaProjects: string;
    ctaContact: string;
    stats: { exp: string; expLbl: string; audience: string; audienceLbl: string; companyVal: string; companyLbl: string };
    photoRole: string;
    photoCaption: string;
    badgeExpVal: string;
    badgeExpLbl: string;
    badgeAudVal: string;
    badgeAudLbl: string;
    scroll: string;
  };
  about: {
    label: string;
    titleA: string;
    titleB: string;
    bio: string;
    bio2: string;
    bullets: string[];
    stats: StatT[];
    infoLocation: string;
    infoEmail: string;
    infoPhone: string;
    locationValue: string;
  };
  clients: { label: string };
  experience: {
    label: string;
    title: string;
    items: ExperienceT[];
  };
  skills: {
    label: string;
    title: string;
    intro: string;
    categories: SkillCategoryT[];
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    prev: string;
    next: string;
    cards: ProjectCardT[];
  };
  videos: {
    label: string;
    title: string;
    intro: string;
    button: string;
  };
  contact: {
    label: string;
    title: string;
    intro: string;
    joinTitle: string;
    infoEmail: string;
    infoPhone: string;
    infoLocation: string;
    locationValue: string;
    quoteAuthor: string;
  };
  footer: {
    builtWith: string;
  };
}

const fr: Translation = {
  nav: {
    about: "À propos",
    experience: "Expérience",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
    cta: "Me contacter",
  },
  hero: {
    badge: "Social Media Manager · Créateur de contenu 360° · Casablanca, Maroc",
    subtitle: "Reels · Brand Content · Copywriting · Journalisme Digital",
    tagline:
      "L'image attire. L'histoire convertit. Les deux ensemble, ça construit une marque.",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    stats: {
      exp: "4+",
      expLbl: "ans d'expérience",
      audience: "1M+",
      audienceLbl: "audience gérée",
      companyVal: "Chouf TV",
      companyLbl: "filiale SW MEDIA",
    },
    photoRole: "Sami Kessar",
    photoCaption: "Social Media Manager · Content Creator 360°",
    badgeExpVal: "4+ ans",
    badgeExpLbl: "d'expérience",
    badgeAudVal: "1M+",
    badgeAudLbl: "audience",
    scroll: "scroll",
  },
  about: {
    label: "// À propos",
    titleA: "Créateur de contenu ",
    titleB: "au service des marques",
    bio: "Depuis plus de 4 ans, j'évolue à l'intersection du journalisme digital, de la création de contenu et de la stratégie social media. Je ne produis pas juste du contenu — je construis des stratégies adaptées aux codes de chaque plateforme, avec un œil sur les tendances, une plume affûtée et une exécution rigoureuse.",
    bio2: "Journaliste de formation, animateur par passion, stratège par nécessité — je maîtrise toute la chaîne de valeur du contenu digital, du brief créatif jusqu'à la publication et l'analyse des performances.",
    bullets: [
      "Stratégie adaptée à chaque plateforme",
      "Production complète — concept, script, montage",
      "Bilingue Darija / Français, ancré dans les codes marocains",
      "Expérience terrain avec une chaîne nationale",
    ],
    stats: [
      { value: "4+", label: "Ans d'expérience" },
      { value: "1M+", label: "Audience gérée" },
      { value: "3", label: "Grandes marques" },
      { value: "360°", label: "Créateur de contenu" },
    ],
    infoLocation: "Localisation",
    infoEmail: "Email",
    infoPhone: "Téléphone",
    locationValue: "Casablanca, Maroc",
  },
  clients: { label: "Ils m'ont fait confiance" },
  experience: {
    label: "// Expérience",
    title: "Parcours professionnel",
    items: [
      {
        company: "SW Media (filiale Chouf TV)",
        role: "Animateur & Créateur de Contenu Digital",
        period: "Juillet 2024 — Présent",
        location: "Casablanca, Maroc",
        description:
          "Animation et présentation d'événements et d'émissions en direct. Création de contenu de A à Z — concept, écriture, scénarisation, production. Création et animation de 'La Journée Dynamique', format original développé de bout en bout. Contenu bilingue Darija / Français.",
        tags: ["Animation", "Live", "Scénarisation", "Darija", "Français"],
      },
      {
        company: "Chouf TV",
        role: "Social Media Manager & Créateur Digital",
        period: "Janvier 2024 — Présent",
        location: "Casablanca, Maroc",
        description:
          "Gestion complète de la présence digitale d'une chaîne nationale. Community management, modération active, pilotage Meta Business Suite, création de visuels et montage Reels optimisés pour la viralité.",
        tags: ["Community Management", "Meta Business Suite", "Reels", "Design"],
      },
      {
        company: "Chouf TV",
        role: "Concepteur-Rédacteur & Copywriter",
        period: "Novembre 2023 — Présent",
        location: "Casablanca, Maroc",
        description:
          "Écriture de scripts percutants pour spots publicitaires (Wafacash, Attijariwafa Bank). Conception de formats originaux pour KFC. Stratégie créative et participation aux brainstormings de la cellule de rédaction.",
        tags: ["Copywriting", "Scriptwriting", "Publicité", "Stratégie"],
      },
      {
        company: "Chouf TV",
        role: "Journaliste & Créateur de Contenu Terrain",
        period: "Juin 2022 — Présent",
        location: "Casablanca, Maroc",
        description:
          "Reportages, interviews et micros-trottoirs au cœur de l'actualité. Animation et couverture d'événements avec aisance face caméra.",
        tags: ["Journalisme", "Reportage", "Interview", "Événement"],
      },
      {
        company: "Eventure Club",
        role: "Responsable Événementiel",
        period: "Janvier 2023 — Présent",
        location: "Casablanca, Maroc",
        description:
          "Organisation d'événements universitaires et publics. Développement des compétences en leadership, communication et coordination d'équipe.",
        tags: ["Événementiel", "Leadership", "Communication"],
      },
    ],
  },
  skills: {
    label: "// Compétences",
    title: "Outils & expertises",
    intro:
      "Une palette complète pour concevoir, produire et diffuser du contenu qui performe.",
    categories: [
      { name: "Vidéo & Montage", items: ["Adobe Premiere Pro", "CapCut", "VN"] },
      { name: "Design Graphique", items: ["Photoshop", "Illustrator", "Canva"] },
      {
        name: "Social Media",
        items: ["Meta Business Suite", "Community Management", "Modération"],
      },
      {
        name: "Contenu & Écriture",
        items: ["Copywriting", "Scriptwriting", "Storytelling", "Scénarisation"],
      },
      {
        name: "Performance",
        items: ["Stratégie Social Media", "Analytics", "Campagnes publicitaires"],
      },
      {
        name: "Présentation",
        items: ["Animation face caméra", "Présentation Live", "Bilingue Darija/FR"],
      },
    ],
  },
  projects: {
    label: "// Réalisations",
    title: "Réalisations & missions",
    intro:
      "Sur le terrain, face caméra et en studio — aperçus de mon travail en tant que créateur de contenu.",
    prev: "Précédent",
    next: "Suivant",
    cards: [
      {
        label: "Chouf TV · Animation",
        title: "Morning Show",
        tags: ["Animation", "Live", "Présentation"],
      },
      {
        label: "Chouf TV · Émission",
        title: "Chouf Comic",
        tags: ["Journalisme", "Émission", "Terrain"],
      },
      {
        label: "Chouf TV · Reportage",
        title: "Reportage Terrain",
        tags: ["Reportage", "Micro-Trottoir", "Field"],
      },
      {
        label: "SW Media · Tournage",
        title: "Contenu Urbain — Casablanca",
        tags: ["Brand Content", "Scénarisation", "Reels"],
      },
      {
        label: "SW Media · Interview",
        title: "Podcast",
        tags: ["Interview", "Animation", "Contenu Digital"],
      },
      {
        label: "Chouf TV · Terrain",
        title: "Vlog Reportage Mobile",
        tags: ["Vlog", "Terrain", "Caméra Cachée"],
      },
      {
        label: "Chouf TV · Événement",
        title: "Couverture Événement Public",
        tags: ["Événement", "Couverture", "Live"],
      },
    ],
  },
  videos: {
    label: "// Montages",
    title: "Montages & Contenus",
    intro:
      "Une sélection de mes montages vidéo et formats courts publiés sur les réseaux sociaux.",
    button: "Voir la vidéo →",
  },
  contact: {
    label: "// Contact",
    title: "Travaillons ensemble",
    intro:
      "Un projet, une collaboration, une opportunité — je suis disponible pour en discuter.",
    joinTitle: "Me joindre",
    infoEmail: "Email",
    infoPhone: "Téléphone",
    infoLocation: "Localisation",
    locationValue: "Casablanca, Maroc",
    quoteAuthor: "— Sami Kessar",
  },
  footer: {
    builtWith: "Fait avec passion à Casablanca 🇲🇦",
  },
};

const en: Translation = {
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    cta: "Get in touch",
  },
  hero: {
    badge: "Social Media Manager · 360° Content Creator · Casablanca, Morocco",
    subtitle: "Reels · Brand Content · Copywriting · Digital Journalism",
    tagline:
      "The image attracts. The story converts. Together, they build a brand.",
    ctaProjects: "View my work",
    ctaContact: "Get in touch",
    stats: {
      exp: "4+",
      expLbl: "years of experience",
      audience: "1M+",
      audienceLbl: "audience managed",
      companyVal: "Chouf TV",
      companyLbl: "SW MEDIA subsidiary",
    },
    photoRole: "Sami Kessar",
    photoCaption: "Social Media Manager · Content Creator 360°",
    badgeExpVal: "4+ yrs",
    badgeExpLbl: "experience",
    badgeAudVal: "1M+",
    badgeAudLbl: "audience",
    scroll: "scroll",
  },
  about: {
    label: "// About",
    titleA: "Content creator ",
    titleB: "for brands",
    bio: "For over 4 years, I've worked at the intersection of digital journalism, content creation and social media strategy. I don't just produce content — I build strategies tailored to the codes of each platform, with an eye on trends, sharp writing and rigorous execution.",
    bio2: "A journalist by training, a host by passion, a strategist by necessity — I master the entire value chain of digital content, from the creative brief to publishing and performance analysis.",
    bullets: [
      "Strategy tailored to each platform",
      "Full production — concept, script, editing",
      "Bilingual Darija / French, rooted in Moroccan culture",
      "Field experience with a national TV channel",
    ],
    stats: [
      { value: "4+", label: "Years of experience" },
      { value: "1M+", label: "Audience managed" },
      { value: "3", label: "Major brands" },
      { value: "360°", label: "Content creator" },
    ],
    infoLocation: "Location",
    infoEmail: "Email",
    infoPhone: "Phone",
    locationValue: "Casablanca, Morocco",
  },
  clients: { label: "They trusted me" },
  experience: {
    label: "// Experience",
    title: "Professional journey",
    items: [
      {
        company: "SW Media (Chouf TV subsidiary)",
        role: "Host & Digital Content Creator",
        period: "July 2024 — Present",
        location: "Casablanca, Morocco",
        description:
          "Hosting and presenting live events and shows. End-to-end content creation — concept, writing, scripting, production. Created and hosted 'La Journée Dynamique', an original format developed from start to finish. Bilingual content in Darija / French.",
        tags: ["Animation", "Live", "Scripting", "Darija", "French"],
      },
      {
        company: "Chouf TV",
        role: "Social Media Manager & Digital Creator",
        period: "January 2024 — Present",
        location: "Casablanca, Morocco",
        description:
          "Full management of a national TV channel's digital presence. Community management, active moderation, Meta Business Suite operations, visual creation and Reels editing optimized for virality.",
        tags: ["Community Management", "Meta Business Suite", "Reels", "Design"],
      },
      {
        company: "Chouf TV",
        role: "Creative Copywriter",
        period: "November 2023 — Present",
        location: "Casablanca, Morocco",
        description:
          "Writing punchy scripts for advertising spots (Wafacash, Attijariwafa Bank). Designing original formats for KFC. Creative strategy and participation in the editorial team's brainstorming sessions.",
        tags: ["Copywriting", "Scriptwriting", "Advertising", "Strategy"],
      },
      {
        company: "Chouf TV",
        role: "Journalist & Field Content Creator",
        period: "June 2022 — Present",
        location: "Casablanca, Morocco",
        description:
          "Reports, interviews and street interviews at the heart of the news. Hosting and covering events with ease on camera.",
        tags: ["Journalism", "Reportage", "Interview", "Event"],
      },
      {
        company: "Eventure Club",
        role: "Events Manager",
        period: "January 2023 — Present",
        location: "Casablanca, Morocco",
        description:
          "Organizing university and public events. Developing leadership, communication and team coordination skills.",
        tags: ["Events", "Leadership", "Communication"],
      },
    ],
  },
  skills: {
    label: "// Skills",
    title: "Tools & expertise",
    intro:
      "A complete toolkit to design, produce and distribute content that performs.",
    categories: [
      { name: "Video & Editing", items: ["Adobe Premiere Pro", "CapCut", "VN"] },
      { name: "Graphic Design", items: ["Photoshop", "Illustrator", "Canva"] },
      {
        name: "Social Media",
        items: ["Meta Business Suite", "Community Management", "Moderation"],
      },
      {
        name: "Content & Writing",
        items: ["Copywriting", "Scriptwriting", "Storytelling", "Scripting"],
      },
      {
        name: "Performance",
        items: ["Social Media Strategy", "Analytics", "Ad Campaigns"],
      },
      {
        name: "Presentation",
        items: ["On-camera Hosting", "Live Presenting", "Bilingual Darija/FR"],
      },
    ],
  },
  projects: {
    label: "// Selected work",
    title: "Work & missions",
    intro:
      "On the field, on camera and in studio — a glimpse of my work as a content creator.",
    prev: "Previous",
    next: "Next",
    cards: [
      {
        label: "Chouf TV · Animation",
        title: "Morning Show",
        tags: ["Animation", "Live", "Presenting"],
      },
      {
        label: "Chouf TV · Show",
        title: "Chouf Comic",
        tags: ["Journalism", "Show", "Field"],
      },
      {
        label: "Chouf TV · Reportage",
        title: "Reportage Terrain",
        tags: ["Reportage", "Micro-Trottoir", "Field"],
      },
      {
        label: "SW Media · Tournage",
        title: "Urban Content — Casablanca",
        tags: ["Brand Content", "Scripting", "Reels"],
      },
      {
        label: "SW Media · Interview",
        title: "Podcast",
        tags: ["Interview", "Animation", "Digital Content"],
      },
      {
        label: "Chouf TV · Field",
        title: "Mobile Vlog Reportage",
        tags: ["Vlog", "Field", "Hidden Camera"],
      },
      {
        label: "Chouf TV · Event",
        title: "Public Event Coverage",
        tags: ["Event", "Coverage", "Live"],
      },
    ],
  },
  videos: {
    label: "// Edits",
    title: "Edits & Content",
    intro:
      "A selection of my video edits and short-form content published on social media.",
    button: "Watch the video →",
  },
  contact: {
    label: "// Contact",
    title: "Let's work together",
    intro:
      "A project, a collaboration, an opportunity — I'm available to talk.",
    joinTitle: "Get in touch",
    infoEmail: "Email",
    infoPhone: "Phone",
    infoLocation: "Location",
    locationValue: "Casablanca, Morocco",
    quoteAuthor: "— Sami Kessar",
  },
  footer: {
    builtWith: "Made with passion in Casablanca 🇲🇦",
  },
};

export const translations: Record<Lang, Translation> = { fr, en };

/* ── Context ── */

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "sami-portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  // Load persisted preference on mount
  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem(STORAGE_KEY) as Lang | null)
        : null;
    if (stored === "fr" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  // Persist + reflect on <html lang>
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
