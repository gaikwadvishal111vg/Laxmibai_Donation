import React, { useState } from 'react'
import { FaBitcoin } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    const [show, setShow] = useState(false);
  return (
   <>
   <nav className={show ? "navbar navbar_show" : "navbar"}>
    <div className='logo'>
<img src="logo.webp" alt="logo" />
    </div>
    <div className='links'>
        <ul>
            <li><Link to= {"/"}>HOME</Link></li>
            <li><Link to= {"/donate"}>DONATE</Link></li>
            <li><Link to= {"/about"}>ABOUT</Link></li>
            <li><Link to= {"/contact"}>CONTACT</Link></li>
            
        </ul>
        <ul>
            <li><Link to={"/"}><FaBitcoin/></Link></li>
            <li><Link to={"/"}><FiYoutube/></Link></li>
            <li><Link to={"/"}><FaSquareGithub/></Link></li>
            <li><Link to={"/"}><FaInstagram/></Link></li>
            <li><Link to={"/"}><FaFacebookSquare/></Link></li>
        </ul>
    </div>
    <GiHamburgerMenu className='hamburger' onClick={() => setShow(!show)}/>
   </nav>
   </>
  )
}

export default Navbar