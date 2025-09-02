import { Project } from "../types/project";

import TurnBG from "../assets/projects/turnbrands_cover.png";
import Jennessey from "../assets/projects/jennessy.png";
import ChatBot from "../assets/projects/corporatica_cover.png";
import SevenTeams from "../assets/projects/seven-teams.png";
import Gotion from "../assets/projects/gotion.png";
import ImageProcessing from "../assets/projects/generate-image.png";
import FileStorage from "../assets/projects/file-storage.png";
import MOO from "../assets/projects/moo.png";
import Kiu from "../assets/projects/kiu.png";
import Corporatica from "../assets/projects/corporatica.png";

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
    image: TurnBG.src,
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
    image: TurnBG.src,
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
    image: TurnBG.src,
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
    image: ChatBot.src,
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
    image: ImageProcessing.src,
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
    image: Corporatica.src,
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
    image: SevenTeams.src,
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
    image: Jennessey.src,
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
    image: Gotion.src,
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
    image: Kiu.src,
    featured: false,
    hasCode: false,
    hasDemo: false,
  },
  {
    title: "MOO Social App",
    description:
      "A social media app focused on anonymous expression and private features.",
    technologies: ["Next.js", "TailwindCSS", "Zustand", "NextAuth", "Firebase"],
    image: MOO.src,
    featured: false,
    hasCode: false,
    hasDemo: false,
  },
  {
    title: "File Fortress API",
    description:
      "A secure cloud storage platform with social login, enhanced security, and data encryption.",
    technologies: ["Node.js", "PostgreSQL", "Docker", "Authentication"],
    image: FileStorage.src,
    featured: false,
    hasCode: false,
    hasDemo: false,
  },
];
