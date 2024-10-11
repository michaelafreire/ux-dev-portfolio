import React, { useRef } from 'react';
import ProjectIntro from './ProjectIntro';
import { useTranslation } from 'react-i18next';
import { useIsVisible } from '../hooks/useIsVisible';


function ProjectContainer() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="projects-container">
      <div className="pt-10 sm:pt-20 flex justify-center items-center">
        <p ref={ref1} className={`transition duration-500 ease-out transition-translate ease-in ${isVisible1 ? "translate-x-0" : "-translate-x-6"} font-libre text-red text-xl sm:text-3xl font-bold p-3`}>{t('intro-vi')}</p>
      </div>
      <div className="pl-10 pr-10 sm:pl-[100px] sm:pr-[100px] pt-10 sm:pt-20 lg:grid lg:grid-cols-6 gap-10">
        <ProjectIntro
          name="Espacio ITS"
          description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          img="/ux-dev-portfolio/ITS-I.png"
          imgName="Espacio ITS"
          logo="/ux-dev-portfolio/ITS-LOGO.png"
        />
        <ProjectIntro
          name={t('send-ey')}
          description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          img="/ux-dev-portfolio/SENDEY-I.png"
          imgName={t('send-ey')}
          logo="/ux-dev-portfolio/SENDEY-LOGO.png"
        />
        <ProjectIntro
          name="Best Vet"
          description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          img="/ux-dev-portfolio/BESTVET-I.png"
          imgName="Best Vet"
          logo="/ux-dev-portfolio/BESTVET-LOGO.png"
        />
        <ProjectIntro
          name="Vivid Brands"
          description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          img="/ux-dev-portfolio/BS-I.png"
          imgName="Vivid Brands"
          logo="/ux-dev-portfolio/BS-LOGO.png"
        />
        <ProjectIntro
          name="Best Petsitter"
          description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          img="/ux-dev-portfolio/BESTPETSITTER-I.png"
          imgName="Best Petsitter"
          logo="/ux-dev-portfolio/BESTPETSITTER-LOGO.png"
        />
      </div>
    </div>
  )
}

export default ProjectContainer
