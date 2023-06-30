import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext';
import '../../../../styles/Classes.css';

const FeatureCard = ({ spellCasting, subUrl }) => {
    const [ featureInfo, setFeatureInfo ] = useState({})
    const { apiBase } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}${subUrl}`);
          setFeatureInfo(data);
          console.log(data);
        })();
        return () => {};
      }, []);

    return (
        <div className='subClassTraitMain'>
            <h3>{featureInfo.name}</h3>
            {featureInfo.name ? featureInfo.desc.map((desc) => {
                return <p>{desc}</p>
            }): <p>Loading...</p>}
            {featureInfo.index && featureInfo.index.includes('spellcasting') ? spellCasting.info.map((entry)=>{
                return (
                    <>
                        <h3 className='classSpellcasting'>{entry.name}</h3>
                        {entry.desc.map((item)=>{
                            return <p>{item}</p>
                        })}
                    </>
                )
            }) : null}
        </div>
    )
}

export default FeatureCard;