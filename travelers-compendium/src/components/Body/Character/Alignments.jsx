import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import '../../../styles/Character.css';
import AlignmentsCard from './AlignmentsCard.jsx';

const Alignments = () => {
    const [ alignments, setAlignments ] = useState(['lawful-good', 'lawful-neutral', 'lawful-evil', 
    'neutral-good', 'neutral', 'neutral-evil', 'chaotic-good', 'chaotic-neutral', 'chaotic-evil']);
    const { apiBase } = useContext(AppContext);

    // useEffect(() => {
    //     (async () => {
    //       const { data } = await axios.get(`${apiBase}/api/alignments`);
    //       setAlignments(data.results);
    //       console.log(data.results);
    //     })();
    //     return () => {};
    // }, []);

    return (
        <div className='abilityScoresMain'>
            <div className='abiScoresBox'>
                <h2 className='abiScoresIntro'>Alignments</h2>
                <h4 className='skillScoresDesc'>Overall description goes here</h4>
            </div>
            <div className='abilityScoresContainer'>
                {alignments.map((align)=>{
                    return <AlignmentsCard alignUrl={align} />
                })}
            </div>
        </div>
    )
}

export default Alignments;