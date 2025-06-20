import React, { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';
import { useTranslation, Trans } from 'react-i18next';

function ProjectDescription(props) {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const { t } = useTranslation();

  return (
    <div className="pt-20 p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px] min-h-[100vh] bg-white flex items-center justify-start">
      <div ref={ref1} className={`transition-translate ease-in duration-500 ${isVisible1 ? "translate-x-0" : "-translate-x-10"}`}>
        <p className="font-main text-base uppercase tracking-wider text-gray-500 mb-4">{t('case study')}</p>
        <h2 className="font-libre font-bold text-red text-2xl my-3 sm:text-4xl md:text-5xl">{props.name}</h2>
        <p className="my-10 font-main text-black text-base sm:text-xl">{props.description}</p>
        {/* <div>
          <p className="font-main text-black text-m sm:text-xl"><strong>{t('Role')}: </strong> {props.role} </p>
          <p className="font-main text-black text-m sm:text-xl"><strong>{t('Tools')}: </strong> {props.tools} </p>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div>
            <p className="font-main font-bold text-gray-800 mb-1 text-sm sm:text-base">{t('role')}</p>
            <p className="font-main text-gray-600 text-sm sm:text-base">{props.role}</p>
          </div>
          <div>
            <p className="font-main font-bold text-gray-800 mb-1 text-sm sm:text-base">{t('methods')}</p>
            <p className="font-main text-gray-600 text-sm sm:text-base mb-1">{props.methods}</p>
          </div>
          <div>
            <p className="font-main font-bold text-gray-800 mb-1 text-sm sm:text-base">{t('tools')}</p>
            <p className="font-main text-gray-600 text-sm sm:text-base">{props.tools}</p>
          </div>
          <div>
            <p className="font-main font-bold text-gray-800 mb-1 text-sm sm:text-base">{t('team')}</p>
            <p className="font-main text-gray-600 text-sm sm:text-base mb-1">{props.team}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDescription
