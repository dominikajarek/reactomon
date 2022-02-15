import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/lists.css';

function PokemonCard(props) {
	let pokemonId = props.pokemons.url.split('/')[6];

	return (
		<div>
			<Link to={`/pokemons/${pokemonId}`}>
				<div className="card-style">{props.pokemons.name}</div>
			</Link>
		</div>
	);
}

export default PokemonCard;
