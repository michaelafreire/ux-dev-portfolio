import React, { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';

function ProjectCard(props) {
  const { imageSrc, imageTitle, videoSrc, title, description, stack } = props;
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div ref={ref1} className= {`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      <div className="m-4 rounded-md px-3 py-2 items-center sm:grid sm:grid-cols-6 gap-8" >
        {imageSrc &&
          <div className="sm:col-span-3 sm:flex sm:justify-end">
            <img
              src={imageSrc}
              alt={imageTitle}
              className="w-full object-contain"
            />
          </div>
        }
        {videoSrc && (
          <div className="sm:col-span-3 sm:flex sm:justify-end">
            <video
              className="w-full object-contain"
              autoPlay
              loop
              muted>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        <div className="sm:col-span-3">
          <h3 className="mt-8 sm:mt-4 font-main text-black text-m sm:text-xl font-bold">{title}</h3>
          <div className="mt-4 font-main text-m sm:text-xl max-w-lg w-full sm:max-w-xl">{description}</div>
          <div className="mt-4 font-main text-sm sm:text-base max-w-lg w-full sm:max-w-xl">{stack}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
