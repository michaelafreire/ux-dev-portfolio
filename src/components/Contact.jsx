import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

function Contact() {
  return (
    <div className="min-h-screen flex items-end justify-start p-8" id="contact">
      <div className="sm:ml-10">
        <h3 className="font-main font-bold text-black text-3xl mt-5 sm:text-5xl">Let's collaborate.</h3>
        <div className="flex mt-2 sm:mt-4">
          <FontAwesomeIcon icon={faEnvelope} className="font-main text-black text-m sm:text-xl mr-4 hover:text-pink" />
          <FontAwesomeIcon icon={faLinkedinIn} className="font-main text-black text-m sm:text-xl mr-4 hover:text-pink"/>
          <FontAwesomeIcon icon={faGithub} className="font-main text-black text-m sm:text-xl mr-4 hover:text-pink" />
          <FontAwesomeIcon icon={faAddressCard} className="font-main text-black text-m sm:text-xl mr-4 hover:text-pink" />
        </div>
        <p>I was built using React</p>
      </div>
    </div>
  )
}

export default Contact
