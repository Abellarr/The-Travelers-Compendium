import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Character.css';

const AbilityScores = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='abilityScoresMain'>
            <UnderConstruction />
            <p>This is the Ability Scores page</p>
        </div>
    )
}

export default AbilityScores;