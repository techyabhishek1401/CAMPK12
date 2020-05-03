import React, { Component } from 'react'
import Section1Card from './Section1Card';
import girl from '../../Images/girl.png'
import house from '../../Images/house.png'
import medal from '../../Images/medal.png'
import tablet from '../../Images/tablet.png'
const data = [
    {
        image: girl,
        heading: "Learn interactively.",
        text: "LIVE online sessions with our expert mentors. See a demo."
    },
    {
        image: house,
        heading: "Learn from anywhere.",
        text: "Convenience and safety for you and your child."
    },
    {
        image: medal,
        heading: "Learn from the pioneers.",
        text: "We’ve been teaching kids to code since 2010.  Read more."
    },
    {
        image: tablet,
        heading: "Learn by doing.",
        text: "100% project-based curriculum. Solve real-world problems. "
    }
]
export default class Section1 extends Component {
    render() {
        return (
            <div className="p-md-5 p-sm-3 ht">
                <h1 className="ONLINE-COURSES"> ONLINE COURSES</h1>
                <div className="row">
                    {
                        data.map(item => {
                            return <div className="col-sm-12 col-md-3">
                                <Section1Card details={item} />
                            </div>
                        })
                    }

                </div>
                <div className="row mt-4 mb-sm-5  ">
                    <div className="col-sm-12 col-md-3 text-center">
                        <button className=" Color-Copy-2 BOOK-A-FREE-TRIAL d-flex align-items-center  mx-auto" style={{ justifyContent: "center", border: "none" }}>
                            <span> BOOK A FREE TRIAL</span>
                        </button>
                    </div>
                    <div className="col-sm-12 col-md-3"></div>
                    <div className="col-sm-12 col-md-3"></div>

                </div>
                <div style={{ height: "70px" }}>

                </div>
            </div>
        )
    }
}
