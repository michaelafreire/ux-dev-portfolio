import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      "navbar-i": "About Me",
      "navbar-ii": "Projects",
      "navbar-iii": "Contact",
      "intro-i": "Hello, I'm",
      "intro-ii": "Junior UX Designer and Full Stack Developer",
      "intro-iii": "I love understanding people and designing and coding solutions that hopefully make their lives a bit better.",
      "intro-iv": "Say hi.",
      "about-me-i": "Skills",
      "about-me-ii": "About Me",
      "about-me-iii": "I’m a versatile and passionate professional with experience across several stages of the product life cycle, including <i>research</i>, <i>design</i> and <i>development</i>.",
      "about-me-iv": "Research",
      "about-me-v": "I have extensive experience in research operations, ethics, sampling, and fieldwork. I am familiar with methods like literature reviews, competitor analysis, interviews, focus groups, surveys, and card sorting. I can also analyze findings, identify user needs, and present actionable insights.",
      "about-me-vi": "Design",
      "about-me-vii": "I have broad experience in user-centered design across various contexts, including digital products. I’m skilled in developing wireframes, prototypes, and responsive designs using Figma, and in leading workshops to align solutions with user needs and business goals.",
      "about-me-viii": "Development",
      "about-me-ix": "I have trained in developing maintainable code and am committed to staying current with industry trends. I am proficient in Agile project management, including Scrum. I collaborate effectively with multidisciplinary teams and am dedicated to my craft, aiming to make a meaningful impact.",
      "espacio-its-role": "Role: Product Owner and Design Researcher",
      "espacio-its-description": "I led a team in the research and development of a prototype for an online learning platform aimed at upskilling teachers in Peru. The project gained recognition from Intercorp as a Transformative Initiative for the 2021 Innovation Fair, leading to participation in a learning program with IDEO and other industry leaders.",
      "send-ey": "SEND EY Parental Pathway",
      "send-ey-role": "Role:  Delivery Manager and Interdisciplinary Contribution",
      "send-ey-description": "My team and I collaborated with early years providers and parents of children with special educational needs and disabilities, as well as policymakers, to design a digital solution to help parents navigate the SEND EY system with more ease.",
      "best-vet-role": "Role: Full Stack Developer",
      "best-vet-description": "As a final project in LeWagon's bootcamp, my team and I designed and built an online membership-based veterinary clinic, granting pet owners access to certified veterinary professionals at accessible prices.",
      "vivid-brands-role": "Role: Design Researcher",
      "vivid-brands-description": "Vivid Brands is on a mission to create, build and scale brands, through E-commerce, that have a positive impact on the consumer's life. I joined the project as a freelance consultant to assist in gaining deeper insights into their users and to design a brand strategy and website structure for their rebranding.",
      "best-petsitter-role": "Role: Full Stack Developer",
      "best-petsitter-description": "As a project in LeWagon's bootcamp, my team and I designed and built a platform to connect pet owners with trustworthy petsitters.",
      "collaborate": "Let's collaborate.",
      "built": "Built with React",
    }
  },
  sp: {
    translation: {
      "navbar-i": "Sobre Mí",
      "navbar-ii": "Proyectos",
      "navbar-iii": "Contacto",
      "intro-i": "Hola, soy",
      "intro-ii": "Diseñadora UX y Desarrolladora Full Stack Junior",
      "intro-iii": "Me encanta entender a las personas y diseñar y programar soluciones que, con suerte, mejoren un poco sus vidas.",
      "intro-iv": "Dime hola.",
      "about-me-i": "Habilidades",
      "about-me-ii": "Sobre mí",
      "about-me-iii": "Soy una profesional versátil y apasionada con experiencia en varias etapas del ciclo de vida del producto, incluyendo <i>investigación</i>, <i>diseño</i> y <i>desarrollo</i>.",
      "about-me-iv": "Investigación",
      "about-me-v": "Tengo amplia experiencia en operaciones de investigación, ética, muestreo y trabajo de campo. Tengo experiencia en métodos como revisiones bibliográficas, análisis de competidores, entrevistas, grupos focales, encuestas y clasificación de tarjetas. También puedo analizar hallazgos, identificar necesidades de los usuarios y presentar ideas accionables.",
      "about-me-vi": "Diseño",
      "about-me-vii": "Tengo amplia experiencia en diseño centrado en el usuario en varios contextos, incluidos productos digitales. Soy hábil en el desarrollo de wireframes, prototipos y diseños responsivos usando Figma, y liderando talleres para alinear soluciones con las necesidades de los usuarios y los objetivos de la empresa.",
      "about-me-viii": "Desarrollo",
      "about-me-ix": "Me he formado en el desarrollo de código mantenible y estoy comprometida a mantenerme al día con las tendencias de la industria. Soy competente en la gestión de proyectos Agile, incluido Scrum. Colaboro eficazmente con equipos multidisciplinarios y estoy dedicada a mi oficio, con el objetivo de generar un impacto significativo.",
      "espacio-its-role": "Rol: Product Owner e Investigadora de Diseño",
      "espacio-its-description": "Lideré un equipo en la investigación y desarrollo de un prototipo para una plataforma de aprendizaje en línea destinada a mejorar las habilidades de los profesores en Perú. El proyecto fue reconocido por Intercorp como una Iniciativa Transformadora en la Feria de Innovación 2021, lo que nos llevó a participar en un programa de aprendizaje con IDEO y otros líderes de la industria.",
      "send-ey": "Ruta Parental para Necesidades Educativas Especiales y Discapacidades en la Primera Infancia",
      "send-ey-role": "Rol: Gerente de Entrega y Contribución Interdisciplinaria",
      "send-ey-description": "Mi equipo y yo colaboramos con proveedores de educación temprana y padres de niños con necesidades educativas especiales y discapacidades, así como como formuladores de políticas públicas, para diseñar una solución digital que ayude a los padres a navegar los servicios de educación temprana con mayor facilidad.",
      "best-vet-role": "Rol: Desarrolladora Full Stack",
      "best-vet-description": "Como proyecto final en el bootcamp de LeWagon, mi equipo y yo diseñamos y construimos una clínica veterinaria en línea basada en membresías, que brinda a los dueños de mascotas acceso a profesionales veterinarios certificados a precios accesibles.",
      "vivid-brands-role": "Rol: Investigadora de Diseño",
      "vivid-brands-description": "Vivid Brands tiene como misión crear, construir y escalar marcas, a través del comercio electrónico, que tengan un impacto positivo en la vida del consumidor. Me uní al proyecto como consultora freelance para ayudar a obtener una comprensión más profunda de sus usuarios y para diseñar una estrategia de marca y la estructura del sitio web para su rebranding.",
      "best-petsitter-role": "Rol: Desarrolladora Full Stack",
      "best-petsitter-description": "Como proyecto en el bootcamp de LeWagon, mi equipo y yo diseñamos y construimos una plataforma para conectar a los dueños de mascotas con cuidadores de mascotas de confianza.",
      "collaborate": "Colaboremos.",
      "built": "Desarrollado con React",
    }
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'hn',
    fallbackLng: 'sp',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
