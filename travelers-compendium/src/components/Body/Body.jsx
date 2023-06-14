import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import HomePage from './HomePage.jsx';
// import '../../styles/Navbar';

const Body = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='Body'>
            {bodyDisplay === 'home' ? <HomePage /> : null}
        </div>
    )
}

export default Body;