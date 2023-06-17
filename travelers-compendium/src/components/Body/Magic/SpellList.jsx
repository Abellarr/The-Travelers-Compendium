import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Magic.css';

const SpellList = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='spellListMain'>
            <UnderConstruction />
            <p>This is the Spell List page</p>
        </div>
    )
}

export default SpellList;