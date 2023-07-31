import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../Context/AppContext.jsx';
import UnderConstruction from '../UnderConstruction.jsx';
import LanguagesCardStandard from './LanguagesCardStandard.jsx';
import LanguagesCardExotic from './LanguagesCardExotic.jsx';
import '../../../styles/Character.css';


const Languages = () => {
    const [ languages, setLanguages ] = useState([])
    const { apiBase } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}/api/languages`);
          setLanguages(data.results);
          console.log(data.results);
        })();
        return () => {};
    }, []);

    return (
        <div className='abilityScoresMain'>
            <div className='abiScoresBox'>
                <h2 className='abiScoresIntro'>Languages</h2>
                <h4 className='skillScoresDesc'>Overall description goes here</h4>
            </div>
            <div className='abilityScoresContainer'>
                <h3 className='langHeader'>Standard</h3>
                <div className='languageContainer'>
                    {languages[0] ? languages.map((lang, ind)=>{
                            return <LanguagesCardStandard langUrl={lang.url}/>
                    }) : null}
                </div>
                <h3 className='langHeader'>Exotic</h3>
                <div className='languageContainer'>
                    {languages[0] ? languages.map((lang, ind)=>{
                        return <LanguagesCardExotic langUrl={lang.url}/>
                    }) : null}
                </div>
            </div>
        </div>
    )
}

export default Languages;