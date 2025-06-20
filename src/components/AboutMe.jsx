import React, { useRef } from 'react';
import Card from './Card.jsx'
import Button from './Button.jsx'
import Phase from './Phase.jsx';
import { useIsVisible } from '../hooks/useIsVisible';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './Footer.jsx';
import ProjectContainer from './ProjectContainer.jsx';
import ProjectCard from './ProjectCard.jsx';
import MyTimeline from './MyTimeline.jsx';
import ProjectTitle from './ProjectTitle.jsx';


function AboutMe() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredPhase, setHoveredPhase] = useState({ title: '', description: '' });
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const skillsText = (
  <div className="list-inside flex sm:flex-col justify between">
    <div className="mr-2">
      <div>{t("skills-i")}</div>
      <div>{t("skills-ii")}</div>
      <div>{t("skills-iii")}</div>
      <div>Figma</div>
      <div>Python</div>
    </div>
    <div>
      <div>HTML</div>
      <div>CSS</div>
      <div>JavaScript</div>
      <div>React</div>
      <div>Ruby on Rails</div>
    </div>
  </div>
)


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
      <div className="p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px]">
        <div className="sm:mr-8">
          <div>
            <h2 className="mt-14 sm:mt-28 font-libre font-bold text-red text-3xl sm:text-8xl">{t('navbar-i')}</h2>
            <p className="my-10 font-main sm:text-xl text-m">{t('intro-iii')}</p>
          </div>
          <div className="flex justify-center" id="about-me">
            <div ref={ref1} >
              <div className="sm:flex">
                <Card title={t('about-me-i')} description={skillsText} text="text-red text-m sm:text-xl" />
                <div>
                  <Card title={t('about-me-ii')} description={aboutMeText} text="text-black text-m sm:text-xl" />
                  <div className="flex pr-7">
                    <Phase image="/ux-dev-portfolio/10.png" title="" onHover={() => handleHover(t('about-me-iv'), t('about-me-v'))} onLeave={handleMouseLeave} />
                    <Phase image="/ux-dev-portfolio/12.png" title="" onHover={() => handleHover(t('about-me-vi'), t('about-me-vii'))} onLeave={handleMouseLeave} />
                    <Phase image="/ux-dev-portfolio/15.png" title="" onHover={() => handleHover(t('about-me-viii'), t('about-me-ix'))} onLeave={handleMouseLeave} />
                  </div>
                  <div className={`transition-opacity duration-500 ease-in  ${isHovering ? 'opacity-100' : 'opacity-0'} bg-red rounded-md mr-8 ms-2 mt-4 sm:max-w-xl p-2`}>
                    <p className="px-3 py-1 font-bold text-m sm:text-xl font-main font-bold text-white">{hoveredPhase.title}</p>
                    <p className="px-3 pb-2 text-m font-main text-white">{hoveredPhase.description}</p>
                  </div>
                </div>
              </div>
              {/* <ProjectCard
                imageSrc="/ux-dev-portfolio/ME.png"
                description={t('intro-iii-2')}
              /> */}
            </div>
          </div>
          <div>
            <p className="my-10 font-main sm:text-xl text-m">{t('intro-iii-3')} </p>
          </div>
        </div>
      </div>
      <div className="p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px]">
        <ProjectTitle
          title={t("timeline-i")}
        />
        <MyTimeline />
      </div>
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  )
}

export default AboutMe
