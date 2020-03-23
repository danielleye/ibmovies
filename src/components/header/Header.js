import React from 'react'

import './header.scss'

export default function Header() {
    return (
        <header className="ibmovies__header">
            <span className="ibmovies__header__logo">
                IBMovies{' '}
                <span role="img" aria-label="Movie Emoji">
                    🎬
                </span>
            </span>
        </header>
    )
}
