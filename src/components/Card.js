import React from 'react'
import { Link } from 'react-router-dom'
export default function Card(props) {
    return (
            <div className="card">
                <div className="box">
                    <div className="content">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <Link to={"/"+props.link} className="card-button" href="#">Read More</Link>
                    </div>
                </div>
            </div>
    )
}
