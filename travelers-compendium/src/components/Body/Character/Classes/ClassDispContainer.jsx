import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext.jsx';
import ClassTable from './ClassTable.jsx';
import '../../../../styles/Classes.css';



const ClassDispContainer = ({ classDisplay }) => {
    const [ classInfo, setClassInfo ] = useState({})
    const [ profs, setProfs ] = useState([]);
    const [ savingThrows, setSavingThrows] = useState([])
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

    const toolProfs = (arr) => {
        let tools = [];
        arr.forEach((prof) => {
            if ((prof.index).includes('kit') || (prof.index).includes('tool')) {
                tools.push(prof.name)
            }
        })
        return tools.length === 0 ? 'None' : tools.join(', ');
    }

    const druidWeaps = 'Clubs, Daggers, Javelins, Maces, Quarterstaves, Sickles, Spears, Darts, Slings, Scimitars'

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}/api/classes/${classDisplay}`);
          setClassInfo(data);
          setProfs(data.proficiencies);
          setSavingThrows(data.saving_throws)
        //   setAbilities(race.ability_bonuses)
          console.log(data);
        })();
        return () => {};
      }, []);

    return (
        <div className='classDispMain'>
            <div className='classDispTitle'>
                <h1>{classInfo.name}</h1>
            </div>
            <div className='classInfoContainer'>
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
                    <p><b>Weapons:</b> {classInfo.index && classInfo.index === 'druid' ? druidWeaps : weapProfs(profs)}</p>
                    <p><b>Tools:</b> {classInfo.index ? toolProfs(profs) : 'Loading...'}</p>
                    <p><b>Saving Throws:</b> {classInfo.index ? `${savingThrows[0].name}, ${savingThrows[1].name}` : 'Loading...'}</p>
                    <p><b>Skills:</b> {classInfo.index ? classInfo.proficiency_choices[0].desc : 'Loading...'}</p>
                </div>
                <div className='classTableDisp'>
                    <h3>Class Features by Level:</h3>
                    {classInfo.index ? <ClassTable className={classInfo.index} /> : <p>Loading...</p>}
                </div>
            </div>
        </div>
    )
}

export default ClassDispContainer;