import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='nav-container'>
            <ul>
                <li className='li-nav'>
                    <button className='button-nav'>
                        <Link
                            to='/'
                            className='text-white py-3 block'
                        >
                            Pokemons
                        </Link>
                    </button>
                </li>
                <li className='li-nav'>
                    <button className='button-nav'>
                        <Link
                            to='/types'
                            className='text-white py-3 block'
                        >
                            Types
                        </Link>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;