"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stars } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Code, Database, Zap, Rocket } from "lucide-react";
import {
  AnimatedSphere,
  CodeMatrix,
  FloatingText,
  ParticleField,
} from "@/components/3d";
import * as THREE from "three";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    interface MousePosition {
      x: number;
      y: number;
    }

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5"
    >
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#10b981" />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.8}
            color="#059669"
          />
          <spotLight
            position={[0, 10, 0]}
            intensity={1}
            angle={0.3}
            penumbra={1}
            color="#34d399"
          />

          <Stars
            radius={400}
            depth={80}
            count={2000}
            factor={8}
            saturation={0}
            fade
            speed={0.5}
          />
          <ParticleField />
          <AnimatedSphere />
          <CodeMatrix />
          <FloatingText />

          <Environment preset="night" />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.2}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      <div className="absolute inset-0 z-5">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i % 3 === 0
                ? "w-2 h-2 bg-accent/40"
                : i % 3 === 1
                ? "w-1 h-1 bg-emerald-400/30"
                : "w-1.5 h-1.5 bg-green-300/20"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="max-w-5xl">
          <div
            className={`transition-all duration-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold font-heading mb-6 md:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-accent to-emerald-300 bg-clip-text text-transparent animate-gradient-x">
                Adham
              </span>
              <br />
              <span className="text-accent drop-shadow-2xl animate-pulse-glow text-3xl md:text-6xl lg:text-8xl">
                ElGazoly
              </span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-lg md:text-2xl lg:text-4xl mb-4 md:mb-6 font-light bg-gradient-to-r from-white to-accent/80 bg-clip-text text-transparent">
              Full Stack Developer
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6 md:mb-8">
              <div className="flex items-center gap-2 text-accent">
                <Zap className="h-4 w-4 md:h-5 md:w-5 animate-pulse" />
                <span className="text-sm md:text-lg">3+ Years Experience</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <div className="flex items-center gap-2 text-emerald-400">
                <Rocket className="h-4 w-4 md:h-5 md:w-5" />
                <span className="text-sm md:text-lg">
                  30+ Projects Delivered
                </span>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground/90 mb-8 md:mb-10 max-w-2xl md:max-w-3xl leading-relaxed">
              Crafting innovative digital experiences with cutting-edge
              technologies. Specializing in scalable architectures and immersive
              user interfaces that push the boundaries of what's possible.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 md:gap-6 transition-all duration-1000 delay-700 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <a href="#projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 animate-glow bg-gradient-to-r from-accent via-emerald-500 to-green-400 hover:from-emerald-600 hover:via-accent hover:to-emerald-400 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-accent/30 border-0"
              >
                <Code className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Explore My Work
              </Button>
            </a>
            <a href="/Adham-ElGazoly.pdf" download className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 border-2 border-accent/50 hover:border-accent hover:bg-accent/10 transition-all duration-500 transform hover:scale-105 bg-transparent backdrop-blur-sm hover:shadow-xl hover:shadow-accent/20"
              >
                <Database className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
