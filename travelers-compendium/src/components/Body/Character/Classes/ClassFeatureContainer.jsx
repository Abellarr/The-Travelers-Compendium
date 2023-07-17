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
                if (feature.name.includes('Fighting Style:') || feature.name.includes('Additional Fighting')) {
                    return null;
                } else if (feature.name.includes('Metamagic:')) {
                    return null;
                } else if (feature.name.includes('Intervention Improvement')) {
                    return null;
                } else if ((feature.index.includes('ability-score') ||
                feature.index.includes('metamagic') ||
                feature.index.includes('magical-secrets') ||
                feature.index.includes('expertise') ||
                feature.index.includes('domain-spells')
                ) && parseInt(feature.index[feature.index.length-1]) > 1) {
                    return null;
                } else if (feature.index.includes('brutal-critical') && parseInt(feature.index[16]) > 1) {
                    return null;
                } else if ((feature.index.includes('bardic') || feature.index.includes('song-of')) && 
                parseInt(feature.index[feature.index.length-1]) !== 6) {
                    return null;
                } else if (feature.index.includes('destroy-undead') && feature.index[20] !== '2') {
                    return null;
                } else if (feature.index.includes('wild-shape') && feature.index[16] !== '4') {
                    return null;
                } else if ((feature.index.includes('action-surge') || feature.index.includes('extra-attack')) && 
                feature.index[13] !== '1') {
                    return null;
                } else if (feature.index.includes('indomitable') && feature.index[12] !== '1') {
                    return null;
                } else if (!feature.name.includes(':') && parseInt(feature.index[17]) > 1) {
                    return null;
                } else if (feature.index.includes('favored-enemy') && parseInt(feature.index[14]) > 1) {
                    return null;
                } else if (feature.name.includes('Invocation:')) {
                    return null;
                } else if (feature.index.includes('mystic-arcanum') && feature.index[15] !== '6') {
                    return null;
                } else {
                    return <FeatureCard spellCasting={spellCasting} subUrl={feature.url} />
                }
            }) : <p>Loading...</p>}
        </div>
    )
}

export default ClassFeatureContainer;