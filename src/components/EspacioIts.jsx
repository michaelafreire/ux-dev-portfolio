import ProjectDescription from './ProjectDescription';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function EspacioIts() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div id="espacio-its">
      <ProjectDescription name="its. Online Learning Platform" description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" />
      <div className="p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px]">
        <div className="py-10 sm:py-20 flex justify-start items-center">
          <p className="font-libre text-red text-xl sm:text-3xl font-bold">Background</p>
        </div>
        <p className="font-main sm:text-xl text-m">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        <div className="py-10 sm:py-20 h-2/3 flex items-center justify-center">
          <ProjectCard
            imageSrc="/ux-dev-portfolio/ITS-VII.png"
            description={t('espacio-its-description')}
          />
        </div>
        <div className="py-10 sm:py-20 flex justify-start items-center">
          <p className="font-libre text-red text-xl sm:text-3xl font-bold">Research</p>
        </div>
        <p className="font-main sm:text-xl text-m">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        <div className="py-10 sm:py-20 h-2/3 flex items-center justify-center">
          <ProjectCard
            imageSrc="/ux-dev-portfolio/ITS-V.png"
            description={t('espacio-its-description')}
          />
        </div>
        <div className="flex justify-start items-center">
          <Bar
            data={{
              labels: ["Recursos de enseñanza seleccionados por expertos", "Sessiones en vivo con expertos", "Videos y tutoriales pregrabados", "Lecturas y fuentes bibliográficas", "Bolsa de trabajo", "Conectar con otros docentes", "Creación de portafolio docente", "Compartir contenidos"],
              datasets: [
                {
                  label: "Responses",
                  data: [157, 144, 143, 63, 55, 41, 37, 28],
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                }
              ]
            }}
            options={{
              responsive: true,
              indexAxis: 'y',
              plugins: {
                title: {
                  display: true,
                  text: 'Hallazgos: Functionalidades (N=334)',
                },
              },
            }}
          />
        </div>
        <div className="py-10 sm:py-20 flex justify-start items-center">
          <p className="font-libre text-red text-xl sm:text-3xl font-bold">Design</p>
        </div>
        <p className="font-main sm:text-xl text-m">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        <div className="py-10 sm:py-20 h-2/3 flex items-center justify-center">
          <ProjectCard
            imageSrc="/ux-dev-portfolio/ITS-III.png"
            description={t('espacio-its-description')}
          />
        </div>
        <div className="py-10 sm:py-20 h-2/3 flex items-center justify-center">
          <ProjectCard
            imageSrc="/ux-dev-portfolio/ITS-II.png"
            description={t('espacio-its-description')}
          />
        </div>
        <div className="py-10 sm:py-20 flex justify-start items-center">
          <p className="font-libre text-red text-xl sm:text-3xl font-bold">Outcome</p>
        </div>
        <p className="font-main sm:text-xl text-m">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        <div className="py-10 sm:py-20 h-2/3 flex items-center justify-center">
          <ProjectCard
            videoSrc="/ux-dev-portfolio/videos/ESPACIO ITS.mp4"
            description={t('espacio-its-description')}
          />
        </div>
      </div>
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  )
}

export default EspacioIts
