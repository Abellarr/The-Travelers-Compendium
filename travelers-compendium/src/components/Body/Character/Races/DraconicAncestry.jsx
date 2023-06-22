import React from 'react';
import '../../../../styles/Races.css';

const DraconicAncestry = () => {

    return (
        <table className='dragonTable'>
            <tr className='dragonTableHeader'>
                <th>Dragon</th>
                <th>Damage Type</th>
                <th>Breath Weapon</th>
            </tr>
            <tr>
                <td>Black</td>
                <td>Acid</td>
                <td>5 by 30 ft. line</td>
            </tr>
            <tr>
                <td>Blue</td>
                <td>Lightning</td>
                <td>5 by 30 ft. line</td>
            </tr>
            <tr>
                <td>Brass</td>
                <td>Fire</td>
                <td>5 by 30 ft. line</td>
            </tr>
            <tr>
                <td>Bronze</td>
                <td>Lightning</td>
                <td>5 by 30 ft. line</td>
            </tr>
            <tr>
                <td>Copper</td>
                <td>Acid</td>
                <td>5 by 30 ft. line</td>
            </tr>
            <tr>
                <td>Gold</td>
                <td>Fire</td>
                <td>15 ft. cone</td>
            </tr>
            <tr>
                <td>Green</td>
                <td>Poison</td>
                <td>15 ft. cone</td>
            </tr>
            <tr>
                <td>Red</td>
                <td>Fire</td>
                <td>15 ft. cone</td>
            </tr>
            <tr>
                <td>Silver</td>
                <td>Cold</td>
                <td>15 ft. cone</td>
            </tr>
            <tr>
                <td>White</td>
                <td>Cold</td>
                <td>15 ft. cone</td>
            </tr>
        </table>
    )
}

export default DraconicAncestry;