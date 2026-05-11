import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// --- Reusable Bubbly Material ---
const bubblyMaterial = (hovered: boolean, color: string) => (
  <meshPhysicalMaterial 
    color={hovered ? "#ffffff" : color} 
    emissive={hovered ? color : "#000000"}
    emissiveIntensity={0.4}
    roughness={0.2} 
    metalness={0.1} 
    clearcoat={1}
    clearcoatRoughness={0.1}
  />
);

// --------------------------------------------------------
// 1. MISSION (Bubbly Interactive Target & Arrow) - BIG CARD
// --------------------------------------------------------
function BubblyTarget() {
  const groupRef = useRef<THREE.Group>(null);
  const arrowRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  
  // Track animation: 0 = resting, 1 = pulling back, 2 = shooting
  const [arrowPhase, setArrowPhase] = useState(0); 

  useFrame(() => {
    if (groupRef.current && arrowRef.current) {
      // 1. Hover Effect: Soft scale for the entire group
      const targetScale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

      // 2. Click Animation: The Pull and Strike
      if (arrowPhase === 1) {
        // Pull back slowly
        arrowRef.current.position.z = THREE.MathUtils.lerp(arrowRef.current.position.z, 3.5, 0.08);
        if (arrowRef.current.position.z > 3.0) setArrowPhase(2); // Release the arrow!
      } else if (arrowPhase === 2) {
        // Shoot forward extremely fast
        arrowRef.current.position.z = THREE.MathUtils.lerp(arrowRef.current.position.z, 0, 0.4);
        if (arrowRef.current.position.z < 0.1) setArrowPhase(0); // Arrow hits, return to rest
      } else {
        // Settle into resting position
        arrowRef.current.position.z = THREE.MathUtils.lerp(arrowRef.current.position.z, 0, 0.2);
      }
    }
  });

  const handleClick = () => {
    // Only trigger if it isn't already animating
    if (arrowPhase === 0) setArrowPhase(1);
  };

  return (
    <group 
      ref={groupRef} 
      onPointerOver={() => setHover(true)} 
      onPointerOut={() => setHover(false)} 
      onClick={handleClick}
      // Angle the whole group slightly so the 3D depth of the arrow is visible
      rotation={[0, -0.4, 0]} 
    >
      {/* --- THE TARGET --- */}
      <mesh castShadow receiveShadow>
        <torusGeometry args={[1, 0.25, 32, 64]} />
        <meshPhysicalMaterial color={hovered ? "#0891b2" : "#cbd5e1"} roughness={0.2} metalness={0.1} clearcoat={1} />
      </mesh>
      
      <mesh position={[0, 0, 0.1]} castShadow receiveShadow>
        <torusGeometry args={[0.6, 0.2, 32, 64]} />
        <meshPhysicalMaterial color="#ffffff" roughness={0.1} metalness={0.1} clearcoat={1} />
      </mesh>

      <mesh position={[0, 0, 0.1]} castShadow receiveShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#0891b2" emissive="#0891b2" emissiveIntensity={0.5} />
      </mesh>

      {/* --- THE ARROW --- */}
      <group ref={arrowRef}>
        {/* Shaft */}
        <mesh position={[0, 0, 1.2]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 1.5, 16]} />
          <meshStandardMaterial color="#94a3b8" />
        </mesh>
        
        {/* Arrowhead (Turns Red when hovered to signal interaction) */}
        <mesh position={[0, 0, 0.35]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
          <coneGeometry args={[0.15, 0.3, 16]} />
          <meshStandardMaterial color={hovered ? "#dc2626" : "#0f172a"} />
        </mesh>

        {/* Fletching (Feathers) */}
        <mesh position={[0, 0.1, 1.8]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <boxGeometry args={[0.02, 0.3, 0.2]} />
          <meshStandardMaterial color="#0891b2" />
        </mesh>
        <mesh position={[0, -0.1, 1.8]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <boxGeometry args={[0.02, 0.3, 0.2]} />
          <meshStandardMaterial color="#0891b2" />
        </mesh>
      </group>
    </group>
  );
}

// --------------------------------------------------------
// 2. VISION (Transforming Crystal Eye) - BIG CARD
// --------------------------------------------------------
function CrystalVision() {
  const groupRef = useRef<THREE.Group>(null);
  const pupilRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  
  // Track whether it is flat (false) or flipped up into an eye (true)
  const [isEye, setIsEye] = useState(false);

  useFrame((state) => {
    if (groupRef.current && pupilRef.current) {
      
      // 1. Manage the Pupil's position based on orientation
      if (isEye) {
        // When vertical (Eye Mode): Local Y faces the camera, Local Z faces down
        pupilRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.2; // Look left/right
        pupilRef.current.position.z = -Math.cos(state.clock.elapsedTime * 0.8) * 0.2; // Look up/down
        pupilRef.current.position.y = THREE.MathUtils.lerp(pupilRef.current.position.y, 0.4, 0.1); // Push to the front!
      } else {
        // When flat (Crystal Ball Mode): Rolls around the bottom
        pupilRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.2;
        pupilRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.8) * 0.2;
        pupilRef.current.position.y = THREE.MathUtils.lerp(pupilRef.current.position.y, 0, 0.1); // Stay in center
      }

      // 2. Soft scale on hover
      const targetScale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      // 3. The 90-Degree Flip!
      // Math.PI / 2 equals exactly 90 degrees
      const targetRotationX = isEye ? Math.PI / 2 : 0;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.1);
    }
  });

  return (
    <group 
      ref={groupRef} 
      onPointerOver={() => setHover(true)} 
      onPointerOut={() => setHover(false)} 
      onClick={() => setIsEye(!isEye)}
    >
      {/* The Ring: Lays flat by default, stands up to become eyelids when clicked */}
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.85, 0.15, 16, 64]} />
        {/* We reuse your bubblyMaterial from the top of the file! */}
        {bubblyMaterial(hovered, "#cbd5e1")} 
      </mesh>
      
      {/* Outer Glass Sphere */}
      <mesh castShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0.1} ior={1.5} thickness={2} />
      </mesh>
      
      {/* Glowing Pupil */}
      <mesh ref={pupilRef}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial 
          color={hovered ? "#ffffff" : "#0891b2"} 
          emissive="#06b6d4" 
          emissiveIntensity={hovered ? 1 : 0.5} 
        />
      </mesh>
    </group>
  );
}

// --------------------------------------------------------
// 3. INNOVATION (Clickable Bubbly Lightbulb)
// --------------------------------------------------------
function BubblyBulb() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [isOn, setIsOn] = useState(false); // Acts as a real light switch!
  const [bouncing, setBouncing] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      // The bouncy jump animation
      if (bouncing) {
        groupRef.current.position.y = Math.sin(Date.now() / 50) * 0.3;
      } else {
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, 0, 0.2);
      }

      // Soft scale on hover
      const targetScale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const handleClick = () => {
    setIsOn(!isOn); // Toggle the light on/off
    setBouncing(true); // Trigger the bounce
    setTimeout(() => setBouncing(false), 400); // Stop bouncing after 0.4s
  };

  return (
    <group 
      ref={groupRef} 
      onPointerOver={() => setHover(true)} 
      onPointerOut={() => setHover(false)} 
      onClick={handleClick}
    >
      {/* Bulb Glass */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial 
          color={isOn ? "#fef08a" : "#ffffff"} 
          emissive={isOn ? "#eab308" : (hovered ? "#0891b2" : "#000000")} 
          emissiveIntensity={isOn ? 1.5 : (hovered ? 0.3 : 0)} 
          roughness={0.1} 
        />
      </mesh>
      
      {/* Base */}
      <mesh position={[0, -0.5, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.2, 0.4, 32]} />
        {bubblyMaterial(false, "#94a3b8")}
      </mesh>
      <mesh position={[0, -0.8, 0]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        {bubblyMaterial(false, "#64748b")}
      </mesh>

      {/* Actual 3D light that turns on and off! */}
      {isOn && (
        <pointLight position={[0, 0.5, 0.5]} intensity={2} color="#fef08a" distance={4} />
      )}
    </group>
  );
}

// --------------------------------------------------------
// 4. INTEGRITY (Bouncy Soft Diamond)
// --------------------------------------------------------
function SoftDiamond() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += clicked ? 0.3 : 0.01;
      if (clicked && meshRef.current.rotation.y > Math.PI * 4) setClicked(false);
      
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <mesh ref={meshRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)} castShadow>
      <octahedronGeometry args={[0.8, 1]} /> {/* 1 detail makes it soft and bubbly instead of sharp */}
      {bubblyMaterial(hovered, "#0ea5e9")}
    </mesh>
  );
}

// --------------------------------------------------------
// 5. EXCELLENCE (Bubbly Golden Star/Medal)
// --------------------------------------------------------
function BubblyStar() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      if (clicked) {
        groupRef.current.rotation.z += 0.2;
        if (groupRef.current.rotation.z > Math.PI * 2) { groupRef.current.rotation.z = 0; setClicked(false); }
      }
      const targetScale = hovered ? 1.2 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      <mesh castShadow><torusGeometry args={[0.5, 0.25, 32, 32]} />{bubblyMaterial(hovered, "#fbbf24")}</mesh>
      <mesh castShadow><sphereGeometry args={[0.4, 32, 32]} />{bubblyMaterial(hovered, "#f59e0b")}</mesh>
    </group>
  );
}

// --------------------------------------------------------
// 6. CUSTOMER SUCCESS (Dancing Bubbles)
// --------------------------------------------------------
function DancingBubbles() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.02; // Constantly circle each other
      if (clicked) {
        // Explode outward
        groupRef.current.children[0].position.x = THREE.MathUtils.lerp(groupRef.current.children[0].position.x, -1, 0.1);
        groupRef.current.children[1].position.x = THREE.MathUtils.lerp(groupRef.current.children[1].position.x, 1, 0.1);
        groupRef.current.children[2].position.z = THREE.MathUtils.lerp(groupRef.current.children[2].position.z, 1, 0.1);
        setTimeout(() => setClicked(false), 500);
      } else {
        // Return to hug
        groupRef.current.children[0].position.lerp(new THREE.Vector3(-0.4, Math.sin(state.clock.elapsedTime * 2) * 0.2, 0), 0.1);
        groupRef.current.children[1].position.lerp(new THREE.Vector3(0.4, Math.cos(state.clock.elapsedTime * 2) * 0.2, 0), 0.1);
        groupRef.current.children[2].position.lerp(new THREE.Vector3(0, Math.sin(state.clock.elapsedTime * 2 + 1) * 0.2, 0.4), 0.1);
      }
      const targetScale = hovered ? 1.2 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => setClicked(true)}>
      <mesh castShadow>{bubblyMaterial(hovered, "#06b6d4")}<sphereGeometry args={[0.4, 32, 32]} /></mesh>
      <mesh castShadow>{bubblyMaterial(hovered, "#38bdf8")}<sphereGeometry args={[0.4, 32, 32]} /></mesh>
      <mesh castShadow>{bubblyMaterial(hovered, "#7dd3fc")}<sphereGeometry args={[0.4, 32, 32]} /></mesh>
    </group>
  );
}

// --- Canvas Wrappers to Export ---
const CanvasWrapper = ({ children, big = false }: { children: React.ReactNode, big?: boolean }) => (
  // ADDED touch-none here!
  <div className={`w-full ${big ? 'h-48' : 'h-32'} cursor-pointer z-10 relative touch-none`}>
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>{children}</Float>
      <ContactShadows position={[0, -1.8, 0]} opacity={0.3} scale={6} blur={2} />
    </Canvas>
  </div>
);

export const MissionIcon = () => <CanvasWrapper big><BubblyTarget /></CanvasWrapper>;
export const VisionIcon = () => <CanvasWrapper big><CrystalVision /></CanvasWrapper>;
export const InnovationIcon = () => <CanvasWrapper><BubblyBulb /></CanvasWrapper>;
export const IntegrityIcon = () => <CanvasWrapper><SoftDiamond /></CanvasWrapper>;
export const ExcellenceIcon = () => <CanvasWrapper><BubblyStar /></CanvasWrapper>;
export const SuccessIcon = () => <CanvasWrapper><DancingBubbles /></CanvasWrapper>;