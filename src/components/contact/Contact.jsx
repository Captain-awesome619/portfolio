import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {AiOutlineTwitter} from'react-icons/ai'
import { motion } from 'framer-motion';
import { UseScroll } from '../UseScroll'
import { Aboutanimation } from '../animation';


const Contact = () => {
  const [element  ,controls] = UseScroll();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jlhorip', 'template_itj1w5l', form.current, 'FG1X1e9_G74xzY2qq')

   

    .then( 
(result) =>{
console.log(result.text);
alert("sent successfully!");
},
(error) => {
  console.log(error.text);
  alert("something went wrong....", error);
}
    );
    e.target.reset()
  };


return(
    <motion.section id='contact'
    
    
    >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <motion.div className="container contact__container"
      ref={element}
      variants={Aboutanimation}
        transition={{type: "tween" ,duration: 1}}
        animate = {controls}
      
      >
        <div className="contact__options"
        >
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Ogunsolatoluwalase@gmail.com</h5>
            <a href="mailto:Ogunsolatoluwalase@gmail.com" target="_blank" rel='noreferrer'>Send me a mail</a>
          </article>
          <article className="contact__option">
            <AiOutlineTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>lord_awesomee</h5>
            <a href="https://twitter.com/lord_awesomee" target="_blank" rel='noreferrer'>Buzz me on Twitter</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=+234 816 7160 663" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </motion.div>
    </motion.section>
  )
}

export default Contact