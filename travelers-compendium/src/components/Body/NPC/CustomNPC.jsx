import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/NPC.css';

const CustomNPC = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='customNpcMain'>
            <UnderConstruction />
            <p>This is the Custom NPC page</p>
        </div>
    )
}

export default CustomNPC;