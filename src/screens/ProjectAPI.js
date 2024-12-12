import '../stylesheets/ProjectDetails.css';
import APIGet from '../assets/images/GET.png'; 
import APIPost from '../assets/images/POST.png'; 
import APIDelete from '../assets/images/DELETE.png'; 

function ProjectAPI() {

    return (
      <>

        <section id="portfolio-details" className="portfolio-details section">
          <div className="container" data-aos="fade-up">
            <div className="images-grid">
              <div className="image-container">
                <img src={APIGet} alt="API GET Request" className="image" />
              </div>
              <div className="image-container">
                <img src={APIPost} alt="API POST Request" className="image" />
              </div>
              <div className="image-container">
                <img src={APIDelete} alt="API DELETE Request" className="image" />
              </div>

            </div>

        <div className="row justify-content-between gy-4 mt-4">
          <div className="col-lg-8" data-aos="fade-up">
            <div className="portfolio-description">
              <h2>API REST usuarios</h2>
              <p>
              API REST que permite gestionar usuarios utilizando un backend en Node.js con Express.js y como base de datos relacional PostgreSQL.
              </p>
              <ul>
                Está diseñada para trabajar con un modelo de usuario que incluye los campos:
                <li>id: autoincremental, clave primaria.</li>
                <li>nombre: string, requerido.</li>
                <li>email: string, único y validado.</li>
                <li>password: string, requerido, almacenado como hash.</li>
                <li>rol: string, valores posibles: Admin, Usuario.</li>
              </ul>
              <p>
              Entre las tecnologias utilizadas en el backend se encuentran Node.js, como entorno de ejecución para el servidor, PostgreSQL (base de datos SQL), el ORM Sequalize para la modelación de los datos y Express como framework principal para crear el servidor web.
              </p>
            </div>
          </div>

          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-info">
              <h3>Información del proyecto</h3>
              <ul>
                <li><strong>Categoría</strong> API REST </li>
                <li><strong>Cliente</strong> Profesional independiente </li>
                <li><strong>Fecha</strong> 01 Diciembre, 2024 </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </section>
  </>
  )
}

export default ProjectAPI
