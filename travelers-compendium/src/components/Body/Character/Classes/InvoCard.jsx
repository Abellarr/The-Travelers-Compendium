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
            {invoInfo.name && invoInfo.prerequisites[0] && invoInfo.prerequisites[0].type === 'level' ? 
            <p><b>Prerequisite:</b> <i>Level {invoInfo.prerequisites[0].level}</i></p> : null}
            {invoInfo.name ? invoInfo.desc.map((desc)=>{
                return <p>{desc}</p>;
            }) : <p>Loading...</p>}
        </div>
    )
};

export default InvoCard;