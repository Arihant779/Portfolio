import React from "react";
import "./about.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <p>
                Hello! I'm Arihant Jain, a passionate student currently pursuing my degree in Computer Science Engineering at IIT Indore.
                I have a keen interest in web development, machine learning, and cybersecurity. 
                In my spare time, I enjoy solving competitive programming questions.
            </p>
            <p>
                My goal is to continuously learn and grow, both as a developer and as an individual. 
                I am always eager to take on new challenges and collaborate with others to create impactful solutions.
            </p>
            {/* <div className="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
            </div> */}
        </div>
    );
};

export default About;
