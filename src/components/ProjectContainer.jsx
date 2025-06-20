import React, { useRef } from 'react';
import ProjectIntro from './ProjectIntro';
import { useTranslation } from 'react-i18next';
import { useIsVisible } from '../hooks/useIsVisible';


function ProjectContainer() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  // const ref1 = useRef();
  // const isVisible1 = useIsVisible(ref1);

  return (
    <div className="projects-container sm:pl-10 sm:pl-[100px] sm:pr-[100px]">
      {/* <div className="pt-10 sm:pt-20 flex justify-center items-center">
        <p ref={ref1} className={`transition duration-500 ease-out transition-translate ease-in ${isVisible1 ? "translate-x-0" : "-translate-x-6"} font-libre text-red text-xl sm:text-3xl font-bold p-3`}>{t('intro-vi')}</p>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectIntro
          name={t('espacio-its-i')}
          img="/ux-dev-portfolio/ITS-I.png"
          imgName="Espacio ITS"
          logo="/ux-dev-portfolio/ITS-LOGO.png"
          link="/ux-dev-portfolio/espacio-its"
          backgroundImage="/ux-dev-portfolio/ITS-BG.png"
          tag1="user research"
          tag2="ux design"
          tag3="usability testing"
          tag4="prototyping"
          tag5="edtech"
        />
        <ProjectIntro
          name={t('sendey-i')}
          imgName={t('send-ey')}
          logo="/ux-dev-portfolio/SENDEY-LOGO.png"
          link="/ux-dev-portfolio/sendey"
          backgroundImage="/ux-dev-portfolio/SENDEY-BG.png"
          tag1="user research"
          tag2="co-design"
          tag3="prototyping"
          tag4="policy"
          tag5="digital service"
        />
        <ProjectIntro
          name={t('vivid-i')}
          img="/ux-dev-portfolio/BS-I.png"
          imgName="Vivid Brands"
          logo="/ux-dev-portfolio/BS-LOGO.png"
          link="/ux-dev-portfolio/vivid-brands"
          backgroundImage="/ux-dev-portfolio/VIVID-BG.png"
          tag1="user research"
          tag2="co-design"
          tag3="market research"
          tag4="workshops"
          tag5="strategy"
        />
        <ProjectIntro
          name={t('pyramid-app-i')}
          img="/ux-dev-portfolio/PYRAMID-APP-BG.png"
          imgName="Pyramid App"
          logo="/ux-dev-portfolio/PYRAMID-APP-LOGO.png"
          link="/ux-dev-portfolio/pyramid-app"
          backgroundImage="/ux-dev-portfolio/PYRAMID-APP-BG.png"
          tag1="physiological data"
          tag2="quantitative research"
          tag3="ui design"
          tag4="edtech"
          tag5=""
        />
        <ProjectIntro
          name={t('best-vet-i')}
          img="/ux-dev-portfolio/BESTVET-I.png"
          imgName="Best Vet"
          logo="/ux-dev-portfolio/BESTVET-LOGO.png"
          link="/ux-dev-portfolio/best-vet"
          backgroundImage="/ux-dev-portfolio/BESTVET-BG.png"
          tag1="product design"
          tag2="ui design"
          tag3="full stack development"
          tag4="database design"
          tag5=""
        />
      </div>
    </div>
  )
}

export default ProjectContainer
