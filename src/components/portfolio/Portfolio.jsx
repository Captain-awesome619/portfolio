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
import IMG8 from "../../assets/cards.png"
import IMG9 from "../../assets/flance.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Apk from "../../assets/application-fe0dec7c-59df-49d6-a3c1-a90af742034e.apk"
import stableflow from "../../assets/stableflow.png"
import IMG11 from '../../assets/safehood.png'
import IMG12 from '../../assets/xtreme.png'
const data = [
  {
    id: 11,
    image: IMG11,
    title: 'A geo-social web app where users can post content with media to a live map, manage profiles, and explore the posts of other users. Built with Next.js, TypeScript, Tailwind CSS, and Appwrite.    — Designed by AnjolaDave',
    github: 'https://github.com/Captain-awesome619/safehood',
    demo: 'https://safe-hood.netlify.app/'

  },
  {
    id: 12,
    image: IMG12,
    title: 'Xtrempay’s desktop-only landing page showcases a clean, modular UI with bold hero text and app mockups, enhanced by GSAP-powered fade, slide, and stagger animations that bring each section to life with a smooth, engaging flow.',
    github: 'https://github.com/xtrempaynigeria/xtremepay_website',
    demo: 'https://www.xtrempay.com/'

  },
  {
    id: 8,
    image: IMG8,
    title: 'A downloadable APK for a full-stack Android mobile application that allows users to upload and watch videos. Built using React Native for a smooth and responsive user interface, Appwrite as the backend-as-a-service for seamless data management, and styled with NativeWind for Tailwind-like utility-based styling in React Native.',
    github: 'https://github.com/Captain-awesome619/awesometube-mobile-App',
    demo: Apk
  },
  {
    id: 10,
    image: IMG9,
    title: ' a web application that provides in-depth weather information and accurate future forecasts based on the user location. Users can access real-time weather data, including temperature, humidity, wind speed, and atmospheric conditions. The app also allows users to search for and explore weather details for other locations worldwide, ensuring reliable and comprehensive weather insights.',
    github: 'https://github.com/Captain-awesome619/flance_assesment',
    demo: 'https://flanceweatherapp.netlify.app/'

  },
  {
    id: 9,
    image: stableflow,
    title: 'Developed a full-stack Web3 application enabling users to log in using their email and perform live transactions. Built with Next.js for the frontend, styled using Tailwind CSS, and integrated with the Privy React Auth SDK for seamless wallet authentication. Leveraged ethers.js and Moralis among others for Web3 functionalities, ensuring secure and efficient blockchain interactions',
    github: 'https://github.com/Captain-awesome619/stableflow2',
    demo: 'https://www.stableflow.online/'

  },
  {
    id: 5,
    image: IMG5,
    title: 'Explore my blog where I share insights on the packages and technologies I use, created with Hygraph (a powerful headless CMS), Next.js, and styled using Tailwind CSS. The platform offers a clean, responsive layout for easy reading, providing valuable details about tools that streamline development.',
    github: 'https://github.com/Captain-awesome619/blog',
    demo: 'https://dark-vale-b357a0.netlify.app/'

  },
  {
    id: 7,
    image: IMG7,
    title: 'A clean and simple responsive product landing page built using React and styled with Tailwind CSS. The design focuses on modern aesthetics, fast performance, and mobile-first responsiveness.it effectively highlights product features and drives user engagement.',
    github: 'https://github.com/Captain-awesome619/landing_page',
    demo: 'https://store-landing-page.netlify.app/'

  },
  {
    id: 6,
    image: IMG6,
    title: 'A dynamic Full-Stack e-commerce application built with Next.js for a fast and responsive frontend,and Sanity.io as the headless CMS for scalable, efficient content management. It features an intuitive UI, and powerful backend capabilities, ensuring a smooth user experience for both shoppers and admins.',
    github: 'https://github.com/Captain-awesome619/Aesomeinc',
    demo: 'https://awesome-inc-d54ba6.netlify.app/'

  },
  {
    id: 1,
    image: IMG1,
    title: 'A responsive, multipurpose landing page designed for a Web Development Agency, featuring smooth animations and a visually appealing layout. It offers an engaging user experience with intuitive navigation, modern design aesthetics, and seamless responsiveness across various devices. ',
    github: 'https://github.com/Captain-awesome619/cuddly-couscous',
    demo: 'https://glowing-jelly-c2c776.netlify.app/'

  },
  {
    id: 2,
    image: IMG2,
    title: 'The Cafena Coffee Business Web Application is built using Vanilla JavaScript, HTML, and native CSS, delivering a smooth and responsive user interface. It features clean, modern design aesthetics tailored for showcasing coffee products or services, ensuring an engaging experience for customers.',
    github: 'https://github.com/Captain-awesome619/coffee-app',
    demo: 'https://fanciful-starship-a24bfb.netlify.app/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'A cryptocurrency tracker app built with React.js and Native CSS. It fetches real-time crypto data using a REST API, providing users with prices, market trends, and search functionality.',
    github: 'https://github.com/Captain-awesome619/cryptoverse',
    demo: 'https://crypto-verse-ac724d.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'A full-stack Real Estate web application built with Next.js and native CSS, offering advanced search and filter functionality for seamless property browsing. Users can explore various real estate options with a clean, responsive design, ensuring a smooth experience across all devices.',
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
  autoplaySpeed: 10000,
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
className={state === "projects" ? "conn" : "hid"}>
<Slider {...settings}>
          { state === "projects" ?
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className='portfolio__item'>
<div>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} className="portimage" />
                </div>
                <h3 className='destitle'>{title}</h3>
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