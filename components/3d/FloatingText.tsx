"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text3D } from "@react-three/drei";
import * as THREE from "three";

export function FloatingText() {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Text3D
          ref={textRef}
          font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
          size={0.8}
          height={0.2}
          position={[-3, 2, 0]}
        >
          {"{ }"}
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
          size={0.4}
          height={0.1}
          position={[2, -1, 1]}
        >
          {"</>"}
          <meshStandardMaterial
            color="#34d399"
            emissive="#34d399"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Float>
    </group>
  );
}
