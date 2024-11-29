import { Link } from 'react-router-dom';
import 'glightbox/dist/css/glightbox.min.css'; 
import '../stylesheets/Projects.css'; 
import Odoo from '../assets/images/odoo.png';
import BackHome from '../assets/images/back_home.png';
import QRDesign from '../assets/images/qr-code.png';
import RecipeDesign from '../assets/images/recipe-design.png';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Projects() {

  return (
    <>
      <section id="portfolio" className="portfolio section">

        <div className="container section-title" data-aos="fade-up">
          <h2>Proyectos</h2>
          <p>Proyectos que combinan innovación, funcionalidad y pasión por aprender.</p>
        </div>

        <div className="container">

          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-web">Web</li>
              <li data-filter=".filter-odoo">Odoo</li>
            </ul>

            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img src={BackHome} className="img-fluid" alt=""></img>
                <div className="portfolio-info">
                  <h4>Back Home</h4>
                  <p>Aplicación móvil desarrollada con React Native.</p>
                  <a href={BackHome} title="BackHome" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <Link to="/ProjectBackHome" title="Más detalles" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
                <img src={QRDesign} className="img-fluid" alt=""></img>
                <div className="portfolio-info">
                  <h4>Código QR</h4>
                  <p>Propuesta para Frontend Mentor</p>
                  <a href={QRDesign} title="Código QR" data-gallery="portfolio-gallery-web" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="https://mnazarethg.github.io/qr-code/" title="Más detalles" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
                <img src={RecipeDesign} className="img-fluid" alt=""></img>
                <div className="portfolio-info">
                  <h4>Recetario</h4>
                  <p>Propuesta de Frontend Mentor</p>
                  <a href={RecipeDesign} title="Recetario" data-gallery="portfolio-gallery-web" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="https://mnazarethg.github.io/recipe-page/" title="Más detalles" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-odoo">
                <img src={Odoo} className="img-fluid" alt=""></img>
                <div className="portfolio-info">
                  <h4>Partners de Odoo</h4>
                  <p>Módulo completo de Odoo ERP</p>
                  <a href={Odoo} title="Partners de Odoo" data-gallery="portfolio-gallery-odoo" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <Link to="/ProjectOdoo" title="Más detalles" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Projects;