import React, { Component } from 'react'

import fill from '../../../Images/fill-1.png'
import icon from '../../../Images/icon_8.png'
import skill from '../../../Images/skill-icon.png'
import coin from '../../../Images/camp-k-12-coins-copy-2.png'
import shape1 from '../../../Images/combined-shape.png'
import shape2 from '../../../Images/icon_5.png'
import shape3 from '../../../Images/icon.png'
export default class UpcomingCard extends Component {
    render() {
        const { details } = this.props;
        return (
            <div className="card mx-auto up-card" >
                <img src={details.image} className="bg-img" />
                <div className="container">
                    <h1 className="Course-Name mt-2"> {details.heading}</h1>
                    <hr />
                    <div className=" row">
                        <div className="col d-flex" style={{ justifyContent: "center" }}>
                            <img src={fill} class="Fill-1" />
                            <span className="GRADES ml-1"> GRADES</span>
                        </div>
                        <div className="col d-flex align-items-center" style={{ justifyContent: "center" }}>
                            <img src={icon} class="Fill-1" />
                            <span className="GRADES ml-1">PRE-REQ</span>
                        </div>
                    </div>
                    <div className=" row">
                        <div className="col text-center ">
                            {details.grades}
                        </div>
                        <div className="col text-center">
                            {details.yes}

                        </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                        <img src={skill} class="Skill-Icon2" />
                        <span className="TAG-TEXT px-1">Android</span>
                        <span className="TAG-TEXT px-1">UI/ux</span>
                        <span className="TAG-TEXT px-1">+4</span>
                    </div>
                    <div className="d-flex mt-1"  >
                        <img src={coin} class="CampK12Coins-Copy-3 mr-4" />
                        <span className="TAG-TEXT px-1" style={{ backgroundColor: "#FFF4D6", color: "#FAD97A" }}>+1000</span>
                    </div>
                    <hr />

                    <div>
                        <div className='d-flex align-items-center'>
                            <img src={shape1} class="Combined-Shape mr-3" />
                            <span className="Start-Date"> 17th Feb (in 4 days)</span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <img src={shape2} class="Combined-Shape mr-3" />
                            <span className="Start-Date"> Mon, Tue & Wed</span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <img src={shape3} class="Combined-Shape mr-3" />
                            <span className="Start-Date"> 6:00PM to 7:00PM</span>
                        </div>

                    </div>
                    <hr />
                    <div className="d-flex align-items-center mb-3" style={{ justifyContent: "space-between" }}>
                        <span className="Rs-6000">Rs. 6000,</span>
                        <button className="enroll">Enroll</button>
                    </div>
                </div>

            </div>
        )
    }
}
