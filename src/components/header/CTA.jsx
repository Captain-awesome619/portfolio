import React from 'react'
import './header.css'
import CV from '../../assets/MyResume.pdf'
import Toggle from '../Toggle/Toggle'
const CTA = () => {
  return (
    <div className='toptog'>
 <div className='mode'><Toggle   /></div>
    <div className='cta'>

        <a href={CV}download className='btn' id='btn-light'>My Resume</a>
        <a href="mailto:ogunsolatoluwalase@gmail.com" className='btn btn-primary' id='btn-light'>Contact Me</a>

    </div>
    </div>
  )
}

 export default CTA