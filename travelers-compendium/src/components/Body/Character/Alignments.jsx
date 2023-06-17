import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Character.css';

const Alignments = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='alignmentsMain'>
            <UnderConstruction />
            <p>This is the Alignments page</p>
        </div>
    )
}

export default Alignments;