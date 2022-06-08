import React, { useContext, useState } from 'react'
import { IoClose, IoArrowForward } from 'react-icons/io5'
import { SubscribeContext } from '../NavBar'
import Alert from '@material-ui/core/Alert';
import './Subscribe.css'

export default function SubscribePopup() {
    const { setSubscribePop } = useContext(SubscribeContext);
    const [text, setText] = useState("");
    const [error, setError] = useState(false);

    function handleChange(e) {
        setText(e.target.value);
    }

    function close(){
        setSubscribePop(false);
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
            {error ? <Alert onClose={() => setError(false)} severity="error">Please enter a valid email</Alert> : null}
            <div className="subscribePopup">
                <IoClose aria-label="close button" className="class-btn close" style={{color: "white"}} onClick={() => close()} type="image"/> 
                <h1 className="subscribeTitle">Enter Email or Use Google</h1>
                <form onSubmit={handleSubmit} className="subscribeEmailContainer">
                    <input className="subscribeInput" type="text" onChange={handleChange} placeholder="Email" onFocus={(event) => event.target.select()}/>
                    <IoArrowForward className="submitEmail" style={{color: "white"}} type="image" onClick={ () => handleSubmit()}/>
                </form>
            </div>
        </div>
    )
}
