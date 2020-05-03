import React, { Component } from 'react'


import shape1 from '../../Images/combined-shape.png'
import shape2 from '../../Images/icon_5.png'
import shape3 from '../../Images/icon.png'
import off from '../../Images/off.PNG'
export default class UpcomingCard extends Component {
    render() {
        const { details } = this.props;
        return (
            <div className="card mr-md-3 mx-auto mb-5" style={{ width: "90%", borderRadius: '5px', overflow: "hidden" }}>
                <div style={{ height: "100px", backgroundColor: "#D7F5FE" }}>

                </div>
                <div className="container">
                    <h1 className="Course-Name mt-2"> {details.heading}</h1>

                    <div className=" row">
                        <div className="col text-left" style={{ fontSize: "13px" }} >
                            <span className="GRADES "> LEVELS</span> {details.level}
                        </div>
                        <div className="col text-left" style={{ fontSize: "13px" }} >
                            <span className="GRADES ">GRADES</span> {details.grades}
                        </div>
                    </div>

                    <hr />


                    <div>
                        <img src={shape1} class="Combined-Shape mr-4" />
                        <span className="Start-Date"> {details.stats}</span>
                    </div>
                    <div>
                        <img src={shape2} class="Combined-Shape mr-4" />
                        <span className="Start-Date"> {details.duration}</span>
                    </div>
                    <div>
                        <img src={shape3} class="Combined-Shape mr-4" />
                        <span className="Start-Date"> {details.weekend}</span>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center mb-2" style={{ justifyContent: "space-between" }}>
                        <span className="Rs-6000">&#8377; 9999 <del className="text-muted str">12000</del></span>
                        {/* <button className="enroll"></button> */}
                        <img src={off} className="enroll" height="24px" />
                    </div>
                </div>

            </div>
        )
    }
}
