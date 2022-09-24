import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/picture5.jpg'
import HeaderSocials from './HeaderSocials'
import {Link} from "react-scroll"
import Quote from '../quote/Quote'



const Header = () => {



  return (
<div id='head'>
    <header>
   <div className="container header__container">

     <div className='inner'>

     <h5>Hello I'm</h5>

     <h1>Ogunsola Toluwalase</h1>
     <h6 className="text-light">A FrontEnd Developer</h6>

     </div>

     <CTA />
     <HeaderSocials />
<div>
     <div className='me'>

       <img src={ME}alt='ME' className='meimg' />
     </div>

</div>




     <Link to="contact"   smooth={500} spy={true}  className='scroll__down'>Scroll Down</Link>

   </div>


    </header>
    <div className='qot'>
    <Quote/>
    </div>
</div>
  )
}

export default Header