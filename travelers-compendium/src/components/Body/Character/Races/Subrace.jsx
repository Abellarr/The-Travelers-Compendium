import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../../Context/AppContext.jsx';
import '../../../../styles/Races.css';

const Subrace = ({ sub, subRaceOpen, setSubRaceOpen }) => {
    const [ subRaceInfo, setSubRaceInfo ] = useState({});
    const [ subProf, setSubProf ] = useState([]);
    const { apiBase } = useContext(AppContext);

    const handleClose = () => {
        const modal = document.getElementById('subRaceModal');
        modal.close();
    }

    useEffect(() => {
        (async () => {
          const response = await fetch(`${apiBase}${sub.url}`);
          const subrace = await response.json();
          setSubRaceInfo(subrace);
          setSubProf(subrace.starting_proficiencies);
          console.log(subrace);
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
            <h3>Ability Score Bonus</h3>
            {/* {subRaceInfo.ability_bonuses ? <p>{subRaceInfo.ability_bonuses[0].abilty_score.name}: +{subRaceInfo.ability_bonuses[0].bonus}</p> : null} */}
            <h3>Additional Proficiencies</h3>
            {subProf[0] ? subProf.map((prof, ind) => {
                return (
                    <p key={`subProf${ind}`}>{prof.name}</p>
                )
            })
            :
            <p>None</p>}
            <h3>Additional Languages</h3>

        </dialog>
    )
}

export default Subrace;