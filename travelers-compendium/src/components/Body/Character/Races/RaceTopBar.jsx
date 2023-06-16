import React, { useContext,useState, useEffect } from 'react';
import AppContext from '../../../Context/AppContext.jsx';
import '../../../../styles/Character.css';

const RacesTopBar = () => {
    const [ races, setRaces ] = useState([]);
    const { apiBase } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const response = await fetch(`${apiBase}/api/races`);
          const races = await response.json();
          setRaces(races.results);
          console.log(races.results);
        })();
        return () => {};
      }, []);

    return (
        <div className='raceMainNames'>
            <h2 className='raceTopHeader'>Playable Races:</h2>
            <div className='raceCardDiv'>
                {races.map((race, ind)=>{
                    return (
                        <div className='raceMainCard' key={race.index + ind}>
                            <h3 className='raceNames'>{race.name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RacesTopBar;