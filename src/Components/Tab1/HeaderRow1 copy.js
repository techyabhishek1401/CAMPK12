import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderPhoto from '../../Images/header-photo.png';
import HeaderPhoto2 from '../../Images/header-photo@2x.png';
import HeaderPhoto3 from '../../Images/header-photo@3x.png';
import coin from '../../Images/camp-k-12-coins-copy-2.png';
import rightArrow from '../../Images/shape_3.png';
import leftArrow from '../../Images/shape_2.png';


import SliderCard from './Card/SliderCard';
import card1 from '../../Images/group-14.png'
import card2 from '../../Images/icon_6.png'
import card3 from '../../Images/icon_7.png'
import card4 from '../../Images/group-3.png'

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
        name: "Mixed Reality (AR/VR)",
        image: card3
    },
    {
        name: "Machine Learning (AI)",
        image: card4
    },
]


export default class HeaderRow1 extends Component {

    render() {

        return (

            <>
                <Row className="">
                    <Col className="pl-md-5">
                        <h1 className="Welcome-to-the-schoo">
                            Welcome to the <br />school of the future.
                    </h1>
                        <h5 className="Cutting-edge-technol">
                            Cutting-edge technology courses for Ages 8 - 18.
                         Unlock <span className="text-style-1">21st century skills</span> , earn  <img src={coin} className="CampK12Coins-Copy-2"></img>    , and build
                          a college-ready portfolio as you learn.
                     </h5>
                    </Col>
                    <Col className=" text-center ">
                        <img src={HeaderPhoto} srcSet={`${HeaderPhoto2} 2x,${HeaderPhoto3} 3x`} className="Header-Photo" />
                    </Col>
                </Row>
                <Row className="What-do-you-want-to text-center my-5">
                    <h1 className=" text-center mt-5 mx-auto">
                        What do you want to learn?
                    </h1>
                </Row>
                <Container className="" >
                    {/* <Slider /> */}
                    <Row className="text-center">
                        <Col md="1" xs="1" className="text-center d-flex align-items-center ">

                            <div className="Background-Color text-center mx-auto d-flex align-items-center" style={{ justifyContent: "center", cursor: "pointer" }}>
                                <img src={rightArrow} />
                            </div>
                        </Col>
                        <Col className="d-flex" style={{ overflow: "hidden" }} md="9" xs="9">
                            {
                                data.map(card => {
                                    return <Col> <SliderCard name={card.name} image={card.image} /></Col>
                                })
                            }
                        </Col>

                        <Col className="text-center d-flex align-items-center" md="1" xs="1">
                            <div className="Background-Color text-center mx-auto d-flex align-items-center" style={{ justifyContent: "center", cursor: "pointer" }}>
                                <img src={leftArrow} />
                            </div>
                        </Col>
                    </Row>


                </Container>

            </>
        )
    }
}
