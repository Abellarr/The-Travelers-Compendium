import React, { useState, createContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [bodyDisplay, setBodyDisplay] = useState('home');

  return (
    <AppContext.Provider
      value={{
        bodyDisplay,
        setBodyDisplay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;