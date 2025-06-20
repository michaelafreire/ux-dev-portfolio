import React from 'react'
import ProjectCard from './ProjectCard'
import { useTranslation } from 'react-i18next';
import ProjectContainer from './ProjectContainer';
import Footer from './Footer';

function Projects() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div id="projects">
      <div className="p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px]">
        <h1 className="mt-14 sm:mt-28 font-libre font-bold text-red text-3xl sm:text-8xl">{t('projects')}</h1>
        <p className="my-10 font-main sm:text-xl text-m">{t('projects-i')}</p>
      </div>
      <ProjectContainer />
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  )
}

export default Projects
