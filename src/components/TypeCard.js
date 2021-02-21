import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/lists.css';

function TypeCard(props) {
    let typeId = props.types.url.split('/')[6];

    return (
        <div>
            <Link
                to={`/types/${typeId}`}>
                <div className='card-style'>
                    {props.types.name}
                </div>
            </Link>
        </div>
    );
}

export default TypeCard;