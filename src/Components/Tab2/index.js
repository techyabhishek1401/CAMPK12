import React, { Component } from 'react'
import './tab2.css';
import Header from './Header';
import Section1 from './Section1'
import Section2 from './Section2'
export default class Index extends Component {
    render() {
        return (
            <div >
                <div className="section-1">
                    <div className="container">
                        <Header />
                        <Section1 />
                    </div>
                </div>
                <div className="section-2 px-3" style={{ position: "relative" }}>
                    <div className="container bg-white float-container" style={{ minHeight: "30vh" }}>
                        <Section2 />
                    </div>
                </div>

            </div>
        )
    }
}
