import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../../Context/AppContext.jsx';
import '../../../styles/Character.css';

const AlignmentsCard = ({ alignUrl }) => {
    const [ alignInfo, setAlignInfo ] = useState({});
    const { apiBase } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}/api/alignments/${alignUrl}`);
          setAlignInfo(data);
          console.log(data);
        })();
        return () => {};
      }, []);

      

    return (
        <div className='abilityScoresCard'>
            <h3 className='alignmentHeader'>{alignInfo.index ? alignInfo.name : 'Loading...'}</h3>
            {alignInfo.index ? <p><i>{alignInfo.desc}</i></p> : <p>Loading...</p>}
        </div>
    )
}

export default AlignmentsCard;