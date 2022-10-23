import CodeBlock from '../../../CodeBlock'
import NavBar from '../../../NavBar/NavBar'
import React from 'react'
import vbBanner from '../../../../assets/VocabularyBot/vocab-banner.png'

export default function VB(){
    return (
        <div>
            <NavBar/>
            <div className="post-container">
                <div className="post-inner">
                    <div className="content">
                        <h1 className="post-title"> Vocabulary Bot, A Homework Buddy</h1>
                            <h2 className="post-subtitle">What is it?</h2>
                            <p>
                                The idea is very similar to my Mathletics Bot. I was assigned to do a certain amount of hours of vocabulary homework on a website called
                                vocabulary.com. This eventually became tedious as the answers became quite repetitive due to their lack of their data. That right their, lack of data, 
                                gave me the great idea of creating a bot to answer the questions for me.
                            </p>
                            <input width="100%" className="post-img" type="image" alt="img" src={vbBanner}/>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  