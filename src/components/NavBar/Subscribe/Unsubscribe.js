import React, { useState} from 'react'
import { Menu, MenuItem, ClickAwayListener } from '@mui/material/';
import { IoCheckmark } from 'react-icons/io5'
import SubscribePopup from './Subscribe';
import "../NavBar.css"
export default function Unsubscribe() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [subscribePop, setSubscribePop] = useState(false);
    function handleOpen(e){
        setOpen(true);
        setAnchorEl(e.currentTarget);
    }

    function handleClose(){
        setOpen(false);
    }



    return (
        <div>
            {/* unsubscribe dropdown */}
            <input 
                aria-owns={open ? 'simple-menu' : null}
                aria-haspopup="true"
                onClick={(e) => handleOpen(e)}
                onMouseOver={(e) => handleOpen(e)} 
                type="submit" className="subscribed" value="S"/>
                <IoCheckmark className="subscribed-check" 
            /> 
            <ClickAwayListener>    
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => handleClose()}
                    MenuListProps={{ onMouseLeave: handleClose }}
                >
                    <MenuItem onClick={() => setSubscribePop(true)}>Unsubscribe</MenuItem>
                </Menu>
            </ClickAwayListener>
            {/* if clicked on unsubscribe, show popup to remove user */}
            {subscribePop && <SubscribePopup title="Unsubscribe" subscribe={false}/>}
        </div>
    )
}
