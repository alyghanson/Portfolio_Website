
import Header from '../components/Header';
import '../styles/Res.css'
import { template } from './Resume_General_html';

const Resume = () => {
    return (
      <div>
      <Header/>
      
        <div className='resume-box'>
          <div> Resume will be up and running shortly! Feel free to take a look at my LinkedIn!</div>
        </div>
      </div>
    );
  };
  export default Resume;