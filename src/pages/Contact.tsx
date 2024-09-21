import Header from "../components/Header";
import "../styles/Contact.css"
import { useState } from "react";



const Contact = () => {
  // use state variables to get info from form for submission
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  console.log("First Name:", firstName)
  console.log("Last Name:", lastName)
  console.log("Email:", email)
  if (message){
    console.log("Message exists!")
  } 

  return (
    <div> 
      <Header/>
      <div className="container">
        <div className="contactInfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
              <img width={20} src="images/earth-americas.svg"></img>
                <span>
                  Eugene, Oregon
                  United States
                </span>
              </li>
              <li>
                <img width={20}src="images/mailbox.svg"></img>
                <span>
                  lyssaghan2@gmail.com
                </span>
              </li>
            </ul>
          </div>
          <ul className="socialIcon">

            <li><a href="#"><img width={20} src="images/bitbucket.png" alt=""></img></a></li>
            <li><a href="#"><img width={20} src="images/linkedin.svg" alt=""></img></a></li>
            <li><a href="#"><img width={20} src="images/github.svg" alt=""></img></a></li>

          </ul>
        </div>

        <div className="contactForm">
          <h2>
            Send me a message!
          </h2>
          <div className="formBox">
            <div className="inputBox w50">
            {/* <span>First Name</span> */}
            <input onChange={e => setFirstName(e.currentTarget.value)} placeholder="First Name" type="text" />
            </div>
            
            <div className="inputBox w50">
            {/* <span>Last Name</span> */}
            <input onChange={e => setLastName(e.currentTarget.value)} placeholder="Last Name" type="text"/>
            </div>

            <div className="inputBox w50">
            {/* <span>Email</span> */}
            <input onChange={e => setEmail(e.currentTarget.value)} placeholder="Email" type="text"/>
            </div>

            <div className="inputBox w100">
            {/* <span>Message</span> */}
            <textarea role="textbox" onChange={e => setMessage(e.currentTarget.value)} placeholder="Write Your Message Here" />
            </div>

            <div>
              {/* <button className="inputBox w100" onClick={}>Submit</button> */}
            </div>
      

          </div>
        </div>
      </div>
    </div>
  );
};
  
export default Contact;