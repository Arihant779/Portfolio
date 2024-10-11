import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <section className="contact-section">
      <h1 className="contact-heading">Contact Me</h1>
      <div className="contact-info">
        <p className="contact-item">📞 +91 8851405344</p>
        <p className="contact-item">📧 cse230001009@iiti.ac.in</p>
        <a href="https://www.instagram.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://www.linkedin.com/in/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contacts;
