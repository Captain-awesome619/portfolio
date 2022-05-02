import React from 'react'
import './about.css'
import ME from "../../assets/me3.JPG"
import {FaAward} from "react-icons/fa"
import {SiBookstack} from "react-icons/si"
import { motion } from 'framer-motion'
import { UseScroll } from '../UseScroll'
import { Aboutanimation } from '../animation'



const About = () => {


  const [element  ,controls] = UseScroll();


  return (
    <motion.section  id='about' ref={element}
    variants={Aboutanimation}
      transition={{type: "tween" ,duration: 1}}
      animate = {controls}>
      <h5>Get To Know</h5>
      <h2 >About Me</h2>
    <motion.div className='container about__container'>
      <motion.div className="about__me">
      <div className="about__me-image">
      <img src= {ME} alt=" "/>
        </div>
        </motion.div>
        <motion.div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3 Years+ Web-Development Experience</small>
              </article>
            <article className="about__card">
              < SiBookstack className="about__icon"/>
              <h5>Expertise</h5>
              <small>HTML CSS Javascript</small>
              </article>
            </div>
            <p >Hello there,my name is Ogunsola Toluwalase.i'm a Front-end developer who specializes in the creation of responsive web-applications and landing pages.
              I posses very comprehensive knowledge of the Front-end development field,the utilization of frame works and API's.
              I would very much like to work with you.</p>
              <a href='#contact' className='btn btn-primary'>Let's  Have a Chat</a>
          </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default About