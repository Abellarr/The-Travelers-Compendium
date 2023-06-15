import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import '../../styles/Navbar.css';

const Navbar = () => {

    const handleClick = (e) => {
        const panel = document.getElementById(e.target.id).nextElementSibling;
        panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
    }


    return (
        <div className='navBarComponent'>
            <div className='mainNavBar'>
                <h1 className='mainTitle'><i>The Traveler's Compendium</i></h1>
            </div>
            <div className='navButtonContainer'>
                <div className='navBarButtons'>
                    <div className='navButton' id='navButton1' onClick={handleClick}>Character Info</div>
                    <div className='navButtonPanel'>
                        <p>Races</p>
                        <p>Classes</p>
                        <p>Ability Scores</p>
                        <p>Skills</p>
                        <p>Feats</p>
                        <p>Alignment</p>
                        <p>Background</p>
                        <p>Languages</p>
                    </div>
                    <div className='navButton' id='navButton2' onClick={handleClick}>Equipment</div>
                    <div className='navButtonPanel'>
                        <p>Weapons</p>
                        <p>Armor</p>
                        <p>Adventuring Gear</p>
                        <p>Magic Items</p>
                        <p>Custom Items</p>
                    </div>
                    <div className='navButton' id='navButton3' onClick={handleClick}>Magic</div>
                    <div className='navButtonPanel'>
                        <p>Spellcasting</p>
                        <p>Spell List</p>
                    </div>
                    <div className='navButton' id='navButton4' onClick={handleClick}>Monsters</div>
                    <div className='navButtonPanel'>
                        <p>Monster List</p>
                    </div>
                    <div className='navButton' id='navButton5' onClick={handleClick}>NPCs</div>
                    <div className='navButtonPanel'>
                        <p>Custom NPC Creator</p>
                    </div>
                    <div className='navButton' id='navButton6'onClick={handleClick}>Gameplay Mechanics</div>
                    <div className='navButtonPanel'>
                        <p>Calm down, we're working on it...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;