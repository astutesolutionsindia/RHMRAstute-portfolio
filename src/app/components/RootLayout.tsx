import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { FloatingBubbles } from './FloatingBubbles';
import { CursorFollower } from './CursorFollower';
import { Footer } from './Footer';

export function RootLayout() {
  return (
    /* flex and flex-col: Combined with min-h-screen, this ensures the 
       Footer stays at the bottom of the viewport on short pages.
    */
    <div className="relative min-h-screen flex flex-col overflow-x-hidden w-full bg-gradient-to-br from-white via-cyan-50 to-cyan-100">
      
      {/* Background Decorations */}
      <FloatingBubbles />
      <CursorFollower />
      
      <Navigation />
      
      {/* flex-grow: This tells the main content area to take up all 
          available space, pushing the Footer down.
          z-10: Keeps content above background bubbles.
      */}
      <main className="relative z-10 flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}