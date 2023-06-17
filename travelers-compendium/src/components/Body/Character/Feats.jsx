import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Character.css';

const Feats = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='featsMain'>
            <UnderConstruction />
            <p>This is the Feats page</p>
        </div>
    )
}

export default Feats;