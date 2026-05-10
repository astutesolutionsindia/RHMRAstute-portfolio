import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// --- Bubbly Gloss Material ---
const bubblyMaterial = (hovered: boolean, color: string) => (
  <meshPhysicalMaterial 
    color={hovered ? "#ffffff" : color} 
    emissive={hovered ? color : "#000000"}
    emissiveIntensity={0.4}
    roughness={0.1} 
    metalness={0.1} 
    clearcoat={1}
    clearcoatRoughness={0.1}
  />
);

// --------------------------------------------------------
// 1. GOVERNMENT CONTRACTOR APP (Bubbly Secure Briefcase)
// --------------------------------------------------------
function GovBriefcase() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      if (clicked) {
        groupRef.current.rotation.y += 0.3; // Spin on click
        if (groupRef.current.rotation.y > Math.PI * 2) setClicked(false);
      } else {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.1);
      }
      const scale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      {/* Case Body */}
      <mesh position={[0, -0.2, 0]} castShadow>
        <boxGeometry args={[1.4, 1, 0.4]} />
        {bubblyMaterial(hovered, "#0284c7")}
      </mesh>
      {/* Handle */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <torusGeometry args={[0.3, 0.08, 16, 32, Math.PI]} />
        {bubblyMaterial(hovered, "#38bdf8")}
      </mesh>
      {/* Lock/Shield mechanism */}
      <mesh position={[0, 0, 0.25]} castShadow>
        <sphereGeometry args={[0.2, 32, 32]} />
        {bubblyMaterial(false, "#cbd5e1")}
      </mesh>
    </group>
  );
}

// --------------------------------------------------------
// 2. MSGCPPL.com (Bubbly Waves & Digital Pixels)
// --------------------------------------------------------
function MsgcpplLogo() {
  const groupRef = useRef<THREE.Group>(null);
  const pixelsRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (groupRef.current && pixelsRef.current) {
      // Pixels float gently up and down
      pixelsRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;

      if (clicked) {
        // Fast barrel roll on click
        groupRef.current.rotation.y += 0.3;
        if (groupRef.current.rotation.y > Math.PI * 2) setClicked(false);
      } else {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.1);
      }
      
      const scale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      {/* Outer Blue Badge Ring */}
      <mesh castShadow>
        <torusGeometry args={[0.8, 0.15, 32, 64]} />
        {bubblyMaterial(hovered, "#0284c7")} // Deep Blue
      </mesh>

      {/* Swooping Waves (Using partial Toruses) */}
      <mesh position={[-0.2, -0.2, 0.1]} rotation={[0, 0, -Math.PI / 4]} castShadow>
        <torusGeometry args={[0.4, 0.08, 16, 32, Math.PI]} />
        {bubblyMaterial(hovered, "#b45309")} // Brown/Bronze
      </mesh>
      <mesh position={[0.1, -0.3, 0.15]} rotation={[0, 0, -Math.PI / 5]} castShadow>
        <torusGeometry args={[0.5, 0.08, 16, 32, Math.PI / 1.5]} />
        {bubblyMaterial(hovered, "#92400e")} // Dark Brown
      </mesh>
      <mesh position={[0, -0.1, 0.05]} rotation={[0, 0, -Math.PI / 3]} castShadow>
        <torusGeometry args={[0.4, 0.08, 16, 32, Math.PI / 1.2]} />
        {bubblyMaterial(hovered, "#0284c7")} // Blue Wave
      </mesh>

      {/* Floating Tech Pixels */}
      <group ref={pixelsRef} position={[0.1, 0.2, 0.2]}>
        <mesh position={[-0.2, 0, 0]} castShadow><boxGeometry args={[0.15, 0.15, 0.15]} />{bubblyMaterial(hovered, "#0ea5e9")}</mesh>
        <mesh position={[0, 0.1, 0]} castShadow><boxGeometry args={[0.12, 0.12, 0.12]} />{bubblyMaterial(hovered, "#b45309")}</mesh>
        <mesh position={[0.2, -0.1, 0]} castShadow><boxGeometry args={[0.1, 0.1, 0.1]} />{bubblyMaterial(hovered, "#0ea5e9")}</mesh>
        <mesh position={[0.15, 0.15, 0]} castShadow><boxGeometry args={[0.08, 0.08, 0.08]} />{bubblyMaterial(hovered, "#92400e")}</mesh>
      </group>
    </group>
  );
}

// --------------------------------------------------------
// 3. iDRIVE (Bubbly Speed Wheel & Grad Cap)
// --------------------------------------------------------
function IDriveLogo() {
  const groupRef = useRef<THREE.Group>(null);
  const wheelRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current && wheelRef.current) {
      if (clicked) {
        // Wheel spins fast, whole logo shakes forward
        wheelRef.current.rotation.z -= 0.4;
        groupRef.current.position.x = Math.sin(Date.now() / 30) * 0.1;
        setTimeout(() => setClicked(false), 600);
      } else {
        groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, 0, 0.1);
      }
      
      const scale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      
      {/* The Speed Lines (Forming the back of the 'D') */}
      <mesh position={[-0.5, 0.3, 0]} castShadow><capsuleGeometry args={[0.08, 0.6, 16, 16]} rotation={[0, 0, Math.PI / 2]} />{bubblyMaterial(hovered, "#1e3a8a")}</mesh>
      <mesh position={[-0.6, 0, 0]} castShadow><capsuleGeometry args={[0.08, 0.4, 16, 16]} rotation={[0, 0, Math.PI / 2]} />{bubblyMaterial(hovered, "#1e3a8a")}</mesh>
      <mesh position={[-0.5, -0.3, 0]} castShadow><capsuleGeometry args={[0.08, 0.6, 16, 16]} rotation={[0, 0, Math.PI / 2]} />{bubblyMaterial(hovered, "#1e3a8a")}</mesh>

      {/* The Navy Wheel (Front of the 'D') */}
      <group ref={wheelRef}>
        <mesh castShadow>
          <torusGeometry args={[0.45, 0.1, 32, 64]} />
          {bubblyMaterial(hovered, "#1e3a8a")} // Navy Blue
        </mesh>
        {/* Inner Hub */}
        <mesh castShadow><sphereGeometry args={[0.1, 16, 16]} />{bubblyMaterial(false, "#ffffff")}</mesh>
        {/* 8 Spokes (Using 4 intersecting capsules) */}
        {[0, Math.PI / 4, Math.PI / 2, Math.PI * 0.75].map((rot, i) => (
          <mesh key={i} rotation={[0, 0, rot]} castShadow>
            <capsuleGeometry args={[0.03, 0.8, 8, 8]} />
            {bubblyMaterial(hovered, "#1e3a8a")}
          </mesh>
        ))}
      </group>

      {/* The Orange Graduation Cap */}
      <group position={[0.2, 0.55, 0.1]} rotation={[0, 0, -Math.PI / 8]}>
        {/* Flat mortarboard */}
        <mesh position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, Math.PI / 4]} castShadow>
          <boxGeometry args={[0.7, 0.7, 0.05]} />
          {bubblyMaterial(hovered, "#f97316")} // Orange
        </mesh>
        {/* Skullcap */}
        <mesh position={[0, 0, 0]} castShadow>
          <sphereGeometry args={[0.25, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} rotation={[Math.PI, 0, 0]} />
          {bubblyMaterial(hovered, "#f97316")}
        </mesh>
        {/* Tassel */}
        <mesh position={[0.3, -0.1, 0.3]} rotation={[0, 0, Math.PI / 8]} castShadow>
          <cylinderGeometry args={[0.02, 0.04, 0.3]} />
          {bubblyMaterial(hovered, "#f97316")}
        </mesh>
      </group>

    </group>
  );
}

// --- Canvas Wrappers ---
// Making them slightly larger (h-40) to fit inside the portfolio's layout style
const CanvasWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-32 h-32 cursor-pointer z-10 relative -ml-4 -mt-4">
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>{children}</Float>
    </Canvas>
  </div>
);

export const GovContractorIcon = () => <CanvasWrapper><GovBriefcase /></CanvasWrapper>;
export const MsgcpplIcon = () => <CanvasWrapper><MsgcpplLogo /></CanvasWrapper>;
export const IdriveIcon = () => <CanvasWrapper><IDriveLogo /></CanvasWrapper>;