import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../../Context/AppContext.jsx';
import '../../../../styles/Races.css';



const ClassDispContainer = ({ classDisplay }) => {
    const [ classInfo, setClassInfo ] = useState({})
    const [ profs, setProfs ] = useState([]);
    const { apiBase } = useContext(AppContext);

    const avgHp = (classInfo.hit_die / 2) + 1;
    const armorProfs = (arr) => {
        let armors = [];
        arr.forEach((prof) => {
            if ((prof.index).includes('armor') || (prof.index).includes('shields')) {
                armors.push(prof.name);
            }
        })
        return armors.length === 0 ? 'None' : armors.join(', ');
    }

    const weapProfs = (arr) => {
        let weaps = [];
        arr.forEach((prof) => {
            if ((prof.index).includes('weapon') ||
            (prof.index).includes('longswords') ||
            (prof.index).includes('rapiers') ||
            (prof.index).includes('shortswords') ||
            (prof.index).includes('hand')) {
                weaps.push(prof.name);
            }
        })
        return weaps.length === 0 ? 'Daggers, Darts, Slings, Quarterstaves, Light Crossbows' : weaps.join(', ');
    }

    const druidWeaps = 'Clubs, Daggers, Javelins, Maces, Quarterstaves, Sickles, Spears, Darts, Slings, Scimitars'

    // const handleClick = () => {
    //     const modal = document.getElementById('subRaceModal');
    //     modal.showModal();
    // }

    useEffect(() => {
        (async () => {
          const response = await fetch(`${apiBase}/api/classes/${classDisplay}`);
          const clas = await response.json();
          setClassInfo(clas);
          setProfs(clas.proficiencies);
        //   setAbilities(race.ability_bonuses)
          console.log(clas);
        })();
        return () => {};
      }, []);

    return (
        <div className='classDispMain'>
            <div className='classDispTitle'>
                <h1>{classInfo.name}</h1>
            </div>
            <div className='classHp'>
                <h2>Hit Points</h2>
                <p><b>Hit Dice:</b> 1d{classInfo.hit_die} per {classInfo.index} level</p>
                <p><b>Hit Points at 1st Level:</b> {classInfo.hit_die} + your Constitution modifier</p>
                <p><b>Hit Points at Higher Levels:</b> 1d{classInfo.hit_die} (or {avgHp}) + your Constitution modifier 
                per {classInfo.index} level after 1st</p>
            </div>
            <div className='classProf'>
                <h2>Proficiencies</h2>
                <p><b>Armor:</b> {classInfo.index ? armorProfs(profs) : 'Loading...'}</p>
                <p><b>Weapons:</b> {classInfo.index && classInfo.index === 'druid' ?
                druidWeaps
                : weapProfs(profs)}</p>
                <p><b>Tools:</b></p>
                <p><b>Saving Throws:</b></p>
                <p><b>Skills:</b> {classInfo.index ? classInfo.proficiency_choices[0].desc : 'Loading...'}</p>
            </div>
        </div>
    )
}

export default ClassDispContainer;