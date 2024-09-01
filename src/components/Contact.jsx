import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { useIsVisible } from '../hooks/useIsVisible';

function Contact() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  return (
    <div id="contact" className="p-8 sm:pl-10">
      <div className="flex items-end justify-start">
        <div>
          <div ref={ref1} className={`relative transition-translate ease-in duration-500 ${isVisible1 ? "translate-x-0" : "-translate-x-6"}`}>
            <h3 className="pt-40 sm:pt-80 relative z-0 font-main font-bold text-black text-3xl mt-5 sm:text-5xl py-6">
              Let's collaborate.
            </h3>
          </div>
          <div className="flex mt-2 sm:mt-4">
            <a href="mailto:michaela.freiregriffith@gmail.com" className="mr-4">
              <FontAwesomeIcon icon={faEnvelope} className="font-main text-black text-m sm:text-xl hover:text-pink-light transition duration-500 ease-out" />
            </a>
            <a href="https://www.linkedin.com/in/michaela-freire-griffith-23743a124" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FontAwesomeIcon icon={faLinkedinIn} className="font-main text-black text-m sm:text-xl hover:text-pink-light transition duration-500 ease-out" />
            </a>
            <a href="https://github.com/michaelafreire" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FontAwesomeIcon icon={faGithub} className="font-main text-black text-m sm:text-xl hover:text-pink-light transition duration-500 ease-out" />
            </a>
            <a href="https://your-website.com" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FontAwesomeIcon icon={faAddressCard} className="font-main text-black text-m sm:text-xl hover:text-pink-light transition duration-500 ease-out" />
            </a>
          </div>
        </div>
      </div>
      <div ref={ref2} className={`flex justify-center transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <p className="font-main text-sm sm:text-base mt-8">Built using React</p>
      </div>
    </div>
  )
}

export default Contact
