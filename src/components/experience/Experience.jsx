import React from 'react'
import './experience.css'
import {BsBookmarkCheckFill} from "react-icons/bs"
import { motion } from 'framer-motion'
import { experienceanimations } from '../animation'
import { UseScroll } from '../UseScroll'
import { InView } from "react-intersection-observer";


const Experience = () => {

  const [element,controls] = UseScroll();
 return (

    <motion.section
    id='experience'>
      <h5>Skills I Possess</h5>
      <h2> Stack and Technologies I use</h2>
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

            </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill  className='experience__details-icon'/>
        <div>
            <h4>CSS</h4>

            </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>Javascript</h4>

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
            <h4>NextJS</h4>

            </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon' />
            <div>
            <h4>GIT</h4>

        </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>React</h4>

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
            <h4>Redux</h4>

            </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon' />
            <div>
            <h4>API's</h4>

        </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>Web Hosting</h4>

            </div>
            </article>
            </div>
            </div>
        </motion.div>


      </motion.section>

  )
  }

export default Experience