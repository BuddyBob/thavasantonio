import React, { useState, createContext } from 'react'
import { Menu, MenuItem, ClickAwayListener } from '@mui/material/';
import { db, auth } from '../../../firebase-config'
import { IoCheckmark } from 'react-icons/io5'
import "../NavBar.css"


export const UnsubscribeContext = createContext({"unsubscribePop":false, "setUnsubscribePop": () => {}});
export default function Unsubscribe() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    function unsubscribe() {
        localStorage.setItem('signedIn', false);
        const userAuth = auth.currentUser;
        userAuth.delete().then(() => {
            console.log("Deleted user");
        }).catch((error) => {
            console.log("Error deleting user:", error);
        });

        var user = db.collection('users').where('email','==',userAuth.email);
        user.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            doc.ref.delete();
        });
        }).catch(function(error) {
        console.log("Error getting documents: ", error);
        });
        // window.location.reload();
    }
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
                    <MenuItem onClick={() => unsubscribe()}>Unsubscribe</MenuItem>
                </Menu>
            </ClickAwayListener>
            {/* if clicked on unsubscribe, show popup to remove user */}
        </div>
    )
}
