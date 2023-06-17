import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Character.css';

const Languages = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='languagesMain'>
            <UnderConstruction />
            <p>This is the Languages page</p>
        </div>
    )
}

export default Languages;