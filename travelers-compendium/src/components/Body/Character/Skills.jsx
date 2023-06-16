import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Character.css';

const Skills = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='skillsMain'>
            <UnderConstruction />
            <p>This is the Skills page</p>
        </div>
    )
}

export default Skills;