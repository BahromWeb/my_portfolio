import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="images" />
        <h1><span>I'm Bahrom Hasanov,</span> Frontend Developer based in Uzbekistan</h1>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks</p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink href="#contact" offset="80">Connect with Me </AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
