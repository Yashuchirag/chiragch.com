import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="profile-image-container" data-aos="fade-up">
            <img 
              src="/chirag_1.jpg" 
              alt="Chirag Chandrashekar" 
              className="profile-image"
              loading="eager"
            />
          </div>
          <h1 className="name" data-aos="fade-up" data-aos-delay="100">Chirag Chandrashekar</h1>
          <h2 className="title" data-aos="fade-up" data-aos-delay="150">Fullstack Software Engineer</h2>
          <p className="location" data-aos="fade-up" data-aos-delay="200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            San Jose, California
          </p>
          <p className="bio" data-aos="fade-up" data-aos-delay="250">
            Results-driven Full Stack Developer with expertise in building scalable web applications. 
            Passionate about creating efficient, user-friendly solutions using modern technologies. 
            Currently seeking full-time opportunities to contribute to innovative projects.
          </p>

          {/* Social Links */}
          <div className="social-links" data-aos="fade-up" data-aos-delay="300">
            {/* GitHub */}
            <a href="https://github.com/Yashuchirag" target="_blank" rel="noopener noreferrer nofollow" className="social-link github" aria-label="GitHub Profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/chirag-chandrashe-15b965103/" target="_blank" rel="noopener noreferrer nofollow" className="social-link linkedin" aria-label="LinkedIn Profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            {/* Resume */}
            <a href="https://docs.google.com/document/d/1BCGKpmJTWgK1LoKDfGIUiTC80RdlMV1P/edit?usp=drive_link&ouid=102801513290136905100&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer nofollow" className="social-link resume" aria-label="View Resume">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                <path d="M14 2v6h6"/>
                <path d="M16 13H8"/>
                <path d="M16 17H8"/>
                <path d="M10 9H8"/>
              </svg>
              <span>Resume</span>
            </a>
          </div>

          {/* CTA */}
          <div className="cta-section" data-aos="fade-up" data-aos-delay="350">
            <a href="mailto:contact@chiragch.com" className="cta-button" aria-label="Contact via Email">
              <span>Get In Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px', transition: 'transform 0.3s ease'}}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education" id="education">
        <div className="section-container">
          <h2 className="section-title" data-aos="fade-up">Education</h2>
          <div className="education-grid">

            <div className="education-card" data-aos="fade-up" data-aos-delay="100">
              <div className="education-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3>Master of Science in Electrical Engineering (LINCD)</h3>
              <p className="institution">University of Colorado Boulder</p>
              <p className="date">Aug 2022 – May 2024</p>
              <div className="education-details">
                <p><strong>Specialization:</strong> Software Engineering</p>
                <p><strong>Relevant Coursework:</strong> Software Engineering Fundamentals, Computer Vision, Linear Programming, Machine Learning, NLP, Data Science</p>
                <p><strong>GPA:</strong> 3.8 / 4.0</p>
              </div>
            </div>

            <div className="education-card" data-aos="fade-up" data-aos-delay="200">
              <div className="education-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3>Bachelor of Engineering in Electronics and Communication</h3>
              <p className="institution">BMS College of Engineering</p>
              <p className="date">Aug 2015 – Jul 2019</p>
              <div className="education-details">
                <p><strong>Focus Area:</strong> Electronics & Communication Engineering</p>
                <p><strong>Key Courses:</strong> Data Structures, Algorithms, Digital Electronics, Microprocessors, Communication Systems, Computer Networks, Microcontrollers, Embedded Systems, Signal Processing</p>
                <p><strong>GPA:</strong> 3.6 / 4.0</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <div className="section-container">
          <h2 className="section-title" data-aos="fade-up">Professional Experience</h2>
          <div className="experience-grid">
            <div className="experience-card" data-aos="fade-up" data-aos-delay="100">
              <div className="experience-header">
                <div className="experience-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <h3>Data Analyst</h3>
                  <p className="company">Accenture</p>
                  <p className="date">Oct 2019 – Jul 2022</p>
                </div>
              </div>
              <div className="experience-details">
                <p><strong>Key Responsibilities:</strong></p>
                <ul>
                  <li>Reduced data discrepancies by 15% over 14+months by designing and optimizing data pipelines and validation workflows using Medidata Rave, ensuring robust data quality checks.</li>
                  <li>Developed and deployed scalable data processing solutions in Java 8, delivering two critical projects ahead of schedule, demonstrating expertise in object-oriented programming and ETL development.</li>
                  <li>Implemented a micro-service to gather and test data from multiple external sources while ensuring data safety for clinical trial data.</li>
                  <li>Increased test coverage by developing 280+ test cases using HP ALM test platform, achieving a 90% bug detection and resolution rate by leveraging automated test execution, rigorous validation strategies, and defect-tracking workflows.</li>
                </ul>
                
                <p><strong>Achievements:</strong></p>
                <ul>
                  <li>Recipient of Accenture's 'Extra Mile Award' (FY21 Q1) for delivering exceptional outcomes with speed and agility through client collaboration — recognized in the Team category. 
                    <a href="/Chirag Chandrashekar.pdf" target="_blank" rel="noopener noreferrer" className="award-link">
                      View Award Certificate
                    </a>
                  </li>
                  <li>Mentored 3 junior analysts, improving team productivity by 20%.</li>
                  <li>Implemented a new data quality framework that reduced errors in reporting by 35%.</li>
                </ul>
                
                <p><strong>Technologies:</strong> SQL, HP ALM, Java 8, ServiceNow, Rave Technologies, Medidata Rave</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills and Footer (unchanged) */}
      {/* Keep rest of the sections as they are */}
    </div>
  );
}

export default App;
