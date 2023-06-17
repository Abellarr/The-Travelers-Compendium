import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../../Context/AppContext.jsx';
import '../../../../styles/Character.css';

const RaceDispContainer = ({ raceDisplay }) => {
    const [ raceInfo, setRaceInfo ] = useState({});
    const [ traits, setTraits ] = useState([]);
    const [ abilities, setAbilities ] = useState([])
    const { apiBase } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const response = await fetch(`${apiBase}/api/races/${raceDisplay}`);
          const race = await response.json();
          setRaceInfo(race);
          setTraits(race.traits);
          setAbilities(race.ability_bonuses)
          console.log(race);
        })();
        return () => {};
      }, []);

    return (
        <div className='raceDispMain'>
            <h1 className='raceInfoTitle'>{raceInfo.name}</h1>
            <div className='raceInfoContainer'>
                <div className='raceAbilities'>
                    <h2>Ability Score Increase</h2>
                    {raceInfo.name && raceInfo.ability_bonuses[0] ?
                    <p className='raceAbilities'>{abilities.map((ability, ind)=>{
                        return (
                            <p key={`Trait${ind}`}>{ability.ability_score.name} - {ability.bonus}</p>
                        )
                    })}</p> 
                    : null}
                    {raceInfo.index === 'half-elf' ? <p>+1 to two ability scores of your choice (not Charisma)</p> : null}
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
                    {raceInfo.name ?
                    <p className='raceTraits'>{traits.map((trait, ind)=>{
                        return (
                            <p key={`Trait${ind}`}>{trait.name}</p>
                        )
                    })}</p> : null}
                </div>
                <div>
                    <h2>Subraces</h2>
                    {raceInfo.name && raceInfo.subraces[0] ? <p className='subraceName'>{raceInfo.subraces[0].name}</p> : <p>None</p>}
                </div>
            </div>
        </div>
    )
}

export default RaceDispContainer;