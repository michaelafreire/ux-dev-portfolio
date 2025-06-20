import React, { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';
import { Link } from 'react-router-dom';
import Tag from './Tag';

function ProjectIntro({ link, backgroundImage, name, description, logo, tag1, tag2, tag3, tag4, tag5 }) {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <Link
      to={link}
      ref={ref}
      className={`group transition-transform duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      {/* Card Container */}
      <div className="my-4 bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm mx-auto">
        {/* Image Area */}
        <div className="relative h-60 sm:h-72 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300" />

          {/* Arrow (bottom right) */}
          <div
            className="absolute bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              backgroundImage: `url(/ux-dev-portfolio/Next.png)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Logo (top left) */}
          <div
            className="absolute top-4 left-4 w-10 h-10 sm:w-12 sm:h-12 bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${logo})` }}
          />
        </div>

        {/* White Text Area Below Image */}
        <div className="p-4">
          <h3 className="text-black font-main text-lg sm:text-xl font-semibold mb-1">
            {name}
          </h3>
          <p className="text-gray-600 text-sm font-main line-clamp-3">
            {description}
          </p>
          <Tag tag={tag1} />
          <Tag tag={tag2} />
          <Tag tag={tag3} />
          <Tag tag={tag4} />
          <Tag tag={tag5} />
        </div>
      </div>
    </Link>
  );
}

export default ProjectIntro;
