import React, { createContext, useState }  from 'react'
import { Link } from 'react-router-dom'
import { signInWithGoogle } from '../../firebase-config';
import "./NavBar.css"

export default function NavBar() {
    function handleSignIn() {
        signInWithGoogle();
        
    }
    return (
        <div>
            <header>
                <h4 className="logo">Logo</h4>
                <nav>
                    <ul className="nav-link-container">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/links">Links</Link></li>
                        <input type="submit" value="Subscribe" class="subscribe" onClick={ () => handleSignIn()}/>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
