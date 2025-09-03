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
      className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-emerald-500/5"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-emerald-500/10"></div>

      {/* Reduced decorative elements for mobile */}
      <div className="absolute inset-0 opacity-10 md:opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full border ${
              i % 2 === 0
                ? "border-accent animate-spin-slow"
                : "border-emerald-400 animate-pulse"
            }`}
            style={{
              width: `${40 + i * 15}px`,
              height: `${40 + i * 15}px`,
              left: `${15 + i * 10}%`,
              top: `${15 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-8 bg-gradient-to-r from-white via-accent to-emerald-300 bg-clip-text text-transparent leading-tight">
              Let's Build Something Amazing
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl lg:max-w-3xl mx-auto px-2">
              Ready to bring your ideas to life? Let's collaborate and create
              innovative solutions that make a real impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact Info Section */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4 md:mb-6">
                  Get In Touch
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  I'm always excited to discuss new opportunities, innovative
                  projects, or just chat about technology. Whether you're a
                  startup looking to build your MVP or an enterprise seeking to
                  modernize your systems, let's explore how we can work
                  together.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-gradient-to-r from-accent/5 to-emerald-500/5 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="p-2 md:p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors flex-shrink-0">
                      <Icon className="h-4 w-4 md:h-6 md:w-6 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-accent text-sm md:text-base">
                        {label}
                      </div>
                      <div className="text-muted-foreground text-xs md:text-sm truncate">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-4 md:p-8 bg-gradient-to-br from-card/80 to-background/80 border-accent/30 hover:border-accent/60 transition-all duration-500 shadow-2xl backdrop-blur-sm order-1 lg:order-2">
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-accent">
                      Name
                    </label>
                    <Input
                      placeholder="Your Name"
                      className="border-accent/30 focus:border-accent transition-all duration-300 bg-background/50 backdrop-blur-sm h-10 md:h-12"
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
                      className="border-accent/30 focus:border-accent transition-all duration-300 bg-background/50 backdrop-blur-sm h-10 md:h-12"
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
                    className="border-accent/30 focus:border-accent transition-all duration-300 bg-background/50 backdrop-blur-sm h-10 md:h-12"
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
                    rows={4}
                    className="border-accent/30 focus:border-accent transition-all duration-300 bg-background/50 backdrop-blur-sm resize-none min-h-[100px] md:min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full text-sm md:text-lg py-3 md:py-4 animate-glow bg-gradient-to-r from-accent via-emerald-500 to-green-400 hover:from-emerald-600 hover:via-accent hover:to-emerald-400 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-accent/30"
                  onClick={submitForm}
                  disabled={isSubmitting}
                >
                  <Rocket className="mr-2 h-4 w-4 md:h-5 md:w-5" />
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
