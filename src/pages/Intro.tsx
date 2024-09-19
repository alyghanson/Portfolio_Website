
import { Link } from 'react-router-dom';
import '../styles/Intro.css'


function Intro() {
    return (
      <div className="Intro">
        <header className="Intro-header">
          <p>
            <code>Hey! I'm Aly, a Data Scientist.</code>
          </p>
          <p>
            <Link className='link' to="resume">Take a look at my Resume -{'>'}</Link>
          </p>
          <p>
            <Link className='link' to="contact">Hire Me -{'>'}</Link>
          </p>
        </header>
      </div>
    );
  }

  export default Intro