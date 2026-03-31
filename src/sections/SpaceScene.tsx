"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Planet() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={ref} position={[0, -1.5, 0]}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial color="#000000" />
    </mesh>
  );
}

export default function SpaceScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={2} />

        <Stars
          radius={100}
          depth={50}
          count={2000}
          factor={4}
          fade
        />

        <Planet />
      </Canvas>
    </div>
  );
}