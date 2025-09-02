// Alternative approach with lazy loading for better performance
// pages/index-optimized.tsx
"use client";

import { Navigation, Footer } from "@/components/layout";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy load heavy components
const HeroSection = dynamic(
  () =>
    import("@/components/sections/HeroSection").then((mod) => ({
      default: mod.HeroSection,
    })),
  {
    ssr: false,
  }
);

const AboutSection = dynamic(() =>
  import("@/components/sections/AboutSection").then((mod) => ({
    default: mod.AboutSection,
  }))
);

const ProjectsSection = dynamic(() =>
  import("@/components/sections/ProjectsSection").then((mod) => ({
    default: mod.ProjectsSection,
  }))
);

const SkillsSection = dynamic(() =>
  import("@/components/sections/SkillsSection").then((mod) => ({
    default: mod.SkillsSection,
  }))
);

const ContactSection = dynamic(() =>
  import("@/components/sections/ContactSection").then((mod) => ({
    default: mod.ContactSection,
  }))
);

// Loading components
const SectionSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent"></div>
  </div>
);

export default function OptimizedHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <Suspense fallback={<SectionSkeleton />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SkillsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>

      <Footer />
    </main>
  );
}
