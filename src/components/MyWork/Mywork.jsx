import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import './mywork.css'
import  { Link, NavLink } from "react-router-dom"
const Mywork = () => {
  let handlelink = (link) => {
    console.log(link)
    if (link.w_no === 1) {
      window.open(link.link, '_blank', 'noopener,noreferrer');
    }
    else if(link.w_no ===2){
      window.open(link.link, '_blank', 'noopener,noreferrer');
    }
    else if(link.w_no ===3){
      window.open(link.link, '_blank', 'noopener,noreferrer');
    }
    else if(link.w_no ===4){
      window.open(link.link, '_blank', 'noopener,noreferrer');
    }
  }
  
  
  return (
    <div id='portfolio' className='mywork'>
      <div className='mywork-title'>
        <h2>My Latest Work</h2>
        <img src={theme_pattern} alt=''/>
      </div>
      
      <div className='mywork-container'>
        {mywork_data.map((item,index)=>{
          return <div onClick={()=>handlelink(item)} key={index} >
          <img src={item.w_img} alt='mywork image' target='blank'/>
          </div>
        })}
      </div>
      <div className='mywork-showmore'>
        <p>Show More</p>
        <img src={arrow_icon} alt='work image'/>
      </div>
      
    </div>
  )
}

export default Mywork
