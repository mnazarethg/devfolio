function Resume () {

  const education = [
    { id: 1, title: "FP Desarrollo de Aplicaciones Web (DAW)", year: "2023 - 2025", institution: "Instituto Exon" },
    { id: 2, title: "Inmersión Profunda en el Desarrollo Web Moderno - Full Stack Developer", year: 2024, institution: "Universidad de Helsinki", 
      description: "React, Redux, Node.js, MongoDB, GraphQL y TypeScript" },
    { id: 3, title: "Desarrollo de aplicaciones web con Java", year: 2024, institution: "Formateca" },
    { id: 4, title: "Certificación en JavaScript", year: 2023, institution: "ClaseFlix" },
    { id: 5, title: "Certificación en Flutter, Certificación en Dart", year: 2023, institution: "Google Developers Launchpad y Programming Hub" },
    { id: 7, title: "Magíster en investigación", year: "2022 - 2023", institution: "Universidad de Granada (UGR - España)", 
      description: "TFM en análisis de big data comportamental y de tractografías cerebrales con uso de R y Python" },
    { id: 8, title: "Machine Learning y Big Data para la Bioinformática", year: 2023, institution: "UGR"},
    { id: 9, title: "Fundamentos de la Programación en Python", year: 2022, institution: "CISCO - Networking Academy"},
    { id: 10, title: "Data Science for Everyone, Python for Data Science, R for Data Science, SQL Fundamentals", year: 2022, institution: "DataCamp"},
    { id: 11, title: "Lic. y Prof. en Psicología", year: "2010 - 2017", institution: "Universidad Nacional de Córdoba (UNC)"},
  ]

  const experience = [
    { id: 1, role: "Desarrolladora de Aplicaciones Multiplataforma", period: "2024 - Actualmente", company: "Profesional independiente",
      responsibilities: [ "Desarrollo de aplicaciones web y móviles utilizando React y React Native.", "Expo, Android Studio, React Navigation, Firebase, Node.js, Express.js, y MongoDB." ], },
    { id: 2, role: "Desarrolladora", period: "2023 - 2024", company: "Nanobytes",
      responsibilities: [ "Desarrollo de aplicaciones para digitalización comercial utilizando: Python, JavaScript, SQL, HTML, CSS y Bootstrap.", "PostgreSQL, Git, Docker.", "Integración, migración y personalización de soluciones en Odoo." ], }, 
    { id: 3, role: "Investigadora", period: "2022 - 2023", company: "UGR",
      responsibilities: [ "Big data, machine learning y análisis de datos de resonancias magnéticas y estimulación magnética transcraneal.", "Uso de R y Python." ], }, 
    { id: 4, role: "Coordinadora y supervisora", period: "2021 - 2023", company: "Profesional independiente",
      responsibilities: [ "Supervisión de profesionales." ], }, 
    { id: 5, role: "Capacitadora Profesional", period: "2021 - 2022", company: "Hospital Privado Universitario de Córdoba",
      responsibilities: [ "Supervisión de informes neurocognitivos.", "Capacitación de profesionales." ], }, 
    { id: 6, role: "Jefa de Servicio", period: "2017 - 2020", company: "Sanatorio Allende",
        responsibilities: [ "Análisis de datos neurocognitivos y presentación de resultados en informes gráficos para diagnósticos.", "Supervisión de residentes." ], }, 
    { id: 7, role: "Profesora Universitaria", period: "2017 - 2019", company: "UNC" }, 
  ]

  return (
  <section id="resume" className="resume section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Curriculum Vitae</h2>
        <p>Apasionada por el aprendizaje, siempre en busca de nuevas herramientas y conocimientos para desarrollar soluciones innovadoras en tecnología.</p>
      </div>

      <div className="container">

        <div className="row">

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <h3 className="resume-title">Educación</h3>
            { education.map((course) => (
            <div className="resume-item" key={course.id}>
              <h4>{course.title}</h4>
              <h5>{course.year}</h5>
              <p><em>{course.institution}</em></p>
              {course.description && <p>{course.description}</p>} 
            </div>
            ))}
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Experiencia Profesional</h3>
            { experience.map((job) => (
            <div className="resume-item" key={job.id}>
              <h4>{job.role}</h4>
              <h5>{job.period}</h5>
              <p><em>{job.company}</em></p>
              <ul>
                {job.responsibilities && job.responsibilities.map((task, index) => (
                <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Resume;