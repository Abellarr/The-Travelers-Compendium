import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Magic.css';

const Spellcasting = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='spellcastingMain'>
            <UnderConstruction />
            <p>This is the Spellcasting page</p>
        </div>
    )
}

export default Spellcasting;