import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext';
import '../../../../styles/Classes.css';

const WarlockTable = ({ className }) => {
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

    const spellSlots = (obj) => {
        let slots = 0;
        for (let key in obj) {
            if (key.includes('slot') && obj[key] > 0) {
                slots = obj[key];
            }
        }
        return slots;
    }

    const slotLevel = (obj) => {
        let level = '';
        for (let key in obj) {
            if (key.includes('slot') && obj[key] > 0) {
                if (key.includes('1')) {
                    level = '1st'
                } else if (key.includes('2')) {
                    level = '2nd'
                } else if (key.includes('3')) {
                    level = '3rd'
                } else {
                    level = `${key[key.length-1]}th`
                }
            }
        }
        return level;
    }

    return (
        <table className='classTableSpell'>
            <tr>
                <th id='levelTable2'>Level</th>
                <th id='profTable2'>Proficiency Bonus</th>
                <th id='featTable2'>Features</th>
                <th id='classCantrips'>Cantrips Known</th>
                <th id='spellsKnown'>Spells Known</th>
                <th id='spellSlots'>Spell Slots</th>
                <th id='slotLevel'>Slot Level</th>
                <th id='invocationsKnown'>Invocations Known</th>
            </tr>
            {classFeatures.map((feature, ind)=>{
                return (
                    <tr key={`classLevel${ind}`}>
                        <td>{feature.level}</td>
                        <td>+{feature.prof_bonus}</td>
                        <td className='featureSpell'>{tableFeatures(feature.features)}</td>
                        <td>{feature.spellcasting.cantrips_known}</td>
                        <td>{feature.spellcasting.spells_known}</td>
                        <td>{spellSlots(feature.spellcasting)}</td>
                        <td>{slotLevel(feature.spellcasting)}</td>
                        <td>{feature.class_specific.invocations_known === 0 ? '-' : 
                        feature.class_specific.invocations_known}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default WarlockTable;