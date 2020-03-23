import React from 'react'

import logo from 'images/stranger-things_raw.png'
import './inspiration.scss'

export default function Inspiration(props) {
    return (
        <section className="ibmovies__inspiration">
            <h2 id="inspiration">Inspiration</h2>
            <div className="ibmovies__inspiration__top">
                <img src={logo} alt="Stranger Things Logo"></img>
                <p>{props.info.description}</p>
            </div>
            <div className="ibmovies__inspiration__bottom">
                <div className="ibmovies__inspiration__bottom__text-container">
                    <div id="snippets">
                        {props.info.snippets.map((snippets, i) => {
                            return (
                                <span key={i}>
                                    {snippets}
                                    <br />
                                </span>
                            )
                        })}
                    </div>
                    <div id="locations">
                        <strong>Locations: </strong> {props.info.locations}
                    </div>
                    <div id="quote">
                        <strong>Quote: </strong>
                        <span>{props.info.quote.text}</span>
                        <span> - {props.info.quote.author}</span>
                    </div>
                </div>
                <div className="ibmovies__inspiration__bottom__video-container">
                    {/* comment out for developing. */}
                    {/* <iframe title="video" src={props.info['video-embed']} /> */}
                </div>
            </div>
        </section>
    )
}
