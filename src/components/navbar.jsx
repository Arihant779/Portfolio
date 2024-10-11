import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css"; // Import the CSS file
import Intro from "./intro";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contacts from "./contacts";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const links = [
    { name: "Home", route: "home" },
    { name: "About", route: "about" },
    { name: "Skills", route: "skills" },
    { name: "Projects", route: "projects" },
    { name: "Contact", route: "contact" },
  ];

  return (
    <>
      <nav className="custom-navbar">
        <div className="navbar-container">
          <a href="#" className="navbar-brand">Arihant Jain</a>
          <ul className={`navbar-menu ${toggle ? "active" : ""}`}>
            {links.map((el) => (
              <li key={el.name}>
                <Link
                  to={el.route}
                  spy={true}
                  smooth={true}
                  className="navbar-link"
                  onClick={() => setToggle(false)}
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="navbar-toggle" onClick={() => setToggle(!toggle)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Section Content */}
      <section id="home" className="section"><Intro/></section>
      <section id="about" className="section"><About/></section>
      <section id="skills" className="section"><Skills/></section>
      <section id="projects" className="section"><Projects/></section>
      <section id="contact" className="section1"><Contacts/></section>
    </>
  );
};

export default Navbar;
