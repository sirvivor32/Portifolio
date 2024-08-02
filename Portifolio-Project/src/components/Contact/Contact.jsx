import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/services.svg'
import call_icon from '../../assets/phone_number.svg'
import mail_icon from '../../assets/email.svg'
import location_icon from '../../assets/location.svg'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0ae7ad7e-78c8-402c-825a-3ae7b5026b3c");
    
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
          alert(res.message);
        }
      };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Lets Talk</h1>
            <p>Contact me for any small or big web and application design projects.I'm here 24/7 to help bring your ideas to life with professional and creative solutions.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p>Kamub79@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>+256-773-963-500</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>Kampala, Uganda</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your Name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="Email" placeholder='Enter your Email' name='email'/>
            <label htmlFor="">Write your Message here</label>
            <textarea name="message" rows="10" placeholder='Enter your Message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
