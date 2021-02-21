import React from 'react';

import Loader from './Loader';
import PokemonCard from './PokemonCard';
import { useAxiosGet } from '../hooks/HttpRequests';
import '../styles/index.css';
import '../styles/lists.css';

function PokemonsList() {

    const url = `https://pokeapi.co/api/v2/pokemon-form?offset=0&limit=20`;
    let pokemons = useAxiosGet(url);
    let content = null;

    if (pokemons.error) {
        content = <p>
            There was an error, please refresh page or try again later
        </p>
    }

    if (pokemons.isLoading) {
        content = <Loader />
    }

    if (pokemons.data) {
        return (
            content = 
            pokemons.data.results.map((pokemon, key) =>
                <div>
                    <div key={ key }>
                        <PokemonCard
                            pokemons={ pokemon }
                        />
                    </div>
                </div>
            )
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default PokemonsList;