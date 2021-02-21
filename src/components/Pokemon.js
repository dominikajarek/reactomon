import React from 'react';
import { useParams } from 'react-router-dom';

import { useAxiosGet } from '../hooks/HttpRequests';
import Pokedex from './view/Pokedex';
import Loader from './Loader';
import '../styles/index.css';

function Pokemon() {

  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let pokemon = useAxiosGet(url);
  let content = null;

  if (pokemon.error) {
    content = 
    <p>
      There was an error, refresh page or try again later
    </p>
  }

  if (pokemon.isLoading) {
    content = <Loader />
  }

  if (pokemon.data) {
    return (
      content =
      <div className='pokedex-container'>
        <Pokedex pokemon={ pokemon } />
      </div>
    );
  }
  
  return (
    <div>
        {content}
    </div>
  );
}

export default Pokemon;