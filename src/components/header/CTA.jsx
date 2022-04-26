import React from 'react'
import './header.css'
import CV from '../../assets/resume6.docx'
import Toggle from '../Toggle/Toggle'
const CTA = () => {
  return (
    <div className='cta'>

        <a href={CV}download className='btn' id='btn-light'>My Resume</a>
        <div><Toggle /></div>
        <a href="mailto:ogunsolatoluwalase@gmail.com" className='btn btn-primary' id='btn-light'>Contact Me</a>

    </div>
  )
}

 export default CTA