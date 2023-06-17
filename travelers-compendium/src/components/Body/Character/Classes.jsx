import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Character.css';

const Classes = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='classesMain'>
            <UnderConstruction />
            <p>This is the Classes page</p>
        </div>
    )
}

export default Classes;