import React from 'react';

import Navigation from './Navigation';
import logo from '../images/pokemon-logo.png';

function Header() {

    return (
        <header className='border-b p-3 flex justify-between object-center'>
            <span>
                <img alt='logo' src={logo} />
            </span>
            <Navigation />
        </header>
    );
}

export default Header;