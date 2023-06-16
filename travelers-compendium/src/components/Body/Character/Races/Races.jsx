import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../../Context/AppContext.jsx';
import UnderConstruction from '../../UnderConstruction.jsx';
import '../../../../styles/Character.css';
import RacesTopBar from './RaceTopBar.jsx';

const Races = () => {
    const [ races, setRaces ] = useState([]);
    const { apiBase } = useContext(AppContext);

    return (
        <div className='racesMain'>
            <RacesTopBar />
            <div className='raceMainContainer'>
                <h1 className='raceMainTitle'>Character Races</h1>
                <h3 className='raceMainIntro'>
                    Choosing your character's race is an important decision that can affect many aspects of your roleplaying 
                    experience. Not only can your race provide bonuses to your ability in combat or interacting with the 
                    environment, it may also affect how other players and non-player characters interact with you.
                </h3>
                <h3>
                    For instance, Dragonborn may rarely be seen in certain parts of your adventuring world, so strolling into 
                    the local tavern may arouse suspicion or awe in the patrons who frequent there. Or, you may find that the 
                    elven guard you're trying to get information from may not be that fond of dwarves.
                </h3>
                <h3>
                    For a better gameplay experience, consider all the aspects of who your character is and try not to rely 
                    solely on any ability or combat boons.
                </h3>
            </div>
            
        </div>
    )
}

export default Races;