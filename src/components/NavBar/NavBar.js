import React  from 'react'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import "./NavBar.css"



export default function NavBar() {

    return (
        <div>
            <header className="nav-link-container">
                <h4 className="logo">Logo</h4>
                <DesktopNav/>
                <MobileNav/>
            </header>
        </div>
    )
}
