import React from 'react';
import { useParams } from 'react-router-dom';
import { useAxiosGet } from '../hooks/HttpRequests';
import Loader from './Loader';

function Type() {
	const { id } = useParams();
	const url = `https://pokeapi.co/api/v2/type/${id}`;
	let type = useAxiosGet(url);
	let content = null;

	if (type.error) {
		content = <p>There was an error, refresh page or try again later</p>;
	}

	if (type.isLoading) {
		content = <Loader />;
	}

	if (type.data) {
		return (content = (
			<div className="type-version">
				<h1>Move damage class: {type.data.move_damage_class.name}</h1>
				<br />
				<h1>Generation: {type.data.generation.name}</h1>
				<br />
				<h1>
					Double damage from:{' '}
					{type.data.damage_relations.double_damage_from.map(
						(damage) => (
							<h1 key={damage.name}>{damage.name}</h1>
						)
					)}
				</h1>
				<br />
				<h1>
					Half damage to:{' '}
					{type.data.damage_relations.half_damage_to.map((damage) => (
						<h1 key={damage.name}>{damage.name}</h1>
					))}
				</h1>
				<br />
				<h1>
					No damage from:{' '}
					{type.data.damage_relations.no_damage_from.map((damage) => (
						<h1 key={damage.name}>{damage.name}</h1>
					))}
				</h1>
				<br />
				<h1>
					No damage to:{' '}
					{type.data.damage_relations.no_damage_to.map((damage) => (
						<h1 key={damage.name}>{damage.name}</h1>
					))}
				</h1>
				<br />
			</div>
		));
	}

	return <div>{content}</div>;
}

export default Type;
