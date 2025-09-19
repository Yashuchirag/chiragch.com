import React from 'react';
import { FaHome } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({isMenuOpen, setCurrentPage}) => {
    return (
        <header className={`header ${isMenuOpen ? 'active' : ''}`}>
                <div className="container">
                  <nav className="nav">
                    <div className="logo">
                      <a href="#home" onClick={() => setCurrentPage('home')} aria-label="Home">
                        <FaHome size={24} />Chirag
                      </a>
                    </div>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                      <li><a href="#about" onClick={() => setCurrentPage('about')}>About</a></li>
                      <li><a href="#experience" onClick={() => setCurrentPage('experience')}>Experience</a></li>
                      <li><a href="#projects" onClick={() => setCurrentPage('projects')}>Projects</a></li>
                      <li><a href="#education" onClick={() => setCurrentPage('education')}>Education</a></li>
                      <li><a href="#skills" onClick={() => setCurrentPage('skills')}>Skills</a></li>
                      <li><a href="#contact" onClick={() => setCurrentPage('contact')} >Contact</a></li>
                    </ul>
                  </nav>
                </div>
        </header>
    );
};

export default Header;