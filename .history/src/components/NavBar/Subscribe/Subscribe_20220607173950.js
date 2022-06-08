import React, { useContext } from 'react'
import { SubscribeContext } from '../NavBar'
import './Subscribe'

export default function Subscribe() {
    const { subscribePop, setSubscribePop } = useContext(SubscribeContext);
    return (
        <div className="sharePop">
            <IoClose aria-label="close button" className="class-btn close3" style={{color: "white"}} onClick={() => close()} type="image"/> 
            <div className="sharePopInner">
                <h1 className="shareTitle">Share a 5 Letter Word</h1>
                <form onSubmit={handleSubmit}>
                <input className="shareInput" type="text" value={text} onChange={handleChange} placeholder="Enter a word to share" onFocus={(event) => event.target.select()}/>
                </form>
                {copyTxt ? <p className="copyText">Copied Link to Clipboard</p> : null}
            </div>
        </div>
    )
}
