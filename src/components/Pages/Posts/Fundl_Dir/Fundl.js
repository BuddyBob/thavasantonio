import CodeBlock from '../../../CodeBlock'
import NavBar from '../../../NavBar/NavBar'
import React from 'react'
import fundl from '../../../../assets/Fundl/fundl-pic.png'
import gHub from '../../../../assets/Links/Github.png'

export default function Fundl(){
    return (
        <div>
            <NavBar/>
            <div className="post-container">
                <div className="post-inner">
                    <div className="content">
                        <h1 className="post-title"> Fundl, a Kids Wordle <input type="image" width="40px" src={gHub} alt="GitHub" className="github-link" onClick={() => window.open("https://github.com/BuddyBob/fundl")}/></h1>
                            <h2 className="post-subtitle">Why make this</h2>
                            <p>
                                When Wordle came out, it was overall a very basic game. While the puzzle's was tricky, some of the words in the new york times worlde database
                                can be fairly difficult for someone like my brother to solve. So I decided to make a wordle game for kids. It uses a hand picked word database
                                that make solving the puzzles possible for younger kids. In addition to this, I added a share feature where users can create their own wordle words
                                and have their friends guess it via a simple copy and pasted link. 
                            </p>
                            <hr/>
                            <p>
                            <strong className="link" onClick={() => window.open("https://fundl.herokuapp.com/#/")}>fundl.com</strong>
                            </p>
                            <input style={{"margin-top":"-20px"}} width="50%" className="post-img" type="image" alt="img" src={fundl}/>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  
