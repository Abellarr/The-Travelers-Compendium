import React, { useState, createContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cohort, setCohort] = useState(null);
  const [bodyDisplay, setBodyDisplay] = useState('home');

  return (
    <AppContext.Provider
      value={{
        cohort,
        setCohort,
        bodyDisplay,
        setBodyDisplay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;