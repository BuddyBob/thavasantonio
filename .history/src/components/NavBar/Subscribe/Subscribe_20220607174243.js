import React, { useContext } from 'react'
import { SubscribeContext } from '../NavBar'
import './Subscribe'

export default function Subscribe() {
    const { subscribePop, setSubscribePop } = useContext(SubscribeContext);
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function close(){
        setSubscribePop(false);
    }


    return (
        <div className="subscribePop">
            <IoClose aria-label="close button" className="class-btn close" style={{color: "white"}} onClick={() => close()} type="image"/> 
            <h1 className="shareTitle">Enter Email or Use Google</h1>
            <form onSubmit={handleSubmit}>
                <input className="subscribeInput" type="text" onChange={handleChange} placeholder="Email" onFocus={(event) => event.target.select()}/>
            </form>
        </div>
    )
}
