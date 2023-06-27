import './About.css'

import NavBar from '../../NavBar/NavBar'
import React from 'react'

export default function About() {
  return (
    <div>
        <NavBar/>
        <div className="banner-container">
          <div className="inner-banner-container">
            <h1>About</h1>
          </div>
		    </div>

      <div className="post-container">
        <div className="post-inner">
          <div className="content">
            <p>
              Hi, I'm Thavas Antonio. Im in high school and currently attending Saint Ignatius College Prep where I am on the soccer team and part of the cs club.
              I started programming in the 6th grade when covid hit and I was stuck at home. This led me to grow a deep passion for all things technology as I 
              took on several projects and learned a variety of languages. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
