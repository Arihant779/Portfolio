import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: "Cataract Detection App",
    description: "An app to detect whether a person has cataract or not in real-time.",
    githubLink: "https://github.com/your-profile/siddhi-health",
    imageSrc: "cataracts eye closeup teaser.jpg" 
  },
  {
    title: "Document Summarizer",
    description: "A website that summarizes all kinds of documents.",
    githubLink: "https://github.com/your-profile/culinary-compass",
    imageSrc: "65cc4c835481f8e0f1ca3a3d_Video Summarizer (1).webp"
  },
  {
    title: "Chat Application",
    description: "A real-time chat application with chat encryption.",
    githubLink: "https://github.com/your-profile/amazon-clone",
    imageSrc: "original-6a382173568c9f3ac78d74cca5ee255d.png"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageSrc} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
