import React from "react";
import './nav.css'
import {BiHome,BiUser,BiBook} from 'react-icons/bi'
import {MdOutlineContactPage} from 'react-icons/md'
import {GiBriefcase} from 'react-icons/gi'
import ScrollSpy from "react-scrollspy-navigation"
import { createRef } from "react";
import {FaServicestack} from "react-icons/fa"
import { useState } from "react";



const Nav = () => {
const [ active , setactive] = useState("#")

  return (
    <nav>
<ScrollSpy>
<a ref={createRef()} href="#head"  onClick={() => setactive('#')} className={active === '#' ? 'active' : ''}><BiHome/> </a>
    <a ref={createRef()} href="#about" onClick={() => setactive('#about')} className={active === '#about' ? 'active' : ''} > <BiUser/> </a>
    <a href="#experience" ref={createRef()}  onClick={() => setactive('#experience')} className={active === '#experience' ? 'active' : ''}  ><BiBook/></a>
    <a href="#services" ref={createRef()}  onClick={() => setactive('#services')} className={active === '#services' ? 'active' : ''} ><FaServicestack/></a>
  <a href="#portfolio" ref={createRef()}  onClick={() => setactive('#portfolio')} className={active === '#portfolio' ? 'active' : ''} ><GiBriefcase/></a>
     <a href="#contact"  ref={createRef()}   onClick={() => setactive('#contact')} className={active === '#contact' ? 'active' : ''}       ><MdOutlineContactPage/></a>
     </ScrollSpy>
     </nav>

  )




}

export default Nav