import React, { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';

function ProjectIntro(props) {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div ref={ref1}
      className= {`overflow-hidden flex grid grid-cols-2 gap-4 relative transition-translate ease-in duration-500 ${isVisible1 ? "translate-x-0" : "-translate-x-6"} rounded-md bg-white h-80 shadow-md sm:col-span-3 mt-10 relative`}
    >
      <div className="col-span-1">
        <p className="font-main text-blue text-m font-bold sm:text-xl font-bold pt-6 pl-4 bt-3">{props.name}</p>
        <p className="font-main text-black text-m sm:text-xl pl-4 pt-4">{props.description}</p>
      </div>
      <div className="relative w-full h-full col-span-1">
        <div className="absolute bottom-4 right-4 bg-cover w-80 h-80"
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundPosition: 'left-bottom',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        >
        </div>
      </div>
      <div className="absolute -top-8 right-4 w-20 h-20"
          style={{
          backgroundImage: `url(${props.logo})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        >
      </div>
    </div>
  )
}

export default ProjectIntro
