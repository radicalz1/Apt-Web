import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../../contexts/ThemeContext.tsx';

const Atom = (props: any) => (
  <Sphere {...props}>
    {React.createElement('meshStandardMaterial', { color: props.color, roughness: 0.5, metalness: 0.5 })}
  </Sphere>
);

const MolecularStructure = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();

  const { accentColor, brandColor, lineColor } = useMemo(() => {
    if (typeof window === 'undefined') {
        return { accentColor: '#8b5cf6', brandColor: '#22b082', lineColor: '#444'};
    }
    const styles = getComputedStyle(document.documentElement);
    const accent = `hsl(${styles.getPropertyValue('--color-accent-500').trim()})`;
    const brand = `hsl(${styles.getPropertyValue('--color-brand-500').trim()})`;
    const line = theme.includes('dark') ? '#444444' : '#cccccc';
    return { accentColor: accent, brandColor: brand, lineColor: line };
  }, [theme]);

  const { atoms, lines } = useMemo(() => {
    const atomPoints = [];
    const temp = new THREE.Vector3();
    const count = 30;
    // Use Fibonacci sphere algorithm for even distribution
    const phi = Math.PI * (3.0 - Math.sqrt(5.0)); // golden angle in radians
    for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;  // y goes from 1 to -1
        const radius = Math.sqrt(1 - y * y); // radius at y
        const theta = phi * i; // golden angle increment
        const x = Math.cos(theta) * radius * 2.2;
        const z = Math.sin(theta) * radius * 2.2;
        temp.set(x, y * 2.2, z);
        atomPoints.push(temp.clone());
    }
    
    const linePairs = [];
    for (let i = 0; i < atomPoints.length; i++) {
      for (let j = i + 1; j < atomPoints.length; j++) {
        if (atomPoints[i].distanceTo(atomPoints[j]) < 1.8) {
          linePairs.push({ start: atomPoints[i], end: atomPoints[j] });
        }
      }
    }
    return { atoms: atomPoints, lines: linePairs };
  }, []);
  
  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      // Gentle pulsating effect
      const scale = 1 + Math.sin(t * 0.7) * 0.05;
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  return React.createElement('group', { ref: groupRef },
    atoms.map((pos, i) => (
      <Atom key={i} position={pos} args={[0.1, 16, 16]} color={i % 3 === 0 ? brandColor : accentColor} />
    )).concat(
      lines.map((line, i) => (
        <Line key={i} points={[line.start, line.end]} color={lineColor} lineWidth={1} transparent opacity={0.5} />
      ))
    )
  );
};

export const HeroVisual = () => {
  return (
    <div className="hidden lg:block h-[500px] w-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        {React.createElement('ambientLight', { intensity: 2 })}
        {React.createElement('pointLight', { position: [10, 10, 10], intensity: 1 })}
        <Suspense fallback={null}>
          <MolecularStructure />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
};