import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
 return (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-content">
                <q>Designed & Built by Chirag Chandrashekar</q>
                <div className="footer-social-links">
                  <a href="https://github.com/ChiragChandrashekar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href="https://linkedin.com/in/chirag-chandrashekar" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a href="mailto:chirag.chandrashekar@colorado.edu"><FaEnvelope /></a>
                </div>
                <q>&copy; {new Date().getFullYear()} Chirag Chandrashekar. All rights reserved.</q>
            </div>
        </div>
    </div>
 )
};

export default Footer;