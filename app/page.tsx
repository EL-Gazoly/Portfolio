"use client";

import { Navigation, Footer } from "@/components/layout";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroSection = dynamic(
  () =>
    import("@/components/sections/HeroSection").then((mod) => ({
      default: mod.HeroSection,
    })),
  {
    ssr: false,
    loading: () => <SectionSkeleton />,
  }
);

const AboutSection = dynamic(
  () =>
    import("@/components/sections/AboutSection").then((mod) => ({
      default: mod.AboutSection,
    })),
  {
    loading: () => <SectionSkeleton />,
  }
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/ProjectsSection").then((mod) => ({
      default: mod.ProjectsSection,
    })),
  {
    loading: () => <SectionSkeleton />,
  }
);

const SkillsSection = dynamic(
  () =>
    import("@/components/sections/SkillsSection").then((mod) => ({
      default: mod.SkillsSection,
    })),
  {
    loading: () => <SectionSkeleton />,
  }
);

const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then((mod) => ({
      default: mod.ContactSection,
    })),
  {
    loading: () => <SectionSkeleton />,
  }
);

const SectionSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent"></div>
  </div>
);

const SectionErrorBoundary = ({
  children,
  sectionName,
}: {
  children: React.ReactNode;
  sectionName: string;
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p>Error loading {sectionName}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-accent text-white rounded"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

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
