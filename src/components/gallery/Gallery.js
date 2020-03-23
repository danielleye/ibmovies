import React from 'react'
import Carousel from './Carousel.js'
import './gallery.scss'

export default function Gallery({ galleryList }) {
    return (
        <section className="ibmovies__gallery">
            <h2 id="gallery">Gallery</h2>
            <Carousel galleryList={galleryList} />
        </section>
    )
}
