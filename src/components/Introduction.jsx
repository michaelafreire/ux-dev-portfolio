import React, { useRef } from 'react';
import Button from './Button.jsx'
import { useIsVisible } from '../hooks/useIsVisible';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Banner from './Banner.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import ProjectContainer from './ProjectContainer.jsx';

function Introduction() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div id="intro">
      <div id="starter">
        <div className="pt-20 flex justify-end items-center pr-10 bg-white">
          <FontAwesomeIcon className="mr-2 text-sm text-black" icon={faGlobe} />
          <button className="hover:text-red btn text-m text-black font-main transition duration-500 ease-out" onClick={() => changeLanguage('en')}>English</button>
          <button className="hover:text-red btn text-m text-black font-main ml-2 transition duration-500 ease-out" onClick={() => changeLanguage('sp')}>Español</button>
        </div>
        <div className="p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px] h-[82vh] bg-white flex items-center justify-start">
          <div ref={ref1} className={`transition-translate ease-in duration-500`}>
            <p className="font-main text-black text-m sm:text-xl">{t('intro-i')}</p>
            <h1 className="font-libre font-bold text-red text-3xl my-3 sm:text-8xl">Michaela Freire.</h1>
            <p className="font-main text-black text-m sm:text-xl">{t('intro-ii')}</p>
            <div className="max-w-lg w-full mt-10 flex justify-start">
              <Button className="btn rounded-md px-3 py-2 text-m font-main text-red bg-white border-2 border-red sm:text-xl transition duration-500 ease-out drop-shadow-sm hover:bg-red hover:text-white"
                text={t('intro-iv')}
                href="mailto:michaela.freiregriffith@gmail.com"
              />
              <Button className="btn rounded-md px-3 py-2 text-m font-main text-red bg-white border-2 border-red sm:text-xl transition duration-500 ease-out drop-shadow-sm hover:bg-red hover:text-white"
                text={t('navbar-i')}
                to="/ux-dev-portfolio/about-me"
              />
            </div>
          </div>
          {/* <div
            className="justify-start hidden lg:block w-1/4 h-1/3 ml-6 bg-contain bg-no-repeat rounded-md"
            style={{ backgroundImage: "url(../ux-dev-portfolio/Cartoon.png)" }}
          > */}
          {/* </div> */}
        </div>
      </div>
      {/* <Banner /> */}
      <div className="py-10 sm:py-20 flex justify-center items-center">
        <p ref={ref1} className={`transition duration-500 ease-out transition-translate ease-in ${isVisible1 ? "translate-x-0" : "-translate-x-6"} font-libre text-red text-xl sm:text-3xl font-bold p-3`}>{t('intro-vi')}</p>
      </div>
      <ProjectContainer />
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  )
}

export default Introduction
