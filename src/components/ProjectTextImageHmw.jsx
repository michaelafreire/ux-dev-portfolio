import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectTextImageHmw(props) {
  return (
    <div className="py-10 sm:py-20 h-2/3 flex items-center justify-center">
      <ProjectCard
        imageSrc={props.image}
        description={
          <>
            <p className="font-main sm:text-xl text-m">{props.text}</p>
            <div className="m-0 mt-4 font-main font-bold sm:text-2xl text-xl">
              <p> {props.hmw} </p>
            </div>
          </>
        }
      />
    </div>)
}

export default ProjectTextImageHmw
