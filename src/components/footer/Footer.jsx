import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
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
        <a href="https://twitter.com/lord_awesomee"><IoLogoTwitter/></a>
        <a href="https://github.com/Captain-awesome619"><FaGithubSquare/></a>
        <a href="http://www.linkedin.com/in/toluwalase-ogunsola-5a5719235"><FaLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ogunsola toluwalase. All rights reserved.</small>
      </div>
    </footer>
</div>
  )
}



export default Footer