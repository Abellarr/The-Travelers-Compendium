import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext';
import SubFeatureCard from './SubFeatureCard.jsx';
import OathSpells from './SpellTables/OathSpells';
import CircleSpells from './SpellTables/CircleSpells';
import DomainSpells from './SpellTables/DomainSpells';
import '../../../../styles/Classes.css';
import PactSpells from './SpellTables/PactSpells';



const SubClass = ({ subClass, subName }) => {
    const [ subClassInfo, setSubClassInfo ] = useState([])
    const { apiBase } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}/api/subclasses/${subClass}/features`);
          setSubClassInfo(data.results);
          console.log(data.results);
        })();
        return () => {};
    }, []);

    const handleClose = () => {
        const modal = document.getElementById('subClassModal');
        modal.close();
    }

    return (
        <dialog className='subClassInfo' id='subClassModal'>
            <div className='subClassHeader'>
                <h2>{subName}</h2>
                <button className='subClassModalButton' onClick={handleClose}>X</button>
            </div>
            <div>
                {subClass === 'devotion' ? <OathSpells /> : null}
                {subClass === 'life' ? <DomainSpells /> : null}
                {subClass === 'fiend' ? <PactSpells /> : null}
                {subClassInfo[0] ? subClassInfo.map((feature) => {
                    if (feature.name.includes('Land:')) {
                        return null;
                    } else if (feature.index.includes('circle-spells') && parseInt(feature.index[feature.index.length-1]) > 1) {
                        return null;
                    } else {
                        return <SubFeatureCard subUrl={feature.url} />
                    }
                    
                }) 
                : <p>Loading...</p>}
                {subClass === 'land' ? <CircleSpells /> : null}
            </div>
        </dialog>
    )
}

export default SubClass;