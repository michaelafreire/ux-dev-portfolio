import React from 'react'
import ProjectCard from './ProjectCard'

const bestVetStack = (
  <div className="flex flex-wrap gap-2">
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Rails</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Javascript</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">HTML</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">CSS</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Heroku</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Figma</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">SQL</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Bootstrap</div>
  </div>
)

const espacioItsStack = (
  <div className = "flex flex-wrap gap-2">
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Figma</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">User Research</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Wireframing</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Prototyping</div>
  </div>
)

const sendEyStack = (
  <div className = "flex flex-wrap gap-2">
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Figma</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">User Research</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Co-Design</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Wireframing</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Prototyping</div>
  </div>
)

const vividBrandsStack = (
  <div className = "flex flex-wrap gap-2">
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">User Research</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Competitor Analysis</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Co-Creation</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Wireframing</div>
  </div>
)

const bestPetsitterStack = (
  <div className = "flex flex-wrap gap-2">
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Rails</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Javascript</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">HTML</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">CSS</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Heroku</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">SQL</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-pink-light-light text-white">Bootstrap</div>
  </div>
)


function Projects() {
  return (
    <div id="projects" className="p-8 sm:pl-10">
      <div className="min-h-screen flex items-center justify-center">
          <ProjectCard
          videoSrc="/ux-dev-portfolio/videos/ESPACIO ITS.mp4"
          title="Espacio ITS"
          description="I led a team in the research and development of a prototype for an online learning platform aimed at upskilling teachers in Peru. The project gained recognition from Intercorp as a Transformative Initiative for the 2021 Innovation Fair, leading to participation in a learning program with IDEO and other industry leaders."
          stack={espacioItsStack}
          role="Role: Product Owner and Design Researcher"/>
      </div>
      <div className="min-h-screen flex items-center justify-center">
          <ProjectCard
          imageSrc="/ux-dev-portfolio/SEND_EY.png"
          imageTitle="SendEY"
          title="SEND EY Parental Pathway"
          description="My team and I collaborated with early years providers and parents of children with special educational needs and disabilities, as well as policymakers, to design a digital solution to help parents navigate the SEND EY system with more ease."
          stack={sendEyStack}
          role="Role: Delivery Manager and Interdisciplinary Contribution"/>
      </div>
      <div className="min-h-screen flex items-center justify-center">
          <ProjectCard
          videoSrc="/ux-dev-portfolio/videos/BESTVET.mp4"
          title="Best Vet"
          description="As a final project in LeWagon's bootcamp, my team and I designed and built an online membership-based veterinary clinic, granting pet owners access to certified veterinary professionals at accessible prices."
          stack={bestVetStack}
          role="Role: Fullstack Developer"/>
      </div>
      <div className="min-h-screen flex items-center justify-center">
          <ProjectCard
          imageSrc="/ux-dev-portfolio/VIVIDBRANDS.png"
          imageTitle="Vivid Brands"
          title="Vivid Brands"
          description="Vivid Brands is on a mission to create, build and scale brands, through E-commerce, that have a positive impact on the consumer's life. I joined the project as a freelance consultant to assist in gaining deeper insights into their users and to design a brand strategy and website structure for their rebranding."
          stack={vividBrandsStack}
          role="Role: Design Researcher"/>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <ProjectCard
          videoSrc="/ux-dev-portfolio/videos/BEST PETSITTER.mp4"
          title="Best Petsitter"
          description="As a project in LeWagon's bootcamp, my team and I designed and built a platform to connect pet owners with trustworthy petsitters."
          stack={bestPetsitterStack}
          role="Role: Fullstack Developer"/>
      </div>
    </div>
  )
}

export default Projects
