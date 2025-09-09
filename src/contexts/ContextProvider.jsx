import React, { useState, createContext, useContext, useMemo } from 'react';

const Context = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useApplicationContext = () => useContext(Context);

// eslint-disable-next-line react-refresh/only-export-components
export const sections = ["home", "experience", "projects", "resume"];

const ContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [activeSection, setActiveSection] = useState(sections[0]);

  const contextValues = useMemo(() => ({
    username,
    setUsername,
    activeSection,
    setActiveSection
  }), [username, activeSection]);

  return (
    <Context.Provider value={ contextValues }>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
