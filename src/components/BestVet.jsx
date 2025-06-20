import ProjectDescription from './ProjectDescription';
import Footer from './Footer';
import { useTranslation, Trans } from 'react-i18next';
import ProjectTitle from './ProjectTitle';
import ProjectText from './ProjectText';
import ProjectTextImage from './ProjectTextImage';
import ProjectTextImageHmw from './ProjectTextImageHmw';


function BestVet() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div id="best-vet">
      <ProjectDescription
        name={t("best-vet-i")}
        description={<Trans i18nKey="best-vet-ii" components={{ strong: <strong className=""/> }} />}
        role={t("best-vet-role")}
        tools="Ruby on Rails, HTML, CSS, JavaScript, PostgreSQL, Bootstrap, Figma"
        methods={t("best-vet-methods")}
        team={t("best-vet-team")}
        />
      <div className="p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px]">
        <p className="font-main sm:text-xl text-m">{t("best-vet-construction")}🐶🐱</p>
      </div>
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  )
}

export default BestVet
