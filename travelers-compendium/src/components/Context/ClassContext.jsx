import React, { useState, createContext } from 'react';

const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
    const [ classes, setClasses ] = useState([])
    const [ classDisplay, setClassDisplay ] = useState('home');
  
  return (
    <ClassContext.Provider
      value={{
        classes,
        setClasses,
        classDisplay,
        setClassDisplay
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};

export default ClassContext;