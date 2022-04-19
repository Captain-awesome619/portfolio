import React, {useState} from 'react'
import './experience.css'
import {BsBookmarkCheckFill} from "react-icons/bs"
import { motion } from 'framer-motion'
import { experienceanimations } from '../animation'
import { UseScroll } from '../UseScroll'

const Experience = () => {

const [element,controls] = UseScroll(); 
 return (  
    <motion.section
    id='experience'>
      <h5>Skills I Possess</h5>
      <h2>My Experience</h2>
      <motion.div className=" container experience__container"  
      ref={element} 
      variants={experienceanimations}
        transition={{type: "tween" ,duration: 1, }}
        animate = {controls}>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill  className='experience__details-icon'/>
        <div>
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>Javascript</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            </div>
</div>

            
          <div  className="experience__design">
            <h3>Frontend Development</h3>
            <div className='experience__content'>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon' />
<div>
            <h4>bootstrap</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon' />
            <div>
            <h4>GIT</h4>
            <small className="text-light">Experienced</small>
        </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            </div>
            </div>
          <div  className="experience__design">
            <h3>Frontend Development</h3>
            <div className='experience__content'>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon' />
<div>
            <h4>Content Creation</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon' />
            <div>
            <h4>API's</h4>
            <small className="text-light">Intermediate</small>
        </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>Web Hosting</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            </div>
            </div>
        </motion.div>
      </motion.section>
     
  )
  }

export default Experience