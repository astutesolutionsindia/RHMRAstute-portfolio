import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Detect if the user is on a touch device (phone/tablet)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return; // Stop running the cursor logic entirely
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  // If on mobile, return nothing (completely invisible and zero lag)
  if (isTouchDevice) return null;

  return (
    <div className="hidden md:block">
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-white" />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 100 }}
      >
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-3xl" />
      </motion.div>
    </div>
  );
}