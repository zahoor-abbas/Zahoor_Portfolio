import React, { useRef, useState } from 'react';
import './navbar.css';
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import open_menu from '../../assets/menu_open.svg'
import close_menu from '../../assets/menu_close.svg'



const Navbar = () => {
  const[menu, setMenu] = useState('home');
 const menuRef = useRef();
 const openMenu = ()=>{menuRef.current.style.right = "0"} 
 const closeMenu = ()=>{menuRef.current.style.right = "-350px"} 


  return (
    <div className='navbar'>
      {/* <img src={logo} alt="logo img" /> */}
      <h1>Zahoor Abbas</h1>
      <img src={open_menu} alt="hamberger" onClick={openMenu}  className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={close_menu} alt="close" onClick={closeMenu} className='nav-mob-close' />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick= {()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'? <img src={underline} alt='underline'/>: <></>}</li>
        <li><AnchorLink className='anchor-link'  href='#about'><p onClick= {()=>setMenu('about')}>About</p></AnchorLink>{menu==='about'? <img src={underline} alt='underline'/>: <></>}</li>
        <li><AnchorLink className='anchor-link'  href='#services'><p onClick= {()=>setMenu('services')}>Services</p></AnchorLink>{menu==='services'? <img src={underline} alt='underline'/>: <></>}</li>
        <li><AnchorLink className='anchor-link'  href='#portfolio'><p onClick= {()=>setMenu('portfolio')}>Portfolio</p></AnchorLink>{menu==='portfolio'? <img src={underline} alt='underline'/>: <></>}</li>
        <li><AnchorLink className='anchor-link'  href='#contact'><p onClick= {()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==='contact'? <img src={underline} alt='underline'/>: <></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' href='#contact'>Connect With Me</AnchorLink></div>
      
    </div>
  )
}

export default Navbar
