import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { useIsVisible } from '../hooks/useIsVisible';
import { useTranslation } from 'react-i18next';

function Footer() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="sm:p-10 sm:p-[100px] p-5 p-[30px] bg-grey h-40 sm:h-64">
      <div>
        <div className="flex items-end justify-start">
          <div ref={ref1} className={`relative transition-translate ease-in duration-500 ${isVisible1 ? "translate-x-0" : "-translate-x-6"}`}>
            <h3 className="relative z-0 font-libre font-bold text-black text-xl mt-2 sm:text-3xl">
              {t('collaborate')}
            </h3>
            <div className="flex mt-2 sm:mt-3">
              <a href="mailto:michaela.freiregriffith@gmail.com" className="mr-4">
                <FontAwesomeIcon icon={faEnvelope} className="hover:text-red font-main text-black text-m sm:text-xl transition duration-500 ease-out" />
              </a>
              <a href="https://www.linkedin.com/in/michaela-freire-griffith-23743a124" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-red font-main text-black text-m sm:text-xl transition duration-500 ease-out" />
              </a>
              <a href="https://github.com/michaelafreire" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FontAwesomeIcon icon={faGithub} className="hover:text-red font-main text-black text-m sm:text-xl transition duration-500 ease-out" />
              </a>
              <a href="Michaela Freire - Resume.pdf" download="Michaela Freire - Resume.pdf"  className="mr-4">
                <FontAwesomeIcon icon={faAddressCard} className="hover:text-red font-main text-black text-m sm:text-xl transition duration-500 ease-out" />
              </a>
            </div>
          </div>
        </div>
        {/* Centered div */}
        <div ref={ref2} className={`flex justify-center mb-10 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <p className="font-main text-sm sm:text-base mt-8 text-black">{t('built')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
