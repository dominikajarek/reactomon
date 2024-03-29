import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Pokemon from './components/Pokemon';
import PokemonsList from './components/PokemonsList';
import Type from './components/Type';
import TypesList from './components/TypesList';
import './styles/index.css';

function App() {
	return (
		<div className="relative pb-10 min-h-screen min-w-screen">
			<Router>
				<Header />
				<div className="app-container">
					<Switch>
						<Route exact path="/">
							<PokemonsList />
						</Route>
						<Route exact path="/types">
							<TypesList />
						</Route>
						<Route exact path="/types/:id">
							<Type />
						</Route>
						<Route exact path="/pokemons/:id">
							<Pokemon />
						</Route>
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
