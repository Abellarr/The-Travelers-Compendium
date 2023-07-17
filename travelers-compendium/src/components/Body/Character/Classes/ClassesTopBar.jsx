import React, { useContext } from 'react';
import AppContext from '../../../Context/AppContext.jsx';
import ClassContext from '../../../Context/ClassContext.jsx';
import '../../../../styles/Races.css';

const ClassesTopBar = ({ classes, setClassDisplay }) => {
    const { apiBase } = useContext(AppContext);

    const handleClick = (str) => {
        setClassDisplay(str);
    }

    return (
        <div className='classMainNames'>
            <div className='classCardDiv'>
                {classes.map((clas, ind) => {
                    return (
                        <div className='classMainCard' key={clas.index + ind} onClick={() => handleClick(clas.index)}>
                            <h3 className='raceNames'>{clas.name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ClassesTopBar;