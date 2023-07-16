import React from 'react'
import {FaBars} from "react-icons/fa"
import { useGlobalContext } from './context'
import NavLinks from './Navlinks'
const Navbar = () => {
    const {openSidebar,setPageId} = useGlobalContext()
    const handlemenu = (e)=>{
if(!e.target.classList.contains('nav-link')){
  setPageId(null)
}
    }
  return (
    <nav onMouseOver={handlemenu}>
        <div className="nav-center">
            <h3 className="logo">CONTEXT</h3>
          <button className='toggle-btn' onClick={openSidebar}><FaBars /></button>
       
          <NavLinks />
        </div>
    </nav>
  )
}

export default Navbar