"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 md:py-24 bg-gradient-to-b from-card/50 to-background relative overflow-hidden"
    >
      {/* Background decorative elements - reduced for mobile */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 md:top-20 left-4 md:left-10 w-20 md:w-40 h-20 md:h-40 border-2 border-accent rounded-full animate-spin-slow"></div>
        <div
          className="absolute top-20 md:top-40 right-10 md:right-20 w-12 md:w-24 h-12 md:h-24 border border-emerald-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-16 md:bottom-32 left-1/4 w-16 md:w-32 h-16 md:h-32 border border-accent/50 rotate-45 animate-bounce-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 md:bottom-20 right-4 md:right-10 w-14 md:w-28 h-14 md:h-28 border-2 border-emerald-300 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 md:mb-10 bg-gradient-to-r from-white via-accent to-emerald-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p className="text-lg md:text-xl">
                I'm a passionate full stack developer with{" "}
                <span className="text-accent font-semibold">
                  3+ years of experience
                </span>{" "}
                building scalable web applications that serve thousands of users
                worldwide.
              </p>
              <p>
                My expertise spans the entire development lifecycle - from
                architecting robust backend systems to crafting pixel-perfect
                user interfaces. I specialize in modern JavaScript ecosystems,
                cloud-native architectures, and performance optimization.
              </p>
              <p className="hidden md:block">
                When I'm not coding, you'll find me contributing to open source
                projects, mentoring fellow developers, or exploring the latest
                in AI and machine learning technologies.
              </p>
            </div>

            {/* Stats grid - responsive layout */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 mt-6 md:mt-10 mb-6 md:mb-8">
              <div className="text-center p-2 md:p-4 bg-gradient-to-br from-accent/10 to-transparent rounded-lg border border-accent/20">
                <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">
                  30+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Projects
                </div>
              </div>
              <div className="text-center p-2 md:p-4 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-lg border border-emerald-500/20">
                <div className="text-xl md:text-3xl font-bold text-emerald-400 mb-1 md:mb-2">
                  3+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Years
                </div>
              </div>
              <div className="text-center p-2 md:p-4 bg-gradient-to-br from-green-500/10 to-transparent rounded-lg border border-green-500/20">
                <div className="text-xl md:text-3xl font-bold text-green-400 mb-1 md:mb-2">
                  20+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Tech
                </div>
              </div>
            </div>

            {/* Social buttons */}
            <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
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
                  className="hover:bg-accent/10 hover:border-accent transition-all duration-300 hover:scale-110 bg-transparent backdrop-blur-sm group h-10 w-10 md:h-12 md:w-12"
                  asChild
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Animated circles - responsive sizing */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-emerald-500/20 to-green-400/30 rounded-full animate-float blur-2xl"></div>
              <div
                className="absolute inset-3 md:inset-4 bg-gradient-to-tr from-accent/25 to-transparent rounded-full animate-float border border-accent/30"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute inset-6 md:inset-8 bg-gradient-to-bl from-emerald-500/25 to-transparent rounded-full animate-float border border-emerald-500/30"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute inset-9 md:inset-12 bg-gradient-to-tl from-green-400/20 to-transparent rounded-full animate-float border border-green-400/30"
                style={{ animationDelay: "3s" }}
              ></div>

              {/* Center content for mobile */}
              <div className="absolute md:hidden inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-accent to-emerald-400 rounded-full flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-bold text-white">
                      AE
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium">
                    Full Stack
                    <br />
                    Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
