import React, { useContext, useState } from 'react'
import { IoClose, IoArrowForward } from 'react-icons/io5'
import { SubscribeContext } from '../NavLinks'
import { db,logInWithEmailAndPassword, registerWithEmailAndPassword } from '../../../firebase-config'
import './Subscribe.css'

export default function SubscribePopup(props) {
    const { setSubscribePop } = useContext(SubscribeContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function handleSubmit(e){
        e.preventDefault();
        // email validation
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!regex.test(email) || password.length <= 6) {
            alert("Check your email or password (6+ chars)")
        }
        else{
            // subscribed
            db.collection("users").where("email", "==", email)
                .get()
                .then((querySnapshot) => {
                    if (querySnapshot.size > 0){

                        logInWithEmailAndPassword(email, password)
                        localStorage.setItem('signedIn', true);
                        setSubscribePop(false);
                    }
                    else{
                        registerWithEmailAndPassword(email, password)
                        localStorage.setItem('signedIn', true);
                        setSubscribePop(false);
                    }
                })
        }
    }
    return (
        <div>


            <div className="subscribePopup">
                <IoClose aria-label="close button" className="class-btn close" style={{color: "white"}} onClick={() => setSubscribePop(false)} type="image"/> 
                <h1 className="subscribeTitle">{props.title}</h1>

                <form onSubmit={handleSubmit} className="subscribeAuthContainer">
                    <input className="subscribeInput" type="text" onChange={e => setEmail(e.target.value)} placeholder="Email" onFocus={(event) => event.target.select()}/>
                    <input className="subscribeInput" type="text" onChange={e => setPassword(e.target.value)} placeholder="Password" onFocus={(event) => event.target.select()}/>
                    <IoArrowForward className="submitAuth" type="image" onClick={handleSubmit}/>
                </form>
            </div>
        </div>
    )
}
