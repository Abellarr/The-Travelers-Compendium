import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import '../../styles/Footer.css';

const Footer = () => {


    return (
        <div className='footerMain'>
            <p>This work includes material taken from the System Reference Document 5.1 (“SRD 5.1”) by Wizards of the 
                Coast LLC and available <a target='_blank' href='https://dnd.wizards.com/resources/systems-reference-document'>here</a>. 
                <br></br>The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License available <a 
                target='_blank' href='https://creativecommons.org/licenses/by/4.0/legalcode'>here</a>.
            </p>
        </div>
    )
}

export default Footer;