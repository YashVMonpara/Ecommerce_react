import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/unicorn.png'
import './header.style.scss';

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <img src={Logo} alt="" />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'> Shop </Link>
            <Link to='/shop' className='option'> Contact </Link>
        </div>
    </div>
)

export default Header;