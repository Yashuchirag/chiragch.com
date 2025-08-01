import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaEnvelope,
  FaPhone,
  FaHome,
  FaMapMarkerAlt,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

// Hero Component
const Hero = () => {
  const [activeTitle, setActiveTitle] = useState(0);
  const titles = ['Full Stack Engineer', 'Problem Solver', 'Tech Enthusiast'];
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToAbout = (e) => {
    e.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="profile-image-container" data-aos="fade-right">
            <img
              src="/chirag_1.jpg"
              alt="Chirag Chandrashekar"
              className="profile-image"
              width="300"
              height="300"
              loading="eager"
            />
          </div>
          <div className="hero-text" data-aos="fade-left" data-aos-delay="200">
            <p className="greeting">Hi, I'm</p>
            <h1>Chirag Chandrashekar.</h1>
            <h2 className="typewriter">{titles[activeTitle]}</h2>
            <p className="hero-description">
              I'm a passionate software engineer specializing in building (and occasionally designing) exceptional digital experiences.
              Currently, I'm focused on creating impactful solutions at the intersection of technology and user experience.
            </p>
            <div className="cta-buttons">
              <a
                href="https://docs.google.com/document/d/1BCGKpmJTWgK1LoKDfGIUiTC80RdlMV1P/edit?usp=drive_link&ouid=102801513290136905100&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="View Resume"
              >
                <FaFilePdf /> View Resume
              </a>
              <a
                href="#contact"
                className="btn btn-outline"
                onClick={scrollToAbout}
                aria-label="Contact Me"
              >
                Get In Touch
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Yashuchirag" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/chirag-chandrashe-15b965103/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://leetcode.com/u/YashuChirag/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                <SiLeetcode className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <button className="scroll-down" onClick={scrollToAbout} aria-label="Scroll down to about section">
        <div className="arrow-down"></div>
      </button>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number"></span> About Me
          <span className="section-line"></span>
        </h2>
        <div className="about-grid">
          <div className="about-text" data-aos="fade-right">
            <p>Hello! I'm Chirag, a passionate Full Stack Developer with a strong foundation in computer science and a love for creating beautiful, functional, and user-centered digital experiences.</p>
            <p>I recently graduated with a Master's degree in Computer Science from the University of Colorado Boulder, where I honed my skills in software development, algorithms, and system design. My journey in tech started when I wrote my first "Hello World" program, and I've been hooked ever since.</p>
            <p>Here are a few technologies I've been working with recently:</p>
            <div className="tech-grid">
              {[
                'React', 'JavaScript', 'TypeScript', 'HTML5',
                'CSS3', 'Node.js', 'Express', 'Python',
                'Java', 'MongoDB', 'Docker', 'AWS'
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

// Experience Component
const Experience = () => {
  const experiences = [
    {
      role: 'Data Analyst',
      company: 'Accenture',
      period: 'Oct 2019 - Jul 2022',
      description: 'Designed and deployed scalable, high-quality data solutions for clinical trials using Java, Medidata Rave, and HP ALM, improving data integrity and accelerating project delivery.',
      responsibilities: [
        'Reduced data discrepancies by 15% over 14+months by designing and optimizing data pipelines and validation workflows using Medidata Rave, ensuring robust data quality checks.',
        'Developed and deployed scalable data processing solutions in Java 8, delivering two critical projects ahead of schedule, demonstrating expertise in object-oriented programming and ETL development.',
        'Implemented a micro-service to gather and test data from multiple external sources while ensuring data safety for clinical trial data.',
        'Increased test coverage by developing 280+ test cases using HP ALM test platform, achieving a 90% bug detection and resolution rate by leveraging automated test execution, rigorous validation strategies, and defect-tracking workflows.'
      ],
      skills: ['HP ALM', 'Postman', 'Java', 'Agile'],
      award: {
        name: 'Extra Mile Award',
        PDF: '/Chirag Chandrashekar.pdf'
      }
    },
    {
      role: 'Graduate Teaching Assistant',
      company: 'University of Colorado Boulder',
      period: 'Aug 2023 - Dec 2023',
      description: 'Assisted in teaching Fundamentals of Algorithms course, conducted lab sessions, and mentored students.',
      responsibilities: [
        'Conducted weekly lab sessions and office hours for 50+ students',
        'Graded assignments and provided constructive feedback',
        'Assisted in developing course materials and assignments',
        'Mentored students on best coding practices and problem-solving'
      ],
      skills: ['Python', 'Java', 'CSS', 'HTML','React', 'Git', 'Docker', 'Algorithms', 'Teaching', 'Mentoring']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number"></span> Work Experience
          <span className="section-line"></span>
        </h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="experience-header">
                <h3>{exp.role} <span>@ {exp.company}</span></h3>
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
              {exp.award && (
                <div className="experience-award">
                  Award:{" "}
                  <a
                    href="/Chirag Chandrashekar.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.award.name}
                  </a>
                  <FaExternalLinkAlt className="award-icon" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pages
const educationData = [
  {
    school: 'University of Colorado Boulder(LINCD)',
    date: '2022 - 2024',
    degree: 'Master of Science in Electrical Engineering',
    gpa: 'GPA: 3.77/4.0'
  },
  {
    school: 'BMS College of Engineering',
    date: '2015 - 2019',
    degree: "Bachelor's in Electronics and Communication Engineering",
    gpa: 'GPA: 3.5/4.0'
  }
];

const EducationPage = ({ onBack }) => {
  const educationList = educationData.map((edu, index) => (
    <div key={index} className="education-card" data-aos="fade-up" data-aos-delay={index * 100}>
      <h3>{edu.school}</h3>
      <p className="date">{edu.date}</p>
      <p>{edu.degree}</p>
      <p>{edu.gpa}</p>
    </div>
  ));

  return (
    <div className="page">
      <button onClick={onBack} className="back-to-toc">← Back to Contents</button>
      <h1 className="page-title">Education</h1>
      <div className="education-grid">{educationList}</div>
    </div>
  );
};

// Skills Page
const skillsData = [
  {
    category: 'Frontend',
    tags: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Redux', 'Vue.js']
  },
  {
    category: 'Backend',
    tags: ['Node.js', 'Express', 'Python', 'Java', 'REST APIs']
  },
  {
    category: 'Database & Tools',
    tags: ['MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS', 'CI/CD']
  },
  {
    category: 'Business Skills',
    tags: [
      'Data Analysis', 'Machine Learning', 'Statistical Modeling', 'Predictive Analytics',
      'Data Visualization', 'Feature Engineering', 'Computer Vision',
      'Natural Language Processing', 'Deep Learning', 'Data Mining', 'Agile'
    ]
  }
];

const SkillsPage = ({ onBack }) => {
  const skillSections = skillsData.map((section, index) => (
    <div key={index} className="skill-category" data-aos="fade-up" data-aos-delay={index * 100}>
      <h4>{section.category}</h4>
      <div className="skill-tags">
        {section.tags.map((tag, i) => (
          <span key={i} className="skill-tag">{tag}</span>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="page">
      <button onClick={onBack} className="back-to-toc">← Back to Contents</button>
      <h1 className="page-title">Skills</h1>
      <section className="skills">
        <div className="container">
          <h3>Technical Skills</h3>
          <div className="skills-grid">{skillSections}</div>
        </div>
      </section>
    </div>
  );
};

// Contact Page
const ContactPage = ({ onBack }) => (
  <div className="page" id="contact">
    <button onClick={onBack} className="back-to-toc">← Back to Contents</button>
    <h1 className="page-title">Contact Me</h1>
    <div className="contact-content">
      <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!</p>
      <div className="contact-info">
        <div className="contact-item"><FaEnvelope /><a href="mailto:chiragchandrashekar@gmail.com">chiragchandrashekar@gmail.com</a></div>
        <div className="contact-item"><FaPhone /><a href="tel:+17202057734">+1 (720) 205-7734</a></div>
        <div className="contact-item"><FaMapMarkerAlt /><span>San Jose, California</span></div>
      </div>
      <div className="social-links">
        <a href="https://github.com/Yashuchirag" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/chirag-chandrashe-15b965103/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </div>
  </div>
);

// App
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true, mirror: false });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [currentPage]);

  return (
    <div className="App">
      <header className={`header ${isMenuOpen ? 'active' : ''}`}>
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <a href="#home" onClick={() => setCurrentPage('home')} aria-label="Home">
                <FaHome size={24} />
              </a>
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li><a href="#about" onClick={() => setCurrentPage('home')}>About</a></li>
              <li><a href="#experience" onClick={() => setCurrentPage('home')}>Experience</a></li>
              <li><a href="#education" onClick={() => setCurrentPage('education')}>Education</a></li>
              <li><a href="#skills" onClick={() => setCurrentPage('skills')}>Skills</a></li>
              <li><a href="#contact" onClick={() => setCurrentPage('contact')} className="btn btn-primary">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {currentPage === 'home' && (<><Hero /><About /><Experience /></>)}
        {currentPage === 'education' && <EducationPage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'skills' && <SkillsPage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'contact' && <ContactPage onBack={() => setCurrentPage('home')} />}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>Designed & Built by Chirag Chandrashekar</p>
            <div className="social-links">
              <a href="https://github.com/ChiragChandrashekar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com/in/chirag-chandrashekar" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="mailto:chirag.chandrashekar@colorado.edu"><FaEnvelope /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} Chirag Chandrashekar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
