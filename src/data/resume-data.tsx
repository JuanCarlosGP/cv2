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
    "Desarrollador de software especializado en tecnologías web y testing automatizado.",
  summary:
    "Soy desarrollador de software y administrador de sistemas, apasionado por la tecnología y la programación. En mi tiempo libre, me dedico a proyectos personales y a la reparación de hardware informático desde hace años.",
  summary2: "Me considero un buen comunicador y disfruto trabajando tanto de manera independiente como en equipo. Tengo experiencia en diversas tecnologías, incluyendo Java, SQL, HTML, CSS, JavaScript, Git, React entre otras. Además de mis proyectos técnicos, estoy desarrollando mis habilidades en marketing digital, SEO, creación de empresas y contabilidad, lo que me permite ampliar mis competencias y conocimientos en estas áreas.",
  avatarUrl: "https://avatars.githubusercontent.com/u/64562942?s=400&u=d2a1aad25384d784ce7807d3f988f9eca62070a0&v=4",
  personalWebsiteUrl: "https://www.linkedin.com/in/juancarlosgutierrezpesquero/",
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
        url: "https://www.linkedin.com/in/juancarlosgutierrezpesquero/",
        icon: LinkedInIcon,
      },
    ],
  },
  work: [
    {
      company: "itegGO Consulting",
      link: "https://www.iteggo.com/",
      badges: ["Híbrido"],
      title: "Consultor de Automatización y QA Tester",
      start: "2024",
      end: "",
      description:
        "Proyecto DIA:\n\n• Colaboración en backend del nuevo motor promocional de cupones\n\n• Diseño y ejecución de pruebas con eventos Pub/Sub\n\n• Automatización de validaciones y reporte de resultados\n\n• Coordinación con equipo de desarrollo para QA en múltiples entornos\n\nProyecto Iberia:\n\n• Integración con plataformas externas como Booking\n\n• Pruebas funcionales para garantizar conectividad\n\n• Automatización para validar peticiones a base de datos\n\n• Documentación de endpoints y flujos de integración API",
    },
    {
      company: "Evolvio Digital",
      link: "",
      badges: ["Remoto"],
      title: "Desarrollador Web & Gestor de Proyectos",
      start: "2024",
      end: "",
      description:
        "• Desarrollo web con React.js, Next.js y WordPress (Divi)\n\n• Soluciones digitales a medida y mediante CMS\n\n• Gestión completa: desde diseño UX/UI hasta despliegue\n\n• Metodología ágil con sprints semanales\n\n• Optimización SEO y rendimiento web\n\n• Comunicación directa con clientes y propuesta de soluciones",
    },
    {
      company: "Gorilast",
      link: "https://gorilast.com/",
      badges: ["Presencial"],
      title: "Responsable en Desarrollo Frontend",
      start: "2024",
      end: "2024",
      description:
        "• Desarrollo frontend para plataforma e-commerce (React, TypeScript, TailwindCSS)\n\n• Creación de componentes interactivos y diseño de interfaz atractiva\n\n• Integración de APIs en mapa interactivo para visualización de datos\n\n• Testing automatizado con Cypress (end-to-end y componentes)\n\n• Control de versiones y colaboración a través de GitLab",
    },
    {
      company: "OFF TRUST LLC",
      link: "",
      badges: ["Remoto"],
      title: "Desarrollador y responsable",
      start: "2022",
      end: "2024",
      description:
        "• Co-fundador de empresa de e-commerce con +3200 ventas\n\n• Gestión de atención al cliente y resolución de incidencias\n\n• Diseño de landing pages optimizadas para SEO y conversión\n\n• Gestión de operaciones en Amazon FBA\n\n• Desarrollo de aplicación interna con PHP, HTML5, CSS y JavaScript",
    },
    {
      company: "Accenture",
      link: "https://www.accenture.com/",
      badges: ["Remoto"],
      title: "Responsable de Ciberseguridad",
      start: "2022",
      end: "2022",
      description:
        "• Análisis diario de seguridad y monitoreo de logs a nivel global\n\n• Identificación y documentación de actividades sospechosas\n\n• Colaboración con equipos de análisis y reporte\n\n• Detección de amenazas y gestión de incidentes",
    },
  ],
  education: [
    {
      school: "UCAM Universidad Católica San Antonio de Murcia",
      degree: "Máster en Big Data e Inteligencia Artificial",
      start: "2023",
      end: "2024",
    },
    {
      school: "MEDAC",
      degree: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
      start: "2022",
      end: "2024",
    },
    {
      school: "Universidad Europea Miguel de Cervantes",
      degree: "Curso Universitario De Especialización en Agente de Igualdad de Género (+400h, 16 créditos)",
      start: "2023",
      end: "2023",
    },
    {
      school: "Universidad Europea",
      degree: "Técnico Superior en Administración de Sistemas Informáticos en Red", 
      start: "2020",
      end: "2022",
    },
    {
      school: "La Salle Griñon",
      degree: "Técnico en Sistemas Microinformáticos y Redes", 
      start: "2018",
      end: "2020",
    },
  ],
  certifications: [
    {
      name: "El curso mas completo de testing - Bootcamp de 0 a 100",
      issuer: "Udemy",
      date: "2025",
      id: "UC-bb38367b-920f-41dd-94d7-d2ba51ebf65a",
    },
    {
      name: "QA Testing - TestLink",
      issuer: "Udemy",
      date: "2024",
      id: "0004",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Java",
    "PHP",
    "SQL",
    "HTML/CSS",
    "Tailwind CSS",
    "Testing Automatizado",
    "Git",
    "Docker",
    "APIs",
    "Cypress",
    "MySQL",
    "Big Data",
    "SEO",
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
