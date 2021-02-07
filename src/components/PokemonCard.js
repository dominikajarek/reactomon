import React from 'react';
import { Link } from 'react-router-dom';

function PokemonCard(props) {
    let pokemonId = props.pokemons.url.split('/')[6];

    return (
        <div className='border w-40 mb-4 rounded overflow-hidden bg-gray-200 bg-opacity-50'>
            <Link 
                to={`/pokemons/${pokemonId}`}
            >
                <div className='w-40 h-40 text-black flex justify-center text-justify'>
                    {props.pokemons.name}
                </div>
            </Link>
            <Link
                to={`/pokemons/${pokemonId}`}
                className='bg-blue-400 text-white p-2 flex justify-center'
            >
                View
            </Link>
        </div>
    );
}

export default PokemonCard;