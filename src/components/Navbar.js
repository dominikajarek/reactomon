import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Pokemons from './PokemonList';
import Types from './TypeList';
import Details from './PokemonDetail';

class Navbar extends Component {
    
    render() {
        return (
            <div>
            <Router>
                <Header />
                <Route exact path='/pokemons' component={ Pokemons } />
                <Route exact path='/types' component={ Types } />
                <Route exact path='/details/:id' component={ Details } />
            </Router>
            </div>
        );
    }
}

export default Navbar;