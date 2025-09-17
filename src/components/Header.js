import React from 'react';
import { FaHome } from 'react-icons/fa';

const Header = ({isMenuOpen, setCurrentPage}) => {
    return (
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
                      <li><a href="#projects" onClick={() => setCurrentPage('home')}>Projects</a></li>
                      <li><a href="#education" onClick={() => setCurrentPage('education')}>Education</a></li>
                      <li><a href="#skills" onClick={() => setCurrentPage('skills')}>Skills</a></li>
                      <li><a href="#contact" onClick={() => setCurrentPage('contact')} className="btn btn-primary">Contact</a></li>
                    </ul>
                  </nav>
                </div>
        </header>
    );
};

export default Header;
