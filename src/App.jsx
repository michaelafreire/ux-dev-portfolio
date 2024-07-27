import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Introduction from './components/Introduction.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}

export default App
