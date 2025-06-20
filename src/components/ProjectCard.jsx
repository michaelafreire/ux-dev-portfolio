import React, { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';

function ProjectCard(props) {
  const { imageSrc, imageTitle, videoSrc, description, barSrc } = props;
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div ref={ref1} className= {`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      <div className="rounded-md items-center sm:grid sm:grid-cols-6 gap-8" >
        {imageSrc &&
          <div className="sm:col-span-3 sm:flex sm:justify-end">
            <img
              src={imageSrc}
              alt={imageTitle}
              className="w-full object-contain rounded-md"
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
        {barSrc &&
          <div className="sm:col-span-3 sm:flex sm:justify-end">
            <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-md p-4">
              {barSrc}
            </div>
          </div>
        }
        <div className="mt-10 sm:mt-0 sm:col-span-3 w-full">
          <div className="font-main text-m text-black sm:text-xl w-full">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
