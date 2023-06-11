import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import '../../styles/Navbar.css';

const Navbar = () => {


    return (
        <div className='navBarComponent'>
            <div className='mainNavBar'>
                <h1 className='mainTitle'><i>The Traveler's Compendium</i></h1>
            </div>
            <div className='navButtonContainer'>
                <div className='navBarButtons'>
                    <button className='navButton'>Character Info</button>
                    <button className='navButton'>Races / Classes</button>
                    <button className='navButton'>Equipment</button>
                    <button className='navButton'>Magic</button>
                    <button className='navButton'>Monsters</button>
                    <button className='navButton'>NPCs</button>
                    <button className='navButton'>Rules / Gameplay</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;