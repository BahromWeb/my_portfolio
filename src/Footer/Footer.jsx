import React from 'react'
import './Footer.css'
import logo from "../assets/logo.svg"
import user_icon from "../assets/user_icon.svg";
function Footer() {
  return (
    <div className='footer'>
       <div className="footer-top">
         <div className="footer-top-left">
            <img src={logo} alt="icon" />
            <p>I'm frontend developer based in Uzbekistan</p>
         </div>
         <div className='footer-top-right'>
             <div className='footer-email-input'>
                <img src={user_icon} alt="icon" />
                <input type="text" placeholder='Enter your email'/>
             </div>
             <div className='footer-subscribe'> Subscribe</div>
         </div>
       </div>
       <hr />
       <div className="footer-bottom">
        <p className='footer-bottom-left'>@ 2025 Bahrom Hasanov. All rights reserved</p>
        <div className='footer-bottom-right'>
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
       </div>
    </div>
  )
}

export default Footer
