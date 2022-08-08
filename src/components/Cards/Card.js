import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoImage } from 'react-icons/io5'
import Github from '../../assets/Links/Github.png'
import './Card.css'
export default function Card(props) {
    const [preview, setPreview] = useState(false)
    return (
        <div className="card">
            <div className="box">
                <div className="content">
                    {/* put image on top of card with inline css */}
                    <h3>{props.title}</h3>
                    <div className="description">
                        <p>{props.description}</p>
                    </div>
                    <Link to={"/"+props.link} className="card-button" href="#">Read More</Link>
                    <p style={{fontSize:"15px", position:"relative", bottom:"14px"}}>{props.date}</p>
                </div>
            </div>
            {props.type === "project" && <IoImage className="preview-card-image-icon" onClick={() => setPreview(!preview)}/>}
            {preview && <input type="image" src={props.img} aria-label='Image' className="preview-card-image-input"/>}
        </div>
    )
}
