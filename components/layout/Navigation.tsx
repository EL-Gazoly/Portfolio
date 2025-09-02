"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/constants";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-accent/30 shadow-2xl shadow-accent/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold font-heading text-accent animate-pulse-glow">
            AE<span className="text-white">.</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-foreground hover:text-accent transition-all duration-300 hover:scale-110 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
