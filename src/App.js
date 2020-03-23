import React, { useReducer } from 'react'
import './app.scss'
import { initialState, reducer } from './Store.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Nav from './components/nav/Nav.js'
import Header from './components/header/Header.js'
import Inspiration from './components/inspiration/Inspiration.js'
import Gallery from './components/gallery/Gallery.js'
import EpisodeList from './components/episode-list/EpisodeList.js'
import ScrollToTop from './components/scroll-to-top/ScrollToTop.js'

import enData from './data/en_US.json'
import laData from './data/la_PG.json'
const languages = { en_US: enData, la_PG: laData }

export const LangContext = React.createContext(null)

export default function App() {
    const [lang, langDispatch] = useReducer(reducer, initialState)
    function getData(lang) {
        const data = languages[lang]
        const numberMap = {
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9,
            ten: 10,
        }
        data['episode-list'].forEach(ep => {
            ep.episode =
                numberMap[
                    ep.name
                        .split(' ')[1]
                        .replace(':', '')
                        .toLowerCase()
                ]
        })
        return data
    }
    const currentData = getData(lang.setLanguage)

    return (
        <LangContext.Provider value={{ lang, langDispatch }}>
            <Header />
            <Container fluid>
                <Row>
                    <main
                        className="ibmovies__main-container container"
                        id="main-content"
                    >
                        <Nav />
                        <h1>{currentData.heading}</h1>
                        <Inspiration info={currentData} />
                        <Gallery galleryList={currentData['gallery']} />
                        <EpisodeList
                            episodeList={currentData['episode-list']}
                        />
                        <ScrollToTop />
                    </main>
                </Row>
            </Container>
        </LangContext.Provider>
    )
}
