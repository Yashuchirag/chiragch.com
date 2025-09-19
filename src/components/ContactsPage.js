import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
    FaEnvelope, 
    FaPhone, 
    FaMapMarkerAlt, 
    FaGithub, 
    FaLinkedin 
} from 'react-icons/fa';
import '../styles/Contact.css';

const ContactPage = () => {
    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true, mirror: false });
      }, []);
    
    return (
        <section className="contact-page" id="contact">
            <h1 className="contact-page-title" data-aos="fade-right">Contact Me</h1>
            <div className="contact-content" data-aos="fade-up" data-aos-delay="100">
                <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!</p>
                
                <div className="contact-info">
                <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
                    <FaEnvelope />
                    <a href="mailto:chiragchandrashekar@gmail.com">chiragchandrashekar@gmail.com</a>
                </div>
                <div className="contact-item" data-aos="fade-up" data-aos-delay="250">
                    <FaPhone />
                    <a href="tel:+17202057734">+1 (720) 205-7734</a>
                </div>
                <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
                    <FaMapMarkerAlt />
                    <span>San Jose, California</span>
                </div>
                </div>
        
                <div className="contact-social-links" data-aos="fade-up" data-aos-delay="400">
                <a href="https://github.com/Yashuchirag" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/chirag-chandrashe-15b965103/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;