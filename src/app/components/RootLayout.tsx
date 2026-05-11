import { Outlet } from 'react-router-dom'; // <--- FIXED THIS IMPORT
import { Navigation } from './Navigation';
import { FloatingBubbles } from './FloatingBubbles';
import { CursorFollower } from './CursorFollower';
import { Footer } from './Footer';

export function RootLayout() {
  return (
    // <--- Changed overflow-hidden to overflow-x-hidden to ensure mobile scrolling works perfectly!
    <div className="relative min-h-screen overflow-x-hidden w-full bg-gradient-to-br from-white via-cyan-50 to-cyan-100">
      <FloatingBubbles />
      <CursorFollower />
      <Navigation />
      
      {/* Added min-h-screen here to push the footer down cleanly on short pages */}
      <main className="relative z-10 min-h-screen">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}