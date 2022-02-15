import React from 'react';
import { useAxiosGet } from '../hooks/HttpRequests';
import '../styles/lists.css';
import Loader from './Loader';
import TypeCard from './TypeCard';

function TypesList() {
	const url = `https://pokeapi.co/api/v2/type?offset=0&limit=18`;
	let types = useAxiosGet(url);
	let content = null;

	if (types.error) {
		content = (
			<p>There was an error, please refresh page or try again later</p>
		);
	}

	if (types.isLoading) {
		content = <Loader />;
	}

	if (types.data) {
		return (content = types.data.results.map((type, key) => (
			<div key={key} className="types-list">
				<TypeCard types={type} />
			</div>
		)));
	}

	return <div>{content}</div>;
}

export default TypesList;
