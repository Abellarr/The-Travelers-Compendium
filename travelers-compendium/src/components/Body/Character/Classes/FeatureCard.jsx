import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext';
import FightStyleCard from './FightStyleCard';
import '../../../../styles/Classes.css';


const FeatureCard = ({ spellCasting, subUrl }) => {
    const [ featureInfo, setFeatureInfo ] = useState({});
    const [ fightStyle, setFightStyle ] = useState([]);
    const { apiBase } = useContext(AppContext);

    const nameFilter = (str) => {
        if (str.includes('Destroy')) {
            return str.substring(0,14);
        } else if ((str.includes('Channel') || str.includes('Brutal')) && !str.includes(':')) {
            return str.substring(0,16)
        } else if (str.includes('Wild Shape')) {
            return str.substring(0,10)
        } else if (str.includes('Song of')) {
            return str.substring(0,12)
        } else if (str.includes('Indom') || str.includes('Action Surge')) {
            return str.substring(0,12);
        } else if (str.includes('Favored')) {
            return str.substring(0,13)
        } else if (str.includes('Natural Exp')) {
            return str.substring(0,16)
        } else if (str.includes('Flexible')) {
            return str.substring(18)
        } else if (str.includes('Mystic')) {
            return str.substring(0,14)
        } else {
            return str;
        }
    }
    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}${subUrl}`);
          setFeatureInfo(data);
          if (data.index.includes('fighting-style') || data.index.includes('metamagic')) {
            setFightStyle(data.feature_specific.subfeature_options.from.options)
          }
          console.log(data);
        })();
        return () => {};
      }, []);

    return (
        <div className='classTraitMain'>
            {featureInfo.subclass ? null : <h3>{featureInfo.name ? nameFilter(featureInfo.name) : 'Loading...'}</h3>}
            {featureInfo.name ? featureInfo.desc.map((desc) => {
                if (featureInfo.subclass) {
                    return null;
                } else {
                    return <p>{desc}</p>
                }
                
            }): <p>Loading...</p>}
            {featureInfo.index && (featureInfo.index.includes('fighting-style') || featureInfo.index.includes('metamagic')) ? 
            fightStyle.map((style)=>{
                return <FightStyleCard url={style.item.url}/>
            }) : null}
            {featureInfo.index && (featureInfo.index.includes('spellcasting') || featureInfo.index.includes('pact-magic')) ? 
            spellCasting.info.map((entry)=>{
                return (
                    <>
                        <h4 className='classSpellcasting'>{entry.name}</h4>
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