import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext';
import '../../../../styles/Classes.css';
import InvoCard from './InvoCard';

const Invocations = ()=> {
    const [ invocations, setInvocations ] = useState({})
    const { apiBase } = useContext(AppContext)

    const handleClose = () => {
        const modal = document.getElementById('invocations');
        modal.close();
    }

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}/api/features/eldritch-invocations`);
          setInvocations(data);
          console.log(data);
        })();
        return () => {};
    }, []);

    return (
        <dialog className='subClassInfo' id='invocations'>
            <div className='invoHeader'>
                <div className='invoTitle'>
                    <h2>{invocations.name}</h2>
                    <button className='subClassModalButton' onClick={handleClose}>X</button>
                </div>
                {invocations.name ? invocations.feature_specific.invocations.map((invo)=>{
                    return <p><InvoCard url={invo.url} /></p>
                }) 
                : <p>Loading...</p>}
            </div>
        </dialog>
    )
};

export default Invocations;