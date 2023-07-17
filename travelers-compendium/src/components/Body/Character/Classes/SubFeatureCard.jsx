import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext';
import DracBloodline from './SpellTables/DracBloodline';
import '../../../../styles/Classes.css';


const SubFeatureCard = ({ subUrl }) => {
    const [ featureInfo, setFeatureInfo ] = useState({});
    const [ circleType, setCircleType ] = useState([]);
    const { apiBase } = useContext(AppContext);

    const landTypes = (arr)=> {
        let lands = [];
        for (let i=0; i<arr.length; i++) {
            lands.push(arr[i].item.name.substring(20))
        }
        return lands.join(', ')
    }

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}${subUrl}`);
          setFeatureInfo(data);
          if (data.index.includes('the-land')) {
            setCircleType(data.feature_specific.subfeature_options.from.options)
          }
          console.log(data);
        })();
        return () => {};
      }, []);

    return (
        <div className='subClassTraitMain'>
            <h3>{featureInfo.name}</h3>
            {featureInfo.name ? featureInfo.desc.map((desc, ind) => {
                if ((featureInfo.index.includes(`hunters-prey`) ||
                featureInfo.index.includes(`defensive-tactics`) ||
                featureInfo.index.includes(`multiattack`) ||
                featureInfo.index.includes(`superior-hunters`)
                ) && ind > 0) {
                    return null;
                } else {
                    return <p>{desc}</p>
                }
            }): <p>Loading...</p>}
            {featureInfo.name && featureInfo.name.includes('Ancestor') ? 
            <DracBloodline /> : null}
            {featureInfo.name && featureInfo.index.includes('circle-of') ? 
            <p>Land types include {landTypes(circleType)}</p> 
            : null}
        </div>
    )
}

export default SubFeatureCard;