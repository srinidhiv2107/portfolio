import React, { useState, useEffect } from 'react';
import { trackPageView } from "./utils/analytics";
import ContextProvider from "./contexts/ContextProvider.jsx";
import Header from "./components/Header.jsx";
import SpaceBackground from "./components/SpaceBackground.jsx";
import Footer from "./components/Footer.jsx";
import MainContent from "./components/MainContent.jsx";
import Intro from "./components/Intro.jsx";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

   useEffect(() => {
        trackPageView();
    }, []);

  return (
    <ContextProvider>
      <div className="app">
        {showIntro? 
          <Intro onComplete={() => setShowIntro(false)} />:
          <>
            <SpaceBackground />
            <Header />
            <MainContent />
            <Footer />
          </>
        }
      </div>
    </ContextProvider>
  );
};

export default App;
