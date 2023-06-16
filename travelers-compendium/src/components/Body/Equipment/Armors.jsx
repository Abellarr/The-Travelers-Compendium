import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Equipment.css';

const Armors = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='armorsMain'>
            <UnderConstruction />
            <p>This is the Armors page</p>
        </div>
    )
}

export default Armors;