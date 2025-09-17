import React from 'react';

const About = () => {
    return (
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-number" data-aos="fade-right" >About Me</span>
            <span className="section-line"></span>
          </h2>
          <div className="about-grid">
            <div className="about-text" data-aos="fade-right">
              <p>Hello! I'm Chirag, a passionate Full Stack Developer with a strong foundation in computer science and a love for creating beautiful, functional, and user-centered digital experiences.</p>
              <p>I recently graduated with a Master's degree in Computer Science from the University of Colorado Boulder, where I honed my skills in software development, algorithms, and system design. My journey in tech started when I wrote my first "Hello World" program, and I've been hooked ever since.</p>
              <p>Here are a few technologies I've been working with recently:</p>
              <div className="tech-grid">
                {[
                  'React', 'JavaScript', 'TypeScript', 'HTML',
                  'CSS', 'Node.js', 'Express', 'Python',
                  'Java', 'PostgreSQL', 'Git', 'Docker'
                ].map((tech, index) => (
                  <div key={index} className="tech-box" data-aos="fade-up" data-aos-delay={index * 50}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;