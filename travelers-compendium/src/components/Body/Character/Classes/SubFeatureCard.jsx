import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext';
import '../../../../styles/Classes.css';

const SubFeatureCard = ({ subUrl }) => {
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
        </div>
    )
}

export default SubFeatureCard;