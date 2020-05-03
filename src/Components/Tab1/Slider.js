import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import './slider.css'

import SliderCard from './Card/SliderCard';
import card1 from '../../Images/group-14.png'
import card2 from '../../Images/icon_6.png'
import card3 from '../../Images/icon_7.png'
import card4 from '../../Images/group-3.png'
import rightArrow from '../../Images/shape_3.png';
import leftArrow from '../../Images/shape_2.png';

const data = [
    {
        name: "Web Development",
        image: card1
    },
    {
        name: "Mobile App Development",
        image: card2
    },
    {
        name: "Mixed Reality(AR/VR)",
        image: card3
    },
    {
        name: "Machine Learning(AI)",
        image: card4
    },
    {
        name: "Web Development",
        image: card1
    },
    {
        name: "Mobile App Development",
        image: card2
    },
    {
        name: "Mixed Reality(AR/VR)",
        image: card3
    },
    {
        name: "Machine Learning(AI)",
        image: card4
    },
]

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevDisable: true,
            nextDisable:
                this.refs && this.refs.offsetWidth >= this.refs.scrollWidth ? true : false
        };
    }

    componentDidMount() {
        this.checkButtons(this.refs.offsetWidth, this.refs.scrollWidth);
    }
    checkButtons = (offsetWidthValue, scrollWidthValue) => {
        this.setState({
            prevDisable: this.refs.scrollLeft <= 0 ? true : false,
            nextDisable:
                this.refs.scrollLeft + offsetWidthValue >= scrollWidthValue ? true : false
        });
    };

    render() {
        const offsetWidthValue = this.refs.offsetWidth,
            scrollWidthValue = this.refs.scrollWidth;
        return (
            <Row className="text-center " >
                <Col md="1" xs="1" className="text-center d-flex align-items-center ">

                    <div style={{ justifyContent: "center", cursor: "pointer" }}
                        className={`Background-Color text-center mx-auto d-flex align-items-center btn1 prev ${this.state.prevDisable ? "disable" : ""}`}
                        disabled={this.state.prevDisable}
                        onClick={() => {
                            this.refs.scrollLeft -= offsetWidthValue;
                            this.checkButtons(offsetWidthValue, scrollWidthValue);
                        }}>
                        <img src={rightArrow} />
                    </div>
                </Col>
                <Col className="d-flex" style={{ overflow: "hidden" }} md="9" xs="9" ref={el => {
                    this.refs = el;
                }}


                >
                    {
                        data.map((card, index) => {
                            return <SliderCard name={card.name} image={card.image} key={index} />
                        })
                    }
                </Col>

                <Col md="1" xs="1" disabled={this.state.nextDisable}
                    className={`text-center d-flex align-items-center btn1 next ${this.state.nextDisable ? "disable" : ""}`}
                    onClick={() => {
                        this.refs.scrollLeft += offsetWidthValue;
                        this.checkButtons(offsetWidthValue, scrollWidthValue);
                    }}>
                    <div className="Background-Color text-center mx-auto d-flex align-items-center" style={{ justifyContent: "center", cursor: "pointer" }}>
                        <img src={leftArrow} />
                    </div>
                </Col>
            </Row>

        )
    }
}
