import React, { useState } from 'react'
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'



const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1def0ff4-cb4a-4419-9947-692a562e9bf0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      alert(res.message)
    }
   
  };



 
  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h2>Get in Touch</h2>
        <img src={theme_pattern} alt="contactimg" />
      </div>
      <div className='contact-section'>
        <div className="contact-left">
          <h2>Let's Talk</h2>
          <p>I am currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mailicon" />
              <p>zahoorabbas762@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="callicon" />
              <p>+92-0305-7089590</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="locationicon" />
              <p>Garden Town LHR</p>
            </div>

          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder='Enter Your Email' name='email'/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" id="" rows="8" placeholder='Enter Your Message'></textarea>
          <button type='submit' className='contact-submit'>Submit now </button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
