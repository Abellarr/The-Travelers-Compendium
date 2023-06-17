import React, { useState, createContext } from 'react';

const RaceContext = createContext();

export const RaceProvider = ({ children }) => {
    const [ races, setRaces ] = useState([])
    const [ raceDisplay, setRaceDisplay ] = useState('home');
  
  return (
    <RaceContext.Provider
      value={{
        races,
        setRaces,
        raceDisplay,
        setRaceDisplay
      }}
    >
      {children}
    </RaceContext.Provider>
  );
};

export default RaceContext;