import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../../Context/AppContext.jsx';
import '../../../styles/Character.css';

const LanguagesCardStandard = ({ langUrl }) => {
    const [ langInfo, setLangInfo ] = useState({});
    const { apiBase } = useContext(AppContext);

    const speakersJoin = (arr)=>{
        let speakers = [];
        for (let i=0;i<arr.length;i++) {
            speakers.push(arr[i]);
        }
        return speakers.join(', ');
    }

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}${langUrl}`);
          setLangInfo(data);
          console.log(data);
        })();
        return () => {};
      }, []);

      

    return (
        <>
            {langInfo.index && langInfo.type === 'Standard' ? 
            <div className='languagesCard'>
                <h3 className='alignmentHeader'>{langInfo.index ? langInfo.name : 'Loading...'}</h3>
                <p><i>{langInfo.desc}</i></p>
                <p><b>Type:</b> {langInfo.type}</p>
                <p><b>Typical Speakers:</b> {speakersJoin(langInfo.typical_speakers)}</p>
                <p><b>Script:</b> {langInfo.script}</p>
            </div>
            : null}
        </>
    )
}

export default LanguagesCardStandard;