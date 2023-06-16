import React, { useState, createContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [bodyDisplay, setBodyDisplay] = useState('home');
  const [apiBase, setApiBase] = useState('https://www.dnd5eapi.co')

  return (
    <AppContext.Provider
      value={{
        bodyDisplay,
        setBodyDisplay,
        apiBase
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;