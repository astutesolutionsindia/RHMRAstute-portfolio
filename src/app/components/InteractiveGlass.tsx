import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function GlassKnot() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={1}
    >
      <torusKnotGeometry args={[1.2, 0.4, 256, 64]} />
      <meshPhysicalMaterial 
        color={hovered ? "#0891b2" : "#a5f3fc"}
        transmission={0.85}
        roughness={0.15}
        thickness={2} 
        ior={1.5} 
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}

export default function InteractiveGlass() {
  return (
    /* We use inset-0 to prevent the touch-zone from bleeding over your text and buttons */
    <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
      <Canvas 
        camera={{ position: [0, 0, 8.5], fov: 45 }}
        /* This style is the 'Master Key'—it allows vertical scrolling on mobile */
        style={{ touchAction: 'pan-y' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        
        {/* global={false} ensures rotation only happens when the object is directly touched */}
        <PresentationControls 
          global={false} 
          rotation={[0, 0.3, 0]} 
          polar={[-0.4, 0.2]} 
          azimuth={[-1, 0.75]} 
          config={{ mass: 2, tension: 400 }} 
          snap={{ mass: 4, tension: 400 }}
        >
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <GlassKnot />
          </Float>
        </PresentationControls>

        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}