import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function RootLayout() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      {/* 🛑 Bubbles and Cursor are still commented out for the test */}
      {/* <FloatingBubbles /> */}
      {/* <CursorFollower /> */}
      
      <Navigation />
      
      <main className="relative z-10 flex-grow">
        
        {/* 🔥 THE SCROLL TESTER: A giant 200vh tall box with massive text */}
        <div className="h-[200vh] w-full flex flex-col justify-between items-center py-20 pointer-events-none">
           <h1 className="text-5xl font-black text-red-600 bg-white/50 p-4 rounded">⬆️ TOP OF PAGE ⬆️</h1>
           <h1 className="text-5xl font-black text-blue-600 bg-white/50 p-4 rounded">🟡 MIDDLE OF PAGE 🟡</h1>
           <h1 className="text-5xl font-black text-green-600 bg-white/50 p-4 rounded">⬇️ BOTTOM OF PAGE ⬇️</h1>
        </div>

        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}