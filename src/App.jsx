import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar.jsx';
import Introduction from './components/Introduction.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import SendEy from './components/SendEy.jsx';
import EspacioIts from './components/EspacioIts.jsx';
import BestVet from './components/BestVet.jsx';
import VividBrands from './components/VividBrands.jsx';
import Banner from './components/Banner.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import PyramidApp from './components/PyramidApp.jsx';
import CursorTrail from './components/CursorTrail.jsx';
import Playground from './components/Playground.jsx';

function App() {
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

  return (
    <div className="App relative">
      <CursorTrail />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/ux-dev-portfolio/" element={ <Introduction /> } />
        <Route path="/ux-dev-portfolio/about-me" element={ <AboutMe /> } />
        <Route path="/ux-dev-portfolio/projects" element={ <Projects /> } />
        <Route path="/ux-dev-portfolio/contact" element={ <Contact /> } />
        <Route path="/ux-dev-portfolio/sendey" element={ <SendEy /> } />
        <Route path="/ux-dev-portfolio/espacio-its" element={ <EspacioIts /> } />
        <Route path="/ux-dev-portfolio/best-vet" element={ <BestVet /> } />
        <Route path="/ux-dev-portfolio/vivid-brands" element={ <VividBrands /> } />
        <Route path="/ux-dev-portfolio/pyramid-app" element={ <PyramidApp /> } />
        <Route path="/ux-dev-portfolio/playground" element={ <Playground /> } />
        <Route path="*" element={<Introduction />} />
      </Routes>
    </div>
  )
}

export default App
