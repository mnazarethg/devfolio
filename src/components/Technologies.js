import React from 'react';

function Technologies() {
  const technologies = [    
    { id: 1, skill: "Python", value: 90 },
    { id: 2, skill: "SQL", value: 85 },
    { id: 3, skill: "HTML", value: 80 },
    { id: 4, skill: "CSS", value: 80 },
    { id: 5, skill: "Bootstrap", value: 75 },
    { id: 6, skill: "JavaScript", value: 70 },
    { id: 7, skill: "React", value: 65 },
    { id: 8, skill: "React Native", value: 65 },
    { id: 9, skill: "MongoDB", value: 55 },
    { id: 10, skill: "GIT", value: 95 },
  ]

  return (
    <>
      <div className="skills-content skills-animation">

        <h5>Tecnologías</h5>

        <div className="progress">
          {technologies.map((technology) => (
            <div key={technology.id}>
              <span className="skill"><span>{technology.skill}</span> <i className="val">{technology.value}</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Technologies;