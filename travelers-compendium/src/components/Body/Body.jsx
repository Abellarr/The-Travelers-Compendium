import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import HomePage from './HomePage.jsx';
import '../../styles/Body.css';

const Body = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='Body'>
            {bodyDisplay === 'home' ? <HomePage /> : null}
        </div>
    )
}

export default Body;