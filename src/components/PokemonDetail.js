import React, { Component } from 'react';
import axios from 'axios';

import '../pokedex.css';

class PokemonDetail extends Component {

    state = {
        details: []
    }

  getDetails() {
    const { id } = this.props.match.params;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        const details = response.data.abilities;
        this.setState({
            details
        })
        console.log(id);
        console.log(details);
        let url = this.props.location.search;
        console.log(url);
      })
  }

  componentDidMount() {
      this.getDetails();
  }

    render() {
        return (
            <div className='listStyle'>
                {this.props.id}
            </div>
        );
    }
}

export default PokemonDetail;