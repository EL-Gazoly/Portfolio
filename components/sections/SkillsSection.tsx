"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/constants";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 md:py-24 bg-gradient-to-b from-card/30 to-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-6 bg-gradient-to-r from-white via-accent to-emerald-300 bg-clip-text text-transparent leading-tight">
            Skills & Technologies
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto px-2">
            Mastering the full spectrum of modern development technologies and
            methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`card-3d text-center p-6 md:p-8 bg-gradient-to-br ${category.color} border-accent/20 hover:border-accent/60 transition-all duration-700 hover:shadow-2xl hover:shadow-accent/15 group backdrop-blur-sm`}
            >
              <div className="text-accent mb-6 md:mb-8 flex justify-center transform group-hover:scale-125 transition-transform duration-500">
                {category.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-accent group-hover:text-white transition-colors duration-300">
                {category.title}
              </h3>

              <div className="space-y-2 md:space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="mr-1 md:mr-2 mb-1 md:mb-2 text-xs md:text-sm hover:bg-accent/20 hover:border-accent hover:scale-110 transition-all duration-300 cursor-pointer group-hover:animate-bounce px-2 py-1"
                    style={{ animationDelay: `${skillIndex * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
