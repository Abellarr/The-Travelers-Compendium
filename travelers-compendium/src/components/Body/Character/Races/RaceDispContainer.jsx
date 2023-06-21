import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../../Context/AppContext.jsx';
import TraitCard from './TraitCard.jsx';
import Subrace from './Subrace.jsx';
import '../../../../styles/Races.css';


const RaceDispContainer = ({ raceDisplay }) => {
    const [ raceInfo, setRaceInfo ] = useState({});
    const [ traits, setTraits ] = useState([]);
    const [ abilities, setAbilities ] = useState([]);
    const [ subRaceOpen, setSubRaceOpen ] = useState(false)
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
                    <div className={raceInfo.index === 'human' ? 'abilityBonuses' : 'abilityBonusesHE'}>
                        {raceInfo.name && raceInfo.ability_bonuses[0] ?
                        abilities.map((ability, ind)=>{
                            return (
                                <p key={`Trait${ind}`}>{ability.ability_score.name}: +{ability.bonus}</p>
                            )
                        })
                        : null}
                        {raceInfo.index === 'half-elf' ? <p>+1 to two ability scores of your choice <br></br>(not Charisma)</p> : null}
                    </div>
                </div>
                <div className='raceSubraces'>
                    <h2>Subraces</h2>
                    {raceInfo.name && raceInfo.subraces[0] ? <p className='subraceName'>{raceInfo.subraces[0].name}</p> : <p>None</p>}
                    <Subrace sub={raceInfo.subraces[0]} subRaceOpen={subRaceOpen} setSubRaceOpen={setSubRaceOpen} />
                </div>
                <div className='raceSpeed'>
                    <h2>Speed</h2>
                    <p>Your base walking speed is {raceInfo.speed} feet</p>
                </div>
                <div className='raceAlignment'>
                    <h2>Alignment</h2>
                    <p>{raceInfo.alignment}</p>
                </div>
                <div className='raceLanguages'>
                    <h2>Languages</h2>
                    <p>{raceInfo.language_desc}</p>
                </div>
                <div className='raceAge'>
                    <h2>Age</h2>
                    <p>{raceInfo.age}</p>
                </div>
                <div className='raceSize'>
                    <h2>Size</h2>
                    <p><b>{raceInfo.size}</b>. {raceInfo.size_description}</p>
                </div>
                <div className='raceTraits'>
                    <h2>Traits</h2>
                    {!traits[0] ? <p>None</p> : null}
                    {raceInfo.name ? traits.map((trait, ind)=>{
                        return (
                            <div className='traitCardContainer'>
                                <h3 key={`Trait${ind}`}>{trait.name}</h3>
                                {raceInfo.name ? <TraitCard trait={trait} /> : null}
                            </div>
                        )
                    }) : null}
                </div>
            </div>
        </div>
    )
}

export default RaceDispContainer;