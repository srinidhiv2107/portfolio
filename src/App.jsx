import React, { useState } from 'react';
import ContextProvider from "./contexts/ContextProvider.jsx";
import SpaceBackground from "./components/SpaceBackground.jsx";
import Intro from "./components/Intro.jsx";
import Header from "./components/Header.jsx";
// import TrailingStars from "./components/TrailingStars.jsx";
import Footer from "./components/Footer.jsx";
import MainContent from "./components/MainContent.jsx";

const App = () => {
  // const [isStarTrailEnabled, setIsStarTrailEnabled] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  return (
    <ContextProvider>
      <div className="app">
        <SpaceBackground />
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
        {/*<TrailingStars isEnabled={isStarTrailEnabled} />*/}
        {!showIntro && (
          <>
            <Header />
            <MainContent />
            <Footer />
          </>
        )}
      </div>
    </ContextProvider>
  );
};

export default App;
