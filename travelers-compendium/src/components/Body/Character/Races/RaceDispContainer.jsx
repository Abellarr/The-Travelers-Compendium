import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../../Context/AppContext.jsx';
import '../../../../styles/Character.css';
import RacesTopBar from './RacesTopBar.jsx';
import RacesMain from './RacesMain.jsx';

const RaceDispContainer = ({ raceDisplay }) => {
    const [ raceInfo, setRaceInfo ] = useState({})
    const { apiBase } = useContext(AppContext);

    const traits = () => {
        if (raceInfo.name) {
            return raceInfo.traits;
        }
    }

    useEffect(() => {
        (async () => {
          const response = await fetch(`${apiBase}/api/races/${raceDisplay}`);
          const race = await response.json();
          setRaceInfo(race);
          console.log(race);
        })();
        return () => {};
      }, []);

    return (
        <div className='racesDispContainer'>
            <h1>{raceInfo.name}</h1>
            <div>
                <h2>Ability Score Increase</h2>
                {raceInfo.name ? <p>{raceInfo.ability_bonuses[0].ability_score.name} - {raceInfo.ability_bonuses[0].bonus}</p> : null}
                {raceInfo.name && raceInfo.ability_bonuses[1] ? <p>{raceInfo.ability_bonuses[1].ability_score.name} - {raceInfo.ability_bonuses[1].bonus}</p> : null}
            </div>
            <div>
                <h2>Age</h2>
                <p>{raceInfo.age}</p>
            </div>
            <div>
                <h2>Alignment</h2>
                <p>{raceInfo.alignment}</p>
            </div>
            <div>
                <h2>Size</h2>
                <h3>{raceInfo.size}</h3>
                <p>{raceInfo.size_description}</p>
            </div>
            <div>
                <h2>Speed</h2>
                <p>Your base walking speed is {raceInfo.speed} feet</p>
            </div>
            <div>
                <h2>Languages</h2>
                <p>{raceInfo.language_desc}</p>
            </div>
            <div>
                <h2>Traits</h2>
                {traits.map((trait, ind)=>{
                    return (
                        <p key={`Trait${ind}`}>{trait.name}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default RaceDispContainer;