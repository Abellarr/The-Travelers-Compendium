import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import '../../styles/Navbar.css';

const NavbarAccordion = ({ onHover }) => {
    const { setBodyDisplay } = useContext(AppContext)

    const handleDisplay = (e) => {
        const bodyId = e.target.id;
        setBodyDisplay(bodyId);
        handleLeave();
    }

    const handleClick = (e) => {
        const button = document.getElementById(e.target.id);
        button.classList.toggle("active");
        const panel = document.getElementById(e.target.id).nextElementSibling;
        panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
    }
    
    const handleLeave = () => {
        document.getElementById('navButtonContainer').style.visibility = 'hidden';
        closeAccordion();
    }

    const closeAccordion = () => {
        const panels = document.getElementsByClassName('navButtonPanel');
        for (let i = 0; i<panels.length; i++) {
            if (panels[i].style.maxHeight) {
                panels[i].style.maxHeight = null;
                const button = panels[i].previousElementSibling;
                button.classList.toggle("active");
            }
        }
    }

    return (
        <div className='navButtonContainer' id='navButtonContainer' onMouseLeave={handleLeave}>
            <div className='navBarButtons'>
                <div className='navButton' id='navButton1' onClick={handleClick}>Character Info</div>
                <div className='navButtonPanel'>
                    <p id='race' onClick={handleDisplay}>Races</p>
                    <p id='class' onClick={handleDisplay}>Classes</p>
                    <p id='ability' onClick={handleDisplay}>Ability Scores</p>
                    <p id='skill' onClick={handleDisplay}>Skills</p>
                    <p id='feat' onClick={handleDisplay}>Feats</p>
                    <p id='alignment' onClick={handleDisplay}>Alignment</p>
                    <p id='background' onClick={handleDisplay}>Background</p>
                    <p id='language' onClick={handleDisplay}>Languages</p>
                </div>
                <div className='navButton' id='navButton2' onClick={handleClick}>Equipment</div>
                <div className='navButtonPanel'>
                    <p id='weapon' onClick={handleDisplay}>Weapons</p>
                    <p id='armor' onClick={handleDisplay}>Armor</p>
                    <p id='adventGear' onClick={handleDisplay}>Adventuring Gear</p>
                    <p id='magItem' onClick={handleDisplay}>Magic Items</p>
                    <p id='custItem' onClick={handleDisplay}>Custom Items</p>
                </div>
                <div className='navButton' id='navButton3' onClick={handleClick}>Magic</div>
                <div className='navButtonPanel'>
                    <p id='spellcasting' onClick={handleDisplay}>Spellcasting</p>
                    <p id='spellList' onClick={handleDisplay}>Spell List</p>
                </div>
                <div className='navButton' id='navButton4' onClick={handleClick}>Monsters</div>
                <div className='navButtonPanel'>
                    <p id='monster' onClick={handleDisplay}>Monster List</p>
                </div>
                <div className='navButton' id='navButton5' onClick={handleClick}>NPCs</div>
                <div className='navButtonPanel'>
                    <p id='custNPC' onClick={handleDisplay}>Custom NPC Creator</p>
                </div>
                <div className='navButton' id='navButton6'onClick={handleClick}>Gameplay</div>
                <div className='navButtonPanel'>
                    <p id='rules' onClick={handleDisplay}>Calm down, we're working on it...</p>
                </div>
            </div>
        </div>
    )
}

export default NavbarAccordion;