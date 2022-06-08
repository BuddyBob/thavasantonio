import React, { useContext, useState } from 'react'
import { IoClose, IoArrowForward } from 'react-icons/io5'
import { SubscribeContext } from '../NavBar'
import './Subscribe.css'

export default function SubscribePopup() {
    const { setSubscribePop } = useContext(SubscribeContext);
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function close(){
        setSubscribePop(false);
    }

    function handleSubmit(){
        console.log(text)
    }


    return (
        <div className="subscribePopup">
            <IoClose aria-label="close button" className="class-btn close" style={{color: "white"}} onClick={() => close()} type="image"/> 
            <h1 className="subscribeTitle">Enter Email or Use Google</h1>
            <form onSubmit={handleSubmit} className="subscribeEmailContainer">
                <input className="subscribeInput" type="text" onChange={handleChange} placeholder="Email" onFocus={(event) => event.target.select()}/>
                <IoArrowForward className="submitEmail" style={{color: "white"}} type="image" onClick={ () => handleSubmit()}/>
            </form>
        </div>
    )
}
