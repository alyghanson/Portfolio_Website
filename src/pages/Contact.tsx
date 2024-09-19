import Header from "../components/Header";
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div> 
      <Header/>
    <div className="contact">
      <h1 className="header">Contact Me</h1>
      <div className="text">Please reach out, I would love to hear from you!</div>
      <br/>
      <div><a className="link" href="http://www.linkedin.com/in/alyghanson" 
            target="_blank">Message me on Linkedin</a></div>
      <div><a className="link" href="https://github.com/alyghanson" 
            target="_blank">Checkout my github!</a></div>
      <div><a className="link" href="https://bitbucket.org/ahanson2cs322/workspace/repositories/" 
            target="_blank"> I've also been using BitBucket!</a></div>
      <br/>
      <div className="text">Or you can email me here: alyhanson@gmail.com</div>
      <br/>
    </div>
    </div>
  );
};
  
export default Contact;