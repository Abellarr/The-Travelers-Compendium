import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Equipment.css';

const Weapons = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='weaponsMain'>
            <UnderConstruction />
            <p>This is the Weapons page</p>
        </div>
    )
}

export default Weapons;