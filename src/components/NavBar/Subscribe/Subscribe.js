import React, { useContext, useState } from 'react'
import { IoClose, IoArrowForward } from 'react-icons/io5'
import { SubscribeContext } from '../NavLinks'
import { UnsubscribeContext } from './Unsubscribe'
import { db } from '../../../firebase-config'
import { useAlert } from "react-alert";
import './Subscribe.css'

export default function SubscribePopup(props) {
    const { setUnsubscribePop } = useContext(UnsubscribeContext);
    const { setSubscribePop } = useContext(SubscribeContext);
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        // email validation
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!regex.test(text)){
            alert("Please enter a valid email address")
        }
        else{
            // subscribed
            if (props.subscribe){
                console.log("hello")
                db.collection('users').doc().set({
                    email: text,
                    user: "N/A"
                })
                setSubscribePop(false);
                localStorage.setItem('signedIn', true);
            
            }
            // unsubscribed
            else{
                var user = db.collection('users').where('email','==',text);
                user.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    doc.ref.delete();
                });
                }).catch(function(error) {
                console.log("Error getting documents: ", error);
                });
                setUnsubscribePop(false);
                window.location.reload(false);
                localStorage.setItem('signedIn', false);
            }
        }
    }
    return (
        <div>


            <div className="subscribePopup">
                {props.subscribe ? <IoClose aria-label="close button" className="class-btn close" style={{color: "white"}} onClick={() => setSubscribePop(false)} type="image"/> 
                : <IoClose aria-label="close button" className="class-btn close" style={{color: "white"}} onClick={() => setUnsubscribePop(false)} type="image"/>}
                <h1 className="subscribeTitle">{props.title}</h1>

                <form onSubmit={(e) => handleSubmit(e)} className="subscribeEmailContainer">
                    <input className="subscribeInput" type="text" onChange={handleChange} placeholder="Email" onFocus={(event) => event.target.select()}/>
                    <IoArrowForward className="submitEmail" type="image" onClick={ (e) => handleSubmit(e)}/>
                </form>


                {/* <GoogleButton className="google-signin-btn" onClick={() => {setSubscribePop(false); signInWithGoogle()}}/> */}
            </div>
        </div>
    )
}
