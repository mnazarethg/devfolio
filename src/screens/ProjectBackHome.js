import '../stylesheets/ProjectDetails.css';
import backHomeVideo from '../assets/videos/back_home.mp4'; 
import backHomeVideo2 from '../assets/videos/back_home2.mp4'; 

function ProjectBackHome() {

    return (
      <>

        <section id="portfolio-details" className="portfolio-details section">
          <div className="container" data-aos="fade-up">
          <div className="video-grid">
          <div className="video-container">
            <video src={backHomeVideo} controls></video>
          </div>
          <div className="video-container">
            <video src={backHomeVideo2} controls></video>
          </div>
        </div>

        <div className="row justify-content-between gy-4 mt-4">
          <div className="col-lg-8" data-aos="fade-up">
            <div className="portfolio-description">
              <h2>Back Home</h2>
              <p>
              Aplicación móvil desarrollada con React Native, diseñada para ofrecer una experiencia de usuario simple y fluida.
              </p>
              <p>
              Los campos de entrada estan definidos con validaciones específicas como el uso de teclado adecuado para el tipo de entrada esperada.
              </p>
              <p>
              Entre las tecnologias utilizadas en el backend se encuentran Node.js, como entorno de ejecución para el servidor, MongoDB (base de datos noSQL), Mongoose para la modelación de los datos y Express como framework principal para crear el servidor web.
              </p>
            </div>
          </div>

          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-info">
              <h3>Información del proyecto</h3>
              <ul>
                <li><strong>Categoría</strong> App móvil </li>
                <li><strong>Cliente</strong> Profesional independiente </li>
                <li><strong>Fecha</strong> 01 Marzo, 2024 </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </section>
  </>
  )
}

export default ProjectBackHome
