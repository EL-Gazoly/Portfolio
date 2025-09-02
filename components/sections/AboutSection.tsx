"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-card/50 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-accent rounded-full animate-spin-slow"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 border border-emerald-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-32 h-32 border border-accent/50 rotate-45 animate-bounce-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-28 h-28 border-2 border-emerald-300 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl font-bold font-heading mb-10 bg-gradient-to-r from-white via-accent to-emerald-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-xl">
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
              <p>
                When I'm not coding, you'll find me contributing to open source
                projects, mentoring fellow developers, or exploring the latest
                in AI and machine learning technologies.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-accent/10 to-transparent rounded-lg border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-lg border border-emerald-500/20">
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-transparent rounded-lg border border-green-500/20">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  20+
                </div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </div>
            </div>

            <div className="flex gap-4">
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

          <div className="relative">
            <div className="w-96 h-96 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-emerald-500/20 to-green-400/30 rounded-full animate-float blur-2xl"></div>
              <div
                className="absolute inset-4 bg-gradient-to-tr from-accent/25 to-transparent rounded-full animate-float border border-accent/30"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute inset-8 bg-gradient-to-bl from-emerald-500/25 to-transparent rounded-full animate-float border border-emerald-500/30"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute inset-12 bg-gradient-to-tl from-green-400/20 to-transparent rounded-full animate-float border border-green-400/30"
                style={{ animationDelay: "3s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
