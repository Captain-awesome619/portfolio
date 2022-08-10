import React from 'react'
import './header.css'
import CV from '../../assets/Resume2.pdf'
import Toggle from '../Toggle/Toggle'
const CTA = () => {
  return (
    <div>
 <div className='mode'><Toggle   className='tog'/></div>
    <div className='cta'>

        <a href={CV}download className='btn' id='btn-light'>My Resume</a>
        <a href="mailto:ogunsolatoluwalase@gmail.com" className='btn btn-primary' id='btn-light'>Contact Me</a>

    </div>
    </div>
  )
}

 export default CTA