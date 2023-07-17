import React from 'react';
import '../../../../../styles/Classes.css';

const DomainSpells = ()=> {

    return (
        <div>
            <h3>Domain Spells</h3>
            <table className='oathSpells'>
                <tr>
                    <th>Cleric Level</th>
                    <th>Spells</th>
                </tr>
                <tr className='evenRow'>
                    <td>1st</td>
                    <td>Bless, Cure Wounds</td>
                </tr>
                <tr>
                    <td>3rd</td>
                    <td>Lesser Restoration, Spiritual Weapon</td>
                </tr>
                <tr className='evenRow'>
                    <td>5th</td>
                    <td>Beacon of Hope, Revivify</td>
                </tr>
                <tr>
                    <td>7th</td>
                    <td>Death Ward, Guardian of Faith</td>
                </tr>
                <tr className='evenRow'>
                    <td>9th</td>
                    <td>Mass Cure Wounds, Raise Dead</td>
                </tr>
        </table>
        </div>
    )
}

export default DomainSpells;