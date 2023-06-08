import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import '../../styles/Navbar.css';

const Navbar = () => {


    return (
        <div className='mainNavBar'>
            <h1 className='mainTitle'>The Traveler's Compendium</h1>
            <div className='navBarButtons'>
                <button className='navButton'>Character Info</button>
                <button className='navButton'>Races/Classes</button>
                <button className='navButton'>Equipment/Items</button>
                <button className='navButton'>Magic</button>
                <button className='navButton'>Monsters</button>
                <button className='navButton'>NPCs</button>
                <button className='navButton'>Rules/Gameplay</button>
            </div>
        </div>
    )
}

export default Navbar;