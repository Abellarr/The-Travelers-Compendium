import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../../../Context/AppContext.jsx';
import '../../../../styles/Races.css';

const TraitCard = ({ trait }) => {
    const [ traitInfo, setTraitInfo ] = useState({})
    const { apiBase } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(`${apiBase}${trait.url}`);
          setTraitInfo(data);
          console.log(data);
        })();
        return () => {};
      }, []);

    return (
        <div className='traitCard'>
            {traitInfo.index && traitInfo.desc[0] ? traitInfo.desc.map((desc, ind) => {
                return (
                    <p key={`traitCard${ind}`} className='traitCardText'>{desc}</p>
                )
            })
        : <p>None</p>}
        </div>
    )
}

export default TraitCard;