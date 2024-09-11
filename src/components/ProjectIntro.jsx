import React, { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';

function ProjectIntro(props) {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div ref={ref1}
      className= {`overflow-hidden flex flex-col sm:flex-row relative transition-translate ease-in duration-500 ${isVisible1 ? "translate-x-0" : "-translate-x-6"} rounded-md bg-white h-80 shadow-md sm:col-span-3 mt-10`}
    >
      <div>
        <p className="font-main text-blue text-m font-bold sm:text-xl font-bold pt-6 pl-3 pr-3 bt-3">{props.name}</p>
        <p className="font-main text-black text-m sm:text-xl pl-3">{props.description}</p>
      </div>
      <div className="bg-cover w-full h-full"
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundPosition: 'center sm:right center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        >
      </div>
    </div>
  )
}

export default ProjectIntro
