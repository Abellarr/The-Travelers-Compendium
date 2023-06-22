import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../../Context/AppContext.jsx';
import '../../../../styles/Races.css';

const TraitCard = ({ trait }) => {
    const [ traitInfo, setTraitInfo ] = useState({})
    const { apiBase } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const response = await fetch(`${apiBase}${trait.url}`);
          const traits = await response.json();
          setTraitInfo(traits);
          console.log(traits);
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