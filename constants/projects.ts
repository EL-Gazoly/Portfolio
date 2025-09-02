// constants/projects.ts
import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Turn Management Tools",
    description:
      "Built internal management tools for workflow automation, database migrations, and insightful dashboards to streamline Turn's operations.",
    technologies: [
      "Next.js",
      "Convex",
      "MongoDB",
      "Metabase",
      "Node.js",
      "Automation",
    ],
    image: "/projects/turnbrands_cover.png", // Now using public directory path
    featured: true,
    hasCode: false,
    hasDemo: true,
    demoLink: "https://turnportal.me/",
  },
  {
    title: "Turn E-commerce Platforms",
    description:
      "Developed multiple high-performance Next.js e-commerce websites optimized for speed, SEO, and scalability, delivering outstanding user experiences.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "SEO",
      "Performance",
    ],
    image: "/projects/turnbrands_cover.png",
    featured: true,
    hasCode: false,
    hasDemo: true,
    demoLink: "https://turn.me/",
  },
  {
    title: "RetroVision",
    description:
      "A new era for Turn products — designed and implemented an innovative product suite that reimagines workflows and elevates the entire customer experience.",
    technologies: ["Next.js", "TypeScript", "Zustand", "Tailwind"],
    image: "/projects/turnbrands_cover.png",
    featured: true,
    hasDemo: true,
    demoLink: "https://retrovision.turn.me/",
  },
  {
    title: "AI Chatbot Platform",
    description:
      "Built an AI chatbot to process files, generate charts, and deliver structured responses, enhancing data-driven decision making.",
    technologies: [
      "Next.js",
      "TypeScript",
      "AI",
      "TailwindCSS",
      "Data Visualization",
    ],
    image: "/projects/chatbot.png",
    featured: false,
    hasDemo: false,
  },
  {
    title: "Image Processing Platform",
    description:
      "Created a text-to-image site with styling and retouching features for seamless creative workflows.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Image Processing",
      "Generative AI",
    ],
    image: "/projects/image-processing.png",
    featured: false,
  },
  {
    title: "Corporatica Website Revamp",
    description:
      "Redesigned and revamped the company website for improved performance, accessibility, and user experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "SEO",
      "Performance Optimization",
    ],
    image: "/projects/corporatica.png",
    featured: false,
    hasCode: false,
    hasDemo: true,
    demoLink: "https://corporatica.com",
  },
  {
    title: "VR Headset Management & Collaboration Suite",
    description:
      "At Bright Vision Technology, led desktop app releases managing VR headsets for education. Integrated Electron, React, Node.js, GraphQL, Prisma, Firebase, and AWS for features like streaming, recording, UMS, and reporting dashboards.",
    technologies: [
      "Electron",
      "React",
      "Node.js",
      "GraphQL",
      "Firebase",
      "AWS",
      "PostgreSQL",
    ],
    image: "/projects/seven-teams.png",
    featured: true,
    hasCode: true,
    hasDemo: false,
    codeLink: "https://github.com/EL-Gazoly/7-Teams-Fontend",
  },
  {
    title: "Jennessy",
    description:
      "A real estate platform for lead generation and outreach solutions with smooth navigation and optimized performance.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    image: "/projects/jennessy.png",
    featured: false,
    hasCode: true,
    hasDemo: true,
    codeLink: "https://github.com/EL-Gazoly/Jennessy-website",
    demoLink: "https://jennessy.com",
  },
  {
    title: "Gotion (Notion Clone)",
    description:
      "A Notion-like productivity app with Convex & Clerk authentication, real-time collaboration, publishing, and responsive design.",
    technologies: ["Next.js", "TypeScript", "Convex", "Clerk", "TailwindCSS"],
    image: "/projects/gotion.png",
    featured: false,
    hasCode: true,
    hasDemo: true,
    codeLink: "https://github.com/EL-Gazoly/notion-clone",
    demoLink: "https://gotion-five.vercel.app/",
  },
  {
    title: "KIU (Keep It Up)",
    description:
      "Two applications (Website & Dashboard) built with Strapi, QR code scanning, Google Maps API, and profile categorization.",
    technologies: [
      "React",
      "GraphQL",
      "Google Maps API",
      "Zustand",
      "TailwindCSS",
      "Strapi",
      "PostgreSQL",
    ],
    image: "/projects/kiu.png",
    featured: false,
    hasCode: false,
    hasDemo: false,
  },
  {
    title: "MOO Social App",
    description:
      "A social media app focused on anonymous expression and private features.",
    technologies: ["Next.js", "TailwindCSS", "Zustand", "NextAuth", "Firebase"],
    image: "/projects/moo.png",
    featured: false,
    hasCode: false,
    hasDemo: false,
  },
  {
    title: "File Fortress API",
    description:
      "A secure cloud storage platform with social login, enhanced security, and data encryption.",
    technologies: ["Node.js", "PostgreSQL", "Docker", "Authentication"],
    image: "/projects/file-storage.png",
    featured: false,
    hasCode: false,
    hasDemo: false,
  },
];
