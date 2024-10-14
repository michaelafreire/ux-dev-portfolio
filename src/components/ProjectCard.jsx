import React, { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';

function ProjectCard(props) {
  const { imageSrc, imageTitle, videoSrc, description } = props;
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div ref={ref1} className= {`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      <div className="rounded-md px-3 items-center sm:grid sm:grid-cols-6 gap-8" >
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
        <div className="mt-10 sm:mt-0 sm:col-span-3 max-w-lg">
          <div className="font-main text-m text-black sm:text-xl max-w-lg w-full sm:max-w-xl">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
