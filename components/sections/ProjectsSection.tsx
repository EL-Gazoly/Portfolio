"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/constants";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="card-3d overflow-hidden group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-700 border-accent/20 hover:border-accent/60 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
      <div className="aspect-video bg-gradient-to-br from-accent/20 to-emerald-600/20 relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {project.featured && (
          <Badge className="absolute top-4 right-4 bg-accent/90 text-black font-semibold animate-pulse">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-8 h-full flex flex-col">
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed text-lg flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="secondary"
                className="hover:bg-accent/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-auto flex gap-4">
            {project.hasCode && project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full hover:bg-accent/10 hover:border-accent transition-all duration-300 bg-transparent group"
                >
                  <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Code
                </Button>
              </a>
            )}
            {project.hasDemo && project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-accent to-emerald-500 hover:from-emerald-500 hover:to-accent transition-all duration-300 group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-card/30"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-white via-accent to-emerald-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions that combine cutting-edge technology
            with exceptional user experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
