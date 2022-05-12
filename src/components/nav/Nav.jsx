import React from 'react'
import './nav.css'
import {BiHome,BiUser,BiBook} from 'react-icons/bi'
import {RiCustomerService2Line} from 'react-icons/ri'
import {MdOutlineContactPage} from 'react-icons/md'
import { useState } from 'react'
import {GiBriefcase} from 'react-icons/gi'




const Nav = () => {
  const [activeNav,setActiveNav] = useState ('#')
  return (

    <nav>
<a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome/></a>
    <a  href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <BiUser/> </a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
  
  <a href="#portfolio"onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GiBriefcase/></a>
     <a  href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactPage/></a>
    </nav>
  )
}

export default Nav