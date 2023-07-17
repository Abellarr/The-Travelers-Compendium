import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../../Context/AppContext.jsx';
import '../../../styles/Character.css';

const SkillsCard = ({ skillUrl }) => {
    const [ skillInfo, setSkillInfo ] = useState({});
    const { apiBase } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}/api/skills/${skillUrl}`);
          setSkillInfo(data);
          console.log(data);
        })();
        return () => {};
      }, []);

      

    return (
        <div className='abilityScoresCard'>
            <h3>{skillInfo.index ? skillInfo.name : 'Loading...'}</h3>
            <h4>{skillInfo.index ? `Primary Ability: ${skillInfo.ability_score.name}` : null }</h4>
            {skillInfo.index ? skillInfo.desc.map((item, ind)=>{
                return <p>{item}</p>
            }) : <p>Loading...</p>}
        </div>
    )
}

export default SkillsCard;