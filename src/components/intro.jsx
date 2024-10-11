import React, { useState, useEffect } from "react";
import "./intro.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Intro = () => {
    const [displayName, setDisplayName] = useState("");
    const name = "Arihant Jain";
    const [flag, setFlag] = useState(true);

    // Simulates typing effect
    useEffect(() => {
        if (flag) {
            let currentIndex = 0;
            const intervalId = setInterval(() => {
                if (currentIndex < name.length) {
                    setDisplayName(name.slice(0, currentIndex + 1)); 
                    currentIndex++;
                } else {
                    setFlag(false); 
                    clearInterval(intervalId); 
                }
            }, 100); 

            return () => clearInterval(intervalId); 
        }
    }, [flag, name]);

    return (
        <div className="home-container">
            <div className="name-intro">
                <h1>Hi, I am <span className="typed-name">{displayName}</span></h1>
                <p>Currently a student at IIT Indore</p>
                <p>CSE 2nd Year</p>
                <div className="social-links">
                
                    <a href="https://www.linkedin.com/in/arihant-jain-a946962a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin aa"></i>
                    </a>
                    <a href="https://github.com/Arihant779" target="_blank" rel="noreferrer" className="link1">
                        <i className="fa-brands fa-github aa"></i>
                    </a>
                </div>
            </div>
            <div className="profile-image">
                <img src="WhatsApp Image 2024-10-10 at 20.06.42_789280fe-modified.jpg" alt="Profile" />
            </div>
        </div>
    );
};

export default Intro;
