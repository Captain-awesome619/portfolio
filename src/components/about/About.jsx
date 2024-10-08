import React from 'react'
import './about.css'
import ME from "../../assets/portpic.JPG"
import {FaAward} from "react-icons/fa"
import {SiBookstack} from "react-icons/si"
import { motion } from 'framer-motion'
import { UseScroll } from '../UseScroll'
import {  reveal } from '../animation'

const About = () => {


  const [element  ,controls] = UseScroll();


  return (
    <motion.section  id='about'
    ref={element}
    >
      <h5 >Get To Know</h5>
      <h2 >About Me</h2>
    <motion.div className='container about__container'

 variants={reveal}
   transition={{duration: 1}}
   animate = {controls}


    >
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
              <small>4 Years+ Frontend development Experience</small>
              </article>
            <article className="about__card">
              < SiBookstack className="about__icon"/>
              <h5>Expertise</h5>
              <small>HTML CSS Javascript(React,NextJS),<br></br>TailwindCSS,ChakraUI</small>
              </article>
            </div>
            <p >Hello there,my name is Ogunsola Toluwalase.I'm a Front-end developer who specializes in the creation of responsive web and mobile applications and landing pages.
              I posses very comprehensive knowledge of the Front-end development field,the utilization of frame works,API's and content creation platforms such as GraphCMS and Sanity.io.
              I would very much LOVE to work with you.</p>
              <a href='https://dark-vale-b357a0.netlify.app/' className='btn btn-primary'>Check out my Blog!</a>
          </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default About