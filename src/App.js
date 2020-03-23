import React, { useReducer } from 'react'
import './app.scss'
import { initialState, reducer } from './Store.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Header from './components/header/Header.js'
import Inspiration from './components/inspiration/Inspiration.js'
import Gallery from './components/gallery/Gallery.js'
import EpisodeList from './components/episode-list/EpisodeList.js'

import enData from './data/en_US.json'
import laData from './data/la_PG.json'
const languages = { en_US: enData, la_PG: laData }

export const LangContext = React.createContext(null)

export default function App() {
    const [lang, langDispatch] = useReducer(reducer, initialState)
    const currentData = languages[lang.setLanguage]
    return (
        <LangContext.Provider value={{ lang, langDispatch }}>
            <Header />
            <Container fluid>
                <Row>
                    <main
                        className="ibmovies__main-container container"
                        id="main-content"
                    >
                        <h1>{currentData.heading}</h1>
                        <Inspiration info={currentData} />
                        <Gallery galleryList={currentData['gallery']} />
                        <EpisodeList
                            episodeList={currentData['episode-list']}
                        />
                    </main>
                </Row>
            </Container>
        </LangContext.Provider>
    )
}
