import React, { useState } from 'react'
import "./contact.css"
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const formRef =useRef()
  const [done,setDone]=useState(false)

  const handleSubmit =(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_6shptp7', 'template_smlcjxg', formRef.current, 'NU_BYgzf3kh98-mB3')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className='c'>
        <div className='c-left'>
        <h1 className="c-title">Let's discuss your project</h1>
        <div className="c-info">
        <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 1234 556 75
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              contact@lama.dev
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              245 King Street, Touterie Victoria 8520 Australia
            </div>
        </div>
        </div>
        <div className='c-right'>
        <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
        </p>
        <form >
         <input type="text" placeholder='Name' name='user_name' />
         <input type="text" placeholder='Subject' name='user_subject' />
         <input type="text" placeholder='Email' name='user_email' />
         <textarea rows="5" placeholder='Message' name='message'/>   
          <button>Submit</button>
          {done && "Thank you..."}
        </form>  
        </div>
    </div>
  )
}

export default Contact
