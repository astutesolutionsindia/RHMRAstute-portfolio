import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// --- The Signature Bubbly Gloss Material ---
const bubblyMaterial = (hovered: boolean, color: string) => (
  <meshPhysicalMaterial 
    color={hovered ? "#ffffff" : color} 
    emissive={hovered ? color : "#000000"}
    emissiveIntensity={0.4}
    roughness={0.1} 
    metalness={0.1} 
    clearcoat={1}
    clearcoatRoughness={0.1}
    transmission={hovered ? 0 : 0.2}
  />
);

// 1. CUSTOM SOFTWARE (Bouncing Blocks)
function CustomSoftware() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      if (clicked) groupRef.current.rotation.y += 0.3;
      else groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.1);
      if (groupRef.current.rotation.y > Math.PI * 2) setClicked(false);
      const scale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      <mesh position={[-0.4, -0.4, 0]} castShadow><boxGeometry args={[0.7, 0.7, 0.7]} />{bubblyMaterial(hovered, "#06b6d4")}</mesh>
      <mesh position={[0.4, -0.4, 0]} castShadow><boxGeometry args={[0.7, 0.7, 0.7]} />{bubblyMaterial(hovered, "#38bdf8")}</mesh>
      <mesh position={[0, 0.3, 0.2]} castShadow><boxGeometry args={[0.7, 0.7, 0.7]} />{bubblyMaterial(hovered, "#0ea5e9")}</mesh>
    </group>
  );
}

// 2. MOBILE APP (Sleek 3D Smartphone)
function MobileApp() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      if (clicked) {
        // Fast ringing vibration
        groupRef.current.rotation.z = Math.sin(Date.now() / 20) * 0.15;
        setTimeout(() => setClicked(false), 500);
      } else {
        groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, 0, 0.1);
      }
      const scale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      {/* Sleek Phone Body */}
      <mesh castShadow>
        <boxGeometry args={[0.85, 1.7, 0.15]} />
        {bubblyMaterial(hovered, "#0891b2")}
      </mesh>
      
      {/* Glowing Screen */}
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[0.75, 1.6]} />
        <meshBasicMaterial color={hovered ? "#ffffff" : "#0f172a"} />
      </mesh>
      
      {/* Camera Island on the back */}
      <mesh position={[0.2, 0.6, -0.08]} castShadow>
        <boxGeometry args={[0.3, 0.3, 0.05]} />
        {bubblyMaterial(hovered, "#38bdf8")}
      </mesh>
      
      {/* Tiny Camera Lenses */}
      <mesh position={[0.2, 0.65, -0.1]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#0f172a" />
      </mesh>
      <mesh position={[0.2, 0.55, -0.1]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#0f172a" />
      </mesh>
    </group>
  );
}
// 3. ERP SOLUTIONS (Jelly Disks)
function ErpSolutions() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += clicked ? 0.2 : 0.01;
      if (clicked && groupRef.current.rotation.y > Math.PI * 4) setClicked(false);
      const scale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  const gap = hovered ? 0.6 : 0.4;
  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      <mesh position={[0, gap, 0]} castShadow><cylinderGeometry args={[0.7, 0.7, 0.3, 32]} />{bubblyMaterial(hovered, "#06b6d4")}</mesh>
      <mesh position={[0, 0, 0]} castShadow><cylinderGeometry args={[0.7, 0.7, 0.3, 32]} />{bubblyMaterial(hovered, "#0891b2")}</mesh>
      <mesh position={[0, -gap, 0]} castShadow><cylinderGeometry args={[0.7, 0.7, 0.3, 32]} />{bubblyMaterial(hovered, "#0e7490")}</mesh>
    </group>
  );
}

// 4. CLOUD SOLUTIONS (Bouncy Cloud)
function CloudSolutions() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      if (clicked) groupRef.current.position.y = Math.sin(Date.now() / 50) * 0.3;
      else groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, 0, 0.1);
      setTimeout(() => setClicked(false), 400);
      const scale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      <mesh position={[-0.4, 0, 0]} castShadow><sphereGeometry args={[0.5, 32, 32]} />{bubblyMaterial(hovered, "#38bdf8")}</mesh>
      <mesh position={[0, 0.3, 0.2]} castShadow><sphereGeometry args={[0.6, 32, 32]} />{bubblyMaterial(hovered, "#7dd3fc")}</mesh>
      <mesh position={[0.4, 0, 0]} castShadow><sphereGeometry args={[0.5, 32, 32]} />{bubblyMaterial(hovered, "#0ea5e9")}</mesh>
    </group>
  );
}

// 5. AI & AUTOMATION (Glossy Core)
function AiAutomation() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      const speed = clicked ? 0.2 : (hovered ? 0.05 : 0.01);
      groupRef.current.rotation.x += speed;
      groupRef.current.rotation.y -= speed;
      if (clicked) setTimeout(() => setClicked(false), 800);
      const scale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      <mesh castShadow><sphereGeometry args={[0.4, 32, 32]} /><meshStandardMaterial color={hovered ? "#ffffff" : "#06b6d4"} emissive="#0891b2" emissiveIntensity={0.8} /></mesh>
      <mesh rotation={[Math.PI / 4, 0, 0]} castShadow><torusGeometry args={[0.7, 0.1, 16, 64]} />{bubblyMaterial(hovered, "#94a3b8")}</mesh>
      <mesh rotation={[0, Math.PI / 4, 0]} castShadow><torusGeometry args={[0.7, 0.1, 16, 64]} />{bubblyMaterial(hovered, "#cbd5e1")}</mesh>
    </group>
  );
}

// 6. UI/UX DESIGN (Squishy Layout)
function UiUxDesign() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      if (clicked) groupRef.current.rotation.z += 0.3;
      else groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, 0, 0.1);
      if (groupRef.current.rotation.z > Math.PI * 2) setClicked(false);
      const scale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      <mesh position={[0, 0, -0.2]} castShadow><boxGeometry args={[1.6, 1.2, 0.2]} />{bubblyMaterial(false, "#cbd5e1")}</mesh>
      <mesh position={[-0.4, 0.2, 0]} castShadow><boxGeometry args={[0.6, 0.6, 0.3]} />{bubblyMaterial(hovered, "#0891b2")}</mesh>
      <mesh position={[0.4, -0.2, 0]} castShadow><boxGeometry args={[0.6, 0.2, 0.3]} />{bubblyMaterial(hovered, "#06b6d4")}</mesh>
    </group>
  );
}

// 7. E-COMMERCE (Bubbly Wire-Mesh Shopping Cart)
function ECommerce() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      if (clicked) {
        // Dash forward!
        groupRef.current.position.z = Math.sin(Date.now() / 100) * 0.6;
        groupRef.current.rotation.x = Math.sin(Date.now() / 50) * 0.1;
        setTimeout(() => setClicked(false), 500);
      } else {
        groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, 0, 0.1);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.1);
      }
      const scale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  // Helper component to quickly draw our thick, bubbly "wires"
  const Wire = ({ pos, rot, len, color }: any) => (
    <mesh position={pos} rotation={rot} castShadow>
      <capsuleGeometry args={[0.04, len, 8, 8]} />
      {bubblyMaterial(hovered, color || "#0ea5e9")}
    </mesh>
  );

  return (
    <group 
      ref={groupRef} 
      onPointerOver={() => setHover(true)} 
      onPointerOut={() => setHover(false)} 
      onClick={() => setClicked(true)} 
      rotation={[0, -Math.PI / 5, 0]} // Angled to show off the 3D grid
    >
      {/* --- BASKET HORIZONTAL RINGS (Top, Middle, Bottom) --- */}
      {[0.2, -0.05, -0.3].map((y, i) => (
        <group key={`h-${i}`}>
          <Wire pos={[0, y, 0.3]} rot={[0, 0, Math.PI / 2]} len={0.9} /> {/* Front */}
          <Wire pos={[0, y, -0.3]} rot={[0, 0, Math.PI / 2]} len={0.9} /> {/* Back */}
          <Wire pos={[-0.5, y, 0]} rot={[Math.PI / 2, 0, 0]} len={0.5} /> {/* Left */}
          <Wire pos={[0.5, y, 0]} rot={[Math.PI / 2, 0, 0]} len={0.5} /> {/* Right */}
        </group>
      ))}

      {/* --- BASKET VERTICAL RIBS --- */}
      {/* 4 Corners */}
      <Wire pos={[-0.5, -0.05, 0.3]} rot={[0, 0, 0]} len={0.4} />
      <Wire pos={[0.5, -0.05, 0.3]} rot={[0, 0, 0]} len={0.4} />
      <Wire pos={[-0.5, -0.05, -0.3]} rot={[0, 0, 0]} len={0.4} />
      <Wire pos={[0.5, -0.05, -0.3]} rot={[0, 0, 0]} len={0.4} />
      {/* Front & Back Middles */}
      <Wire pos={[0, -0.05, 0.3]} rot={[0, 0, 0]} len={0.4} />
      <Wire pos={[0, -0.05, -0.3]} rot={[0, 0, 0]} len={0.4} />
      {/* Side Middles */}
      <Wire pos={[-0.5, -0.05, 0]} rot={[0, 0, 0]} len={0.4} />
      <Wire pos={[0.5, -0.05, 0]} rot={[0, 0, 0]} len={0.4} />

      {/* --- PUSH HANDLEBAR --- */}
      <Wire pos={[-0.3, 0.35, -0.45]} rot={[0.6, 0, 0]} len={0.3} color="#94a3b8" /> {/* Left strut */}
      <Wire pos={[0.3, 0.35, -0.45]} rot={[0.6, 0, 0]} len={0.3} color="#94a3b8" /> {/* Right strut */}
      <Wire pos={[0, 0.45, -0.55]} rot={[0, 0, Math.PI / 2]} len={0.6} color="#06b6d4" /> {/* Grip */}

      {/* --- 4 CUTE WHEELS --- */}
      {[-0.4, 0.4].map((x, i) => (
        [-0.2, 0.2].map((z, j) => (
          <mesh key={`w-${i}-${j}`} position={[x, -0.45, z]} castShadow>
            <sphereGeometry args={[0.12, 16, 16]} />
            {bubblyMaterial(false, "#64748b")}
          </mesh>
        ))
      ))}
    </group>
  );
}

// 8. WEB APP DEVELOPMENT (Bubbly Monitor)
function WebApp() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      if (clicked) groupRef.current.rotation.y += 0.3;
      else groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.1);
      if (groupRef.current.rotation.y > Math.PI * 2) setClicked(false);
      const scale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      <mesh position={[0, 0.2, 0]} castShadow><boxGeometry args={[1.8, 1.2, 0.4]} />{bubblyMaterial(hovered, "#0891b2")}</mesh>
      <mesh position={[0, 0.2, 0.25]}><planeGeometry args={[1.5, 0.9]} /><meshBasicMaterial color={hovered ? "#ffffff" : "#0f172a"} /></mesh>
      <mesh position={[0, -0.6, 0]} castShadow><cylinderGeometry args={[0.4, 0.5, 0.2, 32]} />{bubblyMaterial(false, "#cbd5e1")}</mesh>
    </group>
  );
}

// --- Canvas Wrapper ---
const CanvasWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-32 cursor-pointer z-10 relative">
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>{children}</Float>
      <ContactShadows position={[0, -1.5, 0]} opacity={0.3} scale={6} blur={2} />
    </Canvas>
  </div>
);

// Exports mapped to the 8 services
export const CustomSoftwareIcon = () => <CanvasWrapper><CustomSoftware /></CanvasWrapper>;
export const MobileAppIcon = () => <CanvasWrapper><MobileApp /></CanvasWrapper>;
export const ErpSolutionsIcon = () => <CanvasWrapper><ErpSolutions /></CanvasWrapper>;
export const CloudSolutionsIcon = () => <CanvasWrapper><CloudSolutions /></CanvasWrapper>;
export const AiAutomationIcon = () => <CanvasWrapper><AiAutomation /></CanvasWrapper>;
export const UiUxDesignIcon = () => <CanvasWrapper><UiUxDesign /></CanvasWrapper>;
export const ECommerceIcon = () => <CanvasWrapper><ECommerce /></CanvasWrapper>;
export const WebAppIcon = () => <CanvasWrapper><WebApp /></CanvasWrapper>;