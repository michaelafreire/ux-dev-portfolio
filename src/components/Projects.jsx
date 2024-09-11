import React from 'react'
import ProjectCard from './ProjectCard'
import { useTranslation } from 'react-i18next';

const bestVetStack = (
  <div className="flex flex-wrap gap-2">
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Rails</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Javascript</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">HTML</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">CSS</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Heroku</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Figma</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">SQL</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Bootstrap</div>
  </div>
)

const espacioItsStack = (
  <div className = "flex flex-wrap gap-2">
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Figma</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">User Research</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Wireframing</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Prototyping</div>
  </div>
)

const sendEyStack = (
  <div className = "flex flex-wrap gap-2">
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Figma</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">User Research</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Co-Design</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Wireframing</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Prototyping</div>
  </div>
)

const vividBrandsStack = (
  <div className = "flex flex-wrap gap-2">
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">User Research</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Competitor Analysis</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Co-Creation</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Wireframing</div>
  </div>
)

const bestPetsitterStack = (
  <div className = "flex flex-wrap gap-2">
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Rails</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Javascript</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">HTML</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">CSS</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Heroku</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">SQL</div>
    <div className="inline-block rounded-md px-2 py-1 font-main bg-blue-light text-white">Bootstrap</div>
  </div>
)


function Projects() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div id="projects" className="p-8 sm:pl-10">
      <div className="min-h-screen flex items-center justify-center">
          <ProjectCard
          videoSrc="/ux-dev-portfolio/videos/ESPACIO ITS.mp4"
          title= "Espacio ITS"
          description={t('espacio-its-description')}
          stack={espacioItsStack}
          role={t('espacio-its-role')}/>
      </div>
      <div className="min-h-screen flex items-center justify-center">
          <ProjectCard
          imageSrc="/ux-dev-portfolio/SEND_EY.png"
          imageTitle="SendEY"
          title={t('send-ey')}
          description={t('send-ey-description')}
          stack={sendEyStack}
          role={t('send-ey-role')}/>
      </div>
      <div className="min-h-screen flex items-center justify-center">
          <ProjectCard
          videoSrc="/ux-dev-portfolio/videos/BESTVET.mp4"
          title="Best Vet"
          description={t('best-vet-description')}
          stack={bestVetStack}
          role={t('best-vet-role')}/>
      </div>
      <div className="min-h-screen flex items-center justify-center">
          <ProjectCard
          imageSrc="/ux-dev-portfolio/VIVIDBRANDS.png"
          imageTitle="Vivid Brands"
          title="Vivid Brands"
          description={t('vivid-brands-description')}
          stack={vividBrandsStack}
          role={t('vivid-brands-role')}/>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <ProjectCard
          videoSrc="/ux-dev-portfolio/videos/BEST PETSITTER.mp4"
          title="Best Petsitter"
          description={t('best-petsitter-description')}
          stack={bestPetsitterStack}
          role={t('best-petsitter-role')}/>
      </div>
    </div>
  )
}

export default Projects
