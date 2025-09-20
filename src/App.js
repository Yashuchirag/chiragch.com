import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing all the pages required
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/ProjectsPage';
import EducationPage from './components/EducationPage';
import About from './components/AboutPage';
import Hero from './components/HeroPage';
import Experience from './components/ExperiencePage';
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactsPage';
import EmailFormPage from './components/EmailFormPage';

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
      <Header isMenuOpen={isMenuOpen} setCurrentPage={setCurrentPage} />
  
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <EducationPage />
            <SkillsPage />
            <ContactPage />
            <EmailFormPage />
          </>
        )}
        {currentPage === 'education' && (
          <EducationPage onBack={() => setCurrentPage('home')} />
        )}
        {currentPage === 'skills' && (
          <SkillsPage onBack={() => setCurrentPage('home')} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onBack={() => setCurrentPage('home')} />
        )}
        {currentPage === 'email' && (
          <EmailFormPage onBack={() => setCurrentPage('home')} />
        )}
      </main>
  
      <Footer />
    </div>
  );
};

export default App;
