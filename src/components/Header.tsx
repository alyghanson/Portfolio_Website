import Navbar from "./Navbar";


const Header = () => {
    return (
    <div>
      <header>
        <div className="nav-area">
          <a href="/portfolio/home" className="logo">
            A.Hanson
          </a>
          <Navbar/>
        </div>
      </header>
    </div>
    );
  };
  
  export default Header;