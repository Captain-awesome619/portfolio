import React from 'react'
 import {BsLinkedin} from 'react-icons/bs'
 import {FaGithub} from 'react-icons/fa'
 import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="http://www.linkedin.com/in/toluwalase-ogunsola-5a5719235" target="_blank" rel='noreferrer'><BsLinkedin/></a>
    <a href="https://github.com/Captain-awesome619" target="_blank" rel='noreferrer'><FaGithub/></a>
    <a href="https://dribble.com" target="_blank" rel='noreferrer'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials