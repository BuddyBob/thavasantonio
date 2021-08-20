import React from 'react'
import NavBar from '../../NavBar'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import  { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './VM.css'
const codeString = '(num) => num + 1';
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
                        <SyntaxHighlighter language="javascript" style={xonokai}>
                        {codeString}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    )
}
