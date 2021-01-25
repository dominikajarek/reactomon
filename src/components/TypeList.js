import React, { Component } from 'react';
import axios from 'axios';

import '../lists.css';

class TypeList extends Component {

    state = {
        types: []
    }

    componentDidMount = () => {
        axios.get('https://pokeapi.co/api/v2/type')
            .then(response => {
                const types = response.data.results;
                this.setState({
                    types
                });
            });
    }

    render() {
        return (
            <div className='listStyle'>
                { 
                this.state.types.map(type => 
                <p className='listLinkStyle' key={ type.name }>
                    { type.name }
                </p>) 
                }
            </div>
        );
    }
}

export default TypeList;
