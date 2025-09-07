import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="images" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk </h1>
                <p>I'm currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                         <img src={mail_icon} alt="icon" />
                         <p>bahromhasanov0202@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                       <img src={call_icon} alt="icon" />
                        <p>+998771511023</p>
                    </div>
                    <div className='contact-detail'>
                         <img src={location_icon} alt="icon" />
                         <p>Uzbekistan</p>
                    </div>
                </div>
            </div>
            <form  className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here </label>
               <textarea name="message" rows={"10"} placeholder='Enter youer message'></textarea>
            </form>
        </div>
    </div>
  )
}

export default Contact
