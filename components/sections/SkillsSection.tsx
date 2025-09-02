"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/constants";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-card/30 to-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-white via-accent to-emerald-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mastering the full spectrum of modern development technologies and
            methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`card-3d text-center p-8 bg-gradient-to-br ${category.color} border-accent/20 hover:border-accent/60 transition-all duration-700 hover:shadow-2xl hover:shadow-accent/15 group backdrop-blur-sm`}
            >
              <div className="text-accent mb-8 flex justify-center transform group-hover:scale-125 transition-transform duration-500">
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold mb-6 text-accent group-hover:text-white transition-colors duration-300">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="mr-2 mb-2 hover:bg-accent/20 hover:border-accent hover:scale-110 transition-all duration-300 cursor-pointer group-hover:animate-bounce"
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
