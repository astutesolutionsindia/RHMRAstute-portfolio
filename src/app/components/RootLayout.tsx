import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { FloatingBubbles } from './FloatingBubbles';
import { CursorFollower } from './CursorFollower';
import { Footer } from './Footer';

export function RootLayout() {
  return (
    /* 1. REMOVED the bg-gradient classes (we will put them in CSS).
       2. REMOVED overflow-x-hidden (it causes the mobile scroll lock bug). */
    <div className="relative flex flex-col min-h-screen w-full">
      
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