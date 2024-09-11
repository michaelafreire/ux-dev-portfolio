import React from 'react'
import ProjectIntro from './ProjectIntro'
import { useTranslation } from 'react-i18next';

function ProjectContainer() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="projects-container pl-10 pr-10 sm:pl-[100px] sm:pr-[100px]  pt-10 sm:pt-40 sm:grid sm:grid-cols-6 gap-10">
      <ProjectIntro
        name="Espacio ITS"
        description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
        img="/ux-dev-portfolio/ITS-I.png"
        imgName="Espacio ITS"
      />
      <ProjectIntro
        name={t('send-ey')}
        description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
        img="/ux-dev-portfolio/SENDEY-I.png"
        imgName={t('send-ey')}
      />
      <ProjectIntro
        name="Best Vet"
        description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
        img="/ux-dev-portfolio/BESTVET-I.png"
        imgName="Best Vet"
      />
      <ProjectIntro
        name="Vivid Brands"
        description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
        img="/ux-dev-portfolio/BS-I.png"
        imgName="Vivid Brands"
      />
      <ProjectIntro
        name="Best Petsitter"
        description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
        img="/ux-dev-portfolio/BESTPETSITTER-I.png"
        imgName="Best Petsitter"
      />
    </div>
  )
}

export default ProjectContainer
