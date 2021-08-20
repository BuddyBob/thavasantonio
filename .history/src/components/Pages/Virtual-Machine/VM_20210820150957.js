import React from 'react'
import NavBar from '../../NavBar'
import { CodeBlock, a11y-dark } from "react-code-blocks";
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
                        <CodeBlock
                            text={"print('hello world')"}
                            language={"python"}
                            showLineNumbers={true}
                            theme={a11y-dark}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
