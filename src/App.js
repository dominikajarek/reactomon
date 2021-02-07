import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Pokemon from './components/Pokemon';
import PokemonsList from './components/PokemonsList';
import Header from './components/Header';
import TypesList from './components/TypesList';
import Type from './components/Type';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
    
    return (
      <div className='relative pb-10 min-h-screen'>
        <Router>
        <Header />
        <div className='p-3 grid grid-rows-4 grid-flow-col gap-3'>
          <Switch>
            <Route exact path='/'>
              <PokemonsList />
            </Route>
            <Route exact path='/pokemons/:id'>
              <Pokemon />
            </Route>
            <Route exact path='/types'>
              <TypesList />
            </Route>
            <Route exact path='/types/:id'>
              <Type />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
      </div>
    );
  }

export default App;