import ProjectDescription from './ProjectDescription';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import { useTranslation, Trans } from 'react-i18next';
import ProjectTitle from './ProjectTitle';
import ProjectText from './ProjectText';
import ProjectTextImage from './ProjectTextImage';
import ProjectTextImageHmw from './ProjectTextImageHmw';
import ProjectBackgroundImage from './ProjectBackgroundImage';

function EspacioIts() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const imageSrc = i18n.language === "en" ? "/ux-dev-portfolio/ITS-SAMPLE-EN.png" : "/ux-dev-portfolio/ITS-SAMPLE-SP.png";
  const imageSrcII = i18n.language === "en" ? "/ux-dev-portfolio/ITS-SITEMAP-EN.png" : "/ux-dev-portfolio/ITS-SITEMAP-SP.png";

  return (
    <div id="espacio-its">
      <ProjectDescription
        name={t('espacio-its-i')}
        description={<Trans i18nKey="espacio-its-ii" components={{ a: <a href="https://www.its.edu.pe/" target="_blank" rel="noopener noreferrer" className="underline hover:text-red"></a>, strong: <strong className=""/> }} />}
        role = {t('espacio-its-iii')}
        tools = "Figma, Mural, Typeform"
        methods={t("espacio-its-methods")}
        team={t("espacio-its-team")}
      />
      {/* Div */}
      <div className="p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px]">
        {/* Title */}
        <ProjectTitle
          title = {t('espacio-its-iv')}
        />
        {/* Text */}
        <ProjectText
          text = "espacio-its-v"
        />
        {/* Text with image with HMW */}
        <ProjectTextImageHmw
          image="/ux-dev-portfolio/ITS-BG-.png"
          text={t('espacio-its-vi')}
          hmw={t('espacio-its-vii')}
        />
        <ProjectTitle
          title = {t('espacio-its-viii')}
        />
        <ProjectText
          text = {t('espacio-its-ix')}
        />
        <ProjectTextImage
          image={imageSrc}
          text={t('espacio-its-x')}
        />
        <ProjectText
          text = {t('espacio-its-xi')}
        />
        <ul className="list-disc list-inside space-y-2 font-main sm:text-xl text-m mt-4 ml-4">
          <li className="marker:text-red">{t('its-insight-i')}</li>
          <li className="marker:text-red">{t('its-insight-ii')}</li>
          <li className="marker:text-red">{t('its-insight-iii')}</li>
          <li className="marker:text-red">{t('its-insight-iv')}</li>
          <li className="marker:text-red">{t('its-insight-v')}</li>
          <li className="marker:text-red">{t('its-insight-vi')}</li>
          <li className="marker:text-red">{t('its-insight-vii')}</li>
        </ul>
        <ProjectTitle
          title = {t('espacio-its-xii')}
        />
        <ProjectText
          text = {t('espacio-its-xiii')}
        />
        <ul className="list-disc list-inside space-y-2 font-main sm:text-xl text-m mt-4 ml-4">
          <li className="marker:text-red">{t('its-dp-i')}</li>
          <li className="marker:text-red">{t('its-dp-ii')}</li>
          <li className="marker:text-red">{t('its-dp-iii')}</li>
          <li className="marker:text-red">{t('its-dp-iv')}</li>
        </ul>
        <ProjectTextImage
          image={imageSrcII}
          text={t('espacio-its-xiv')}
        />
        <ProjectTextImage
          image="/ux-dev-portfolio/ITS-PROTOTYPE-I.png"
          text={t('espacio-its-xv')}
        />
        <ProjectTitle
          title = {t('espacio-its-xvi')}
        />
        <ProjectText
          text = {t('espacio-its-xvii')}
        />
        <ProjectTextImage
          image="/ux-dev-portfolio/ITS-CARD-SORT.png"
          text={t('espacio-its-xviii')}
        />
        <ProjectTextImage
          image="/ux-dev-portfolio/ITS-SURVEY-RESULTS.png"
          text={t('espacio-its-xix')}
        />
        <ProjectText
          text = {t('espacio-its-xx')}
        />
        <ul className="list-disc list-inside space-y-2 font-main sm:text-xl text-m mt-4 ml-4">
          <li className="marker:text-red">{t('its-insight-viii')}</li>
          <li className="marker:text-red"><Trans i18nKey={t('its-insight-ix')} components={{ strong: <strong /> }}/></li>
          <li className="marker:text-red"><Trans i18nKey={t('its-insight-x')} components={{ strong: <strong /> }}/></li>
          <li className="marker:text-red"><Trans i18nKey={t('its-insight-xi')} components={{ strong: <strong /> }}/></li>
          <li className="marker:text-red"><Trans i18nKey={t('its-insight-xii')} components={{ strong: <strong /> }}/></li>
        </ul>
        <ProjectTextImage
          image="/ux-dev-portfolio/ITS-VALUE-PROPOSITION.png"
          text={t('espacio-its-xxi')}
        />
        <ProjectTitle
          title = {t('espacio-its-xxii')}
        />
        <ProjectText
          text = {t('espacio-its-xxiii')}
        />
        <ProjectTextImage
          video="/ux-dev-portfolio/videos/ITS-PROTOTYPE-II.mp4"
          text = {t('espacio-its-xxiv')}
        />
        <ProjectTitle
          title = {t('espacio-its-xxv')}
        />
        <ProjectText
          text = {t('espacio-its-xxvi')}
        />
      </div>
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  )
}

export default EspacioIts
