import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext';
import '../../../../styles/Classes.css';

const ClassTable = ({ className }) => {
    const [ classFeatures, setClassFeatures ] = useState([]);
    const { apiBase } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}/api/classes/${className}/levels`);
          setClassFeatures(data);
          console.log(data);
        })();
        return () => {};
      }, []);

    const tableFeatures = (arr) => {
        let features = [];
        arr.forEach((item)=>{
            features.push(item.name)
        })
        return features.length === 0 ? '--' : features.join(', ');
    }

    return (
        <table className='classTableMain'>
            {classFeatures[0] && classFeatures[0].spellcasting ? 
            <tr>
                <th id='levelTable1'>Level</th>
                <th id='profTable1'>Proficiency Bonus</th>
                <th id='featTable1'>Features</th>
                {classFeatures[0].spellcasting.cantrips_known ? <th id='classCantrips'>Cantrips Known</th> : null}
                <th id='class1Spell'>1st</th>
                <th id='class2Spell'>2nd</th>
                <th id='class3Spell'>3rd</th>
                <th id='class4Spell'>4th</th>
                <th id='class5Spell'>5th</th>
                {classFeatures[0].spellcasting.spell_slots_level_6 === 0 ? <th id='class6Spell'>6th</th> : null}
                {classFeatures[0].spellcasting.spell_slots_level_7 === 0 ? <th id='class7Spell'>7th</th> : null}
                {classFeatures[0].spellcasting.spell_slots_level_8 === 0 ? <th id='class8Spell'>8th</th> : null}
                {classFeatures[0].spellcasting.spell_slots_level_9 === 0 ? <th id='class9Spell'>9th</th> : null}
            </tr>
            :
            <tr>
                <th id='levelTable2'>Level</th>
                <th id='profTable2'>Proficiency Bonus</th>
                <th id='featTable2'>Features</th>
                {classFeatures[0] && classFeatures[0].features[0].index.includes('rage') ? <th>Rages</th> : null}
                {classFeatures[0] && classFeatures[0].features[0].index.includes('rage') ? <th>Rage Damage</th> : null}
            </tr>}
            {classFeatures.map((feature, ind)=>{
                return (
                    <tr key={`classLevel${ind}`}>
                        <td>{feature.level}</td>
                        <td>+{feature.prof_bonus}</td>
                        <td>{tableFeatures(feature.features)}</td>
                        {feature.features[0] && feature.features[0].index.includes('rage') ?
                        <td>{feature.class_specific.rage_count}</td>
                        : null}
                        {feature.features[0] && feature.features[0].index.includes('rage') ?
                        <td>+{feature.class_specific.rage_damage_bonus}</td>
                        : null}
                        {feature.spellcasting && feature.spellcasting.cantrips_known ? <td>{feature.spellcasting.cantrips_known}</td> : null}
                        {feature.spellcasting ? <td>{feature.spellcasting.spell_slots_level_1 === 0 ?
                        '-' : feature.spellcasting.spell_slots_level_1}</td> : null}
                        {feature.spellcasting ? <td>{feature.spellcasting.spell_slots_level_2 === 0 ?
                        '-' : feature.spellcasting.spell_slots_level_2}</td> : null}
                        {feature.spellcasting ? <td>{feature.spellcasting.spell_slots_level_3 === 0 ?
                        '-' : feature.spellcasting.spell_slots_level_3}</td> : null}
                        {feature.spellcasting ? <td>{feature.spellcasting.spell_slots_level_4 === 0 ?
                        '-' : feature.spellcasting.spell_slots_level_4}</td> : null}
                        {feature.spellcasting ? <td>{feature.spellcasting.spell_slots_level_5 === 0 ?
                        '-' : feature.spellcasting.spell_slots_level_5}</td> : null}
                        {feature.spellcasting ? <td>{feature.spellcasting.spell_slots_level_6 === 0 ?
                        '-' : feature.spellcasting.spell_slots_level_6}</td> : null}
                        {feature.spellcasting ? <td>{feature.spellcasting.spell_slots_level_7 === 0 ?
                        '-' : feature.spellcasting.spell_slots_level_7}</td> : null}
                        {feature.spellcasting ? <td>{feature.spellcasting.spell_slots_level_8 === 0 ?
                        '-' : feature.spellcasting.spell_slots_level_8}</td> : null}
                        {feature.spellcasting ? <td>{feature.spellcasting.spell_slots_level_9 === 0 ?
                        '-' : feature.spellcasting.spell_slots_level_9}</td> : null}
                    </tr>
                )
            })}
        </table>
    )
}

export default ClassTable;