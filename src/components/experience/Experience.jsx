import React from 'react'
import './experience.css'
import {BsBookmarkCheckFill} from "react-icons/bs"
import { motion } from 'framer-motion'
import {  reveal2 } from '../animation'
import { UseScroll } from '../UseScroll'
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdOutlineMobiledataOff } from "react-icons/md";
import { SiTailwindcss } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
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
            <FaHtml5 className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>

            </div>
            </article>
          <article className="experience__details">
            <SiCss3   className='experience__details-icon'/>
        <div>
            <h4>CSS</h4>

            </div>
            </article>
          <article className="experience__details">
            <SiJavascript  className='experience__details-icon'/>
            <div>
            <h4>Javascript</h4>

            </div>
            </article>
          <article className="experience__details">
            < SiTypescript className='experience__details-icon'/>
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
            <SiNextdotjs className='experience__details-icon' />
<div>
            <h4>NextJS</h4>

            </div>
            </article>
         
          <article className="experience__details">
            <FaReact className='experience__details-icon'/>
            <div>
            <h4>React</h4>

            </div>
            </article>

            

            <article className="experience__details">
            <FaReact className='experience__details-icon'/>
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
            <SiRedux className='experience__details-icon' />
<div>
            <h4>Redux</h4>

            </div>
            </article>
          <article className="experience__details">
            <MdOutlineMobiledataOff  className='experience__details-icon' />
            <div>
            <h4>API</h4>

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
            <SiTailwindcss  className='experience__details-icon'/>
            <div>
            <h4>Tailwindcss</h4>

            </div>
            </article>

            <article className="experience__details">
            <SiChakraui className='experience__details-icon'/>
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
            <SiMongodb className='experience__details-icon' />
<div>
            <h4>MongoDB</h4>

            </div>
            </article>
          <article className="experience__details">
            <SiExpress  className='experience__details-icon' />
            <div>
            <h4>Express</h4>

        </div>
            </article>
          <article className="experience__details">
            <SiSupabase className='experience__details-icon'/>
            <div>
            <h4>SupaBase</h4>

            </div>
            </article>
         

            <article className="experience__details">
            <FaGithub className='experience__details-icon' />
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