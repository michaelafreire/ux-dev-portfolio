import React from 'react'
import ProjectCard from './ProjectCard'

const bestVetStack = (
  <div className = "flex">
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Ruby</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Rails</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">HTML</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">CSS</div>
  </div>
)

const espacioItsStack = (
  <div className = "flex">
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Ruby</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Rails</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">HTML</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">CSS</div>
  </div>
)

const sendEyStack = (
  <div className = "flex">
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Ruby</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Rails</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">HTML</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">CSS</div>
  </div>
)

const vividBrandsStack = (
  <div className = "flex">
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Ruby</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Rails</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">HTML</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">CSS</div>
  </div>
)

const bestPetsitterStack = (
  <div className = "flex">
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Ruby</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Rails</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">HTML</div>
    <div className="mr-2 rounded-md px-2 py-1 font-main bg-pink-light-light text-white">CSS</div>
  </div>
)


function Projects() {
  return (
    <div id="projects" className="p-8 sm:pl-10">
      <div className="min-h-screen flex items-center justify-center">
          <ProjectCard
          videoSrc="/videos/BESTVET.mp4"
          title="BestVet"
          description="Lorem ipsum ipsum lorem ipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum lorem"
          stack={bestVetStack}/>
      </div>
      <div className="min-h-screen flex items-center justify-center">
          <ProjectCard
          videoSrc="/videos/ESPACIO ITS.mp4"
          title="Espacio ITS"
          description="Lorem ipsum ipsum lorem ipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum lorem"
          stack={espacioItsStack}/>
      </div>
      <div className="min-h-screen flex items-center justify-center">
          <ProjectCard
          imageSrc="SEND_EY.png"
          imageTitle="SendEY"
          title="SEND EY Parental Pathway"
          description="Lorem ipsum ipsum lorem ipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum lorem"
          stack={sendEyStack}/>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <ProjectCard
          videoSrc="/videos/BEST PETSITTER.mp4"
          title="Best Petsitter"
          description="Lorem ipsum ipsum lorem ipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum lorem"
          stack={bestPetsitterStack}/>
      </div>
      <div className="min-h-screen flex items-center justify-center">
          <ProjectCard
          imageSrc="VIVIDBRANDS.png"
          imageTitle="Vivid Brands"
          title="Vivid Brands"
          description="Lorem ipsum ipsum lorem ipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum lorem"
          stack={vividBrandsStack}/>
      </div>
    </div>
  )
}

export default Projects
