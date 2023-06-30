import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext';
import SubFeatureCard from './SubFeatureCard.jsx';
import '../../../../styles/Classes.css';

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
                {subClassInfo[0] ? subClassInfo.map((feature) => {
                    return <SubFeatureCard subUrl={feature.url} />
                }) 
                : <p>Loading...</p>}
            </div>
        </dialog>
    )
}

export default SubClass;