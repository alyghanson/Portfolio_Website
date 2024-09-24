import Header from "../components/Header";
import "../styles/Contact.css"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const ContactMe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {


      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID!, //Service Id
        process.env.REACT_APP_TEMPLATE_ID!, // Template Id
        form.current,
        process.env.REACT_APP_PUBLIC_KEY! //Public Key
      )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    }
  };



  return (
    <div> 
      <Header/>
      <div className="title">I would love to hear from you!</div>
      <div className="container">
        <div className="contactInfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
              <img width={20} src="images/earth-americas.svg" alt=""></img>
                <span>
                  Eugene, Oregon
                  United States
                </span>
              </li>
              <li>
                <img width={20}src="images/mailbox.svg" alt=""></img>
                <span>
                  lyssaghan2@gmail.com
                </span>
              </li>
            </ul>
          </div>
          <ul className="socialIcon">

            <li><a href="https://bitbucket.org/ahanson2cs322/proj6-rest/src/master/"><img width={20} src="images/bitbucket.png" alt=""></img></a></li>
            <li><a href="https://www.linkedin.com/in/alyghanson/"><img width={20} src="images/linkedin.svg" alt=""></img></a></li>
            <li><a href="https://github.com/alyghanson"><img width={20} src="images/github.svg" alt=""></img></a></li>

          </ul>
        </div>
        <div className="contactForm">
          <h2>Message Me!</h2>
            <form className="formBox" ref={form} onSubmit={sendEmail}>
            
            <div className="inputBox w50">
            <input type="text" name="user_name" placeholder="Your Name"required />
            </div>

            <div className="inputBox w50">
            <input type="email" name="user_email" placeholder="Your Email"required />
            </div>

            <div className="inputBox w100">
            <textarea name="message" placeholder="Message"required />
            </div>
            <div className="inputBox">
            <input type="submit" value="Send" />
            </div>
          </form>
      </div>

      </div>
    </div>
  );
};
  
export default ContactMe;