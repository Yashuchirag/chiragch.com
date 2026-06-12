import React from 'react'
import Backdrop from './components/ui/Backdrop.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import AboutSection from './components/sections/AboutSection.jsx'
import ExperienceSection from './components/sections/ExperienceSection.jsx'
import ProjectsSection from './components/sections/ProjectsSection.jsx'
import SkillsSection from './components/sections/SkillsSection.jsx'
import EducationSection from './components/sections/EducationSection.jsx'
import ContactSection from './components/sections/ContactSection.jsx'
import AskPanel from './components/AskPanel.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Backdrop />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
        <AskPanel />
      </div>
    </div>
  )
}
