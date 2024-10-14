import React, { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';

function ProjectDescription(props) {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px] min-h-screen bg-pink flex items-center justify-start">
        <div ref={ref1} className={`transition-translate ease-in duration-500 ${isVisible1 ? "translate-x-0" : "-translate-x-10"}`}>
          <h2 className="font-libre font-bold text-red text-3xl my-3 sm:text-8xl">{props.name}</h2>
          <p className="my-10 font-main text-red text-m sm:text-xl">{props.description}</p>
        </div>
    </div>
  )
}

export default ProjectDescription
