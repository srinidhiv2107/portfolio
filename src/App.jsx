import React from 'react';
import ContextProvider from "./contexts/ContextProvider.jsx";
import Header from "./components/Header.jsx";
import SpaceBackground from "./components/SpaceBackground.jsx";
// import TrailingStars from "./components/TrailingStars.jsx";
import Footer from "./components/Footer.jsx";
import MainContent from "./components/MainContent.jsx";

const App = () => {
  // const [isStarTrailEnabled, setIsStarTrailEnabled] = useState(false);

  return (
    <ContextProvider>
      <div className="app">
        <SpaceBackground />
        {/*<TrailingStars isEnabled={isStarTrailEnabled} />*/}
        <Header />
        <MainContent />
        <Footer />
      </div>
    </ContextProvider>
  );
};

export default App;
