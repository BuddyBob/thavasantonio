import React, { useContext, useState } from 'react'
import { IoClose, IoArrowForward } from 'react-icons/io5'
import { SubscribeContext } from '../NavBar'
import { db } from '../../../firebase-config'
import { Alert } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import Slide from "@material-ui/core/Slide";
import './Subscribe.css'
import GoogleButton from 'react-google-button'
import { signInWithGoogle } from '../../../firebase-config'

export default function SubscribePopup() {
    const { setSubscribePop } = useContext(SubscribeContext);
    const [error, setError] = useState(false)
    const [validateEmail, setValidateEmail] = useState(false);
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        // email validation
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!regex.test(text)){
            setError(true);
        }
        else{
            console.log("hello")
            db.collection('users').doc().set({
                email: text,
                user: "N/A"
            })
            setValidateEmail(true); 
            setSubscribePop(false);
            localStorage.setItem('signedIn', true);
        }
    }

    return (
        <div>
            {validateEmail ? 
            <div>
            </div> 
            : null}
            
            {error ? <div style={{ willChange: "transform" }}>
            <Snackbar className="error-popup" 
                TransitionComponent={props => <Slide {...props} direction="up" />}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={true} autoHideDuration={7000} 
                onClose={() => setError(false)}>

                <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
                Check your email
                </Alert>

            </Snackbar>
            </div> : null}

            <div className="subscribePopup">
                <IoClose aria-label="close button" className="class-btn close" style={{color: "white"}} onClick={() => setSubscribePop(false)} type="image"/> 
                <h1 className="subscribeTitle">Enter Email or Use Google</h1>
                <form onSubmit={(e) => handleSubmit(e)} className="subscribeEmailContainer">
                    <input className="subscribeInput" type="text" onChange={handleChange} placeholder="Email" onFocus={(event) => event.target.select()}/>
                    <IoArrowForward className="submitEmail" type="image" onClick={ (e) => handleSubmit(e)}/>
                </form>
                <GoogleButton className="google-signin-btn" onClick={() => {signInWithGoogle();}}/>
            </div>
        </div>
    )
}
