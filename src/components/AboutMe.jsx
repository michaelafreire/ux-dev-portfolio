import React, { useRef } from 'react';
import Card from './Card.jsx'
import Button from './Button.jsx'
import { useIsVisible } from '../hooks/useIsVisible';

const skillsText = (
  <div className="list-inside flex sm:flex-col justify between">
    <div className="mr-2">
      <div>JavaScript</div>
      <div>React</div>
      <div>Ruby Rails</div>
      <div>HTML</div>
      </div>
    <div>
      <div>CSS</div>
      <div>Git</div>
      <div>SQL</div>
      <div>Figma</div>
    </div>
  </div>
)

const aboutMeText = (
  <p> I've always loved understanding people and societies, which led me to become a social scientist. After graduating from university, I discovered the power of combining social sciences with design to solve complex issues. Consequently, I worked in multiple user-centered design teams in Lima and London for both public and private institutions. In one of these projects, I had the opportunity to work as a Product Owner for a digital service for in-service teachers in Peru. During this time, I discovered my third love: software development. I upskilled myself by learning several programming languages and have since been working to combine my three passions: social sciences, design, and software development. My goal is to design and build services that, hopefully, improve people's lives just a little bit.</p>
)

function AboutMe() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="min-h-screen flex items-center sm:items-end justify-center p-4" id="about-me">
      <div ref={ref1} className= {`sm:ml-10 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <div className="sm:flex">
          <Card title="Skills" description={skillsText} bg="bg-gray" text="text-pink text-m sm:text-xl"/>
          <Card title="About Me" description={aboutMeText} bg="bg-gray" text="text-black text-m sm:text-xl"/>
        </div>
        <div className= "pl-7 flex sm:justify-end">
          <Button text="Download CV" website="mailto:michaela.freiregriffith@gmail.com"/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
