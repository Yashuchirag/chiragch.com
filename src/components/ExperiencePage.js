import React from "react";
import { experiences } from "../data/Experience";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Experience.css";

const Experience = () => {
    return (
      <section id="experience" className="section">
        <div className="experience-container">
          <h1 className="experience-page-title" data-aos="fade-right">Work Experience</h1>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="experience-header">
                  <h3>{exp.role} <span>@ {exp.company}</span></h3>
                  {exp.award && (
                    <div className="experience-award">
                      Award:{" "}
                      <a
                        href="/Chirag_Chandrashekar.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.award.name}
                      </a>
                      <FaExternalLinkAlt className="award-icon" />
                    </div>
                  )}
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>
                      <span className="bullet"></span>
                      <span className="text">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="experience-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Experience;