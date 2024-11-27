import { Link } from 'react-router-dom';
import '../stylesheets/AboutMe.css'; 
import '../stylesheets/Projects.css'; 
import Odoo from '../assets/images/odoo.png';
import backHomeVideo from '../assets/videos/back_home.mp4'; 
import backHomeVideo2 from '../assets/videos/back_home2.mp4'; 
import partnersOdooVideo from '../assets/videos/partners_odoo.mp4'; 
import BackHome from '../assets/images/back_home.png';
import QRDesign from '../assets/images/qr-code.png';
import RecipeDesign from '../assets/images/recipe-design.png';


function Projects() {
  const proyectos = [
    
    
    {
      id: 1,
      image: BackHome,
      tittle: "Back Home",
      description: [
        "Aplicación móvil desarrollada con React Native, diseñada para ofrecer una experiencia de usuario simple y fluida.",
        "Los campos de entrada estan definidos con validaciones específicas como el uso de teclado adecuado para el tipo de entrada esperada",
        "Entre las tecnologias utilizadas en el backend se encuentran Node.js, como entorno de ejecución para el servidor, MongoDB (base de datos noSQL), Mongoose para la modelación de los datos y Express como framework principal para crear el servidor web.",
      ],
      repository: "https://github.com/mnazarethg/BackHome",
      project: [backHomeVideo, backHomeVideo2]
    },
    {
      id: 2,
      image: Odoo,
      tittle: "Partners de Odoo",
      description:  [
        "Módulo de Odoo diseñado para registrar y graficar las relaciones de los clientes con los partners de Odoo desde el CRM.",
        "Incluye un modelo de datos completo a nivel de backend. La información se obtiene mediante el parseo de la página web oficial de Odoo, a partir de acciones planificadas.",
        "Además, el módulo integra funcionalidades de mensajería y seguimiento de actividades, permitiendo un registro detallado de interacciones.",
        "Incluye traducciones al español."
      ],
      repository: "https://github.com/usuario/proyecto1",
      project: partnersOdooVideo,
    },
    {
      id: 3,
      image: QRDesign,
      tittle: "QR Code Component",
      description:  [
        "En este proyecto de Frontend Mentor Challenges, trabajé en el diseño de una tarjeta estática, ideal para quienes están iniciando en el desarrollo web.",
        "Aunque el diseño no requiere adaptaciones responsivas, me permitió fortalecer habilidades en HTML y CSS, enfocándome en detalles visuales y estructuración semántica del código.",
      ],
      repository: "https://github.com/mnazarethg/qr-code",
      project: "https://mnazarethg.github.io/qr-code/",
    },

  ];

  return (
    <>
      <section id="portfolio" class="portfolio section">

        <div class="container section-title" data-aos="fade-up">
          <h2>Proyectos</h2>
          <p>Proyectos que combinan innovación, funcionalidad y pasión por aprender.</p>
        </div>

        <div class="container">

          <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

            <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-branding">Web</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-product">Odoo</li>
            </ul>

            <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img src={BackHome} class="img-fluid" alt=""></img>
                <div class="portfolio-info">
                  <h4>Back Home</h4>
                  <p>Aplicación móvil desarrollada con React Native.</p>
                  <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <Link to="../screens/ProyectDetails.js"></Link>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img src={QRDesign} class="img-fluid" alt=""></img>
                <div class="portfolio-info">
                  <h4>Código QR</h4>
                  <p>Propuesta para Frontend Mentor</p>
                  <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img src={RecipeDesign} class="img-fluid" alt=""></img>
                <div class="portfolio-info">
                  <h4>Recetario</h4>
                  <p>Propuesta de Frontend Mentor</p>
                  <a href="assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img src={Odoo} class="img-fluid" alt=""></img>
                <div class="portfolio-info">
                  <h4>Partners de Odoo</h4>
                  <p>Módulo completo de Odoo ERP</p>
                  <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
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