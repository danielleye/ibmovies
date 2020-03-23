import React, { useState, useEffect } from 'react'
import './scroll-to-top.scss'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)
    
    const toggleVisibility = () => {
        const navbar = document.querySelector('.ibmovies__nav')
        const navBottomPosition = navbar.offsetTop + navbar.offsetHeight
        setIsVisible(window.pageYOffset > navBottomPosition)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        document.addEventListener('scroll', toggleVisibility)
        return () => {
            document.removeEventListener('scroll', toggleVisibility)
        }
    }, [isVisible])

    return (
        <div className="ibmovies__scroll-to-top">
            {isVisible && (
                <div className="btn-bg" onClick={scrollToTop}>
                    <svg
                        focusable="false"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                    >
                        <path d="M16 13L6 23 7.41 24.41 16 15.83 24.59 24.41 26 23 16 13zM4 7H28V9H4z"></path>
                    </svg>
                </div>
            )}
        </div>
    )
}
