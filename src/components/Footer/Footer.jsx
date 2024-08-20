import React from 'react'
import './footer.css'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div  className='footer'>
      <div className="footer-top">
        <div className="footertop-left">
          <h2>Zahoor Abbas</h2>
          <p>I am Frontend /React js Developer with a track record of one plus year at House of Code,
            where I played a pivotal role in designing and developing projects for clients. My primary
            focus involved converting Figma designs into intuitive and visually appealing user
            interfaces. contributing to the design and development of impactful projects. </p>
        </div>
        <div className="footertop-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user icon" />
            <input type="email" placeholder='Enter Your Email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">All Rights Reserved</div>
        <div className="footer-bottom-right">
          <p>Terms Of Services</p>
          <p>Privacy Policy</p>
          <p>Contact With Me</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
