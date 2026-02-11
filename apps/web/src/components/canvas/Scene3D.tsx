"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, OrbitControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// Loading fallback component
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#F59E0B" wireframe />
    </mesh>
  );
}

// Interactive 3D Sphere with distortion
function DistortedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        scale={hovered ? 1.2 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={hovered ? "#EA580C" : "#F59E0B"}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

// Abstract geometric shapes for accent
function GeometricAccents() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating cubes */}
      <mesh position={[2, 1, -2]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#EA580C" transparent opacity={0.7} />
      </mesh>
      <mesh position={[-2, -0.5, -1]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#F59E0B" transparent opacity={0.5} />
      </mesh>
      {/* Torus */}
      <mesh position={[0, -2, -3]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[0.5, 0.2, 16, 32]} />
        <meshStandardMaterial color="#EA580C" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

// Main Scene3D component
interface Scene3DProps {
  variant?: "hero" | "subtle" | "interactive";
  className?: string;
}

export function Scene3D({ variant = "hero", className = "" }: Scene3DProps) {
  const sceneConfig = {
    hero: {
      camera: { position: [0, 0, 5] as [number, number, number],
      fov: 45 },
      showAccents: true,
      showShadows: true,
    },
    subtle: {
      camera: { position: [0, 0, 8] as [number, number, number],
      fov: 30 },
      showAccents: false,
      showShadows: false,
    },
    interactive: {
      camera: { position: [0, 0, 4] as [number, number, number],
      fov: 50 },
      showAccents: true,
      showShadows: true,
    },
  };

  const config = sceneConfig[variant];

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={config.camera}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#F59E0B" />

          {/* Main 3D element */}
          <DistortedSphere />

          {/* Geometric accents */}
          {config.showAccents && <GeometricAccents />}

          {/* Contact shadows */}
          {config.showShadows && (
            <ContactShadows
              position={[0, -2, 0]}
              opacity={0.5}
              scale={10}
              blur={2}
              far={4}
            />
          )}

          {/* Environment */}
          <Environment preset="city" />

          {/* Interactive controls (only for interactive variant) */}
          {variant === "interactive" && (
            <OrbitControls enableZoom={false} enablePan={false} />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}

// Particle system using Three.js points
interface ParticleFieldProps {
  count?: number;
  color?: string;
  size?: number;
}

export function ParticleField({ count = 100, color = "#F59E0B", size = 0.05 }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const particles = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    particles[i] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}
