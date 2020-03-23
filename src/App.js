import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Header from './components/header/Header.js'

export default function App() {
    return (
        <React.Fragment>
            <Header />
            <Container fluid>
                <Row></Row>
            </Container>
        </React.Fragment>
    )
}
