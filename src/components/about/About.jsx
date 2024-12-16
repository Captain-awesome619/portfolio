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
              <small>HTML CSS Javascript(React,React-Native , NextJS),<br></br>TailwindCSS,ChakraUI</small>
              </article>
            </div>
            <p >Hello! My name is Ogunsola Toluwalase, and I'm a passionate Front-End Developer specializing in 
              crafting responsive web and mobile applications as well as modern landing pages. I have a strong understanding 
              of front-end frameworks, API integration, and content management platforms like GraphCMS and Sanity.io. 
              My expertise lies in building intuitive, user-friendly interfaces that deliver exceptional user experiences.
I would be thrilled to bring my skills and creativity to your team and collaborate on impactful projects. I look forward to 
the opportunity to work with you!</p>
              <a href='https://dark-vale-b357a0.netlify.app/' className='btn btn-primary'>Check out my Blog!</a>
          </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default About