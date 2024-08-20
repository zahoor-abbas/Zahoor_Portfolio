import React from 'react'
import './services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import services_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className='services-title'>
        <h2>My Services</h2>
        <img src={theme_pattern} alt="services theme-pattern" />
      </div>
      <div className="services-container">
        {services_data.map((service,index)=>{
          return <div className='service-format' key={index}>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}{service.s_desc1 }...</p>
            <div className="services-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="arrow icon" />
            </div>
          </div>

        })}
      </div>
      
    </div>
  )
}

export default Services
