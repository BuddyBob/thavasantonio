import React from 'react'
import { Link } from 'react-router-dom'
export default function Card(props) {
    return (
            <div className="card">
                <div className="box">
                    <div className="content">
                        <h3>{props.title}</h3>
                        <div className="description">
                            <p>{props.description}</p>
                        </div>
                        <Link to={"/"+props.link} className="card-button" href="#">Read More</Link>
                        <p style={{fontSize:"15px", position:"relative", bottom:"14px"}}>{props.date}</p>
                    </div>
                </div>
            </div>
    )
}
