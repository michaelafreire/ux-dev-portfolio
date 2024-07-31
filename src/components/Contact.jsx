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
    <div id="contact">
      <div className="min-h-screen flex items-end justify-start px-8">
        <div ref={ref1} className= {`transition-translate ease-in duration-500 ${isVisible1 ? "translate-x-0" : "-translate-x-6"}`}>
          <h3 className="font-main font-bold text-black text-3xl mt-5 sm:text-5xl">Let's collaborate.</h3>
          <div className="flex mt-2 sm:mt-4">
            <FontAwesomeIcon icon={faEnvelope} className="font-main text-black text-m sm:text-xl mr-4 hover:text-pink transition duration-500 ease-out"/>
            <FontAwesomeIcon icon={faLinkedinIn} className="font-main text-black text-m sm:text-xl mr-4 hover:text-pink transition duration-500 ease-out"/>
            <FontAwesomeIcon icon={faGithub} className="font-main text-black text-m sm:text-xl mr-4 hover:text-pink transition duration-500 ease-out"/>
            <FontAwesomeIcon icon={faAddressCard} className="font-main text-black text-m sm:text-xl mr-4 hover:text-pink transition duration-500 ease-out"/>
          </div>
        </div>
      </div>
      <div ref={ref2} className= {`flex justify-center transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <p className="font-main text-sm sm:text-base m-8">Built using React</p>
      </div>
    </div>
  )
}

export default Contact
