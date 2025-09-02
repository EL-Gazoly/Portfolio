"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Rocket } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactSection() {
  const { formData, updateField, submitForm, isSubmitting } = useContactForm();

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-emerald-500/5"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-emerald-500/10"></div>

      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full border-2 ${
              i % 2 === 0
                ? "border-accent animate-spin-slow"
                : "border-emerald-400 animate-pulse"
            }`}
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${10 + i * 12}%`,
              top: `${10 + i * 8}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold font-heading mb-8 bg-gradient-to-r from-white via-accent to-emerald-300 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create
              innovative solutions that make a real impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-accent mb-6">
                  Get In Touch
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm always excited to discuss new opportunities, innovative
                  projects, or just chat about technology. Whether you're a
                  startup looking to build your MVP or an enterprise seeking to
                  modernize your systems, let's explore how we can work
                  together.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "elgazoly11@gmail.com",
                    href: "mailto:elgazoly11@gmail.com",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "@EL-Gazoly",
                    href: "https://github.com/EL-Gazoly",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "Adham ElGazoly",
                    href: "https://www.linkedin.com/in/adham-elgazoly-075385190/",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-accent/5 to-emerald-500/5 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-accent">{label}</div>
                      <div className="text-muted-foreground">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-card/80 to-background/80 border-accent/30 hover:border-accent/60 transition-all duration-500 shadow-2xl backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-accent">
                      Name
                    </label>
                    <Input
                      placeholder="Your Name"
                      className="border-accent/30 focus:border-accent transition-all duration-300 bg-background/50 backdrop-blur-sm"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-accent">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="border-accent/30 focus:border-accent transition-all duration-300 bg-background/50 backdrop-blur-sm"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-accent">
                    Subject
                  </label>
                  <Input
                    placeholder="Project Discussion"
                    className="border-accent/30 focus:border-accent transition-all duration-300 bg-background/50 backdrop-blur-sm"
                    value={formData.subject}
                    onChange={(e) => updateField("subject", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-accent">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project, goals, and how I can help bring your vision to life..."
                    rows={6}
                    className="border-accent/30 focus:border-accent transition-all duration-300 bg-background/50 backdrop-blur-sm resize-none"
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full text-lg py-4 animate-glow bg-gradient-to-r from-accent via-emerald-500 to-green-400 hover:from-emerald-600 hover:via-accent hover:to-emerald-400 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-accent/30"
                  onClick={submitForm}
                  disabled={isSubmitting}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Launch Project Discussion"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
