import React, { Component } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Section2Crad from './Section2Crad'
const data = [
    {
        heading: "AI & Machine Learning: Code Intelligent Bots",
        level: "1",
        grades: "5-8",
        stats: "5.6k Happy Students ",
        duration: "12 Hours over 6 Sessions",
        weekend: "Weekend and Weekday Batches",
    },
    {
        heading: "AI & Machine Learning: Code Intelligent Bots",
        level: "1",
        grades: "5-8",
        stats: "5.6k Happy Students ",
        duration: "12 Hours over 6 Sessions",
        weekend: "Weekend and Weekday Batches",
    },
    {
        heading: "AI & Machine Learning: Code Intelligent Bots",
        level: "1",
        grades: "5-8",
        stats: "5.6k Happy Students ",
        duration: "12 Hours over 6 Sessions",
        weekend: "Weekend and Weekday Batches",
    },
    {
        heading: "AI & Machine Learning: Code Intelligent Bots",
        level: "1",
        grades: "5-8",
        stats: "5.6k Happy Students ",
        duration: "12 Hours over 6 Sessions",
        weekend: "Weekend and Weekday Batches",
    },
    {
        heading: "AI & Machine Learning: Code Intelligent Bots",
        level: "1",
        grades: "5-8",
        stats: "5.6k Happy Students ",
        duration: "12 Hours over 6 Sessions",
        weekend: "Weekend and Weekday Batches",
    },
    {
        heading: "AI & Machine Learning: Code Intelligent Bots",
        level: "1",
        grades: "5-8",
        stats: "5.6k Happy Students ",
        duration: "12 Hours over 6 Sessions",
        weekend: "Weekend and Weekday Batches",
    },
]
export default class Section2 extends Component {

    handleActive = (e) => {
        console.log("target:", e.target)
        let active = document.querySelector(".tab-active");
        console.log("active:", active)
        if (active) {
            active.classList.remove('tab-active');
        }

        e.target.classList.add('tab-active')
    }
    render() {
        return (
            <div>
                <div className="tab-container text-center">
                    <ul className="mx-auto">
                        <li className="px-md-3 px-sm-2 py-2" onClick={this.handleActive}>Grades 1-4</li>
                        <li className="px-md-3 px-sm-2 py-2 tab-active " onClick={this.handleActive}>Grades 5-8</li>
                        <li className="px-md-3 px-sm-2 py-2" onClick={this.handleActive}>Grades 9-12</li>
                    </ul>
                </div>
                <div className="container d-md-flex bf" style={{ justifyContent: "space-between" }}>
                    <p className="Showing-All-courses">Showing <span className="span-text"> All</span> courses for Grades <span className="span-text">  5-8</span> </p>

                    <DropdownButton title="All Courses" variant="white" className="All-Courses">
                        <Dropdown.Item  >Item-1</Dropdown.Item>
                        <Dropdown.Item >Item-2</Dropdown.Item>
                        <Dropdown.Item >Item-3</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        {data.map(item => {
                            return <div className="col-md-4 col-sm-12">
                                <Section2Crad details={item} />
                            </div>
                        })}
                    </div>

                </div>
            </div>
        )
    }
}
