import React from 'react'

export default function Section1Card({ details }) {
    return (
        <div>
            <div>
                <img src={details.image} className="Group-40 mt-4" />
                <p className="Learn-interactively mt-2">{details.heading}</p>
                <p className="card-text">
                    {details.text}
                </p>
            </div>
        </div>
    )
}
