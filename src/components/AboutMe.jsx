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
      <div>ReactJS</div>
      <div>Ruby on Rails</div>
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
  <p> I’m a versatile and passionate professional with experience across several stages of the product life cycle, including <i>research</i>, <i>design</i> and <i>development</i>. </p>
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
            <div className="flex pr-7">
              <Phase image="RESEARCH.png" title="Research" onHover={() => handleHover('Research', 'I have extensive experience in research operations, ethics, sampling, and fieldwork. I am familiar with methods like literature reviews, competitor analysis, interviews, focus groups, surveys, and card sorting. I can also analyze findings, identify user needs, and present actionable insights.')} onLeave={handleMouseLeave}/>
              <Phase image="DESIGN.png" title="Design" onHover={() => handleHover('Design', 'I have broad experience in user-centered design across various contexts, including digital products. I’m skilled in developing wireframes, prototypes, and responsive designs using Figma, and in leading workshops to align solutions with user needs and business goals.')} onLeave={handleMouseLeave}/>
              <Phase image="BUILD.png" title="Build" onHover={() => handleHover('Development','I have trained in developing maintainable code and am committed to staying current with industry trends. I am proficient in Agile project management, including Scrum. I collaborate effectively with multidisciplinary teams and am dedicated to my craft, aiming to make a meaningful impact.')} onLeave={handleMouseLeave}/>
            </div>
            <div className={`transition-opacity duration-500 ease-in  ${isHovering ? 'opacity-100' : 'opacity-0'} bg-pink rounded-md mr-8 ms-2 mt-4 sm:max-w-xl p-2`}>
              <p className="px-3 py-1 font-bold text-m sm:text-xl font-main font-bold text-gray">{hoveredPhase.title}</p>
              <p className="px-3 pb-2 text-m font-main text-gray">{hoveredPhase.description}</p>
            </div>
            {/* <div className="flex sm:justify-end">
              <Button text="Download CV" link="#projects"/>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
