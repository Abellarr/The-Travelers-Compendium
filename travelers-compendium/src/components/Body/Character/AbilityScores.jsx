import React, { useState } from 'react';
import AbilityScoresCard from './AbilityScoresCard.jsx';
import '../../../styles/Character.css';


const AbilityScores = () => {
    const [ abiScores, setAbiScores ] = useState(['str', 'dex', 'con', 'int', 'wis', 'cha']);


    return (
        <div className='abilityScoresMain'>
            <div className='abiScoresBox'>
                <h2 className='abiScoresIntro'>Ability Scores</h2>
                <h4 className='abiScoresDesc'>Overall description goes here</h4>
            </div>
            <div className='abilityScoresContainer'>
                <table className='oathSpells'>
                    <tr>
                        <th>Ability Score</th>
                        <th className='tableRight'>Modifier</th>
                        <th>Ability Score</th>
                        <th className='tableRight'>Modifier</th>
                    </tr>
                    <tr className='evenRow'>
                        <td>1</td>
                        <td>-5</td>
                        <td>16-17</td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td>2-3</td>
                        <td>-4</td>
                        <td>18-19</td>
                        <td>+4</td>
                    </tr>
                    <tr className='evenRow'>
                        <td>4-5</td>
                        <td>-3</td>
                        <td>20-21</td>
                        <td>+5</td>
                    </tr>
                    <tr>
                        <td>6-7</td>
                        <td>-2</td>
                        <td>22-23</td>
                        <td>+6</td>
                    </tr>
                    <tr className='evenRow'>
                        <td>8-9</td>
                        <td>-1</td>
                        <td>24-25</td>
                        <td>+7</td>
                    </tr>
                    <tr>
                        <td>10-11</td>
                        <td>+0</td>
                        <td>26-27</td>
                        <td>+8</td>
                    </tr>
                    <tr className='evenRow'>
                        <td>12-13</td>
                        <td>+1</td>
                        <td>28-29</td>
                        <td>+9</td>
                    </tr>
                    <tr>
                        <td>14-15</td>
                        <td>+2</td>
                        <td>30</td>
                        <td>+10</td>
                    </tr>
                </table>
                {abiScores.map((ability)=>{
                    return <AbilityScoresCard abiUrl={ability} />
                })}
            </div>
        </div>
    )
}

export default AbilityScores;