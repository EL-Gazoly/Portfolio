"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { scrollToTop } from "@/utils";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sidebar via-background to-sidebar py-16 border-t border-accent/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 border border-accent rounded-full animate-pulse"
            style={{
              left: `${i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="text-3xl font-bold text-accent mb-2 animate-pulse-glow">
              Adham ElGazoly
            </div>
            <p className="text-sidebar-foreground text-xl mb-2">
              © 2025 All rights reserved
            </p>
            <p className="text-sidebar-foreground/70 text-lg">
              Built with <span className="text-accent">Next.js</span>,{" "}
              <span className="text-emerald-400">Three.js</span> & passion ✨
            </p>
          </div>

          <div className="flex gap-6">
            {[
              {
                icon: Github,
                href: "https://github.com/EL-Gazoly",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/adham-elgazoly-075385190/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:elgazoly11@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                variant="outline"
                size="icon"
                className="hover:bg-accent/10 hover:border-accent transition-all duration-300 hover:scale-110 bg-transparent backdrop-blur-sm group"
                asChild
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-accent/20">
          <Button
            variant="outline"
            onClick={scrollToTop}
            className="hover:bg-accent/10 hover:border-accent transition-all duration-300 hover:scale-110 bg-transparent"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
}
