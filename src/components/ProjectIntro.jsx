import React, { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';

function ProjectIntro(props) {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div ref={ref1}
      className= {`overflow-hidden flex grid grid-cols-2 gap-4 relative transition-translate ease-in duration-500 ${isVisible1 ? "translate-x-0" : "-translate-x-6"} rounded-md bg-white h-80 shadow-md sm:col-span-3 relative m-3`}
    >
      <div className="col-span-1">
        <p className="font-main font-bold text-black text-m sm:text-xl pt-8 pl-8 bt-3">{props.name}</p>
        <p className="font-main text-black text-m sm:text-xl pl-8 pt-3">{props.description}</p>
      </div>
      <div className="relative w-full h-full col-span-1">
        <div className="absolute bottom-4 right-4 bg-cover w-52 h-52 sm:w-64 sm:h-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
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
