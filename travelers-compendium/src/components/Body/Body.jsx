import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import HomePage from './HomePage.jsx';
// import '../../styles/Navbar';

const Body = () => {


    return (
        <div className='Body'>
            <HomePage />
        </div>
    )
}

export default Body;