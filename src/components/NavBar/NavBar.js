import React, { createContext, useState }  from 'react'
import { Link } from 'react-router-dom'
import SubscribePopup from './Subscribe/Subscribe';
import "./NavBar.css"


export const SubscribeContext = createContext()
export default function NavBar() {
    const [subscribePop, setSubscribePop] = useState(false);

    return (
        <div>
            <header>
                <h4 className="logo">Logo</h4>
                <nav>
                    <ul className="nav-link-container">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/links">Links</Link></li>
                        
                        <SubscribeContext.Provider value={{ setSubscribePop }}>
                        {(() => {
                        if (localStorage.getItem('signedIn')) {
                        return (


                            <input type="submit" value="Subscribed" class="subscribed"/>
                            
                        
                            )
                        } else if (subscribePop) {
                        return (
                            <SubscribePopup />
                        )
                        } else if (!subscribePop && !localStorage.getItem('signedIn')) {
                        return (
                            <input type="submit" value="Subscribe" class="subscribe" onClick={ () => setSubscribePop(true)}/>
                        )
                        }
                        })()}
                        </SubscribeContext.Provider>

                    </ul>
                </nav>
            </header>
        </div>
    )
}
