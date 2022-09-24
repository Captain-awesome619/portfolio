import React from "react";
import './nav.css'
import {BiHome,BiUser,BiBook} from 'react-icons/bi'
import {MdOutlineContactPage} from 'react-icons/md'
import {GiBriefcase} from 'react-icons/gi'
import ScrollSpy from "react-scrollspy-navigation"
import { createRef } from "react";
import {FaServicestack} from "react-icons/fa"



const Nav = () => {


  return (
    <nav>
<ScrollSpy>
<a ref={createRef()} href="#head"><BiHome/> </a>
    <a ref={createRef()} href="#about"  > <BiUser/> </a>
    <a href="#experience" ref={createRef()} ><BiBook/></a>
    <a href="#services" ref={createRef()} ><FaServicestack/></a>
  <a href="#portfolio" ref={createRef()}  ><GiBriefcase/></a>
     <a href="#contact"  ref={createRef()}><MdOutlineContactPage/></a>
     </ScrollSpy>
     </nav>

  )




}

export default Nav