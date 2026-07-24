import { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import Features from "./components/Features.jsx";
import Story from './components/Story.jsx'
import ChatbotDemo from "./components/ChatbotDemo.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Showcase from "./components/Showcase.jsx";
import LegalPage from "./components/LegalPage.jsx";

const resolveView = (hash) => {
    if (hash === '#showcase' || hash === '#projects') return 'showcase';
    if (hash === '#privacy') return 'privacy';
    if (hash === '#terms') return 'terms';
    return 'home';
};

const App = () => {
    const [currentView, setCurrentView] = useState(() => resolveView(window.location.hash));
    const pendingHashRef = useRef(null);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            const nextView = resolveView(hash);
            // Only sections that live on the home view need a scroll-into-view
            // once React finishes rendering them.
            pendingHashRef.current = nextView === 'home' ? hash : null;
            setCurrentView(nextView);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor =
            currentView === 'home' ? '#dfdff0' : '#07070a';
    }, [currentView]);

    // When we land on (or return to) the home view, either scroll to the
    // section named by the hash, or scroll to top if there's no hash.
    useEffect(() => {
        if (currentView !== 'home') return;

        const hash = pendingHashRef.current;
        pendingHashRef.current = null;

        if (hash && hash !== '#') {
            const id = hash.slice(1);
            const raf = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            });
            return () => cancelAnimationFrame(raf);
        }
    }, [currentView]);

    const handleBackHome = () => {
        window.location.hash = '';
        pendingHashRef.current = null;
        setCurrentView('home');
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    return (
       <main className="relative min-h-screen w-full overflow-x-hidden">
          <Navbar currentView={currentView} />

          {currentView === 'showcase' && <Showcase onBackHome={handleBackHome} />}
          {currentView === 'privacy' && <LegalPage page="privacy" onBackHome={handleBackHome} />}
          {currentView === 'terms' && <LegalPage page="terms" onBackHome={handleBackHome} />}
          {currentView === 'home' && (
              <>
                  <Hero />
                  <About />
                  <Features />
                  <Story />
                  <ChatbotDemo />
                  <Contact />
              </>
          )}

          <Footer />
       </main>
    )
}
export default App
