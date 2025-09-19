import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import EducationPage from './components/EducationPage';
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactsPage';
import HeroPage from './components/HeroPage';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import ProjectsPage from './components/ProjectsPage';


const App = () => { 
  const [currentPage, setCurrentPage] = useState('home'); 
  const [isMenuOpen] = useState(false); 
  useEffect(() => { AOS.init({ duration: 800, easing: 'ease-in-out', once: true, mirror: false }); }, []); 
  useEffect(() => { AOS.refresh(); }, [currentPage]); 
  return ( 
    <div className="App"> 
      
      <Header 
        setCurrentPage={setCurrentPage} 
      /> 
       
      <main> 
        {currentPage === 'home' && ( 
          <>
            <HeroPage />
          </>
        )} 
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'experience' && <ExperiencePage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'education' && <EducationPage />}
        {currentPage === 'skills' && <SkillsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main> 
      <Footer />
    </div> 
  ); };

export default App;
