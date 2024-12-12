import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.css'

function Header() {
  useEffect(() => {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    /**
    * Mobile nav toggle
    */
    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
    }

    /**
    * Hide mobile nav on same-page/hash links
    */
    const navLinks = document.querySelectorAll('#navmenu a');
    navLinks.forEach(navLink => {
      navLink.addEventListener('click', () => {
        if (document.querySelector('body').classList.contains('mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });

    return () => {
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener('click', mobileNavToogle);
      }
      navLinks.forEach(navLink => {
        navLink.removeEventListener('click', mobileNavToogle);
      });
    };
  }, []);

  return (     
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <span className="logo d-flex align-items-center">
          <h1 className="sitename">Portfolio</h1>
        </span>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/devfolio">Principal</Link></li>
            <li><Link to="/AboutMe">Sobre mí</Link></li>
            <li><Link to="/Projects">Proyectos</Link></li>
            <li><Link to="/Contact">Contacto</Link></li>
          </ul> 
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>     
        </nav>
      </div>
    </header>
  );
};

export default Header;