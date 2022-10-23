import './Projects.css'

import Card from '../../Cards/Card'
import NavBar from '../../NavBar/NavBar'
// QuickType Images
import QuickTypePreview from '../../../assets/QuickType/QuickTypePreview.png'
import React from 'react'

export default function Projects() {
  return (
    <div>
        <div>
            {/* nav bar */}
            <div>
                <NavBar/>
            </div>
            {/* banner */}
            <div className="banner-container">
                <div className="inner-banner-container">
                    <h1>Thavas Antonio's Projects</h1>
                </div>
            </div>
            {/* post cards */}
            <div className="posts">
                <div className="card-container">
                    <Card type="project" img={QuickTypePreview} className="card" date='December 3 2020' link="projects/fundl" title="Fundl" description="Gotten' tired of Worlde's insane words like imbue? Dont worry &#128543;, I created a wordle for teens called Fundl (new share feature)"/>
                    <Card type="project" img={QuickTypePreview} className="card" date="Febuary 21 2021" link="projects/quick-type" title="Quick Type" description="Slow at typing? Improve your speed by using Quick Type, the best speed typing website out there. "/>
                    <Card type="project" img={QuickTypePreview} className="card" date="June 15 2021" link="projects/mathletics-bot" title="Mathletics Bot" description={`Mathletics.com is a homework website assigned by teachers. Using Selenium, I was able to automate the 1 hour process to complete my homework for me.`}/>
                    <Card type="project" img={QuickTypePreview} className="card" date="October 11 2020" link="projects/vocab-bot" title="Vocabulary Bot" description="In 7th grade I was told to do 1 hour of Vocabulary.com as homework every week. Obviously I wasn't going to do that... "/>
                </div>
            </div>
 

        </div>
    </div>
  )
}
