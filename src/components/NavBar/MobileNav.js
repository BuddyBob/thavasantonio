import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { IoMenu, IoClose } from 'react-icons/io5'
import "./NavBar.css"
export default function Hamburger() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="mobile-nav">
      {open ? <IoClose className="close-icon" onClick={() => setOpen(false)}/> : <IoMenu className="menu-icon" onClick={() => setOpen(true)}/>}
      {open && <NavLinks/>}
    </nav>
  )
}
