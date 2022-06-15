import React from 'react'
import Card from '../../Cards/Card'
import NavBar from '../../NavBar/NavBar'
import './Projects.css'
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
                    <Card className="card" date='December 3 2020' link="virtual-machine" title="Fundl" description="Gotten' tired of Worlde's insane words like imbue? Dont worry &#128543;, I created a wordle for teens called Fundl (new share feature)"/>
                    <Card className="card" date="Febuary 21 2021" link="list-comprehension-python" title="Quick Type" description="Slow at typing? Improve your speed by using Quick Type, the best speed typing website out there. "/>
                    <Card className="card" date="June 15 2021" link="vscode-extensions" title="Mathletics Bot" description={`${<a>Mathletics.com</a>} is a homework website assigned by teachers. Using Selenium, I was able to automate the 1 hour process to complete my homework for me.`}/>
                    <Card className="card" date="October 11 2020" link="vscode-extensions" title="Mathletics Bot" description="In 7th grade I was told to do 1 hour of Vocabulary.com as homework every week.  "/>
                </div>
            </div>
 

        </div>
    </div>
  )
}
