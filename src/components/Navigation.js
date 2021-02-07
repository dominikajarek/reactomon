import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <ul>
                <li>
                    <Link 
                        to='/' 
                        className='text-white py-3 border-t border-b block'
                    >
                        Pokemons
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/types' 
                        className='text-white py-3 border-b block'
                    >
                        Types
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;