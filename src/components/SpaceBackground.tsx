import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { Suspense } from 'react';

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
      <mesh position={[0, 2, -6]}>
        <torusGeometry args={[0.4, 0.15, 16, 32]} />
        <meshStandardMaterial
          color="#ff006e"
          emissive="#ec4899"
          emissiveIntensity={0.5}
          roughness={0.6}
        />
      </mesh>
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
          <FloatingAsteroid />
          <FloatingSatellite />
        </Suspense>
      </Canvas>
    </div>
  );
};
