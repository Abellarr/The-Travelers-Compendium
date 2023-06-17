import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Gameplay.css';

const Combat = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='combatMain'>
            <UnderConstruction />
            <p>This is the Gameplay Rules page</p>
        </div>
    )
}

export default Combat;