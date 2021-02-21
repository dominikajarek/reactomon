import React from 'react';

import Navigation from './Navigation';
import logo from '../images/iPvcyJv.png';

function Header() {

    return (
        <div>
            <header className='header'>
                <img alt='logo' src={logo} className='object-center logo' />
            </header>
            <Navigation />
        </div>
    );
}

export default Header;