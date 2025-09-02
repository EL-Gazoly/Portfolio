// constants/skills.ts
import { Globe, Server, Cpu, Layers } from "lucide-react";
import { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Globe className="h-10 w-10" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
  },
  {
    title: "Backend",
    icon: <Server className="h-10 w-10" />,
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GraphQL",
      "Microservices",
    ],
    color: "from-green-500/20 via-emerald-500/20 to-green-600/20",
  },
  {
    title: "DevOps & Cloud",
    icon: <Cpu className="h-10 w-10" />,
    skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "CI/CD"],
    color: "from-purple-500/20 via-pink-500/20 to-purple-600/20",
  },
  {
    title: "Architecture",
    icon: <Layers className="h-10 w-10" />,
    skills: [
      "System Design",
      "Scalability",
      "Performance",
      "Security",
      "API Design",
      "Database Design",
    ],
    color: "from-orange-500/20 via-red-500/20 to-orange-600/20",
  },
];
