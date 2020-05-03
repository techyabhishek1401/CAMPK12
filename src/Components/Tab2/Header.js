import React from 'react'

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
export default function Header() {
    return (
        <div className="mb-5">
            <Navbar bg="transparent" expand="lg" className="mb-md-5">
                <Navbar.Brand href="/"><img src={logo}
                    srcSet={`${logo2} 2x, ${logo3}  3x`}
                    class="CampK12-Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" ">
                        <Nav.Link href="#home" className="header-li ">
                            <p className="nav-head my-auto">ONLINE COURSES</p>
                            <div className="span-bt"></div>
                        </Nav.Link>
                        <Nav.Link href="#link" >
                            <p className="nav-head my-auto">OFFLINE CAMPS</p>
                            <div className="span-bt"></div>
                        </Nav.Link>
                        <Nav.Link href="#refer" className=" header-li ">
                            <p className="nav-head my-auto">REFER & EARN</p>
                            <div className="span-bt"></div>
                        </Nav.Link>
                    </Nav>

                    <Nav className="ml-auto text-center">
                        <Nav.Link href="#home" className="header-li ">
                            <img src={leaderboard} className="Leaderboard" />
                        </Nav.Link>
                        <Nav.Link href="#link" >
                            <div className="Rectangle-17 align-items-center d-flex mx-sm-auto" style={{ justifyContent: "center" }}>
                                <span className="FREE-TRIAL">FREE TRIAL</span>
                            </div>


                        </Nav.Link>
                        <Nav.Link className=" header-li ">
                            <div className="Rectangle-login align-items-center d-flex" style={{ justifyContent: "center" }}>
                                <span className="FREE-TRIAL ">LOG IN</span>
                            </div>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
