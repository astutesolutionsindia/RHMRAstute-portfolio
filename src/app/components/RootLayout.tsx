import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { FloatingBubbles } from './FloatingBubbles';
import { CursorFollower } from './CursorFollower';
import { Footer } from './Footer';

export function RootLayout() {
  return (
    /* We keep min-h-screen and flex-col to push the Footer down.
       overflow-x-hidden is kept to prevent horizontal 'wobble' on mobile.
    */
    <div className="relative min-h-screen flex flex-col overflow-x-hidden w-full bg-gradient-to-br from-white via-cyan-50 to-cyan-100">
      
      {/* Background Decorations - Now at z-[-10] inside their component */}
      <FloatingBubbles />
      <CursorFollower />
      
      <Navigation />
      
      {/* flex-grow: Ensures this section takes up all space between Nav and Footer.
          z-10: Keeps your content and interactive 3D icons 'on top' of the bubbles.
          We ensure NO 'overflow' rules are here that might block the natural page scroll.
      */}
      <main className="relative z-10 flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}