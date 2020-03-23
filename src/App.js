import React, { useReducer } from 'react'
import { initialState, reducer } from './Store.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Header from './components/header/Header.js'

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
                    <h1>{currentData.heading}</h1>
                </Row>
            </Container>
        </LangContext.Provider>
    )
}
