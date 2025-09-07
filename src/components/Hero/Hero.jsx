import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
function Hero() {
  return (
    <div className='hero'>
        <img src={profile_img} alt="images" />
        <h1><span>I'm Bahrom Hasanov,</span> Frontend Developer based in Uzbekistan</h1>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with Me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
