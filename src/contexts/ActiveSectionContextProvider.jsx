import React, {useState, createContext, useContext, useMemo} from 'react';

const ActiveSectionContext = createContext(null);

export const useActiveSectionContext = () => useContext(ActiveSectionContext);

export const sections = ["home", "experience", "projects", "resume"];

const ActiveSectionContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  const contextValues = useMemo(() => ({
    activeSection,
    setActiveSection
  }), [activeSection]);

  return (
    <ActiveSectionContext.Provider value={ contextValues }>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
