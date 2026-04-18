import React from 'react'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import AboutSection from './components/sections/AboutSection.jsx'
import ExperienceSection from './components/sections/ExperienceSection.jsx'
import ProjectsSection from './components/sections/ProjectsSection.jsx'
import EducationSection from './components/sections/EducationSection.jsx'
import SkillsSection from './components/sections/SkillsSection.jsx'
import ContactSection from './components/sections/ContactSection.jsx'
import GradientBackground from './components/ui/GradientBackground.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <GradientBackground />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
