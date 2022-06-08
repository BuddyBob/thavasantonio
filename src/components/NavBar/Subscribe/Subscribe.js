import React, { useContext, useState } from 'react'
import { IoClose, IoArrowForward } from 'react-icons/io5'
import { SubscribeContext } from '../NavBar'
import { AppContext } from '../../../Home'
import Alert  from '@mui/lab/Alert';
import Snackbar from '@mui/material/Snackbar';
import Slide from "@material-ui/core/Slide";
import './Subscribe.css'

export default function SubscribePopup() {
    const { setSubscribePop } = useContext(SubscribeContext);
    const [error, setError] = useState(false)
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleSubmit(){
        // email validation
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!regex.test(text)){
            setError(true);
        }
    }

    return (
        <div>
            {error ? <div style={{ willChange: "transform" }}>
            <Snackbar className="error-popup" 
                TransitionComponent={props => <Slide {...props} direction="up" />}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={true} autoHideDuration={100000} 
                onClose={() => setError(false)}>

                <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
                Check your email
                </Alert>

            </Snackbar>
            </div> : null}
            <div className="subscribePopup">
                <IoClose aria-label="close button" className="class-btn close" style={{color: "white"}} onClick={() => setSubscribePop(false)} type="image"/> 
                <h1 className="subscribeTitle">Enter Email or Use Google</h1>
                <form onSubmit={handleSubmit} className="subscribeEmailContainer">
                    <input className="subscribeInput" type="text" onChange={handleChange} placeholder="Email" onFocus={(event) => event.target.select()}/>
                    <IoArrowForward className="submitEmail" type="image" onClick={ () => handleSubmit()}/>
                </form>
            </div>
        </div>
    )
}
