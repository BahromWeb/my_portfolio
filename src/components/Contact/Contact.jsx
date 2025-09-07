import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8e2f36e3-fa8e-43ab-adc3-1d0c595cb80f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };


  return (
    <div id='contact' className='contact'>
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
            <form onSubmit={onSubmit}  className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here </label>
               <textarea name="message" rows={"10"} placeholder='Enter your message'></textarea>
               <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
