import React from 'react'
import'./About.css'
import profile_img from "../../assets/Profile-photo.jpg"
import theme_pattern from "../../assets/web.svg"

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a full stack developer with expertise in creating dynamic, user-friendly websites and applications using modern technologies.</p>
            <p>I am passionate about transforming innovative ideas into seamless digital experiences through cutting-edge technology.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>ReactJS and Vue</p><hr style={{width:'50%'}}/></div>
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'70%'}}/></div>
            <div className="about-skill"><p>Node & Angular</p><hr style={{width:'60%'}}/></div>
            <div className="about-skill"><p>Next Js</p><hr style={{width:'50%'}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>13+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
