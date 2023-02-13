import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <NavLink to={'/home'} className={({isActive}) =>
                isActive? 'active' : undefined
            }>home</NavLink>
            <NavLink to={'/countries'} className={({isActive}) =>
                isActive? 'active' : undefined
            }>Countries</NavLink>
            <NavLink to={'/about'} className={({isActive}) =>
                isActive? 'active' : undefined
            }>About</NavLink>
          
        </div>
    );
};

export default Header;