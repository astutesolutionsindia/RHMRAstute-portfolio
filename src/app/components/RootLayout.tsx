import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { FloatingBubbles } from './FloatingBubbles';
import { CursorFollower } from './CursorFollower';
import { Footer } from './Footer';

export function RootLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-cyan-50 to-cyan-100">
      <FloatingBubbles />
      <CursorFollower />
      <Navigation />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
