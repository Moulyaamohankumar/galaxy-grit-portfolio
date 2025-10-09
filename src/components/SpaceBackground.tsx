import { Canvas } from '@react-three/fiber';
import { Stars, Float, Sphere } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

function FloatingPlanet() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={[3, 1, -5]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#6d28d9"
          emissiveIntensity={0.3}
          roughness={0.7}
        />
      </mesh>
    </Float>
  );
}

function FloatingRocket() {
  return (
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={1.2}>
      <group position={[-2, 2, -6]} rotation={[0, Math.PI / 4, 0]}>
        {/* Rocket body */}
        <mesh>
          <coneGeometry args={[0.3, 1, 8]} />
          <meshStandardMaterial
            color="#00d9ff"
            emissive="#0891b2"
            emissiveIntensity={0.5}
          />
        </mesh>
        {/* Rocket flame */}
        <mesh position={[0, -0.6, 0]}>
          <coneGeometry args={[0.15, 0.4, 8]} />
          <meshStandardMaterial
            color="#ff006e"
            emissive="#ff006e"
            emissiveIntensity={1}
          />
        </mesh>
      </group>
    </Float>
  );
}

function FloatingAsteroid() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh position={[-3, -1, -4]}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#0891b2"
          emissiveIntensity={0.4}
          roughness={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingSatellite() {
  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.8}>
      <group position={[0, 2, -6]}>
        <mesh>
          <torusGeometry args={[0.4, 0.15, 16, 32]} />
          <meshStandardMaterial
            color="#ff006e"
            emissive="#ec4899"
            emissiveIntensity={0.5}
            roughness={0.6}
          />
        </mesh>
        {/* Solar panels */}
        <mesh position={[0.6, 0, 0]}>
          <boxGeometry args={[0.3, 0.5, 0.05]} />
          <meshStandardMaterial
            color="#4f46e5"
            emissive="#4f46e5"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.6, 0, 0]}>
          <boxGeometry args={[0.3, 0.5, 0.05]} />
          <meshStandardMaterial
            color="#4f46e5"
            emissive="#4f46e5"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

function FloatingComet() {
  return (
    <Float speed={3} rotationIntensity={0.2} floatIntensity={1.5}>
      <group position={[4, -2, -7]} rotation={[0, 0, Math.PI / 6]}>
        <mesh>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#00d9ff"
            emissiveIntensity={0.8}
          />
        </mesh>
        {/* Comet tail */}
        <mesh position={[-0.5, 0, 0]}>
          <coneGeometry args={[0.1, 1, 8]} />
          <meshStandardMaterial
            color="#00d9ff"
            emissive="#00d9ff"
            emissiveIntensity={0.6}
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>
    </Float>
  );
}

function SpaceStation() {
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group position={[-4, 0, -8]}>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.8, 8]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

export const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[0, 5, -5]} intensity={0.7} color="#ff006e" />
          
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          
          <FloatingPlanet />
          <FloatingRocket />
          <FloatingAsteroid />
          <FloatingSatellite />
          <FloatingComet />
          <SpaceStation />
        </Suspense>
      </Canvas>
    </div>
  );
};
