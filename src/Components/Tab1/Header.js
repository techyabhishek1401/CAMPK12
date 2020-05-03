import React, { Component } from 'react'
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import logo from '../../Images/camp-k-12-logo.png';
import logo2 from '../../Images/camp-k-12-logo@2x.png';
import logo3 from '../../Images/camp-k-12-logo@3x.png';
import leaderboard from '../../Images/leaderboard.png';
import group1 from '../../Images/group-36.png';
import group2 from '../../Images/group-36@2x.png';
import group3 from '../../Images/group-36@3x.png';
import skillIcon from '../../Images/skill-icon.png';
import skillIcon2 from '../../Images/skill-icon@2x.png';
import skillIcon3 from '../../Images/skill-icon@3x.png';
// import kid from '../../Images/kid.jfif';
import kid from '../../Images/kid.PNG';
// import { shape } from '../../Images/Drop-down-arrow-icon-rounded.png';

export default class HeaderBootstrap extends Component {
    render() {
        return (
            <div className="mb-5">
                <Navbar bg="transparent" expand="lg" className="mb-5">
                    <Navbar.Brand href="/"><img src={logo}
                        srcSet={`${logo2} 2x, ${logo3}  3x`}
                        class="CampK12-Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto text-center ">
                            <Nav.Link href="#home" className="header-li">
                                <img src={leaderboard} class="Leaderboard" />
                            </Nav.Link>
                            <Nav.Link href="#link" style={{ position: 'relative', }} className="header-li">
                                <div>
                                    <img src={group1} srcSet={`${group2} 2x,${group3} 3x`} className="Group-36" />
                                    <p className="Oval"><span className="Oval-text">2</span></p>
                                </div>
                            </Nav.Link>
                            <Nav.Link className=" header-li " href="/tab">
                                <ul className="img-ul" style={{ backgroundColor: "#71aef3", borderRadius: "5px", overflow: "hidden" }}>
                                    <li className="img-li" style={{ padding: "5px" }}>  <img src={skillIcon} srcSet={`${skillIcon2} 2x,${skillIcon3} 3x`} className="Skill-Icon" /></li>
                                    <li className="img-li"><span className="Rectangle-100 mr-2">100</span></li>
                                    <li className="img-li">  <img src={kid} className="Bitmap" /></li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link>
                                <img src="https://dmconsulting.net/wp-content/uploads/2017/09/Drop-down-arrow-icon-rounded.png" className="Shape" />
                            </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
