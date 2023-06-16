import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Equipment.css';

const AdventureGear = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='adventureGearMain'>
            <UnderConstruction />
            <p>This is the Adventure Gear page</p>
        </div>
    )
}

export default AdventureGear;