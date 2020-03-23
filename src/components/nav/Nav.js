import React from 'react'
import './nav.scss'

export default function Nav() {
    const sectionName = ['inspiration', 'gallery', 'episode-list']

    const handleClick = e => {
        e.preventDefault()
        const anchor = e.target.getAttribute('data-goto-anchor')
        document.getElementById(anchor).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    return (
        <nav className="ibmovies__nav">
            <ul className="ibmovies__nav__nav-list">
                {sectionName.map((section, i) => {
                    return (
                        <li key={section}>
                            <a
                                href={'#' + section + '-anchor'}
                                data-goto-anchor={section}
                                onClick={handleClick}
                                aria-label={'Scroll to ' + section}
                            >
                                {section.replace(/\W/g, ' ')}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
