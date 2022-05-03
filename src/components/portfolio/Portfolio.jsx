import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/port-image3.png"
import IMG2 from "../../assets/cafena-image2.png"
import IMG3 from "../../assets/crypt3.png"
import { motion } from 'framer-motion'
import { UseScroll } from '../UseScroll'
import { experienceanimations } from '../animation'
import IMG4 from "../../assets/Realator1.png"

const data = [
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
  const [element,controls] = UseScroll();
    return (
      <motion.section id='portfolio'>
        <h5>My Recent Projects</h5>
        <h2>Portfolio</h2>

        <motion.div className="container portfolio__container"
        ref={element}
        variants={experienceanimations}
          transition={{type: "tween" ,duration: 1, }}
          animate = {controls}
        >
          {
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
              )
            })
          }
        </motion.div>
      </motion.section>
    )

  }

  export default Portfolio