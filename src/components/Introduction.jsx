import React, { useRef } from 'react';
import Button from './Button.jsx'
import { useIsVisible } from '../hooks/useIsVisible';
import { useTranslation } from 'react-i18next';

function Introduction() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-8 sm:pl-10 min-h-screen flex items-center justify-start" id="intro">
      <div ref={ref1} className= {`transition-translate ease-in duration-500 ${isVisible1 ? "translate-x-0" : "-translate-x-10"}`}>
        <p className="font-main text-gray text-m mt-4 sm:text-xl">{t('intro-i')}</p>
        <h1 className="font-main font-bold text-gray text-5xl mt-5 sm:text-7xl">Michaela Freire.</h1>
        <p className="font-main text-gray text-m font-bold sm:text-xl">{t('intro-ii')}</p>
        <p className="font-main text-gray text-m mt-5 max-w-lg w-full sm:text-xl sm:max-w-xl">{t('intro-iii')}</p>
        <div className= "max-w-lg w-full mt-5 flex justify-start">
          <Button text={t('intro-iv')} website="mailto:michaela.freiregriffith@gmail.com"/>
        </div>
        <button className="btn" onClick={() => changeLanguage('en')}>english</button>
        <button className="btn" onClick={() => changeLanguage('sp')}>spanish</button>
      </div>
    </div>
  )
}

export default Introduction
