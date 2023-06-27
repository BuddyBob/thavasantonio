import CodeBlock from '../../../CodeBlock'
import NavBar from '../../../NavBar/NavBar'
import React from 'react'
import gHub from '../../../../assets/Links/Github.png'
import quickType from '../../../../assets/QuickType/QuickTypePreview.png'

export default function QT(){
    return (
        <div>
            <NavBar/>
            <div className="post-container">
                <div className="post-inner">
                    <div className="content">
                        <h1 className="post-title"> Quick Type <input type="image" width="40px" src={gHub} alt="GitHub" className="github-link" onClick={() => window.open("https://github.com/BuddyBob/quick-type")}/></h1>
                            <h2 className="post-subtitle">Speed Typing Website </h2>
                            <p>
                            I created Quick Type because, as someone who spends a significant amount of time typing, 
                            I understand the importance of being able to type quickly and efficiently.
                            Quick Type is a user-friendly speed typing website built using React. 
                            <br/>
                            Its primary goal is to help users improve their typing skills and become more productive.
                            With its intuitive and simple interface, Quick Type provides an enjoyable and engaging typing experience for users of all levels.
                            Whether you're a beginner looking to increase your typing speed or an experienced typist aiming for mastery,
                            Quick Type offers a variety of interactive exercises to cater to your needs.

                            </p>
                            <hr/>
                            <p>
                            <strong className="link" onClick={() => window.open("https://quick-type.herokuapp.com/#/")}>quick-type.com</strong>
                            </p>
                            <input style={{"margin-top":"-20px"}} width="50%" className="post-img" type="image" alt="img" src={quickType}/>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  