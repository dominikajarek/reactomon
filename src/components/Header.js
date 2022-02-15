import React from 'react';
import logo from '../images/iPvcyJv.png';
import Navigation from './Navigation';

function Header() {
	return (
		<div>
			<header className="header">
				<img alt="logo" src={logo} className="object-center logo" />
			</header>
			<Navigation />
		</div>
	);
}

export default Header;
