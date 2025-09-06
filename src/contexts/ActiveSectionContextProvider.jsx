import React, {useState, createContext, useContext, useMemo} from 'react';

const ActiveSectionContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useActiveSectionContext = () => useContext(ActiveSectionContext);

// eslint-disable-next-line react-refresh/only-export-components
export const sections = ["home", "experience", "projects", "resume"];

const ActiveSectionContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(sections[3]);

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
