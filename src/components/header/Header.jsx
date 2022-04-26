import React, {useState} from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/picture5.jpg'
import HeaderSocials from './HeaderSocials'
import Toggle from '../Toggle/Toggle'



const Header = () => {
  return (

    <header>

   <div className="container header__container">

     <div className='inner'>

     <h5>Hello I'm</h5>

     <h1>Ogunsola Toluwalase</h1>
     <h6 className="text-light">A FrontEnd Developer</h6>

     </div>
     
     <CTA />
     <HeaderSocials />

     <div className='me'>

       <img src={ME}alt='ME' />
     </div>

     <a href="#contact" className='scroll__down'>Scroll Down</a>

   </div>

    </header>

  )
}

export default Header