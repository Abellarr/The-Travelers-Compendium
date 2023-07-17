import React from 'react';
import '../../../../../styles/Classes.css';

const PactSpells = ()=> {

    return (
        <div>
            <h3>Pact Expanded Spell List</h3>
            <table className='oathSpells'>
                <tr>
                    <th>Spell Level</th>
                    <th>Spells</th>
                </tr>
                <tr className='evenRow'>
                    <td>1st</td>
                    <td>Burning Hands, Command</td>
                </tr>
                <tr>
                    <td>2nd</td>
                    <td>Blindness/Deafness, Scorching Ray</td>
                </tr>
                <tr className='evenRow'>
                    <td>3rd</td>
                    <td>Fireball, Stinking Cloud</td>
                </tr>
                <tr>
                    <td>4th</td>
                    <td>Fire Shield, Wall of Fire</td>
                </tr>
                <tr className='evenRow'>
                    <td>5th</td>
                    <td>Flame Strike, Hallow</td>
                </tr>
        </table>
        </div>
    )
}

export default PactSpells;