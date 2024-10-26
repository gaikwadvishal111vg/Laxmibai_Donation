import React from 'react'
import { Link } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div><img src="/logo.webp" alt="logo" /></div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>India, Latur</li>
          <li>Phone: +91 1234567890</li>
          <li>laxmibai@gmail.com</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/donate"}>Donate</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="https://www.facebook.com/laxmibai" />
            </li>
            <li>
              <Link to={"/"}>{" "}<span><FaXTwitter/></span>Twitter<span></span></Link>
            </li>
            <li>
              <Link to={"/"}>{" "}<span><FaSquareInstagram/></span>Instagram<span></span></Link>
            </li>
            <li>
              <Link to={"/"}>{" "}<span><FaLinkedin/></span><span>Linkedin</span></Link>
            </li>
            <li>
              <Link to={"/"}>{" "}<span><IoLogoYoutube/></span>Youtube<span></span></Link>
            </li>
        </ul>
      </div>
      
    </footer>
  )
}

export default Footer