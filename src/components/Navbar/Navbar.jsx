import React, { useState,useRef } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import open from '../../assets/toggle.svg'
import close from '../../assets/close.svg'


const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();
    const openmenu = () =>{
      menuRef.current.style.right="0";
    }
    const closemenu = () =>{
      menuRef.current.style.right="-350px";
    }
 
  return (
    <div className='navbar'>
        <h1>Software Devloper</h1>
        <img src={open} onClick={openmenu} alt='_=_' className='open'/>
        <ul ref={menuRef} className='nav-menu'>
          <img src={close} alt='X' onClick={closemenu} className='close'/>
          <li><Link to='home' smooth={true} offset={-50} duration={500} onClick={() => setMenu("home")}><p>Home</p></Link></li>
          <li><Link to='about' smooth={true} offset={-50} duration={500} onClick={() => setMenu("about")}><p>About</p></Link></li>
          <li><Link to='skill' smooth={true} offset={-50} duration={500} onClick={() => setMenu("skill")}><p>Skill</p></Link></li>
          <li><Link to='project' smooth={true} offset={-50} duration={500} onClick={() => setMenu("project")}><p>Project</p></Link></li>
          <li><Link to='contact' smooth={true} offset={-50} duration={500} onClick={() => setMenu("contact")}><p>Contact</p></Link></li>


        </ul>

        <div className='nav-connect' ><Link to='contact' smooth={true} offset={-50} duration={500}onClick={()=>setMenu('contact')}><p>Connect with me</p></Link></div>
    </div>
  )
}

export default Navbar

