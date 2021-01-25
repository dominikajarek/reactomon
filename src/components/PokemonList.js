import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../lists.css';

class PokemonList extends Component {
  state = {
    pokemons: []
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(response => {
        const pokemons = response.data.results;
        this.setState({ 
          pokemons 
        });
      })
  }

  render() {
    return (
        <div className='listStyle'>
          { 
          this.state.pokemons.map(pokemon => 
            // let { url } = pokemon.url.split('/');
            // let { id } = url[6];
            <div key={ pokemon.name }>
              <Link className='link' to={`/details/:id`}>
              <p className='listLinkStyle'>{ pokemon.name }</p>
              </Link>
            </div>
          
        ) 
      }
        </div>
    );
  }
}

export default PokemonList;

//jak polaczyc pokemon detail i pokemon list? pokemon detail dziala(w konsoli) ale trzeba url wpisac recznie