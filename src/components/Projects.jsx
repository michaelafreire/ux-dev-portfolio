import React from 'react'
import ProjectCard from './ProjectCard'

const bestPetsitterStack = (
  <div className = "flex">
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light text-white">Ruby</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light text-white">Rails</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light text-white">HTML</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light text-white">CSS</div>
  </div>
)


function Projects() {
  return (
    <div id="projects">
      <div className="min-h-screen flex items-center sm:items-end justify-center p-4">
        <ProjectCard
          videoSrc="/videos/BEST PETSITTER.mp4"
          title="Best Petsitter"
          description="Lorem ipsum ipsum lorem ipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum lorem"
          stack={bestPetsitterStack} />
      </div>
      <div className="min-h-screen flex items-center sm:items-end justify-center p-4">
          <ProjectCard
          videoSrc="/videos/BESTVET.mp4"
          title="BestVet"
          description="Lorem ipsum ipsum lorem ipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum lorem"
          stack="Ruby" />
      </div>
      <div className="min-h-screen flex items-center sm:items-end justify-center p-4">
          <ProjectCard
          videoSrc="/videos/ESPACIO ITS.mp4"
          title="Espacio ITS"
          description="Lorem ipsum ipsum lorem ipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum lorem"
          stack="Ruby" />
      </div>
      <div className="min-h-screen flex items-center sm:items-end justify-center p-4">
          <ProjectCard
          imageSrc="SEND EY.png"
          imageTitle="SendEY"
          title="SEND EY Roadmap"
          description="Lorem ipsum ipsum lorem ipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum lorem"
          stack="Ruby" />
      </div>
    </div>
  )
}

export default Projects
