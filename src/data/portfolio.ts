export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  yearsExp: string;
  bio: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  client: string;
  description: string;
  tags: string[];
  highlight?: boolean;
}

export const personal: PersonalInfo = {
  name: "Sami Kessar",
  title: "Social Media Manager & Créateur de Contenu 360°",
  subtitle: "Reels · Brand Content · Copywriting · Journalisme Digital",
  tagline: "L'image attire. L'histoire convertit. Les deux ensemble, ça construit une marque.",
  location: "Casablanca, Maroc",
  email: "samikessar@gmail.com",
  phone: "+212 659 154 721",
  linkedin: "https://www.linkedin.com/in/samikessar",
  yearsExp: "4+",
  bio: "Depuis plus de 4 ans, j'évolue à l'intersection du journalisme digital, de la création de contenu et de la stratégie social media. Je ne produis pas juste du contenu — je construis des stratégies adaptées aux codes de chaque plateforme, avec un œil sur les tendances, une plume affûtée et une exécution rigoureuse.",
};

export const stats: Stat[] = [
  { value: "4+", label: "Ans d'expérience" },
  { value: "1M+", label: "Audience gérée" },
  { value: "3", label: "Grandes marques" },
  { value: "360°", label: "Créateur de contenu" },
];

export const experiences: Experience[] = [
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
];

export const skills: SkillCategory[] = [
  { category: "Vidéo & Montage", items: ["Adobe Premiere Pro", "CapCut", "VN"] },
  { category: "Design Graphique", items: ["Photoshop", "Illustrator", "Canva"] },
  {
    category: "Social Media",
    items: ["Meta Business Suite", "Community Management", "Modération"],
  },
  {
    category: "Contenu & Écriture",
    items: ["Copywriting", "Scriptwriting", "Storytelling", "Scénarisation"],
  },
  {
    category: "Performance",
    items: ["Stratégie Social Media", "Analytics", "Campagnes publicitaires"],
  },
  {
    category: "Présentation",
    items: ["Animation face caméra", "Présentation Live", "Bilingue Darija/FR"],
  },
];

export const projects: Project[] = [
  {
    title: "La Journée Dynamique",
    client: "SW Media",
    description:
      "Format digital original créé et porté de bout en bout — concept, scénarisation, animation et production complète pour l'audience digitale nationale.",
    tags: ["Format Original", "Animation", "Scénarisation"],
    highlight: true,
  },
  {
    title: "Campagne Wafacash",
    client: "Wafacash",
    description:
      "Conception et rédaction de scripts publicitaires percutants adaptés aux codes du digital marocain.",
    tags: ["Copywriting", "Script", "Publicité"],
  },
  {
    title: "Campagne Attijariwafa Bank",
    client: "Attijariwafa Bank",
    description:
      "Développement de concepts créatifs et rédaction de scripts pour une grande banque nationale.",
    tags: ["Copywriting", "Concept Créatif", "Finance"],
  },
  {
    title: "Concept KFC Maroc",
    client: "KFC",
    description:
      "Idéation et conception d'un concept publicitaire original pour KFC Maroc, axé sur l'engagement digital.",
    tags: ["Idéation", "Brand Content", "Food"],
  },
  {
    title: "Gestion Chouf TV Digital",
    client: "Chouf TV",
    description:
      "Gestion complète de la présence digitale d'une chaîne nationale — community management, design, Reels, campagnes Meta.",
    tags: ["Social Media", "Community", "Meta Ads"],
    highlight: true,
  },
];

export const clients: string[] = [
  "Chouf TV",
  "SW Media",
  "Wafacash",
  "Attijariwafa Bank",
  "KFC",
];
