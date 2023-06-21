import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../../Context/AppContext.jsx';
import RaceContext from '../../../Context/RaceContext.jsx';
import RacesTopBar from './RacesTopBar.jsx';
import RacesMain from './RacesMain.jsx';
import RaceDispContainer from './RaceDispContainer.jsx';
import '../../../../styles/Races.css';


const Races = () => {
    const { races, setRaces, raceDisplay, setRaceDisplay } = useContext(RaceContext)
    const { apiBase } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const response = await fetch(`${apiBase}/api/races`);
          const raceInfo = await response.json();
          setRaces(raceInfo.results);
          console.log(raceInfo.results);
        })();
        return () => {};
      }, []);

    return (
        <div className='racesMain'>
            <RacesTopBar races={races} setRaceDisplay={setRaceDisplay} />
            {raceDisplay === 'home' ? <RacesMain /> : null}
            {raceDisplay === 'dragonborn' ? <RaceDispContainer raceDisplay={raceDisplay} />: null}
            {raceDisplay === 'dwarf' ? <RaceDispContainer raceDisplay={raceDisplay} />: null}
            {raceDisplay === 'elf' ? <RaceDispContainer raceDisplay={raceDisplay} />: null}
            {raceDisplay === 'gnome' ? <RaceDispContainer raceDisplay={raceDisplay} />: null}
            {raceDisplay === 'half-elf' ? <RaceDispContainer raceDisplay={raceDisplay} />: null}
            {raceDisplay === 'half-orc' ? <RaceDispContainer raceDisplay={raceDisplay} />: null}
            {raceDisplay === 'halfling' ? <RaceDispContainer raceDisplay={raceDisplay} />: null}
            {raceDisplay === 'human' ? <RaceDispContainer raceDisplay={raceDisplay} />: null}
            {raceDisplay === 'tiefling' ? <RaceDispContainer raceDisplay={raceDisplay} />: null}
        </div>
    )
}

export default Races;