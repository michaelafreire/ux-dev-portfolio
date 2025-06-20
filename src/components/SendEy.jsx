import React from 'react';
import ProjectDescription from './ProjectDescription';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import { useTranslation, Trans } from 'react-i18next';
import ProjectTitle from './ProjectTitle';
import ProjectText from './ProjectText';
import ProjectTextImage from './ProjectTextImage';
import ProjectTextImageHmw from './ProjectTextImageHmw';
import ProjectBackgroundImage from './ProjectBackgroundImage';

function SendEy() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const imageSrc = i18n.language === "en" ? "/ux-dev-portfolio/SENDEY-PROCESS-EN.png" : "/ux-dev-portfolio/SENDEY-PROCESS-SP.png";

  return (
    <div id="sendey">
      <ProjectDescription
        name={t('sendey-i')}
        description={t('sendey-ii')}
        role = {t('sendey-iii')}
        tools = "Figma, LucidSpark, Canva"
        methods = {t('sendey-methods')}
        team = {t('sendey-team')}
      />
      <div className="p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px]">
        <ProjectTitle
          title={t('sendey-iv')}
        />
        <ProjectText
          text={t('sendey-v')}
        />
        <ProjectTextImageHmw
          text={t('sendey-vi')}
          image="/ux-dev-portfolio/SENDEY-BG-.png"
          hmw={t('sendey-vii')}
        />
        <ProjectText
          text={t('sendey-viii')}
        />
        <ProjectTitle
          title={t('sendey-ix')}
        />
        <ProjectText
          text={t('sendey-x')}
        />
        <ProjectBackgroundImage
          image={imageSrc}
        />
        <ProjectTextImage
          text={t('sendey-xi')}
          image="/ux-dev-portfolio/SENDEY-CODESIGN.png"
        />
        <ProjectTextImage
          text={t('sendey-xi-b')}
          image="/ux-dev-portfolio/SENDEY-SENSEMAKING.png"
        />
        <ProjectTitle
          title={t('sendey-xiv')}
        />
        <ProjectTextImage
          text={t('sendey-xv')}
          image="/ux-dev-portfolio/SENDEY-PROTOTYPE.png"
        />
      </div>
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  )
}

export default SendEy
