export function RootLayout() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      {/* 🛑 COMMENT THESE OUT FOR THIS TEST */}
      {/* <FloatingBubbles /> */}
      {/* <CursorFollower /> */}
      
      <Navigation />
      <main className="relative z-10 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}