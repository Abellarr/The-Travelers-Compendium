import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext.jsx';
import TraitCard from './TraitCard.jsx';
import Subrace from './Subrace.jsx';
import DraconicAncestry from './DraconicAncestry.jsx';
import '../../../../styles/Races.css';



const RaceDispContainer = ({ raceDisplay }) => {
    const [ raceInfo, setRaceInfo ] = useState({});
    const [ traits, setTraits ] = useState([]);
    const [ abilities, setAbilities ] = useState([]);
    const [ subRaceOpen, setSubRaceOpen ] = useState(false)
    const { apiBase } = useContext(AppContext);

    const handleClick = () => {
        const modal = document.getElementById('subRaceModal');
        modal.showModal();
    }

    useEffect(()=> {
        (async ()=> {
            try {
                const { data } = await axios.get(`${apiBase}/api/races/${raceDisplay}`);
                setRaceInfo(data);
                setTraits(data.traits);
                setAbilities(data.ability_bonuses)
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        })();
        return ()=> {};
     }, []);

    return (
        <div className='raceDispMain'>
            <div className='raceInfoTitle'>
                <h1>{raceInfo.name}</h1>
            </div>
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
                    {raceInfo.name && raceInfo.subraces[0] ? <p className='subraceName' onClick={handleClick}>{raceInfo.subraces[0].name}</p> : <p>None</p>}
                    {raceInfo.name && raceInfo.subraces[0] ? <Subrace sub={raceInfo.subraces[0]} subRaceOpen={subRaceOpen} setSubRaceOpen={setSubRaceOpen} /> : null}
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
                    {raceInfo.name && !traits[0] ? <p>None</p> : null}
                    {raceInfo.name ? traits.map((trait, ind)=>{
                        return (
                            <div className='traitCardContainer'>
                                <h3 key={`Trait${ind}`}>{trait.name}</h3>
                                {raceInfo.name ? <TraitCard trait={trait} /> : null}
                            </div>
                        )
                    }) : null}
                    {raceInfo.index === 'dragonborn' ? <DraconicAncestry /> : null}
                </div>
            </div>
        </div>
    )
}

export default RaceDispContainer;