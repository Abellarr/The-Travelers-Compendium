import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Character.css';

const Backgrounds = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='backgroundsMain'>
            <UnderConstruction />
            <p>This is the Backgrounds page</p>
        </div>
    )
}

export default Backgrounds;