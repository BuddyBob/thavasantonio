import React from 'react'
import Card from './components/Card'
import NavBar from './components/NavBar'
export default function Home() {
    return (
        <div>
            {/* nav bar */}
            <div>
                <NavBar/>
            </div>
            {/* banner */}
            <div className="img-container">
                <div className="inner-container">
                    <h1>Thavas Antonio's Blog</h1>
                    <h2>A place to get your daily programming info</h2>
                </div>
            </div>
            {/* post cards */}
            <div className="posts">
                <div className="card-container">
                    <Card date='April 28 2021' link="virtual-machine" title="&ensp;&nbsp;Virtual &ensp;Machine" description="A virtual machine is operating system inside your computer. This article will teach you how to create one."/>
                    <Card title="Post 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?"/>
                    <Card title="Post 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?"/>
                </div>
            </div>

        </div>
    )
}
