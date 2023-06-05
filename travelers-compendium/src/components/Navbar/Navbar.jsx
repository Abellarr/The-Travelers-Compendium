import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import '../../styles/Navbar.css';

const Navbar = () => {


    return (
        <div>
            <h1>The Traveler's Compendium</h1>
            <div>
                <button>Character Info</button>
                <button>Races/Classes</button>
                <button>Equipment/Items</button>
                <button>Magic</button>
                <button>Monsters</button>
                <button>NPCs</button>
                <button>Rules/Gameplay</button>
            </div>
        </div>
    )
}

export default Navbar;