import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/port-image3.png"
import IMG2 from "../../assets/cafena-image2.png"
import IMG3 from "../../assets/crypt3.png"
import { motion } from 'framer-motion'
import { UseScroll } from '../UseScroll'
import IMG4 from "../../assets/Realator1.png"
import IMG5 from "../../assets/blog.png"
import {  reveal} from '../animation'
import IMG6 from "../../assets/estore.png"
import { useState } from 'react'
import cert1 from "../../assets/download.png"
import cert2 from "../../assets/frontend.png"
import cert3 from "../../assets/badge3.png"
import cert4 from "../../assets/badge4.png"
import cert5 from "../../assets/badge6.png"
import cert6 from "../../assets/testdome.png"
import IMG7 from "../../assets/slide7.png"
import IMG8 from "../../assets/aora2.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Apk from "../../assets/application-fe0dec7c-59df-49d6-a3c1-a90af742034e.apk"
import stableflow from "../../assets/stableflow.png"
const data = [
  {
    id: 8,
    image: IMG8,
    title: 'The downloadable APK file for a Fullstack Android Mobile application that lets you upload and watch Videos',
    github: 'https://github.com/Captain-awesome619/awesometube-mobile-App',
    demo: Apk

  },
  {
    id: 9,
    image: stableflow,
    title: ' Worked on A full stack web 3 application that lets users login with their mail and make live transactions',
    github: 'https://github.com/Captain-awesome619/stableflow2',
    demo: 'https://www.stableflow.online/'

  },
  {
    id: 5,
    image: IMG5,
    title: 'Check out my blog on packages and technologies I use!',
    github: 'https://github.com/Captain-awesome619/blog',
    demo: 'https://dark-vale-b357a0.netlify.app/'

  },
  {
    id: 7,
    image: IMG7,
    title: 'A simple product landing page,created using Tailwindcss',
    github: 'https://github.com/Captain-awesome619/landing_page',
    demo: 'https://store-landing-page.netlify.app/'

  },
  {
    id: 6,
    image: IMG6,
    title: 'A Full-Stack e-commerce application created using Nextjs and Sanity.io',
    github: 'https://github.com/Captain-awesome619/Aesomeinc',
    demo: 'https://awesome-inc-d54ba6.netlify.app/'

  },
  {
    id: 1,
    image: IMG1,
    title: 'A multipurpose-app for a Web-development agency',
    github: 'https://github.com/Captain-awesome619/cuddly-couscous',
    demo: 'https://glowing-jelly-c2c776.netlify.app/'

  },
  {
    id: 2,
    image: IMG2,
    title: 'The Cafena coffee buisness Web-Application',
    github: 'https://github.com/Captain-awesome619/coffee-app',
    demo: 'https://fanciful-starship-a24bfb.netlify.app/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'An up to date crypto-currency Web-Applicationl',
    github: 'https://github.com/Captain-awesome619/cryptoverse',
    demo: 'https://crypto-verse-ac724d.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'A Real-Estate Web-App with various options',
    github: 'https://github.com/Captain-awesome619/Realator',
    demo: 'https://realator-85d0e6.netlify.app/'
  }
]

 const Portfolio = () => {
  const [state, setstate] = useState('projects')
  const [element,controls] = UseScroll();
const switchstate = (state) => {
  setstate(state)
}
const settings = {
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
};
    return (
      <motion.section id='portfolio'
      ref={element}
     >
    <h5>My Recent Projects and Certifications(Please check Resume for Certfication links)</h5>
    <div className='segments'>
<h2 onClick={() => switchstate("projects")} className={ state ==="projects" ? "projectactive" : ""}>Projects</h2>
<h2 onClick={() => switchstate("cert")} className={ state ==="cert" ? "certactive" : ""}>Certfications</h2>
</div>
<motion.div


className='overrr'>
        <div 
className={state === "projects" ? "conn" : "hid"}
>
<Slider {...settings}>
          { state === "projects" ?
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className='portfolio__item'>
<div>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} className="portimage" />
                </div>
                <h3>{title}</h3>
</div>
                <div className="portfolio__item-cta">
                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>

                </div>
              </article>
              )
            })
           : ""} 
           </Slider>
            </div>
           
            { state == "cert" ? 
              <div className={state === 'cert' ? "conn" : "hid"}>
              <Slider {...settings}>
<img src={cert1} alt="badge" className='badge'/>
<img src={cert2} alt="badge" className='badge'/>
<img src={cert3} alt="badge" className='badge'/>
<img src={cert4} alt="badge" className='badge'/>
<img src={cert5} alt="badge" className='badge'/>
<img src={cert6} alt="badge" className='badge'/>
</Slider>
</div>
 : ""}
    
 
           </motion.div>
            
      </motion.section>
    )

  }









  export default Portfolio