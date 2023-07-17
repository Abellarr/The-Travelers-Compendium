import React from 'react';
import '../../../../../styles/Classes.css';

const OathSpells = ()=> {

    return (
        <div>
            <h3>Oath Spells</h3>
            <table className='oathSpells'>
                <tr>
                    <th>Paladin Level</th>
                    <th>Spells</th>
                </tr>
                <tr className='evenRow'>
                    <td>3rd</td>
                    <td>Protection from Evil and Good, Sanctuary</td>
                </tr>
                <tr>
                    <td>5th</td>
                    <td>Lesser Restoration, Zone of Truth</td>
                </tr>
                <tr className='evenRow'>
                    <td>9th</td>
                    <td>Beacon of Hope, Dispel Magic</td>
                </tr>
                <tr>
                    <td>13th</td>
                    <td>Freedom of Movement, Guardian of Faith</td>
                </tr>
                <tr className='evenRow'>
                    <td>17th</td>
                    <td>Commune, Flame Strike</td>
                </tr>
        </table>
        </div>
    )
}

export default OathSpells;