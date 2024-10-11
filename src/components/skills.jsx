import React from 'react';
import './skills.css';

const Skills = () => {
  const skills = [
    { name: 'C++', percentage: 90 },
    { name: 'Machine Learning', percentage: 85 },
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 80 },
    { name: 'SQL', percentage: 60 },
    { name: 'Cybersecurity', percentage: 65 },
    { name: 'JavaScript', percentage: 60 },
    { name: 'React', percentage: 65 },
    { name: 'Node.js', percentage: 70 },
    { name: 'Python', percentage: 70 }
  ];


  const firstHalf = skills.slice(0, 5);
  const secondHalf = skills.slice(5, 10);

  return (
    <div className="skills-container">
      <h1 className="skills-heading">My Skills</h1>
      <p className="skills-description">
        Here are some of my key skills and their proficiency levels.
      </p>

      <div className="skills-grid">
        
        <div className="skills-column">
          {firstHalf.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="skills-column">
          {secondHalf.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
