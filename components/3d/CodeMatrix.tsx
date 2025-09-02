"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Torus, Cylinder } from "@react-three/drei";
import * as THREE from "three";

export function CodeMatrix() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }

    meshRefs.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.rotation.x = state.clock.elapsedTime * (0.5 + i * 0.1);
        mesh.rotation.z = state.clock.elapsedTime * (0.3 + i * 0.05);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {[...Array(12)].map((_, i) => (
        <Float
          key={i}
          speed={1 + i * 0.2}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <mesh
            ref={(el) => (meshRefs.current[i] = el)}
            position={[
              Math.cos(i * 0.6) * 5,
              Math.sin(i * 0.6) * 3,
              Math.sin(i * 0.4) * 3,
            ]}
          >
            {i % 4 === 0 && <boxGeometry args={[0.4, 0.4, 0.4]} />}
            {i % 4 === 1 && <Torus args={[0.3, 0.1, 8, 16]} />}
            {i % 4 === 2 && <Cylinder args={[0.2, 0.2, 0.6, 8]} />}
            {i % 4 === 3 && <octahedronGeometry args={[0.3]} />}
            <meshStandardMaterial
              color={
                i % 3 === 0 ? "#10b981" : i % 3 === 1 ? "#059669" : "#34d399"
              }
              wireframe={i % 5 === 0}
              transparent
              opacity={0.8}
              metalness={0.7}
              roughness={0.3}
              emissive={i % 2 === 0 ? "#10b981" : "#059669"}
              emissiveIntensity={0.1}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}
