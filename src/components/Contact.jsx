import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { useIsVisible } from '../hooks/useIsVisible';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from "react-router-dom";

function Contact() {
  // const ref1 = useRef();
  // const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const { t } = useTranslation();

  return (
    <div id="contact" className="p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px] h-screen flex flex-col justify-between">
      <div>
        <h1 className="mt-14 sm:mt-28 font-libre font-bold text-red text-3xl sm:text-8xl">{t('contact')}</h1>
        <p className="my-10 font-main sm:text-xl text-m text-black">
          <Trans
            i18nKey="contact-i"
            components={{
              email: <a href="mailto:michaela.freiregriffith@gmail.com" className="underline font-bold hover:text-red"></a>,
              linkedin: <a href="https://www.linkedin.com/in/michaela-freire-griffith-23743a124" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-red"></a>,
              cv: <a href="Michaela Freire - Resume.pdf" download="Michaela Freire - Resume.pdf" className="underline font-bold hover:text-red"></a>,
              latest: <Link to="/ux-dev-portfolio/projects" className="underline font-bold hover:text-red"></Link>,
            }}
          />
        </p>
      </div>
      {/* <div>
          <div ref={ref1} className={`my-10 sm:my-40 relative transition-translate ease-in duration-500 ${isVisible1 ? "translate-x-0" : "-translate-x-6"}`}>
            <div className="flex mt-2 sm:mt-4">
              <a href="mailto:michaela.freiregriffith@gmail.com" className="mr-4">
                <FontAwesomeIcon icon={faEnvelope} className="font-main text-pink text-m sm:text-4xl hover:text-blue-light transition duration-500 ease-out" />
              </a>
              <a href="https://www.linkedin.com/in/michaela-freire-griffith-23743a124" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FontAwesomeIcon icon={faLinkedinIn} className="font-main text-pink text-m sm:text-4xl hover:text-blue-light  transition duration-500 ease-out" />
              </a>
              <a href="https://github.com/michaelafreire" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FontAwesomeIcon icon={faGithub} className="font-main text-pink text-m sm:text-4xl hover:text-blue-light  transition duration-500 ease-out" />
              </a>
              <a href="https://your-website.com" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FontAwesomeIcon icon={faAddressCard} className="font-main text-pink text-m sm:text-4xl hover:text-blue-light  transition duration-500 ease-out" />
              </a>
            </div>
          </div>
        </div> */}
      <div ref={ref2} className={`flex justify-center items-end transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <p className="font-main text-sm sm:text-base text-black">{t('built')}</p>
      </div>
    </div>
  )
}

export default Contact
