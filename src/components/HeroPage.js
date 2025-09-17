import React, { useState, useEffect, useRef } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaEnvelope
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';


const Hero = () => {
  const [activeTitle, setActiveTitle] = useState(0);
  const titles = ['Full Stack Engineer', 'Problem Solver', 'Tech Enthusiast'];
  const heroRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  // Affects to about section
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
            <p className="greeting">Hello there, this is</p>
            <h1>Chirag Chandrashekar.</h1>
            <h2 className="typewriter">{titles[activeTitle]}</h2>
            <p className="hero-description">
              I'm a passionate software engineer specializing in building (and occasionally designing) exceptional digital experiences.
              Currently, I'm focused on creating impactful solutions at the intersection of technology and user experience.
            </p>
            <div className="cta-buttons">
              <a
                href="/Chirag_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="View Resume"
              >
                <FaFilePdf /> View Resume
              </a>
              <a
                href="mailto:chirag.chandrashekar@colorado.edu"
                className="btn btn-outline"
                onClick={() => window.location.href = "mailto:chirag.chandrashekar@colorado.edu"}
                aria-label="Get In Touch"
              >
                <FaEnvelope /> Get In Touch
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

export default Hero;
