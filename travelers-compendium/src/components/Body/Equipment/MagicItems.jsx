import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Equipment.css';

const MagicItems = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='magicItemsMain'>
            <UnderConstruction />
            <p>This is the Magic Items page</p>
        </div>
    )
}

export default MagicItems;