import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import '../../styles/Navbar.css';

const Navbar = () => {
    const { bodyDisplay } = useContext(AppContext)

    const handleClick = (e) => {
        const button = document.getElementById(e.target.id);
        button.classList.toggle("active");
        const panel = document.getElementById(e.target.id).nextElementSibling;
        panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
    }


    return (
        <div className='navBarComponent'>
            <div className='mainNavBar'>
                <h1 className='mainTitle'><i>The Traveler's</i></h1>
                <h1 className='mainTitle'><i>Compendium</i></h1>
            </div>
            <div className='navButtonContainer'>
                <div className='navBarButtons'>
                    <div className='navButton' id='navButton1' onClick={handleClick}>Character Info</div>
                    <div className='navButtonPanel'>
                        <p id='race'>Races</p>
                        <p id='class'>Classes</p>
                        <p id='ability'>Ability Scores</p>
                        <p id='skill'>Skills</p>
                        <p id='feat'>Feats</p>
                        <p id='alignment'>Alignment</p>
                        <p id='background'>Background</p>
                        <p id='language'>Languages</p>
                    </div>
                    <div className='navButton' id='navButton2' onClick={handleClick}>Equipment</div>
                    <div className='navButtonPanel'>
                        <p id='weapon'>Weapons</p>
                        <p id='armor'>Armor</p>
                        <p id='adventGear'>Adventuring Gear</p>
                        <p id='magItem'>Magic Items</p>
                        <p id='custItem'>Custom Items</p>
                    </div>
                    <div className='navButton' id='navButton3' onClick={handleClick}>Magic</div>
                    <div className='navButtonPanel'>
                        <p id='race'>Spellcasting</p>
                        <p id='race'>Spell List</p>
                    </div>
                    <div className='navButton' id='navButton4' onClick={handleClick}>Monsters</div>
                    <div className='navButtonPanel'>
                        <p id='race'>Monster List</p>
                    </div>
                    <div className='navButton' id='navButton5' onClick={handleClick}>NPCs</div>
                    <div className='navButtonPanel'>
                        <p id='race'>Custom NPC Creator</p>
                    </div>
                    <div className='navButton' id='navButton6'onClick={handleClick}>Gameplay</div>
                    <div className='navButtonPanel'>
                        <p id='race'>Calm down, we're working on it...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;