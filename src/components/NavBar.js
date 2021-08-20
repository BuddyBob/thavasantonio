import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <div>
            <header>
                <h4 className="logo">Logo</h4>
                <nav>
                    <ul className="nav_links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
