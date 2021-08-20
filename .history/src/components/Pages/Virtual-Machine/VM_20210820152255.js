import React from 'react'
import NavBar from '../../NavBar'
import CodeBlock from '../../CodeBlock'
import './VM.css'
export default function VM() {
    return (
        <div>
            <NavBar/>
            <div className="post-container">
                <div className="post-inner">
                    <div className="content">
                        <h2 className="post-title">How to Create a<br/> Virtual Machine Using Virtual Box</h2>
                        <hr/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda facere labore cum in sequi corrupti dolorem aliquid quibusdam ipsam id voluptatibus veritatis quidem explicabo impedit vel, dolorum tempora. Fuga, nam.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda facere labore cum in sequi corrupti dolorem aliquid quibusdam ipsam id voluptatibus veritatis quidem explicabo impedit vel, dolorum tempora. Fuga, nam.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda facere labore cum in sequi corrupti dolorem aliquid quibusdam ipsam id voluptatibus veritatis quidem explicabo impedit vel, dolorum tempora. Fuga, nam.
                        </p>
                        <CodeBlock language="javascript" codeString={"for i in range(20): print(&quot;how are your doing&quot;)"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
