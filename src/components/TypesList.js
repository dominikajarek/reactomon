import React from 'react';

import { useAxiosGet } from '../hooks/HttpRequests';
import TypeCard from './TypeCard';
import Loader from './Loader';

function TypesList() {

  const url = `https://pokeapi.co/api/v2/type?offset=0&limit=20`;
  let types = useAxiosGet(url);
  let content = null;

  if (types.error) {
    content =
    <p>
      There was an error, please refresh page or try again later
    </p>
  }

  if (types.isLoading) {
    content = <Loader />
  }

  if (types.data) {
    return (
      content =
      types.data.results.map((type, key) => 
        <div key={ key }>
          <TypeCard
            types={ type } />
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

export default TypesList;
