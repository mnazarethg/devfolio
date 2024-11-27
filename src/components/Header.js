import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Header() {

  return (     
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <span className="logo d-flex align-items-center">
          <h1>DevFolio</h1>
        </span>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/devfolio" className="active"></Link>Principal</li>
            <li><Link to="/AboutMe"></Link>Sobre mí</li>
            <li><Link to="/Projects"></Link>Proyectos</li>
            <li><Link to="/Contact"></Link>Contacto</li>
          </ul>      
        </nav>
      </div>
    </header>
  );
};

export default Header;