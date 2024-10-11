import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { useIsVisible } from '../hooks/useIsVisible';
import { useTranslation } from 'react-i18next';

function Contact() {
  // const ref1 = useRef();
  // const isVisible1 = useIsVisible(ref1);
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div id="contact" className="sm:pl-[100px] sm:pr-[100px] h-screen">
      <h1 className="pt-10 sm:pt-32 font-libre font-bold text-pink text-3xl sm:text-8xl">Contacto.</h1>
      <p className="my-10 font-main sm:text-xl text-m text-pink">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem</p>
      <div className="flex items-end justify-start">
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
      </div>
    </div>
  )
}

export default Contact
