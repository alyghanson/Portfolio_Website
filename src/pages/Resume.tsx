
import Header from '../components/Header';
import '../styles/Res.css'
import { template } from './Resume_General_html';

const Resume = () => {
    return (
      <div>
      <Header/>
      <>Change this!</>
        <div className='resume-box'>
          <div dangerouslySetInnerHTML={{ __html: template }}></div>
        </div>
      </div>
    );
  };
  export default Resume;