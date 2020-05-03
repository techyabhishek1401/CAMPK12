import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import HeaderRow1 from './HeaderRow1'
import IndexSection2 from './IndexSection2'
import IndexSection3 from './IndexSection3';
import Footer from '../Footer/index';
export default class index extends Component {
    render() {
        return (

            <div className="BG_Header " >
                <Container className="container container-fluid pt-3">
                    <Header />
                    <HeaderRow1 />
                    <IndexSection2 />
                    <IndexSection3 />
                </Container>
                <Footer />

            </div>
        )
    }
}
