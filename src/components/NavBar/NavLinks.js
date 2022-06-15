import React, { createContext, useState }  from 'react'
import { Link } from 'react-router-dom'
import SubscribePopup from './Subscribe/Subscribe';
import Unsubscribe from './Subscribe/Unsubscribe';
import './NavBar.css'

export const SubscribeContext = createContext()
export default function Navlinks() {
    const [subscribePop, setSubscribePop] = useState(false);
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/links">Links</Link></li>
            
            <SubscribeContext.Provider value={{ setSubscribePop }}>
                {(() => {
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
                        <li>
                        <input type="submit" value="Subscribe" className="subscribe" onClick={ () => setSubscribePop(true)}/>
                        </li>
                    )
                }
                })()}
            </SubscribeContext.Provider>
        </ul>
    )
}
