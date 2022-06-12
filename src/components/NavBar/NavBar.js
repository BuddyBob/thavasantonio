import React, { createContext, useState }  from 'react'
import { Link } from 'react-router-dom'
import SubscribePopup from './Subscribe/Subscribe';
import Unsubscribe from './Subscribe/Unsubscribe';
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
                            console.log(localStorage.getItem('signedIn'), subscribePop)
                            //if signed in, show subbed button (unsubscribe option)
                            if (localStorage.getItem('signedIn') === "true") {
                            return (                                
                                    <li>
                                        <Unsubscribe/>
                                    </li>
                                )
                            } 
                            // if subscribe popup true and not signed in, show subscribe popup
                            else if (subscribePop) {
                                return (
                                    <SubscribePopup title="Enter an Email" subscribe={true}/>
                                )
                            } 
                            //if subscribe popup not showing and not signed in, show subscribe button
                            else if (subscribePop == false && localStorage.getItem('signedIn') !== "true") {
                                
                                return (
                                    <input type="submit" value="Subscribe" className="subscribe" onClick={ () => setSubscribePop(true)}/>
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
