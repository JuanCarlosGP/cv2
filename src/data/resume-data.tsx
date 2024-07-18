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
    "Soy desarrollador de software y administrador de sistemas, apasionado por la tecnología y la programación. En mi tiempo libre, me dedico a proyectos personales y a la reparación de hardware informático desde hace años.",
  summary2: "Me considero un buen comunicador y disfruto trabajando tanto de manera independiente como en equipo. Además de mis proyectos técnicos, estoy desarrollando mis habilidades en marketing digital, SEO, creación de empresas y contabilidad, lo que me permite ampliar mis competencias y conocimientos en estas áreas.",
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
      school: "Universidad Católica San Antonio de Murcia",
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
      degree: "Curso Universitario en Agente de Igualdad de Género. +400h",
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
  // projects: [
  //   {
  //     title: "TICTACTOE_React",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application for managing and displaying restaurant menus in kiosk mode",
  //   },
  //   {
  //     title: "Ambit",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application that helps with sharing your contact details",
  //     logo: AmbitLogo,
  //   },
  // ],
} as const;
