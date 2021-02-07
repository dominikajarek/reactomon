import React from 'react';
import { useParams } from 'react-router-dom';

import { useAxiosGet } from '../hooks/HttpRequests';
import Loader from './Loader';
import '../styles/index.css';

function Pokemon() {

  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon-form/${id}`;
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
      <div className='w-80 text-black p-2 flex justify-center bg-gray-200 bg-opacity-50 rounded'>
        <h1>
          { pokemon.data.pokemon.name }
        </h1>
        <img 
          alt={ pokemon.data.pokemon.name } 
          src={ pokemon.data.sprites.front_shiny } 
        />
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