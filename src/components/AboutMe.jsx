import React, { useRef } from 'react';
import Card from './Card.jsx'
import Button from './Button.jsx'
import Phase from './Phase.jsx';
import { useIsVisible } from '../hooks/useIsVisible';
import { useState } from 'react';


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
  <p> I've always loved understanding people and societies, which led me to become a social scientist. After graduating from university, I discovered the power of combining social sciences with design to solve complex issues.</p>
)

function AboutMe() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredPhase, setHoveredPhase] = useState({ title: '', description: '' });

  function handleHover(title, description) {
    setIsHovering(true);
    setHoveredPhase({ title, description });
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <div className="p-8 sm:pl-10 min-h-screen flex items-center justify-center" id="about-me">
      <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <div className="sm:flex">
          <Card title="Skills" description={skillsText} text="text-pink text-m sm:text-xl" />
          <div>
            <Card title="About Me" description={aboutMeText} text="text-black text-m sm:text-xl" />
            <div className="flex pr-8">
              <Phase image="RESEARCH.png" title="Research." onHover={() => handleHover('Research.', 'This is RESEARCH description.')} onLeave={handleMouseLeave}/>
              <Phase image="DESIGN.png" title="Design." onHover={() => handleHover('Design.', 'This is Design description.')} onLeave={handleMouseLeave}/>
              <Phase image="BUILD.png" title="Build." onHover={() => handleHover('Build.', 'This is Build description.')} onLeave={handleMouseLeave}/>
            </div>
            <div className={`transition-opacity duration-500 ease-in  ${isHovering ? 'opacity-100' : 'opacity-0'} bg-pink rounded-md mr-8 ml-1 mt-4`}>
              <p className="px-3 py-2 font-bold text-m sm:text-xl font-main font-bold text-gray">{hoveredPhase.title}</p>
              <p className="px-3 pb-2 text-m sm:text-xl font-main text-gray">{hoveredPhase.description}</p>
            </div>
            {/* <div className="flex sm:justify-end pr-8 mt-4 ml-1">
              <Button text="Download CV" link="#projects"/>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
