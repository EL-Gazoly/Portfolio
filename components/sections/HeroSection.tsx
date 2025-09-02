"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stars } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Code, Database, Zap, Rocket } from "lucide-react";
// Temporarily comment out custom 3D components to test
// import {
//   AnimatedSphere,
//   CodeMatrix,
//   FloatingText,
//   ParticleField,
// } from "@/components/3d";
import * as THREE from "three";

// Move interface outside of component
interface MousePosition {
  x: number;
  y: number;
}

// Simple fallback 3D component for testing
function TestSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#10b981" wireframe />
    </mesh>
  );
}

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [canvasError, setCanvasError] = useState(false);

  useEffect(() => {
    console.log("HeroSection mounting..."); // Debug log
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Error boundary for Canvas
  const handleCanvasError = (error: any) => {
    console.error("Canvas error:", error);
    setCanvasError(true);
  };

  console.log("HeroSection rendering..."); // Debug log

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5"
    >
      {/* Simplified background without complex 3D for testing */}
      <div className="absolute inset-0 z-0">
        {!canvasError ? (
          <Canvas
            camera={{ position: [0, 0, 10], fov: 75 }}
            onError={handleCanvasError}
            fallback={
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10" />
            }
          >
            <ambientLight intensity={0.3} />
            <pointLight
              position={[10, 10, 10]}
              intensity={1.5}
              color="#10b981"
            />

            {/* Use simple components for testing */}
            <Stars
              radius={400}
              depth={80}
              count={1000}
              factor={4}
              saturation={0}
              fade
              speed={0.5}
            />

            <TestSphere />

            {/* Temporarily comment out custom components */}
            {/* <ParticleField />
            <AnimatedSphere />
            <CodeMatrix />
            <FloatingText /> */}

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
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10" />
        )}
      </div>

      {/* Simplified particle overlay */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
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

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-5xl">
          <div
            className={`transition-all duration-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-7xl md:text-9xl font-bold font-heading mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-accent to-emerald-300 bg-clip-text text-transparent animate-gradient-x">
                Adham
              </span>
              <br />
              <span className="text-accent drop-shadow-2xl animate-pulse-glow text-6xl md:text-8xl">
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
            <p className="text-2xl md:text-4xl mb-6 font-light bg-gradient-to-r from-white to-accent/80 bg-clip-text text-transparent">
              Full Stack Developer
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-accent">
                <Zap className="h-5 w-5 animate-pulse" />
                <span className="text-lg">3+ Years Experience</span>
              </div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <div className="flex items-center gap-2 text-emerald-400">
                <Rocket className="h-5 w-5" />
                <span className="text-lg">50+ Projects Delivered</span>
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
            <p className="text-xl md:text-2xl text-muted-foreground/90 mb-10 max-w-3xl leading-relaxed">
              Crafting innovative digital experiences with cutting-edge
              technologies. Specializing in scalable architectures and immersive
              user interfaces that push the boundaries of what's possible.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-700 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <a href="#projects">
              <Button
                size="lg"
                className="text-lg px-8 py-4 animate-glow bg-gradient-to-r from-accent via-emerald-500 to-green-400 hover:from-emerald-600 hover:via-accent hover:to-emerald-400 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-accent/30 border-0"
              >
                <Code className="mr-2 h-5 w-5" />
                Explore My Work
              </Button>
            </a>
            <a href="/Adham-ElGazoly.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-accent/50 hover:border-accent hover:bg-accent/10 transition-all duration-500 transform hover:scale-105 bg-transparent backdrop-blur-sm hover:shadow-xl hover:shadow-accent/20"
              >
                <Database className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Debug info - remove after fixing */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed top-4 right-4 bg-black/80 text-white p-2 rounded z-50 text-sm">
          HeroSection Loaded: {isLoaded ? "Yes" : "No"}
          <br />
          Canvas Error: {canvasError ? "Yes" : "No"}
        </div>
      )}
    </section>
  );
}
