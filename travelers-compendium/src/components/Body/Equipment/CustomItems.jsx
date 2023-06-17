import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Equipment.css';

const CustomItems = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='customItemsMain'>
            <UnderConstruction />
            <p>This is the Custom Items page</p>
        </div>
    )
}

export default CustomItems;