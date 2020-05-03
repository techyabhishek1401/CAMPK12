import React from 'react';
import { Card } from 'react-bootstrap'




export default function SliderCard({ name, image }) {
    return (
        <div className="Rectangle-16   align-items-center mr-4 col p-0 " >
            <div className=" mx-auto p-3">
                <img src={image} className="Group-14 align-middle" />
                <p className="Sample-text mt-2 ">
                    {name}
                </p>
            </div>


        </div>
    )
}


