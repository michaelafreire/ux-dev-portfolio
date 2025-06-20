import React, { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function DropDownMenu() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="space-y-1 px-2 pb-3 pt-2">
      <Link to="/ux-dev-portfolio/about-me" className="block my-0 ps-1 pt-5 text-black text-m font-main hover:text-red">{t('navbar-i')}</Link>
      <Link to="/ux-dev-portfolio/projects" className="block my-0 ps-1 text-black text-m font-main hover:text-red">{t('navbar-ii')}</Link>
      <Link to="/ux-dev-portfolio/contact" className="block my-0 ps-1 text-black text-m font-main hover:text-red">{t('navbar-iii')}</Link>
    </div>
  )
}

function Navbar() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  //dropdown menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  return (
    <nav className= "bg-white opacity-90 fixed w-full top-0 z-50">
      <div className="mx-auto px-2 sm:px-6">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-red focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={toggleMenu} // Add onClick handler
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!--Icon when menu is closed. Menu open: "hidden", Menu closed: "block"--> */}
              <svg className={`${menuOpen ? "hidden" : "block"} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* <!--Icon when menu is open. Menu open: "block", Menu closed: "hidden" --> */}
              <svg className={`${menuOpen ? "block" : "hidden"} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {menuOpen && <DropDownMenu />} {/* Conditionally render DropDownMenu */}
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="sm:flex flex-shrink-0 items-center">
            <Link to="/ux-dev-portfolio/" ref={ref1} className={`rounded-md px-3 py-2 text-black text-xl font-libre font-bold hover:text-red transition duration-500 ease-out transition-translate ease-in ${isVisible1 ? "translate-y-0" : "translate-y-6"}`}>Michaela Freire</Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/ux-dev-portfolio/about-me" ref={ref1} className={`rounded-md px-3 py-2 text-black text-m font-libre hover:text-red transition duration-500 ease-out transition-translate ease-in ${isVisible1 ? "translate-y-0" : "translate-y-6"}`}>{t('navbar-i')}</Link>
                <Link to="/ux-dev-portfolio/projects" ref={ref2} className={`rounded-md px-3 py-2 text-black text-m font-libre hover:text-red transition duration-500 ease-out transition-translate ease-in ${isVisible1 ? "translate-y-0" : "translate-y-6"}`}>{t('navbar-ii')}</Link>
                <Link to="/ux-dev-portfolio/contact" ref={ref3} className={`rounded-md px-3 py-2 text-black text-m font-libre hover:text-red transition duration-500 ease-out transition-translate ease-in ${isVisible1 ? "translate-y-0" : "translate-y-6"}`}>{t('navbar-iii')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
