import React, { useRef } from 'react';
import Card from './Card.jsx'
import Button from './Button.jsx'
import Phase from './Phase.jsx';
import { useIsVisible } from '../hooks/useIsVisible';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Contact from './Contact.jsx';


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



function AboutMe() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredPhase, setHoveredPhase] = useState({ title: '', description: '' });
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const aboutMeText = (
    <p dangerouslySetInnerHTML={{ __html: t("about-me-iii") }}></p>
  );

  function handleHover(title, description) {
    setIsHovering(true);
    setHoveredPhase({ title, description });
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <div>
      <div className="p-8 sm:pl-10 min-h-screen flex items-center justify-center" id="about-me">
        <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <div className="sm:flex">
            <Card title={t('about-me-i')} description={skillsText} text="text-blue text-m sm:text-xl" />
            <div>
              <Card title={t('about-me-ii')} description={aboutMeText} text="text-black text-m sm:text-xl" />
              <div className="flex pr-7">
                <Phase image="/ux-dev-portfolio/RESEARCH.png" title="01." onHover={() => handleHover(t('about-me-iv'), t('about-me-v'))} onLeave={handleMouseLeave}/>
                <Phase image="/ux-dev-portfolio/DESIGN.png" title="02." onHover={() => handleHover(t('about-me-vi'), t('about-me-vii'))} onLeave={handleMouseLeave}/>
                <Phase image="/ux-dev-portfolio/BUILD.png"title="03."  onHover={() => handleHover(t('about-me-viii'), t('about-me-ix'))} onLeave={handleMouseLeave}/>
              </div>
              <div className={`transition-opacity duration-500 ease-in  ${isHovering ? 'opacity-100' : 'opacity-0'} bg-orange rounded-md mr-8 ms-2 mt-4 sm:max-w-xl p-2`}>
                <p className="px-3 py-1 font-bold text-m sm:text-xl font-main font-bold text-gray">{hoveredPhase.title}</p>
                <p className="px-3 pb-2 text-m font-main text-gray">{hoveredPhase.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default AboutMe
