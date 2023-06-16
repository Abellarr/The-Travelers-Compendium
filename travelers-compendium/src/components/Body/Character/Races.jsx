import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Character.css';

const Races = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='racesMain'>
            <UnderConstruction />
            <p>This is the Races page</p>
        </div>
    )
}

export default Races;