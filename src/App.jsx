import React from 'react'
import './App.css'
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar.jsx'
import Introduction from './components/Introduction.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Banner from './components/Banner.jsx'

function App() {
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

  return (
    <>
      <Navbar />
      <div>
        <Introduction />
        <Banner />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
