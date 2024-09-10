import React from 'react'
import './App.css'
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar.jsx';
import Introduction from './components/Introduction.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Banner from './components/Banner.jsx';
import { Routes, Route } from "react-router-dom"

function App() {
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/ux-dev-portfolio/" element={ <Introduction /> } />
        <Route path="/ux-dev-portfolio/about-me" element={ <AboutMe /> } />
        <Route path="/ux-dev-portfolio/projects" element={ <Projects /> } />
        <Route path="/ux-dev-portfolio/contact" element={ <Contact /> } />
      </Routes>
    </div>
  )
}

export default App
