import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <>
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
    </>
  );
}
