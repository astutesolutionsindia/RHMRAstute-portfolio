import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// --------------------------------------------------------
// 1. MOBILE APP DEVELOPMENT (3D Phone)
// --------------------------------------------------------
function MobilePhone() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      // If clicked, do a fast 360 barrel roll
      const targetRotation = clicked ? Math.PI * 2 : 0;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation, 0.1);
      
      // Reset the click animation once it completes the spin
      if (groupRef.current.rotation.y > Math.PI * 1.9) setClicked(false);

      // Scale up smoothly on hover
      const targetScale = hovered ? 1.2 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={() => setClicked(true)}
    >
      {/* Phone Case */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.2, 2.4, 0.2]} />
        <meshStandardMaterial color={hovered ? "#06b6d4" : "#94a3b8"} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Phone Screen (Glows when hovered) */}
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[1.0, 2.0, 0.05]} />
        <meshStandardMaterial 
          color={hovered ? "#ffffff" : "#0f172a"} 
          emissive={hovered ? "#0891b2" : "#000000"} 
          emissiveIntensity={0.5} 
        />
      </mesh>
    </group>
  );
}

export function MobileIconCanvas() {
  return (
    <div className="w-full h-32 cursor-pointer z-10 relative touch-pan-y">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <MobilePhone />
        </Float>
        <ContactShadows position={[0, -1.5, 0]} opacity={0.3} scale={5} blur={1.5} />
      </Canvas>
    </div>
  );
}

// --------------------------------------------------------
// 2. ERP SOLUTIONS (3D Server Disks)
// --------------------------------------------------------
function ServerDisks() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      // Spin constantly, but spin super fast when clicked
      groupRef.current.rotation.y += clicked ? 0.2 : 0.01;
      if (clicked && groupRef.current.rotation.y > Math.PI * 4) setClicked(false);

      const targetScale = hovered ? 1.2 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  // Helper to create a single disk
  const Disk = ({ yOffset }: { yOffset: number }) => (
    <mesh position={[0, yOffset, 0]} castShadow receiveShadow>
      <cylinderGeometry args={[1, 1, 0.4, 32]} />
      <meshStandardMaterial color={hovered ? "#06b6d4" : "#cbd5e1"} roughness={0.2} metalness={0.8} />
    </mesh>
  );

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={() => setClicked(true)}
    >
      {/* Three stacked disks. When hovered, they separate slightly! */}
      <Disk yOffset={hovered ? 0.8 : 0.5} />
      <Disk yOffset={0} />
      <Disk yOffset={hovered ? -0.8 : -0.5} />
    </group>
  );
}

export function ERPIconCanvas() {
  return (
    <div className="w-full h-32 cursor-pointer z-10 relative touch-pan-y">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
          <ServerDisks />
        </Float>
        <ContactShadows position={[0, -1.8, 0]} opacity={0.3} scale={5} blur={1.5} />
      </Canvas>
    </div>
  );
}

// --------------------------------------------------------
// 3. WEB DEVELOPMENT (3D Monitor)
// --------------------------------------------------------
function DesktopMonitor() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      const targetRotation = clicked ? Math.PI * 2 : 0;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation, 0.1);
      if (groupRef.current.rotation.y > Math.PI * 1.9) setClicked(false);
      
      const targetScale = hovered ? 1.2 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      {/* Base & Stand */}
      <mesh position={[0, -1, 0]} castShadow><boxGeometry args={[1.5, 0.1, 1]} /><meshStandardMaterial color="#94a3b8" /></mesh>
      <mesh position={[0, -0.5, -0.2]} castShadow><boxGeometry args={[0.2, 1, 0.2]} /><meshStandardMaterial color="#94a3b8" /></mesh>
      {/* Monitor Body */}
      <mesh position={[0, 0.2, 0]} castShadow><boxGeometry args={[2.8, 1.8, 0.2]} /><meshStandardMaterial color={hovered ? "#06b6d4" : "#94a3b8"} roughness={0.3} metalness={0.7} /></mesh>
      {/* Glowing Screen */}
      <mesh position={[0, 0.2, 0.11]}>
        <boxGeometry args={[2.6, 1.6, 0.05]} />
        <meshStandardMaterial color={hovered ? "#ffffff" : "#0f172a"} emissive={hovered ? "#0891b2" : "#000000"} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export function WebIconCanvas() {
  return (
    <div className="w-full h-32 cursor-pointer z-10 relative touch-pan-y">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}><ambientLight intensity={0.6} /><directionalLight position={[5, 5, 5]} intensity={1} /><Float speed={2} rotationIntensity={0.2} floatIntensity={1}><DesktopMonitor /></Float><ContactShadows position={[0, -1.5, 0]} opacity={0.3} scale={5} blur={1.5} /></Canvas>
    </div>
  );
}

// --------------------------------------------------------
// 4. CLOUD SOLUTIONS (Floating Cloud)
// --------------------------------------------------------
function FloatingCloud() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      if (clicked) groupRef.current.position.y = Math.sin(Date.now() / 100) * 0.5;
      else groupRef.current.position.lerp(new THREE.Vector3(0, 0, 0), 0.1);
      setTimeout(() => setClicked(false), 500);

      const targetScale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const material = <meshStandardMaterial color={hovered ? "#0891b2" : "#ffffff"} roughness={0.1} metalness={0.2} />;

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      <mesh position={[-0.6, 0, 0]} castShadow>{material}<sphereGeometry args={[0.7, 32, 32]} /></mesh>
      <mesh position={[0, 0.4, 0]} castShadow>{material}<sphereGeometry args={[0.9, 32, 32]} /></mesh>
      <mesh position={[0.6, 0, 0]} castShadow>{material}<sphereGeometry args={[0.7, 32, 32]} /></mesh>
    </group>
  );
}

export function CloudIconCanvas() {
  return (
    <div className="w-full h-32 cursor-pointer z-10 relative touch-pan-y">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}><ambientLight intensity={0.8} /><directionalLight position={[5, 5, 5]} intensity={1} /><Float speed={2} rotationIntensity={0.4} floatIntensity={2}><FloatingCloud /></Float><ContactShadows position={[0, -1.5, 0]} opacity={0.3} scale={5} blur={1.5} /></Canvas>
    </div>
  );
}

// --------------------------------------------------------
// 5. AI & AUTOMATION (Neural Core)
// --------------------------------------------------------
function NeuralCore() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current && ring1Ref.current && ring2Ref.current) {
      const speed = clicked ? 0.2 : (hovered ? 0.05 : 0.01);
      ring1Ref.current.rotation.x += speed;
      ring1Ref.current.rotation.y += speed;
      ring2Ref.current.rotation.y -= speed;
      ring2Ref.current.rotation.z -= speed;
      
      const targetScale = hovered ? 1.2 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      if (clicked) setTimeout(() => setClicked(false), 1000);
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      {/* Glowing Center */}
      <mesh><sphereGeometry args={[0.5, 32, 32]} /><meshStandardMaterial color={hovered ? "#ffffff" : "#06b6d4"} emissive="#0891b2" emissiveIntensity={hovered ? 1 : 0.5} /></mesh>
      {/* Orbiting Rings */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}><torusGeometry args={[1, 0.05, 16, 100]} /><meshStandardMaterial color={hovered ? "#06b6d4" : "#94a3b8"} /></mesh>
      <mesh ref={ring2Ref} rotation={[0, Math.PI / 4, 0]}><torusGeometry args={[1, 0.05, 16, 100]} /><meshStandardMaterial color={hovered ? "#06b6d4" : "#94a3b8"} /></mesh>
    </group>
  );
}

export function AIIconCanvas() {
  return (
    <div className="w-full h-32 cursor-pointer z-10 relative touch-pan-y">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}><ambientLight intensity={0.5} /><directionalLight position={[5, 5, 5]} intensity={1} /><Float speed={2} rotationIntensity={0.5} floatIntensity={1}><NeuralCore /></Float><ContactShadows position={[0, -1.8, 0]} opacity={0.3} scale={5} blur={1.5} /></Canvas>
    </div>
  );
}

// --------------------------------------------------------
// 6. CUSTOM SOFTWARE (Modular Cubes)
// --------------------------------------------------------
function ModularCubes() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      const targetRotation = clicked ? Math.PI * 2 : 0;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation, 0.1);
      groupRef.current.rotation.x += 0.005; // Constant slow spin
      if (groupRef.current.rotation.y > Math.PI * 1.9) setClicked(false);
    }
  });

  const offset = hovered ? 0.6 : 0.45; // Cubes push outward on hover!

  const Box = ({ pos }: { pos: [number, number, number] }) => (
    <mesh position={pos} castShadow>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color={hovered ? "#06b6d4" : "#cbd5e1"} roughness={0.2} metalness={0.5} />
    </mesh>
  );

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      <Box pos={[offset, offset, offset]} />
      <Box pos={[-offset, offset, offset]} />
      <Box pos={[offset, -offset, offset]} />
      <Box pos={[-offset, -offset, offset]} />
      <Box pos={[offset, offset, -offset]} />
      <Box pos={[-offset, offset, -offset]} />
      <Box pos={[offset, -offset, -offset]} />
      <Box pos={[-offset, -offset, -offset]} />
    </group>
  );
}

export function SoftwareIconCanvas() {
  return (
    <div className="w-full h-32 cursor-pointer z-10 relative touch-pan-y">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}><ambientLight intensity={0.6} /><directionalLight position={[5, 5, 5]} intensity={1} /><Float speed={1.5} rotationIntensity={1} floatIntensity={1}><ModularCubes /></Float><ContactShadows position={[0, -2, 0]} opacity={0.3} scale={5} blur={1.5} /></Canvas>
    </div>
  );
}