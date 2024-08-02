import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo-transparent-svg.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Get yourself right with web development from a professional with over 5+ years of experience in top companies all over the continent</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your Email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">©  2024 Sirvivor.All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
