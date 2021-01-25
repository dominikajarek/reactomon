import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/pokemon-logo.png';
import '../home.css';

class Header extends Component {
    render() {
        return (
            <div className='background'>
                <header className='headerStyle'>
                    <img className='logoStyle' src={ logo } alt='Logo'></img><br/>
                    <Link className='linkStyle' to='/pokemons'>Pokemons</Link> {' '}
                    <Link className='linkStyle' to='/types'>Types</Link> {' '}
                </header>
            </div>

        )
    }
}
export default Header;
