import React from 'react'
import './services.css'

import { motion } from 'framer-motion'
import { UseScroll } from '../UseScroll'
import { Aboutanimation } from '../animation'

const Services = () => {

  const [element  ,controls] = UseScroll();
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <motion.div className="container services__container"
     ref={element}
     variants={Aboutanimation}
       transition={{type: "tween" ,duration: 1}}
       animate = {controls}>
        <article className="service">
       <div className="service__head">
         <h3>Frontend Development</h3>
         </div>
         <ul className='service__list'>


         <li className='serlist'>

<p>
  Creation of custom Web-Applications and Landing-Pages.
</p>
</li>

<li className='serlist'>

<p>
Creation of smooth and responsive mobile-Applications .
</p>
</li>
         <li className='serlist'>

           <p>
             Top knotch user-interface design implementation.
           </p>
         </li>
         <li className='serlist'>

           <p>
             High quality optimization strategy and testing.
           </p>
         </li>
         <li className='serlist'>

           <p>
             Utilization of API's
           </p>
         </li>
         <li className='serlist'>

           <p>
             Hosting and on-going website maintenance.
           </p>
         </li>
         <li className='serlist'>

           <p>
             Creation of  responsive and smooth E-commerce Web-Apps.
           </p>
         </li>
         

         </ul>
          </article>
          {/* end of web development */}

        <article className="service">
       <div className="service__head">
         <h3>Frontend-development</h3>
         </div>
         <ul className='service__list'>
         <li>

           <p>
             Creation of content for Marketing and Promotional-Materials.
           </p>
         </li>
         <li>

           <p>
             Monitoring websites and social media metrics.
           </p>
         </li>
         <li>

           <p>
             Ensuring adherence to best SEO practices.
           </p>
         </li>
         <li>

           <p>
             Using tools and frameworks to optimize user experience and interraction.
           </p>
         </li>
         </ul>
          </article>
         {/* end of content creation */}
         </motion.div>
      </section>


  )
}

export default Services