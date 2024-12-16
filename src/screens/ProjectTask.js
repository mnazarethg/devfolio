import '../stylesheets/ProjectDetails.css';
import TaskAdd from '../assets/images/add-task.png'; 
import TaskList from '../assets/images/list-task.png'; 
import TaskCompleted from '../assets/images/completed-task.png'; 

function ProjectTask() {

    return (
      <>

        <section id="portfolio-details" className="portfolio-details section">
          <div className="container" data-aos="fade-up">
            <div className="images-grid">
              <div className="image-container">
                <img src={TaskAdd} alt="Add Task" className="image" />
              </div>
              <div className="image-container">
                <img src={TaskList} alt="List Task" className="image" />
              </div>
              <div className="image-container">
                <img src={TaskCompleted} alt="Completed Task" className="image" />
              </div>

            </div>

        <div className="row justify-content-between gy-4 mt-4">
          <div className="col-lg-8" data-aos="fade-up">
            <div className="portfolio-description">
              <h2>Gestor de tareas</h2>
              <p>
              Aplicación web que permite gestionar usuarios utilizando Python y Streamlit para la interfaz de ususario.
              </p>
              <ul>
                Permite:
                <li>Agregar tareas con un título y descripción.</li>
                <li>Mostrar la lista de tareas.</li>
                <li>Marcar tareas como completadas</li>
                <li>Eliminar tareas si están completadas.</li>
                <li>Importar y exportar tareas.</li>
              </ul>
              <p>
              Entre las tecnologías utilizadas en el backend se encuentran PostgreSQL (base de datos SQL) y el ORM SQLAlchemy para la modelación de los datos.
              </p>
            </div>
          </div>

          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-info">
              <h3>Información del proyecto</h3>
              <ul>
                <li><strong>Categoría</strong> Web </li>
                <li><strong>Cliente</strong> Profesional independiente </li>
                <li><strong>Fecha</strong> 01 Noviembre, 2024 </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </section>
  </>
  )
}

export default ProjectTask
