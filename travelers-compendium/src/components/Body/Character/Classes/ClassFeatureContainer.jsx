import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext.jsx';
import FeatureCard from './FeatureCard.jsx';
import '../../../../styles/Classes.css';

const ClassFeatureContainer = ({ spellCasting, clas }) => {
    const [ featureList, setFeatureList ] = useState([])
    const { apiBase } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}/api/classes/${clas}/features`);
          setFeatureList(data.results);
          console.log(data.results);
        })();
        return () => {};
      }, []);

    return (
        <div>
            {featureList[0] ? featureList.map((feature) => {
                if (feature.name.includes('Fighting Style:')) {
                    return null;
                } else if (feature.index.includes('ability-score') || parseInt(feature.index[feature.index.length-1]) > 0) {
                    return null;
                } else {
                    return <FeatureCard spellCasting={spellCasting} subUrl={feature.url} />
                }
            }) : <p>Loading...</p>}
        </div>
    )
}

export default ClassFeatureContainer;