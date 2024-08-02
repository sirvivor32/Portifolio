import React from "react";
import"./Hero.css"
import profile_img from "../../assets/Profile-photo.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll";// Ensure the path is correct

const Hero = () => {
    return (
        <div id="home" className="hero">
          <img src={profile_img} alt="" />
          <h1><span>Im OfficialSirvivor, </span> full-stack developer based in Uganda.</h1>
          <p>I am a full stack developer from Kampala,Uganda with over 5 years experience in many top companies like K2R-Biotech,Pyramid Security and many others.</p>
          <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
          </div>
          </div>
      
    );
}

export default Hero