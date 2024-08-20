import React, { useState, useEffect } from 'react';
import './hero.css';
import hero_profile from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const roles = ["Frontend Developer", "React Js Developer", "Next Js Developer"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='home' className='hero'>
    
     <div className='hero-content'>
      <h1>
        <span>I am Zahoor Abbas</span><br/> {roles[currentRole]}
      </h1>
      <p>I am Frontend React Js Developer with 1 year of experience.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            style={{ color: '#fff', textDecoration: 'none' }}
            href="/Zahoor Abbas (Frontend React JS Developer).pdf"
            download="Zahoor_Abbas_Frontend_React_js_Developer.pdf"
          >
            My Resume
          </a>
        </div>
      </div>
     </div>
     <div className='hero-img'> 
      <img src={hero_profile} alt="hero-profile" />
     </div>
    </div>
  );
}

export default Hero;
