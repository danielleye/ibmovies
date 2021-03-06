import React from 'react'
import ThemeToggle from './ThemeToggle.js'
import LanguageSelector from './LanguageSelector.js'

import './header.scss'

export default function Header() {
    return (
        <header className="ibmovies__header">
            <div className="ibmovies__header__logo">
                IBMovies{' '}
                <span role="img" aria-label="Movie Emoji">
                    🎬
                </span>
            </div>
            <ThemeToggle />
            <div className="ibmovies__header__lang-selector">
                <LanguageSelector />
            </div>
        </header>
    )
}
