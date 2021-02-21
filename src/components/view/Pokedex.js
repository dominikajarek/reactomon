import React from 'react';

import '../../styles/pokedex.css';

function Pokedex(props) {

    return (
        <div className="pokedex">
            <div className="left">
                <div className="left-main">
                    <div className="left-top-wrapper">
                        <div className="left-top">
                            <div className="blue-btn btn huge"/>
                            <div className="red-btn btn medium"/>
                            <div className="jaune-btn btn medium"/>
                            <div className="vert-btn btn medium"/>
                        </div>
                    </div>

                    <div className="left-screen">
                        <div className="screen-border-grey">
                            <div className="screen-top-btn">
                                <div className="red-btn btn small"/>
                                <div className="red-btn btn small"/>
                            </div>
                            <div className="screen-black">
                                <img className='front-shiny'
                                     alt={ props.pokemon.data.species.name }
                                     src={ props.pokemon.data.sprites.front_shiny }
                                />
                            </div>
                            <div className="screen-bottom-btn">
                                <div className="red-btn btn medium"/>
                                <div className="burger">
                                    <span/>
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="left-commands">
                        <div className="noir-btn btn large"/>
                        <div className="commands-central">
                            <div className="long-btn red-btn"/>
                            <div className="long-btn blue-btn"/>
                            <div className="green-screen medlarge-screen">
                                <span id="name-screen" className='info'>
                                    <p className='info'>{ props.pokemon.data.species.name }</p>
                                </span>
                            </div>
                        </div>
                        <div className="croix"/>
                    </div>
                </div>

                <div className="central-cylinder">
                    <div className="cynlinder-central-block"/>
                </div>
            </div>

            <div className="right-wrapper">
                <div className="right">
                    <div className="black-screen large-screen">
                        <p className='info'>
                            weight: { props.pokemon.data.weight / 10 }kg
                            <br />
                            height: { props.pokemon.data.height * 10}cm
                        </p>
                    </div>
                    <div className="grid-btn blue-grid">
                        <div className="grid-cell"/>
                        <div className="grid-cell"/>
                        <div className="grid-cell"/>
                        <div className="grid-cell"/>
                        <div className="grid-cell"/>
                        <div className="grid-cell"/>
                        <div className="grid-cell"/>
                        <div className="grid-cell"/>
                        <div className="grid-cell"/>
                        <div className="grid-cell"/>
                    </div>
                    <div className="long-btn-right">
                        <div className="long-btn noir-btn"/>
                        <div className="long-btn noir-btn"/>
                    </div>
                    <div className="grid-btn white-grid">
                        <div className="grid-cell"/>
                        <div className="grid-cell"/>
                    </div>
                    <div className="jaune-btn btn large"/>
                    <div className="noir-screen medium-screen">
                        { props.pokemon.data.types.map(
                            (t, key) => <p key={key} className='info'>{" "} {t.type.name}</p>)}
                    </div>
                    <div className="noir-screen medium-screen">
                        <p className='info'>#{ props.pokemon.data.id }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pokedex;