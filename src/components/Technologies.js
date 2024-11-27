function Technologies() {

  const technologies = [    
    { id: 1, skill: "Python", value: 70 },
    { id: 2, skill: "SQL", value: 60 },
    { id: 3, skill: "HTML", value: 55 },
    { id: 4, skill: "CSS", value: 55 },
    { id: 5, skill: "Bootstrap", value: 50 },
    { id: 6, skill: "JavaScript", value: 45 },
    { id: 7, skill: "React", value: 45 },
    { id: 8, skill: "React Native", value: 40 },
    { id: 9, skill: "MongoDB", value: 35 },
    { id: 10, skill: "GIT", value: 70 },
  ]

  return (
    <>
      <div className="skills-content skills-animation">

        <h5>Tecnologías</h5>
        {technologies.map((technology) => (
        <div className="progress" key={technology.id}>
          
            
              <span className="skill"><span>{technology.skill}</span> <i className="val">{technology.value}%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={technology.value} aria-valuemin="0" aria-valuemax="100" style={{ width: `${technology.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>

      
    </>
  );
};

export default Technologies;