import React, { useState } from 'react';
import ContextProvider from "./contexts/ContextProvider.jsx";
import Header from "./components/Header.jsx";
import SpaceBackground from "./components/SpaceBackground.jsx";
import Footer from "./components/Footer.jsx";
import MainContent from "./components/MainContent.jsx";
import Intro from "./components/Intro.jsx";

const App = () => {
  // Controls whether the intro screen is mounted.
  // Once Intro fires onComplete, this flips to false and unmounts it.
  const [showIntro, setShowIntro] = useState(true);

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
