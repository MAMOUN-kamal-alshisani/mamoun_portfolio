// import React from 'react'
import './scss/contact.css'
import { GoMail } from "react-icons/go";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { PiSpinnerGap } from "react-icons/pi";


import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  const [formValues, setFormValues] = useState({name:'', email:'', message:''})
  const [showSpin,setShowSpin] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_rk7b9po', 'template_hf71gdq', form.current, 'EFONtg19GTO5YF4OK')
      .then((result) => {
          // console.log(result.text);
          setShowSpin(true)

          setTimeout(()=>{
            setShowSpin(false)
            setFormValues({name:'', email:'', message:''})
          },3000)
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h1>Contact Me</h1>

      <div className="cr contact_cr ">
        <div className='options_list'>
        <article className='option_item'>
            <AiOutlineMessage/>
            <h4>Messenger</h4>
            <h5>mamoun.bursi</h5>
            <a href="https://m.me/mamoun.bursi" rel="noreferrer" target={'_blank'}>Send a Message</a>
          </article>
          <article className='option_item'>
            <GoMail/>
            <h4>Email</h4>
            <h5>mamoun.bursi@yahoo.com</h5>
            <a href="mailto:mamoun.bursi@yahoo.com" rel="noreferrer" target={'_blank'}>Send a Message</a>
          </article>
          <article className='option_item'>
            <AiOutlineWhatsApp/>
            <h4>WhatsApp</h4>
            <h5>+962781789220</h5>
            <a href="https://api.whatsapp.com/send?phone+962786833117" rel="noreferrer" target={'_blank'}>Send a Message</a>
          </article>
          
        </div>
        <form ref={form}  /*onSubmit={(e)=>sendEmail(e)}*/>
          <div className='form_input_cr'>
          <input className='form_input' type="text" name='name' value={formValues.name} onChange={(e)=>setFormValues((pre)=>({...pre,[e.target.name]:e.target.value}))} placeholder='Your Name' required/>
          </div>
          <div className='form_input_cr'>
          <input className='form_input' type="text" name='email' value={formValues.email} onChange={(e)=>setFormValues((pre)=>({...pre,[e.target.name]:e.target.value}))} placeholder='Email' required/>

          </div>
          <div className='form_input_cr'>
          <textarea className='form_input' name="message" rows="7" value={formValues.message} onChange={(e)=>setFormValues((pre)=>({...pre,[e.target.name]:e.target.value}))} placeholder='Your Message' required></textarea>
          </div>
            <button onClick={(e)=>sendEmail(e)} className='btn contact_btn'>Send a Message {showSpin && <PiSpinnerGap  className='icon_spinner'/>}</button>
          </form>
      </div>
    </section>
  )
}

export default Contact