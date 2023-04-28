import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {Link} from "react-scroll"
const Footer = () => {
  return (
<div className="">
    <footer>
      <ul className='permalinks'>
        <li><Link smooth={500} spy={true} to="head" >Home</Link></li>
        <li><Link smooth={500} spy={true} to="about">About</Link></li>
        <li><Link smooth={500} spy={true} to="experience">Experience</Link></li>
        <li><Link smooth={500} spy={true} to="services">Services</Link></li>
        <li><Link smooth={500} spy={true}  to="portfolio">Portfolio</Link></li>
        <li><Link smooth={500} spy={true}  to="contact">Contact</Link></li>

      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ogunsola toluwalase. All rights reserved.</small>
      </div>
    </footer>
</div>
  )
}



export default Footer