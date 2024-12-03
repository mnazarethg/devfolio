import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'glightbox/dist/css/glightbox.min.css'; 
import '../stylesheets/Projects.css'; 
import Odoo from '../assets/images/odoo.png';
import BackHome from '../assets/images/back_home.png';
import QRDesign from '../assets/images/qr-code.png';
import RecipeDesign from '../assets/images/recipe-design.png';
import SocialLinksProfile from '../assets/images/social-links-profile.png';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Projects () {

  const projects = [
    { id: 1, category: "app", imgSrc: BackHome, title: "BackHome", description: "Aplicación móvil desarrollada con React Native.", link: "/ProjectBackHome" },
    { id: 2, category: 'web', imgSrc: QRDesign, title: "Código QR", description: "Propuesta para Frontend Mentor.", link: "https://mnazarethg.github.io/qr-code/" },
    { id: 3, category: 'web', imgSrc: RecipeDesign, title: "Recetario", description: "Propuesta para Frontend Mentor.", link: "https://mnazarethg.github.io/recipe-page/" },
    { id: 4, category: 'web', imgSrc: SocialLinksProfile, title: "Perfil de Redes Sociales", description: "Propuesta para Frontend Mentor.", link: "https://mnazarethg.github.io/social-links-profile-maria/" },
    { id: 5, category: 'odoo', imgSrc: Odoo, title: "Partners de Odoo", description: "Módulo completo de Odoo ERP.", link: "/ProjectOdoo" },
  ];

  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects =
    activeFilter === '*'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
              <li className={activeFilter === '*' ? 'filter-active' : ''} onClick={() => handleFilterChange('*')}>All</li>
              <li className={activeFilter === 'app' ? 'filter-active' : ''} onClick={() => handleFilterChange('app')}>App</li>
              <li className={activeFilter === 'web' ? 'filter-active' : ''} onClick={() => handleFilterChange('web')}>Web</li>
              <li className={activeFilter === 'odoo' ? 'filter-active' : ''} onClick={() => handleFilterChange('odoo')}>Odoo</li>
            </ul>

            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img src={project.imgSrc} className="img-fluid" alt=""></img>
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <a href={project.imgSrc} title={project.title} data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  {project.link.startsWith("http") ? (
                  <a href={project.link} title="Más detalles" className="details-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                ) : (
                  <Link to={project.link} title="Más detalles" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                )}
                </div>
              </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Projects;