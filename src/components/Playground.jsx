import React from 'react'
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import ProjectTitle from './ProjectTitle';
import ProjectText from './ProjectText';
import ProjectTextImage from './ProjectTextImage';
import ProjectTextImageHmw from './ProjectTextImageHmw';
import ProjectBackgroundImage from './ProjectBackgroundImage';

function Playground() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div id="playground">
      <div className="p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px]">
        <h1 className="mt-14 sm:mt-28 font-libre font-bold text-red text-3xl sm:text-8xl">{t('playground')}</h1>
        <p className="my-10 font-main sm:text-xl text-m">{t('playground-intro')}</p>
        {/* Space Safari */}
        <ProjectTitle
          title={t('space-safari')}
        />
        <ProjectText
          text={t('space-safari-intro')}
        />
        <ProjectBackgroundImage
          image="/ux-dev-portfolio/space-safari-intro.png"
        />
        <ProjectTextImage
          video="/ux-dev-portfolio/videos/space-safari-space-simulation.mp4"
          text = {t('space-safari-video')}
        />
        <ProjectTextImage
          video="/ux-dev-portfolio/videos/space-safari-alien-ar.mp4"
          text = {t('space-safari-ar')}
        />
        <ProjectText
          text={t('space-safari-app')}
        />
        <ProjectBackgroundImage
          image="/ux-dev-portfolio/space-safari-alienopedia.png"
        />
        {/* Capstone Project */}
        <ProjectTitle
          title={t('corruption-title')}
        />
        <ProjectTextImage
          image="/ux-dev-portfolio/capstone.png"
          text = {t('corruption-intro')}
        />
        {/* Minipeople */}
        <ProjectTitle
          title={t('minipeople-title')}
        />
        <ProjectTextImage
          video="/ux-dev-portfolio/videos/minipeople.mp4"
          text = {t('minipeople-intro')}
        />
        {/* Social Norms Altruism */}
        <ProjectTitle
          title={t('social-norms-title')}
        />
        <ProjectTextImage
          image="/ux-dev-portfolio/social-norms.png"
          text = {t('social-norms-intro')}
        />
        {/* Animaltopia */}
        <ProjectTitle
          title={t('animaltopia-title')}
        />
        <ProjectText
          text={t('animaltopia-intro')}
        />
        <ProjectBackgroundImage
          image="/ux-dev-portfolio/animaltopia.png"
        />
        {/*Skinny Dip*/}
        <ProjectTitle
          title={t('skinny-dip-title')}
        />
        <ProjectTextImage
          video="/ux-dev-portfolio/videos/skinnydip.mp4"
          text = {t('skinny-dip-intro')}
        />
        {/* Corazones Gatunos*/}
        <ProjectTitle
          title={t('corazones-gatunos-title')}
        />
        <ProjectText
          text={t('corazones-gatunos-intro')}
        />
        <ProjectBackgroundImage
          image="/ux-dev-portfolio/cg.png"
        />
      </div>
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  )
}

export default Playground
