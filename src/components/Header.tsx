import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
    return (
    <div>
      <header>
        <div className="nav-area">
          <Link to="/home" className="logo">
            A.Hanson
          </Link>
          <Navbar/>
        </div>
      </header>
    </div>
    );
  };
  
  export default Header;