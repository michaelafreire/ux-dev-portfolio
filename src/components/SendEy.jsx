import React from 'react';
import ProjectDescription from './ProjectDescription';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

function SendEy() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div id="sendey">
      <ProjectDescription name="Ruta Parental para Educacion Especial" description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"/>
      <div className="p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px]">
        <div className="py-10 sm:py-20 flex justify-start items-center">
          <p className="font-libre text-red text-xl sm:text-3xl font-bold">{t('intro-vi')}</p>
        </div>
        <p className="font-main sm:text-xl text-m">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        <div className="py-10 sm:py-20 h-2/3 flex items-center justify-center">
          <ProjectCard
          videoSrc="/ux-dev-portfolio/videos/ESPACIO ITS.mp4"
          description={t('espacio-its-description')}
          />
        </div>
      </div>
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  )
}

export default SendEy
