import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext';
import '../../../../styles/Classes.css';

const FightStyleCard = ({ url }) => {
    const [ styleInfo, setStyleInfo ] = useState({})
    const { apiBase } = useContext(AppContext);

    const nameFilter = (str)=> {
        if (str.includes('Meta')) {
            return str.substring(10);
        } else if (str.includes('Fighting')) {
            return str.substring(15);
        }
    }

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}${url}`);
          setStyleInfo(data);
          console.log(data);
        })();
        return () => {};
      }, []);

    return (
        <div className='fightStyle'>
            {styleInfo.name ? <p><b>{nameFilter(styleInfo.name)}:</b> {styleInfo.desc[0]}</p> : <p>Loading...</p>}
        </div>
    )
};

export default FightStyleCard;