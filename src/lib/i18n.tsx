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

export interface CaseStudyPillar {
  number: string;
  title: string;
  items: string[];
}

export interface CaseStudySaroutyT {
  teaserLabel: string;
  teaserTitle: string;
  teaserDescription: string;
  teaserCta: string;
  eyebrow: string;
  company: string;
  role: string;
  period: string;
  location: string;
  heroTitle: string;
  heroIntro: string;
  heroIntro2: string;
  pillarsLabel: string;
  pillars: CaseStudyPillar[];
  galleryLabel: string;
  galleryTitle: string;
  galleryIntro: string;
  galleryEmpty: string;
  mersSultanLabel: string;
  mersSultanTitle: string;
  mersSultanSubtitle: string;
  mersSultanItems: string[];
  mersSultanNote: string;
  toolsLabel: string;
  toolsTitle: string;
  tools: string[];
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
    bio3: string;
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
  caseStudySarouty: CaseStudySaroutyT;
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
    badge: "Chargé de Marketing Digital · Casablanca, Maroc",
    subtitle: "Social Media · Content Creation · Meta Ads · Marketing Digital",
    tagline:
      "La créativité attire. La stratégie convertit. Ensemble, elles construisent une marque.",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    stats: {
      exp: "4+",
      expLbl: "ans d'expérience",
      audience: "1M+",
      audienceLbl: "audience gérée",
      companyVal: "SAROUTY PROPERTIES",
      companyLbl: "Agence Immobilière",
    },
    photoRole: "Sami Kessar",
    photoCaption: "Chargé de Marketing Digital",
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
    bio: "J'évolue à l'intersection du social media management, de la création de contenu, du journalisme digital et du marketing. Mon expérience m'a permis de travailler aussi bien sur des contenus éditoriaux et audiovisuels que sur des stratégies digitales destinées aux marques.",
    bio2: "De la réflexion créative à la publication, je maîtrise toute la chaîne de production : stratégie de contenu, copywriting, tournage, montage, design, community management, campagnes digitales et analyse des performances.",
    bio3: "Mon background journalistique me donne une approche particulièrement orientée storytelling, réactivité et compréhension des audiences.",
    bullets: [
      "Stratégie adaptée à chaque plateforme",
      "Production complète — concept, script, montage",
      "Bilingue Darija / Français, ancré dans les codes marocains",
      "Expérience terrain avec une chaîne nationale et le secteur immobilier",
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
        company: "SAROUTY PROPERTIES",
        role: "Chargé de Marketing Digital",
        period: "Juillet 2026 — Septembre 2026",
        location: "Casablanca, Maroc",
        description:
          "Gestion de la présence digitale de SAROUTY PROPERTIES à travers le social media management, la création de contenu, le marketing immobilier, Meta Ads et la production audiovisuelle. Création de contenus et campagnes destinés à valoriser les biens immobiliers et renforcer l'image de marque.",
        tags: ["Social Media", "Content Creation", "Meta Ads", "Marketing Immobilier", "Video Production"],
      },
      {
        company: "SW Media (filiale Chouf TV)",
        role: "Animateur & Créateur de Contenu Digital",
        period: "Juillet 2024 — Juillet 2026",
        location: "Casablanca, Maroc",
        description:
          "Animation et présentation d'événements et d'émissions en direct. Création de contenu de A à Z — concept, écriture, scénarisation, production. Création et animation de 'La Journée Dynamique', format original développé de bout en bout. Contenu bilingue Darija / Français.",
        tags: ["Animation", "Live", "Scénarisation", "Darija", "Français"],
      },
      {
        company: "Chouf TV",
        role: "Social Media Manager & Créateur Digital",
        period: "Janvier 2024 — Juillet 2026",
        location: "Casablanca, Maroc",
        description:
          "Gestion complète de la présence digitale d'une chaîne nationale. Community management, modération active, pilotage Meta Business Suite, création de visuels et montage Reels optimisés pour la viralité.",
        tags: ["Community Management", "Meta Business Suite", "Reels", "Design"],
      },
      {
        company: "Chouf TV",
        role: "Concepteur-Rédacteur & Copywriter",
        period: "Novembre 2023 — Juillet 2026",
        location: "Casablanca, Maroc",
        description:
          "Écriture de scripts percutants pour spots publicitaires (Wafacash, Attijariwafa Bank). Conception de formats originaux pour KFC. Stratégie créative et participation aux brainstormings de la cellule de rédaction.",
        tags: ["Copywriting", "Scriptwriting", "Publicité", "Stratégie"],
      },
      {
        company: "Chouf TV",
        role: "Journaliste & Créateur de Contenu Terrain",
        period: "Juin 2022 — Juillet 2026",
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
        items: ["Meta Business Suite", "Community Management", "Content Calendar", "Modération"],
      },
      {
        name: "Contenu & Écriture",
        items: ["Copywriting", "Scriptwriting", "Storytelling", "Scénarisation", "ChatGPT / AI Tools"],
      },
      {
        name: "Performance & Marketing Immobilier",
        items: ["Meta Ads Manager", "Audience Targeting", "Google Analytics", "KPI Monitoring", "Real Estate Marketing", "Airbnb & Booking.com"],
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
  caseStudySarouty: {
    teaserLabel: "Digital Marketing · Social Media · Real Estate",
    teaserTitle: "Marketing Digital & Content",
    teaserDescription:
      "Une expérience 360° en marketing immobilier — social media, content et publicité digitale pour SAROUTY PROPERTIES.",
    teaserCta: "Voir le projet →",
    eyebrow: "// Étude de cas",
    company: "SAROUTY PROPERTIES",
    role: "Chargé de Marketing Digital",
    period: "Juillet 2026 — Septembre 2026",
    location: "Casablanca, Maroc",
    heroTitle: "SAROUTY PROPERTIES — Marketing Digital & Création de Contenu",
    heroIntro:
      "Une expérience 360° mêlant stratégie social media, création de contenu, marketing immobilier, production audiovisuelle et publicité digitale.",
    heroIntro2:
      "Ma mission consistait à développer la présence digitale de SAROUTY PROPERTIES, valoriser ses biens et projets immobiliers et transformer les besoins commerciaux en contenus adaptés aux différentes plateformes.",
    pillarsLabel: "Missions",
    pillars: [
      {
        number: "01",
        title: "Social Media Management",
        items: ["Instagram", "Facebook", "LinkedIn", "TikTok", "Content Calendar", "Publication & programmation", "Captions & CTA", "Hashtags", "Community Management", "Brand Visibility"],
      },
      {
        number: "02",
        title: "Content Creation & Real Estate Marketing",
        items: ["Posts", "Stories", "Carrousels", "Reels", "Contenus immobiliers", "Retouche photo", "Color grading", "Visual Identity", "Supports promotionnels", "Mise en valeur des biens", "Adaptation des contenus aux différentes plateformes"],
      },
      {
        number: "03",
        title: "Meta Ads & Performance",
        items: ["Meta Ads", "Audience Targeting", "Advertising Creatives", "Reach", "Impressions", "CTR", "Leads", "Cost per Lead", "Engagement", "Analyse des performances", "Optimisation des campagnes"],
      },
      {
        number: "04",
        title: "Audiovisual Production",
        items: ["Photo & Video Shoots", "Reels", "Property Tours", "Interviews", "Scriptwriting", "Concepts vidéo", "Editing", "Post-production", "Voice-over", "Sound & Music Selection", "Multi-format Content"],
      },
      {
        number: "05",
        title: "Strategy & Corporate Communication",
        items: ["Digital Strategy", "Content Strategy", "Trend Research", "Competitive Monitoring", "Creative Concepts", "Brand Awareness", "LinkedIn", "Corporate Content", "Employer Branding", "Recruitment Communication"],
      },
      {
        number: "06",
        title: "Analytics & Collaboration",
        items: ["Social Media Analytics", "KPI Monitoring", "Reporting", "Performance Analysis", "Recommendations", "Collaboration avec l'équipe commerciale", "Collaboration avec la direction", "Transformation des besoins commerciaux en actions marketing", "Coordination de la production et de la diffusion des contenus"],
      },
    ],
    galleryLabel: "// Sélection de projets",
    galleryTitle: "Sélection de projets",
    galleryIntro:
      "Posts, stories, reels, campagnes immobilières et contenus corporate réalisés pour SAROUTY PROPERTIES.",
    galleryEmpty: "Galerie en cours d'ajout — les visuels arrivent bientôt.",
    mersSultanLabel: "// Projet phare",
    mersSultanTitle: "Projet Mers Sultan",
    mersSultanSubtitle:
      "Marketing & promotion d'un projet de location immobilière courte durée à Casablanca.",
    mersSultanItems: [
      "Positionnement du projet",
      "Identité des contenus",
      "Création de visuels",
      "Création de Reels et vidéos promotionnelles",
      "Présentation des studios et lofts",
      "Property Tours",
      "Marketing Airbnb & Booking",
      "Contenus publicitaires",
      "Supports de communication",
      "Promotion sur les réseaux sociaux",
    ],
    mersSultanNote:
      "Airbnb et Booking sont des plateformes utilisées dans le cadre du projet, pas des employeurs.",
    toolsLabel: "// Outils",
    toolsTitle: "Tools & Workflow",
    tools: ["Meta Business Suite", "Meta Ads Manager", "Canva", "Adobe Photoshop", "Adobe Premiere Pro", "CapCut", "VN", "Google Analytics", "ChatGPT / AI Tools", "Airbnb", "Booking.com"],
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
    badge: "Digital Marketing Officer · Casablanca, Morocco",
    subtitle: "Social Media · Content Creation · Meta Ads · Digital Marketing",
    tagline:
      "Creativity attracts. Strategy converts. Together, they build a brand.",
    ctaProjects: "View my work",
    ctaContact: "Get in touch",
    stats: {
      exp: "4+",
      expLbl: "years of experience",
      audience: "1M+",
      audienceLbl: "audience managed",
      companyVal: "SAROUTY PROPERTIES",
      companyLbl: "Real Estate Agency",
    },
    photoRole: "Sami Kessar",
    photoCaption: "Digital Marketing Officer",
    badgeExpVal: "4+ yrs",
    badgeExpLbl: "experience",
    badgeAudVal: "1M+",
    badgeAudLbl: "audience",
    scroll: "scroll",
  },
  about: {
    label: "// About",
    titleA: "Content creation ",
    titleB: "built for brands",
    bio: "I work at the intersection of social media management, content creation, digital journalism and marketing. My experience spans editorial and audiovisual content as well as digital strategies developed for brands.",
    bio2: "From creative thinking to publication, I work across the full content production cycle: content strategy, copywriting, shooting, editing, design, community management, digital campaigns and performance analysis.",
    bio3: "My journalism background brings a strong focus on storytelling, responsiveness and audience understanding.",
    bullets: [
      "Strategy tailored to each platform",
      "Full production — concept, script, editing",
      "Bilingual Darija / French, rooted in Moroccan culture",
      "Field experience with a national TV channel and real estate sector",
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
        company: "SAROUTY PROPERTIES",
        role: "Digital Marketing Officer",
        period: "July 2026 — September 2026",
        location: "Casablanca, Morocco · Full-time",
        description:
          "Management of SAROUTY PROPERTIES' digital presence through social media management, content creation, real estate marketing, Meta Ads and audiovisual production. Creation of content and campaigns designed to showcase properties and strengthen the brand image.",
        tags: ["Social Media", "Content Creation", "Meta Ads", "Real Estate Marketing", "Video Production"],
      },
      {
        company: "SW Media (Chouf TV subsidiary)",
        role: "Host & Digital Content Creator",
        period: "July 2024 — July 2026",
        location: "Casablanca, Morocco",
        description:
          "Hosting and presenting live events and shows. End-to-end content creation — concept, writing, scripting, production. Created and hosted 'La Journée Dynamique', an original format developed from start to finish. Bilingual content in Darija / French.",
        tags: ["Animation", "Live", "Scripting", "Darija", "French"],
      },
      {
        company: "Chouf TV",
        role: "Social Media Manager & Digital Creator",
        period: "January 2024 — July 2026",
        location: "Casablanca, Morocco",
        description:
          "Full management of a national TV channel's digital presence. Community management, active moderation, Meta Business Suite operations, visual creation and Reels editing optimized for virality.",
        tags: ["Community Management", "Meta Business Suite", "Reels", "Design"],
      },
      {
        company: "Chouf TV",
        role: "Creative Copywriter",
        period: "November 2023 — July 2026",
        location: "Casablanca, Morocco",
        description:
          "Writing punchy scripts for advertising spots (Wafacash, Attijariwafa Bank). Designing original formats for KFC. Creative strategy and participation in the editorial team's brainstorming sessions.",
        tags: ["Copywriting", "Scriptwriting", "Advertising", "Strategy"],
      },
      {
        company: "Chouf TV",
        role: "Journalist & Field Content Creator",
        period: "June 2022 — July 2026",
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
        items: ["Meta Business Suite", "Community Management", "Content Calendar", "Moderation"],
      },
      {
        name: "Content & Writing",
        items: ["Copywriting", "Scriptwriting", "Storytelling", "Scripting", "ChatGPT / AI Tools"],
      },
      {
        name: "Performance & Real Estate Marketing",
        items: ["Meta Ads Manager", "Audience Targeting", "Google Analytics", "KPI Monitoring", "Real Estate Marketing", "Airbnb & Booking.com"],
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
  caseStudySarouty: {
    teaserLabel: "Digital Marketing · Social Media · Real Estate",
    teaserTitle: "Digital Marketing & Content",
    teaserDescription:
      "A 360° real estate marketing experience — social media, content and digital advertising for SAROUTY PROPERTIES.",
    teaserCta: "View project →",
    eyebrow: "// Case study",
    company: "SAROUTY PROPERTIES",
    role: "Digital Marketing Officer",
    period: "July 2026 — September 2026",
    location: "Casablanca, Morocco",
    heroTitle: "SAROUTY PROPERTIES — Digital Marketing & Content Creation",
    heroIntro:
      "A 360° experience combining social media strategy, content creation, real estate marketing, audiovisual production and digital advertising.",
    heroIntro2:
      "My role focused on developing SAROUTY PROPERTIES' digital presence, showcasing its properties and real estate projects, and translating commercial needs into platform-specific content.",
    pillarsLabel: "Missions",
    pillars: [
      {
        number: "01",
        title: "Social Media Management",
        items: ["Instagram", "Facebook", "LinkedIn", "TikTok", "Content Calendar", "Publishing & Scheduling", "Captions & CTAs", "Hashtags", "Community Management", "Brand Visibility"],
      },
      {
        number: "02",
        title: "Content Creation & Real Estate Marketing",
        items: ["Posts", "Stories", "Carousels", "Reels", "Real Estate Content", "Photo Retouching", "Color Grading", "Visual Identity", "Promotional Materials", "Property Showcasing", "Platform-specific Content Adaptation"],
      },
      {
        number: "03",
        title: "Meta Ads & Performance",
        items: ["Meta Ads", "Audience Targeting", "Advertising Creatives", "Reach", "Impressions", "CTR", "Leads", "Cost per Lead", "Engagement", "Performance Analysis", "Campaign Optimization"],
      },
      {
        number: "04",
        title: "Audiovisual Production",
        items: ["Photo & Video Shoots", "Reels", "Property Tours", "Interviews", "Scriptwriting", "Video Concepts", "Editing", "Post-production", "Voice-over", "Sound & Music Selection", "Multi-format Content"],
      },
      {
        number: "05",
        title: "Strategy & Corporate Communication",
        items: ["Digital Strategy", "Content Strategy", "Trend Research", "Competitive Monitoring", "Creative Concepts", "Brand Awareness", "LinkedIn", "Corporate Content", "Employer Branding", "Recruitment Communication"],
      },
      {
        number: "06",
        title: "Analytics & Collaboration",
        items: ["Social Media Analytics", "KPI Monitoring", "Reporting", "Performance Analysis", "Recommendations", "Collaboration with the Sales Team", "Collaboration with Management", "Translating Business Needs into Marketing Actions", "Coordinating Content Production & Distribution"],
      },
    ],
    galleryLabel: "// Selected work",
    galleryTitle: "Selected Work",
    galleryIntro:
      "Posts, stories, reels, real estate campaigns and corporate content created for SAROUTY PROPERTIES.",
    galleryEmpty: "Gallery in progress — visuals coming soon.",
    mersSultanLabel: "// Featured project",
    mersSultanTitle: "Mers Sultan Project",
    mersSultanSubtitle:
      "Marketing & promotion of a short-term rental real estate project in Casablanca.",
    mersSultanItems: [
      "Project positioning",
      "Content identity",
      "Visual creation",
      "Promotional Reels & video creation",
      "Studio & loft presentation",
      "Property Tours",
      "Airbnb & Booking marketing",
      "Advertising content",
      "Communication materials",
      "Social media promotion",
    ],
    mersSultanNote:
      "Airbnb and Booking are platforms used for this project, not employers.",
    toolsLabel: "// Tools",
    toolsTitle: "Tools & Workflow",
    tools: ["Meta Business Suite", "Meta Ads Manager", "Canva", "Adobe Photoshop", "Adobe Premiere Pro", "CapCut", "VN", "Google Analytics", "ChatGPT / AI Tools", "Airbnb", "Booking.com"],
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
