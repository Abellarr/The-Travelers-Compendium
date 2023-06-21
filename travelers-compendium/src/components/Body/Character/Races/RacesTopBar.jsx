import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../../Context/AppContext.jsx';
import '../../../../styles/Races.css';

const RacesTopBar = ({ races, setRaceDisplay }) => {
    const { apiBase } = useContext(AppContext);

    const handleClick = (str) => {
        setRaceDisplay(str);
    }

    return (
        <div className='raceMainNames'>
            <div className='raceCardDiv'>
                {races.map((race, ind)=>{
                    return (
                        <div className='raceMainCard' key={race.index + ind} onClick={() => handleClick(race.index)}>
                            <h3 className='raceNames'>{race.name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RacesTopBar;