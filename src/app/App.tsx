import { Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/RootLayout';

// Pages
import Home from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';

// Note: If any page import has a red line in VS Code, 
// just add or remove the curly braces { } around the component name!

export default function App() {
  return (
    <Routes>
      {/* RootLayout acts as the master wrapper (Nav, Bubbles, Cursor, Footer) */}
      <Route element={<RootLayout />}>
        {/* These pages swap out seamlessly inside the RootLayout's <Outlet /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}