import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { FloatingBubbles } from './FloatingBubbles';
import { CursorFollower } from './CursorFollower';
import { Footer } from './Footer';

export function RootLayout() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      
      {/* 🟢 Bubbles and Cursor are back in action! */}
      <FloatingBubbles />
      <CursorFollower />
      
      <Navigation />
      
      <main className="relative z-10 flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}