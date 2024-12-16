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

<p >
Custom Web and Mobile Applications Development: <span className='alt'>Tailored solutions for web and mobile applications, ensuring smooth performance and user satisfaction.</span> 
</p>
</li>

<li className='serlist'>

<p>
Responsive Mobile Applications: <span className='alt'> Seamlessly optimized mobile apps with responsive designs for all devices.</span>
</p>
</li>
         <li className='serlist'>

           <p>
           Top-Notch User Interface Design: <span className='alt'>Clean, modern, and user-friendly UI implementation for an exceptional experience.</span> 
           </p>
         </li>
         <li className='serlist'>

           <p>
           High-Quality Optimization & Testing:<span className='alt'> Robust performance optimization with thorough testing for reliability.</span>
           </p>
         </li>
         <li className='serlist'>

           <p>
           API Integration:<span className='alt'>  Efficient utilization and integration of APIs for extended functionality.</span>
           </p>
         </li>
         <li className='serlist'>

           <p>
           Hosting & Ongoing Maintenance: <span className='alt'>  Reliable hosting services with continuous updates and support.</span>
           </p>
         </li>
         <li className='serlist'>

           <p>
           Smooth & Responsive E-commerce Applications: <span className='alt'>Modern, scalable e-commerce solutions with responsive designs for a seamless shopping experience.</span>
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
           Creating Content for Marketing & Promotional Materials: <span className='alt'>Develop engaging, high-quality content tailored to marketing campaigns and promotional needs.</span>
           </p>
         </li>
         <li>

           <p>
           Monitoring Websites & Social Media Metrics: <span className='alt'>Track performance analytics to evaluate engagement, traffic, and effectiveness of strategies.</span>
           </p>
         </li>
         <li>

           <p>
           Ensuring Adherence to SEO Best Practices:  <span className='alt'>Implement up-to-date SEO strategies to improve visibility and search engine rankings.</span>
           </p>
         </li>
         <li>

           <p>
           Optimizing User Experience & Interaction:  <span className='alt'>Leverage tools and frameworks to enhance usability, interactivity, and overall user satisfaction.</span>
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