import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Character.css';

const AbilityScoresCard = ({ abiUrl }) => {
    const [ ability, setAbility ] = useState({});
    const { apiBase } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}/api/ability-scores/${abiUrl}`);
          setAbility(data);
          console.log(data);
        })();
        return () => {};
      }, []);

      

    return (
        <div className='abilityScoresCard'>
            <h3>{ability.index ? `${ability.full_name} (${ability.name})` : 'Loading...'}</h3>
            {ability.index ? ability.desc.map((item, ind)=>{
                return ind === 0 ? <h4><i>{item}</i></h4> : <p>{item}</p>;
            }) : <p>Loading...</p>}
        </div>
    )
}

export default AbilityScoresCard;