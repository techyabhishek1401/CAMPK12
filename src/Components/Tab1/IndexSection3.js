import React, { Component } from 'react'
import UpcomingCard from './Card/UpcomingCard'
import mobile from '../../Images/mobile.PNG'
import web from '../../Images/web.PNG'
import vr from '../../Images/vr.PNG'
const data = [
    {
        heading: "Android App Development Level 1",
        grades: "4 - 8",
        yes: "YES",
        content1: "Android",
        content2: "ui/ux",
        contentRating: "+4",
        image: mobile
    },
    {
        heading: "Web Development Level 1",
        grades: "4 - 12",
        yes: "NO",
        content1: "html",
        content2: "css",
        contentRating: "+1",
        image: web
    },
    {
        heading: "Virtual Reality Level 1",
        grades: "5 - 12",
        yes: "YES",
        content1: "VR",
        content2: "javascript",
        contentRating: "+4",
        image: vr
    },

]
export default class IndexSection3 extends Component {
    render() {
        return (
            <div className="container " style={{ marginTop: "3rem" }}>
                <div className="row">
                    {
                        data.map(item => {
                            return <div className="col-sm-10 col-md-4 mt-5 mx-auto text-center " style={{ justifyContent: "center" }} >
                                <UpcomingCard details={item} />
                            </div>
                        })
                    }

                </div>

            </div>
        )
    }
}
