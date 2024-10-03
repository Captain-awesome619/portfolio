import React from 'react'
import './experience.css'
import {BsBookmarkCheckFill} from "react-icons/bs"
import { motion } from 'framer-motion'
import {  reveal2 } from '../animation'
import { UseScroll } from '../UseScroll'



const Experience = () => {
  const [element,controls] = UseScroll();
 return (

    <motion.section
    id='experience'
    ref={element}
    >
      <h5>Skills I Possess</h5>
      <h2> Stack and Technologies </h2>
      <motion.div className=" container experience__container"

      variants={reveal2}
        transition={{duration: 1, }}
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
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>Typescript</h4>

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
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>React</h4>

            </div>
            </article>

            

            <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>React Native</h4>
            </div>
            </article>
            <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>Appwrite</h4>
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
            <BsBookmarkCheckFill className='experience__details-icon' />
            <div>
            <h4>Sanityio</h4>

        </div>
            </article>


            <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon' />
            <div>
            <h4>Graphcms</h4>

        </div>
            </article>

            <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>Tailwindcss</h4>

            </div>
            </article>

            <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>ChakraUI</h4>

            </div>
            </article>


            </div>
            </div>

            <div  className="experience__design">
            <h3>Tracking and Backend Tools</h3>
            <div className='experience__content'>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon' />
<div>
            <h4>MongoDB</h4>

            </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon' />
            <div>
            <h4>Express</h4>

        </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>SupaBase</h4>

            </div>
            </article>
          <article className="experience__details">
            <BsBookmarkCheckFill className='experience__details-icon'/>
            <div>
            <h4>AppWrite</h4>

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