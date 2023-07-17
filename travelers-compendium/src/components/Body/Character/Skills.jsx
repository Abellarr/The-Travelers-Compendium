import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../../Context/AppContext.jsx';
import SkillsCard from './SkillsCard.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Character.css';

const Skills = () => {
    const [ skills, setSkills ] = useState([])
    const { apiBase } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}/api/skills`);
          setSkills(data.results);
          console.log(data.results);
        })();
        return () => {};
    }, []);

    return (
        <div className='abilityScoresMain'>
            <div className='abiScoresBox'>
                <h2 className='abiScoresIntro'>Skills</h2>
                <h4 className='skillScoresDesc'>Overall description goes here</h4>
            </div>
            <div className='abilityScoresContainer'>
                {skills[0] ? skills.map((skill)=>{
                    return <SkillsCard skillUrl={skill.index} />
                }) : null}
            </div>
        </div>
    )
}

export default Skills;