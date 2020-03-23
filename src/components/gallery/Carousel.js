import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function GalleryCarousel({ galleryList }) {
    return (
        <Carousel className="ibmovies__gallery__carousel">
            {galleryList.map((item, index) => {
                return (
                    <Carousel.Item
                        key={index}
                        className="ibmovies__gallery__carousel__item"
                    >
                        <img
                            className="d-block h-100"
                            src={item.src}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>{item.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}
