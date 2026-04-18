import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ExperiencePage from './pages/ExperiencePage.jsx'
import EducationPage from './pages/EducationPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import SkillsPage from './pages/SkillsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

export default function App() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"           element={<HomePage />} />
        <Route path="/about"      element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education"  element={<EducationPage />} />
        <Route path="/projects"   element={<ProjectsPage />} />
        <Route path="/skills"     element={<SkillsPage />} />
        <Route path="/contact"    element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  )
}
