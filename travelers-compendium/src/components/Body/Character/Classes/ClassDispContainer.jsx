import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext.jsx';
import ClassTable from './ClassTable.jsx';
import WarlockTable from './WarlockTable.jsx';
import SubClass from './SubClass.jsx';
import ClassFeatureContainer from './ClassFeatureContainer.jsx';
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

    const druidWeaps = 'Clubs, Daggers, Javelins, Maces, Quarterstaves, Sickles, Spears, Darts, Slings, Scimitars';

    const startEquip = (arr) => {
        let combined = [];
        arr.forEach((equip, ind) => {
            combined.push(`${equip.quantity > 1 ? equip.quantity : ''} ${equip.equipment.name}${equip.quantity > 1 ? 's' : ''}`)
        });
        return combined.join(', ');
    }

    const subClassDisp = () => {
        switch (classInfo.index) {
            case 'barbarian':
                return `Path of the ${classInfo.subclasses[0].name}`;
            case 'bard':
                return `College of ${classInfo.subclasses[0].name}`;
            case 'cleric':
                return `${classInfo.subclasses[0].name} Domain`;
            case 'druid':
                return `Circle of the ${classInfo.subclasses[0].name}`;
            case 'fighter':
                return `${classInfo.subclasses[0].name}`;
            case 'monk':
                return `Way of the ${classInfo.subclasses[0].name}`;
            case 'paladin':
                return `Oath of ${classInfo.subclasses[0].name}`;
            case 'ranger':
                return `${classInfo.subclasses[0].name}`;
            case 'rogue':
                return `${classInfo.subclasses[0].name}`;
            case 'sorcerer':
                return `${classInfo.subclasses[0].name} Bloodline`;
            case 'warlock':
                return `Pact of the ${classInfo.subclasses[0].name}`;
            case 'wizard':
                return `School of ${classInfo.subclasses[0].name}`;
        }
    }

    const handleClick = () => {
        const modal = document.getElementById('subClassModal');
        modal.showModal();
    }

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
                <div className='classMultiClass'>
                    <h2>Multiclassing</h2>
                    <p>After first level, in order to gain levels as a {classInfo.name} you need to meet the following requirements:</p>
                    <div className='classMCText'>
                        {classInfo.index && classInfo.multi_classing.prerequisites ? 
                        classInfo.multi_classing.prerequisites.map((prereq, ind) => {
                            return (<p>{prereq.ability_score.name} - Minimum {prereq.minimum_score}</p>)
                        })
                        : null}
                        {classInfo.index === 'fighter' ? 
                        <p>STR - Minimum 13<br></br>or<br></br>DEX - Minimum 13</p> 
                        : null}
                    </div>
                </div>
                <div className='classSubClass'>
                    <h2>Subclasses</h2>
                    <div className='subClassButton'>
                        <p onClick={handleClick}><b>{subClassDisp()}</b></p>
                        {classInfo.index ? <SubClass subClass={classInfo.subclasses[0].index} subName={subClassDisp()} /> : null}
                        {classInfo.index && classInfo.index === 'warlock' ? <p><b>Eldritch Invocations</b></p> : null}
                    </div>
                </div>
                <div className='classProf'>
                    <h2>Proficiencies</h2>
                    <p><b>Armor:</b> {classInfo.index ? armorProfs(profs) : 'Loading...'}</p>
                    <p><b>Weapons:</b> {classInfo.index && classInfo.index === 'druid' ? druidWeaps : weapProfs(profs)}</p>
                    <p><b>Tools:</b> {classInfo.index ? toolProfs(profs) : 'Loading...'}</p>
                    <p><b>Saving Throws:</b> {classInfo.index ? `${savingThrows[0].name}, ${savingThrows[1].name}` : 'Loading...'}</p>
                    <p><b>Skills:</b> {classInfo.index ? classInfo.proficiency_choices[0].desc : 'Loading...'}</p>
                </div>
                <div className='classStartEquip'>
                    <h2>Starting Equipment</h2>
                    <p>You start with the following equipment, in addition to the equipment granted by your background:</p>
                    {classInfo.index && classInfo.starting_equipment[0] ? <p>- {startEquip(classInfo.starting_equipment)}</p> : null}
                    {classInfo.index && classInfo.starting_equipment_options.map((item) => {
                        return (<p>- {item.desc}</p>)
                    })}
                </div>
                <div className='classTableDisp'>
                    <h3>Features by Level:</h3>
                    {classInfo.index && classInfo.index === 'warlock' ? <WarlockTable className={classInfo.index} /> : null}
                    {classInfo.index && classInfo.index !== 'warlock' ? <ClassTable className={classInfo.index} /> : null}
                </div>
                <div className='classFeatureContainer'>
                    <h2>Class Features</h2>
                    {classInfo.index ? <ClassFeatureContainer spellCasting={classInfo.spellcasting} clas={classInfo.index} /> : null}
                </div>
            </div>
        </div>
    )
}

export default ClassDispContainer;