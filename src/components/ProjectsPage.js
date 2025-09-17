import { Projects } from '../data/Projects';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsPage = () => {
  
    return (
      <section id="projects" className="section">
        <div className="container">
          <h1 className="page-title" data-aos="fade-right">Projects</h1>
          <div className="experience-timeline">
            {Projects.map((project, index) => (
              <div key={index} className="experience-item" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="experience-header">
                  <h3>{project.title} <span>@ {project.company}</span></h3>
                  <span className="experience-period">{project.period}</span>
                </div>
                <p className="experience-description">{project.description}</p>
                <ul className="experience-responsibilities">
                  {project.responsibilities.map((item, i) => (
                    <li key={i}>
                      <span className="bullet"></span>
                      <span className="text">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="experience-skills">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project <FaExternalLinkAlt className="link-icon" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default ProjectsPage;
