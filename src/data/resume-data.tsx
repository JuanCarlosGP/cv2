import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const 
RESUME_DATA = {
  name: "Juan Carlos",
  initials: "JC",
  location: "Madrid, Spain, CET",
  locationLink: "https://www.google.com/maps/place/Madrid",
  about:
    "Graduado en Desarrollo de Aplicaciones Multiplataforma y Administración en Sistemas y Redes.",
  summary:
    // "As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience working remotely with companies worldwide.",
    "asd",
  avatarUrl: "https://avatars.githubusercontent.com/u/64562942?s=400&u=d2a1aad25384d784ce7807d3f988f9eca62070a0&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "juancarlosgp212@gmail.com",
    tel: "+34601286447",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/JuanCarlosGP",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/",
        icon: XIcon,
      },
    ],
  },
  work: [
    {
      company: "Gorilast",
      link: "https://gorilast.com/",
      badges: ["Semipresencial"],
      title: "Responsable en Desarrollo Frontend",
      start: "2024",
      end: "",
      description:
        "Creación de plataforma de venta online con React, TypeScript  y Tailwind CSS.",
    },
    {
      company: "OFF TRUST LLC",
      link: "",
      badges: ["Propietario"],
      title: "Responsable en ventas, marketing y productos",
      start: "2023",
      end: "",
      description:
        "Expropietario de empresa Estadounidense dedicada a venta online. +3200 ventas",
    },
    {
      company: "Accenture",
      link: "https://www.accenture.com/",
      badges: ["Remoto"],
      title: "Responsable de Ciberseguridad ",
      start: "2022",
      end: "",
      description:
        "Analizaba registros globales y reportaba actividades sospechosas.",
    },
  ],
  education: [
    {
      school: "Universidad ########",
      degree: "Máster en Big Data e Inteligencia Artificial.",
      start: "En proceso",
      end: "",
    },
    {
      school: "MEDAC",
      degree: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma.",
      start: "2022",
      end: "2024",
    },
    {
      school: "Universidad Europea Miguel de Cervantes",
      degree: "Curso Universitacio De Especialización en Agente de Igualdad de Género.",
      start: "Junio",
      end: "2023",
    },
    {
      school: "Universidad Europea de Madrid",
      degree: "Técnico Superior en Administración de Sistemas Informáticos en Red.", 
      start: "2020",
      end: "2022",
    },
    {
      school: "La Salle",
      degree: "Técnico en Sistemas Microinformáticos y Redes.", 
      start: "2018",
      end: "2020",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "SQL",
    "HTML/CSS",
    "Tailwind CSS",
    "Java",
    "MySQL",
    "Cypress",
    "Git",
    "Docker",
  ],
  projects: [
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
