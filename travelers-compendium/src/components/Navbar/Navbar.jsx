import React, { useContext } from 'react';
import AppContext from '../Context/AppContext.jsx';
import NavbarAccordion from './NavbarAccordion.jsx';
import '../../styles/Navbar.css';
import Logo from '../../../public/&-logo.png';

const Navbar = () => {
    const { setBodyDisplay } = useContext(AppContext)

    const handleDisplay = (e) => {
        const bodyId = e.target.id;
        setBodyDisplay(bodyId);
    }

    const handleHover = (e) => {
        const navButtons = document.getElementById('navButtonContainer');
        navButtons.style.visibility === 'visible' ? navButtons.style.visibility = 'hidden' : navButtons.style.visibility = 'visible';
    }


    return (
        <div className='navBarComponent'>
            <div className='mainNavBar'>
                <img 
                    src={Logo}
                    alt='Ampersand Logo'
                    className='navBarLogo'
                    id='home'
                    onClick={handleDisplay}
                    onMouseOver={handleHover}
                    ></img>
                <NavbarAccordion onHover={handleHover} />
            </div>
        </div>
    )
}

export default Navbar;