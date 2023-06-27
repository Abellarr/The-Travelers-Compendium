import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext.jsx';
import TraitCard from './TraitCard.jsx';
import '../../../../styles/Races.css';

const Subrace = ({ sub, subRaceOpen, setSubRaceOpen }) => {
    const [ subRaceInfo, setSubRaceInfo ] = useState({});
    const [ subTrait, setSubTrait ] = useState([]);
    const { apiBase } = useContext(AppContext);

    const handleClose = () => {
        const modal = document.getElementById('subRaceModal');
        modal.close();
    }

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${apiBase}${sub.url}`);
          setSubRaceInfo(data);
          setSubTrait(data.racial_traits);
          console.log(data);
        })();
        return () => {};
      }, []);

    return (
        <dialog className='subRaceInfo' id='subRaceModal'>
            <div className='subRaceHeader'>
                <h2>{subRaceInfo.name}</h2>
                <button className='subRaceButton' onClick={handleClose}>X</button>
            </div>
            <p>{subRaceInfo.desc}</p>
            <div className='traitCardContainer'>
                <h3>Ability Score Bonus</h3>
                {subRaceInfo.index && subRaceInfo.ability_bonuses[0] ?
                <p className='traitCardText'>{subRaceInfo.ability_bonuses[0].ability_score.name}: +{subRaceInfo.ability_bonuses[0].bonus}</p>
                : <p>Loading...</p>}
            </div>
            {subTrait[0] ?
            subTrait.map((trait, ind)=>{
                return (
                    <div className='traitCardContainer'>
                        <h3 key={`Trait${ind}`}>{trait.name}</h3>
                        {trait.name ? <TraitCard trait={trait} /> : null}
                    </div>
                )
            })
            : <p>Loading...</p>}
        </dialog>
    )
}

export default Subrace;