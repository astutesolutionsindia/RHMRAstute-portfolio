import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { FloatingBubbles } from './FloatingBubbles';
import { CursorFollower } from './CursorFollower';
import { Footer } from './Footer';

export function RootLayout() {
  return (
    /* We use overflow-x-hidden to prevent horizontal glitches, 
       but we ensure vertical scrolling is NOT blocked.
    */
    <div className="relative min-h-screen overflow-x-hidden overflow-y-auto w-full bg-gradient-to-br from-white via-cyan-50 to-cyan-100">
      
      {/* Background elements - Ensure they have pointer-events-none in their own files! */}
      <FloatingBubbles />
      <CursorFollower />
      
      <Navigation />
      
      {/* z-10 ensures the content is above bubbles.
         We removed any 'inset-0' or 'fixed' from the main tag 
         that might have been locking the view.
      */}
      <main className="relative z-10 min-h-screen">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}