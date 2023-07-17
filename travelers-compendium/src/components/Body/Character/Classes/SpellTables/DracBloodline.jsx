import React from 'react';
import '../../../../../styles/Classes.css';

const DracBloodline = ()=> {

    return (
        <div>
            <table className='oathSpells' id='dragonTable'>
                <tr>
                    <th>Dragon</th>
                    <th>Damage Type</th>
                </tr>
                <tr className='evenRow'>
                    <td>Black</td>
                    <td>Acid</td>
                </tr>
                <tr>
                    <td>Blue</td>
                    <td>Lightning</td>
                </tr>
                <tr className='evenRow'>
                    <td>Brass</td>
                    <td>Fire</td>
                </tr>
                <tr>
                    <td>Bronze</td>
                    <td>Lightning</td>
                </tr>
                <tr className='evenRow'>
                    <td>Copper</td>
                    <td>Acid</td>
                </tr>
                <tr>
                    <td>Gold</td>
                    <td>Fire</td>
                </tr>
                <tr className='evenRow'>
                    <td>Green</td>
                    <td>Poison</td>
                </tr>
                <tr>
                    <td>Red</td>
                    <td>Fire</td>
                </tr>
                <tr className='evenRow'>
                    <td>Silver</td>
                    <td>Cold</td>
                </tr>
                <tr>
                    <td>White</td>
                    <td>Cold</td>
                </tr>
            </table>
        </div>
    )
}

export default DracBloodline;