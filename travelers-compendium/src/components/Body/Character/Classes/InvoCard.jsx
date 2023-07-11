import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext';
import '../../../../styles/Classes.css';

const InvoCard = ({ url })=> {
    const [ invoInfo, setInvoInfo ] = useState({});
    const { apiBase } = useContext(AppContext);

    const invoFilter = (str) => {
        return str.substring(21);
    }

    const prereqs = (arr)=> {
        let prereqDesc = [];
        arr.forEach((item) => {
            if (item.type === 'level') {
                prereqDesc.push(`Level ${item.level}`);
            } else if (item.type === 'feature' && item.feature.includes('chain')) {
                prereqDesc.push('Pact of the Chain');
            } else if (item.type === 'feature' && item.feature.includes('tome')) {
                prereqDesc.push('Pact of the Tome');
            } else if (item.type === 'feature' && item.feature.includes('blade')) {
                prereqDesc.push('Pact of the Blade');
            } else if (item.type === 'spell' && item.spell.includes('eldritch')) {
                prereqDesc.push('Eldritch Blast cantrip')
            }
        })
        return prereqDesc.join(', ');
    }

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}${url}`);
          setInvoInfo(data);
          console.log(data);
        })();
        return () => {};
    }, []);

    return (
        <div className='invoCard'>
            <h3>{invoInfo.name ? invoFilter(invoInfo.name) : 'Loading...'}</h3>
            {invoInfo.name && invoInfo.prerequisites[0] ? 
            <p><b>Prerequisite:</b> <i>{prereqs(invoInfo.prerequisites)}</i></p> : null}
            {invoInfo.name ? invoInfo.desc.map((desc)=>{
                return <p>{desc}</p>;
            }) : <p>Loading...</p>}
        </div>
    )
};

export default InvoCard;