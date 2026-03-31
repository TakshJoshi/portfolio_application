"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function HorizonSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.05; // smooth circular rotation
  });

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 1 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;

      void main() {

        float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
        float normalized = (angle + 3.1415926) / (2.0 * 3.1415926);

        vec3 purple = vec3(0.49, 0.23, 0.93);   // #7c3aed
        vec3 green  = vec3(0.0, 0.26, 0.15);    // British racing green
        vec3 brightWhite = vec3(1.0);
        vec3 softWhite = vec3(0.85);

        vec3 color;

        if (normalized < 0.35) {
          color = purple;
        } 
        else if (normalized < 0.70) {
          color = green;
        } 
        else if (normalized < 0.80) {
          color = brightWhite;
        } 
        else {
          color = softWhite;
        }

        // Dark center fade
        float dist = distance(vUv, vec2(0.5));
        float mask = smoothstep(0.4, 0.7, dist);

        color = mix(vec3(0.0), color, mask);

        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });

  return (
    <mesh ref={meshRef} position={[0, -2.5, 0]}>
      <sphereGeometry args={[4, 128, 128]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  );
}

export default function TestScene() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1} />
        <HorizonSphere />
      </Canvas>
    </div>
  );
}