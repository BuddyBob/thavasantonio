import Card from './components//Cards/Card'
import NavBar from './components/NavBar/NavBar'
import React  from 'react'

export default function Home() {
    return (
        <div>
            {/* nav bar */}
            <div>
                <NavBar/>
            </div>
            {/* banner */}
            <div className="banner-container">
                <div className="inner-banner-container">
                    <h1>Thavas Antonio's Posts</h1>
                </div>
            </div>
            {/* post cards */}
            <div className="posts">
                <div className="card-container">
                    <Card className="card" img="none" date='April 28 2022' link="virtual-machine" title="Virtual Machine" description="A virtual machine is operating system inside your computer. This article will teach you how to create one."/>
                    <Card className="card" img="none" date="June 1 2022" link="list-comprehension-python" title="List Comprehension in Python" description="List Comprehension is a one line syntactic construct to generate a list "/>
                    <Card className="card" img="none" date="May 23 2022" link="vscode-extensions" title="My Favorite VS Code Extensions " description="Visual Studio Code is a very powerful code editor. Here are my favorite extensions I use to improve productivity."/>
                </div>
            </div>
 

        </div>
    )
}
