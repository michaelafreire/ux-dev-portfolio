import React from 'react'
import ProjectCard from './ProjectCard'
import { useTranslation, Trans } from 'react-i18next';


function ProjectTextImage(props) {
  const { t } = useTranslation();

  return (
    <div className="py-10 sm:py-20 h-2/3 flex items-center justify-center">
      <ProjectCard
        imageSrc={props.image}
        videoSrc={props.video}
        barSrc={props.bar}
        description={
          <Trans i18nKey={props.text}
            components={{
              strong: <strong />,
              a: <a className="text-black underline hover:text-red transition-colors" target="_blank" rel="noopener noreferrer" />
            }} />
        }
      />
  </div>
  )
}

export default ProjectTextImage
