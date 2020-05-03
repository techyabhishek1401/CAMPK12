import React, { Component } from 'react'
import shield from '../../Images/shield-3.png'
import coin from '../../Images/camp-k-12-coins-copy-2.png'
export default class IndexSection2 extends Component {
    render() {
        return (
            <div className="text-center mt-5">
                <p className=" px-md-3 d-md-inline-block text-center align-items-center">
                    <span className="Upcoming-online-cour mx-auto d-inline-block" >
                        Upcoming online courses
                    </span>
                    <span className=" Rectangle LIVE px-3 py-2 ml-md-4 ml-sm-2">. Live</span>
                </p>


                <div className="row Learn-from-live-teac mx-auto container">
                    <p className="Learn-from-live-teac mx-auto ">
                        Learn from live teachers, not pre-recorded videos, in our intelligent virtual classrooms.
                </p>
                    <div className="col-sm-12 col-md-6 d-flex flex-row-reverse show-sm" >

                        <p> = 21st century skills you’ll unlock</p>
                        <img src={shield} class="shield-3" />
                    </div>
                    <div className="col-sm-12 col-md-6 d-flex text-center " style={{ justifyContent: "center" }} >
                        <img src={coin} class="shield-3"></img>
                        <p> = coins you’ll earn for completion</p>
                    </div>
                </div>

            </div>
        )
    }
}
