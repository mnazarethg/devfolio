import '../stylesheets/ProjectDetails.css';
import OdooVideo from '../assets/videos/partners_odoo.mp4'; 

function ProjectOdoo() {

    return (
      <>

        <section id="portfolio-details" className="portfolio-details section">
          <div className="container" data-aos="fade-up">
          <div className="video-grid">
          <div className="video-container">
            <video src={OdooVideo} controls></video>
          </div>
        </div>

        <div className="row justify-content-between gy-4 mt-4">
          <div className="col-lg-8" data-aos="fade-up">
            <div className="portfolio-description">
              <h2>Partners de Odoo</h2>
              <p>
              Módulo de Odoo diseñado para registrar y graficar las relaciones de los clientes con los partners de Odoo desde el CRM.
              </p>
              <p>
              Incluye un modelo de datos completo a nivel de backend. La información se obtiene mediante el parseo de la página web oficial de Odoo, a partir de acciones planificadas.
              </p>
              <p>
              Además, el módulo integra funcionalidades de mensajería y seguimiento de actividades, permitiendo un registro detallado de interacciones.
              </p>
              <p>
              Incluye traducciones al español.
              </p>
            </div>
          </div>

          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-info">
              <h3>Información del proyecto</h3>
              <ul>
                <li><strong>Categoría</strong> Odoo ERP </li>
                <li><strong>Cliente</strong> Nanobytes </li>
                <li><strong>Fecha</strong> 01 Julio, 2023 </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </section>
  </>
  )
}

export default ProjectOdoo
