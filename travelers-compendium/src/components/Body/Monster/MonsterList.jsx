import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Monster.css';

const MonsterList = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='monsterListMain'>
            <UnderConstruction />
            <p>This is the Monster List page</p>
        </div>
    )
}

export default MonsterList;