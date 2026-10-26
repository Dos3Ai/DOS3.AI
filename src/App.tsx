import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Technology } from './pages/Technology';
import { Solutions } from './pages/Solutions';
import { Research } from './pages/Research';
import { Pricing } from './pages/Pricing';
import { Security } from './pages/Security';
import { ResponsibleAI } from './pages/ResponsibleAI';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Accessibility } from './pages/Accessibility';
import { Button } from './components/Button';
import { ArrowLeft } from 'lucide-react';

// Scroll to top helper on page change
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// 404 Not Found Page
const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-24 pb-16 px-4 text-center">
      <div className="glass-card rounded-3xl p-10 sm:p-16 max-w-lg border border-dos-border/60 space-y-6">
        <span className="text-xs font-mono text-dos-cyan uppercase tracking-widest block">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-dos-cloud">
          Resource Not Found
        </h1>
        <p className="text-sm text-dos-mist/80 font-sans leading-relaxed">
          The requested path does not exist or has been relocated within the DOS3.AI architecture.
        </p>
        <div className="pt-2">
          <Button to="/" variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-dos-void text-dos-cloud">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/research" element={<Research />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/security" element={<Security />} />
            <Route path="/responsible-ai" element={<ResponsibleAI />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
};

export default App;
