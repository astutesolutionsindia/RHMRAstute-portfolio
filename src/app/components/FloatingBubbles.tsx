import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Detect mobile to reduce bubble count (saves battery and improves 3D performance)
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    const bubbleCount = isMobile ? 8 : 20;

    const newBubbles: Bubble[] = Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      // Make them slightly smaller on mobile so they don't crowd the screen
      size: Math.random() * (isMobile ? 60 : 100) + (isMobile ? 30 : 50),
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    /* CRITICAL FIX: Changed z-0 to z-[-10]. 
       This pushes the bubbles to the absolute background so they 
       cannot interfere with touch events on your icons or buttons.
    */
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.15), rgba(6, 182, 212, 0.05))`,
            border: '1px solid rgba(6, 182, 212, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(6, 182, 212, 0.1)',
            // Ensure individual bubbles don't capture pointers
            pointerEvents: 'none',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}