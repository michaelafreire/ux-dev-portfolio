import ProjectDescription from './ProjectDescription';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import { useTranslation, Trans } from 'react-i18next';
import ProjectTitle from './ProjectTitle';
import ProjectText from './ProjectText';
import ProjectTextImage from './ProjectTextImage';
import ProjectTextImageHmw from './ProjectTextImageHmw';

function VividBrands() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const imagei = i18n.language === "en" ? "/ux-dev-portfolio/VIVID-DELIVERYPLAN-EN.png" : "/ux-dev-portfolio/VIVID-DELIVERYPLAN-SP.png";
  const imageii = i18n.language === "en" ? "/ux-dev-portfolio/VIVID-DATAINPUTS-EN.png" : "/ux-dev-portfolio/VIVID-DATAINPUTS-SP.png";
  const imageiii = i18n.language === "en" ? "/ux-dev-portfolio/VIVID-TARGET-EN.png" : "/ux-dev-portfolio/VIVID-TARGET-SP.png";
  const imageiv = i18n.language === "en" ? "/ux-dev-portfolio/VIVID-PARTICIPANT-SAMPLE-EN.png" : "/ux-dev-portfolio/VIVID-PARTICIPANT-SAMPLE-SP.png";
  const imagev = i18n.language === "en" ? "/ux-dev-portfolio/VIVID-CODESIGN-EN.png" : "/ux-dev-portfolio/VIVID-CODESIGN-SP.png";
  const imagevi = i18n.language === "en" ? "/ux-dev-portfolio/VIVID-MANIFESTO-EN.png" : "/ux-dev-portfolio/VIVID-MANIFESTO-SP.png";
  const imagevii = i18n.language === "en" ? "/ux-dev-portfolio/VIVID-SITEMAP-EN.png" : "/ux-dev-portfolio/VIVID-SITEMAP-SP.png";

  return (
    <div id="vivid-brands">
      <ProjectDescription
        name={t("vivid-i")}
        description={<Trans i18nKey="vivid-description" components= {{strong: <strong className=""/> }} />}
        role={t("vivid-role")}
        tools="Mural, Figma, Google Meet"
        methods={t("vivid-methods")}
        team={t("vivid-team")}
      />
      <div className="p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px]">
        <ProjectTitle
          title={t("vivid-ii")}
        />
        <ProjectText
          text={t("vivid-iii")}
        />
        <ProjectTextImageHmw
          text={t("vivid-iv")}
          image={"/ux-dev-portfolio/VIVID-BG-.png"}
          hmw={t("vivid-v")}
        />
        <ProjectTitle
          title={t("vivid-vi")}
        />
        <ProjectTextImage
          text={t("vivid-vii")}
          image={imagei}
        />
        <ProjectTextImage
          text={t("vivid-viii")}
          image={imageii}
        />
        <ProjectTitle
          title={t("vivid-ix")}
        />
        <ProjectTextImage
          text={t("vivid-x")}
          image={"/ux-dev-portfolio/VIVID-CLIENT.png"}
        />
        <ProjectText
          text={t("vivid-xi")}
        />
        <ul className="list-disc list-inside space-y-2 font-main sm:text-xl text-m mt-4 ml-4">
          <li className="marker:text-red"><Trans i18nKey={t('vivid-client-i')} components={{ strong: <strong /> }}/></li>
          <li className="marker:text-red"><Trans i18nKey={t('vivid-client-ii')} components={{ strong: <strong /> }}/></li>
          <li className="marker:text-red"><Trans i18nKey={t('vivid-client-iii')} components={{ strong: <strong /> }}/></li>
        </ul>
        <ProjectTitle
          title={t("vivid-xii")}
        />
        <ProjectTextImage
          text={t("vivid-xiii")}
          image={imageiii}
        />
        <ProjectText
          text={t("vivid-xiv")}
        />
        <ul className="list-disc list-inside space-y-2 font-main sm:text-xl text-m mt-4 ml-4">
          <li className="marker:text-red"><Trans i18nKey={t('vivid-user-i')} components={{ strong: <strong /> }}/></li>
          <li className="marker:text-red"><Trans i18nKey={t('vivid-user-ii')} components={{ strong: <strong /> }}/></li>
          <li className="marker:text-red"><Trans i18nKey={t('vivid-user-iii')} components={{ strong: <strong /> }}/></li>
          <li className="marker:text-red"><Trans i18nKey={t('vivid-user-iv')} components={{ strong: <strong /> }}/></li>
        </ul>
        <ProjectTextImage
          text={t("vivid-xv")}
          image={imageiv}
        />
        <ProjectTextImage
          text={t("vivid-xvi")}
          image={"/ux-dev-portfolio/VIVID-FINDING.png"}
        />
        <ProjectTextImage
          text={t("vivid-xvii")}
          image={imagev}
        />
        <ProjectText
          text={t("vivid-xviii")}
        />
        <ProjectTitle
          title={t("vivid-xix")}
        />
        <ProjectTextImage
          text={t("vivid-xx")}
          image={"/ux-dev-portfolio/VIVID-EVIDENCESAFARI.png"}
        />
        <ProjectTextImage
          text={t("vivid-xxi")}
          image={imagevi}
        />
        <ProjectTextImage
          text={t("vivid-xxii")}
          image={"/ux-dev-portfolio/VIVID-MOODBOARD.png"}
        />
        <ProjectTextImage
          text={t("vivid-xxiii")}
          image={"/ux-dev-portfolio/VIVID-WIREFRAME.png"}
        />
        <ProjectTextImage
          text={t("vivid-xxiv")}
          image={imagevii}
        />
        <ProjectTextImage
          text={t("vivid-xxv")}
          image={"/ux-dev-portfolio/VIVID-WIREFLOW.png"}
        />
        <ProjectTitle
          title={t("vivid-xxvi")}
        />
        <ProjectText
          text={t("vivid-xxvii")}
        />
      </div>
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  )
}

export default VividBrands
