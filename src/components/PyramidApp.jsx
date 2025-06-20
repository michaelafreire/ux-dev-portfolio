import React from 'react'
import Footer from './Footer';
import { useTranslation, Trans } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { MatrixController, MatrixElement } from "chartjs-chart-matrix";
import { Bar } from 'react-chartjs-2';
import ProjectDescription from './ProjectDescription';
import ProjectTitle from './ProjectTitle';
import ProjectText from './ProjectText';
import ProjectTextImage from './ProjectTextImage';
import ProjectTextImageHmw from './ProjectTextImageHmw';

// Graphs
ChartJS.register(
  MatrixController,
  MatrixElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const dataStress = {
  labels: ["Heart Rate", "HRV", "STAI"],
  datasets: [
    {
      data: [-3.68, 15.34, 8.70],
      backgroundColor: ["rgb(189, 239, 200)",
        "rgba(189, 239, 200)",
        "rgb(237, 74, 119)"]
    }
  ]
}
export const optionsStress = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Heart Rate, HRV and STAI Changes Compared to Baseline Measures (%) (N=3)",
      font: {
        family: "DM Sans, sans-serif",
        weight: "bold",
      },
      scales: {
        x: {
          ticks: {
            font: {
              family: "DM Sans, sans-serif",
            },
          },
        },
        y: {
          ticks: {
            font: {
              family: "DM Sans, sans-serif",
            },
          },
        },
      }
    }
  }
};

export const dataNasa = {
  labels: ["Mental", "Physical", "Temporal", "Effort", "Frustration"],
  datasets: [
    {
      data: [15.00, 6.00, 15.00, 11.50, 12.00],
      backgroundColor: "rgb(141, 161, 255)",
    }
  ]
}
export const optionsNasa = {
  indexAxis: 'x',
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Average NASA-TLX Scores (N=3)",
      font: {
        family: "DM Sans, sans-serif",
        weight: "bold",
      },
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          family: "DM Sans, sans-serif",
        },
      },
    },
    y: {
      min: 0,
      max: 21,
      ticks: {
        stepSize: 4,
        font: {
          family: "DM Sans, sans-serif",
        },
      },
    },
  }
};

export const dataUeq = {
  labels: ["Supportive", "Easy", "Efficient", "Clear", "Exciting", "Interesting", "Inventive", "Leading Edge "],
  datasets: [
    {
      label: "Pragmatic Qualities", // Title for green bars
      data: [1.00, 1.50, 2.00, 1.50, null, null, null, null],
      backgroundColor: "rgb(141, 161, 255)", // Blue
    },
    {
      label: "Hedonic Qualities", // Title for blue bars
      data: [null, null, null, null, 2.00, 2.00, 2.50, 2.00],
      backgroundColor: "rgb(189, 239, 200)", // Green
    }
  ]
}
export const optionsUeq = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      display: true
    },
    title: {
      display: true,
      text: "Average UEQ-S Scores (N=3)",
      font: {
        family: "DM Sans, sans-serif",
        weight: "bold",
      },
    },
  },
  scales: {
    x: {
      min: -3,
      max: 3,
      ticks: {
        stepSize: 1,
        font: {
          family: "DM Sans, sans-serif",
        },
      },
    },
    y: {
      ticks: {
        callback: (value, index) => {
          const negativeLabels = ["Obstructive", "Complicated", "Inefficient", "Confusing", "Boring", "Not interesting", "Conventional", "Usual"];
          const positiveLabels = ["Supportive", "Easy", "Efficient", "Clear", "Exciting", "Interesting", "Inventive", "Leading Edge "];
          return `${negativeLabels[index]}   |   ${positiveLabels[index]}`; // Left | Right format
        },
        font: {
          family: "DM Sans, sans-serif",
        },
      },
    },
  }
};

const yLabels = [
  "It pressures me or it gets annoying",
  "It intrudes, interrupts or distracts me from other things I am trying to do",
  "It helps me do things that are important to me",
  "It allows me to do things the way I want to",
  "It makes things confusing/difficult",
  "It lowers my confidence",
  "It makes me feel capable and effective",
  "It makes it easy to learn how to use it",
  "It focuses on extrinsic qualities like status, popularity or image",
  "It negatively impacts my relationships with others",
  "It gives me opportunities to contribute to a community",
  "It helps me feel close or connected to other people",
];

// Component
function PyramidApp() {
  const { t } = useTranslation();
  const { i18n } = useTranslation(); const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const imageSrc = i18n.language === "en" ? "/ux-dev-portfolio/PYRAMID-APP-METHODS-EN.png" : "/ux-dev-portfolio/PYRAMID-APP-METHODS-SP.png";

  return (
    <div id="pyramid-app">
      <ProjectDescription
        name={t("pyramid-app-i")}
        description={<Trans i18nKey="pyramid-app-ii" components={{ a: <a href="https://www.upf.edu/es/web/tide/tools/-/asset_publisher/W2iQtvtwlOQl/content/pyramida-1/maximized" target="_blank" rel="noopener noreferrer" className="underline hover:text-red"></a>, strong: <strong className="" /> }} />}
        role={t("pyramid-app-role")}
        tools="Figma, Google Forms, Excel"
        methods={t("pyramid-app-methods")}
        team={t("pyramid-app-team")}
      />
      <div className="p-8 sm:pl-10 sm:pl-[100px] sm:pr-[100px]">
        <ProjectTitle
          title={t("pyramid-app-iii")}
        />
        <ProjectText
          text={t("pyramid-app-iv")}
        />
        <ProjectTextImage
          video="/ux-dev-portfolio/videos/PYRAMIDAPP-DEMO.mp4"
          text={t("pyramid-app-vi")}
        />
        <ProjectTitle
          title={t("pyramid-app-vii")}
        />
        <ProjectTextImage
          image={imageSrc}
          text={t("pyramid-app-viii")}
        />
        <ProjectText
          text={t("pyramid-app-v")}
        />
        <ul className="list-disc list-inside space-y-2 font-main sm:text-xl text-m my-4 mb-8 ml-4">
          <li className="marker:text-red"><Trans i18nKey={t('pyramid-app-instrument-i')} components={{ strong: <strong /> }} /></li>
          <li className="marker:text-red"><Trans i18nKey={t('pyramid-app-instrument-ii')} components={{ strong: <strong /> }} /></li>
          <li className="marker:text-red"><Trans i18nKey={t('pyramid-app-instrument-iii')} components={{ strong: <strong /> }} /></li>
          <li className="marker:text-red"><Trans i18nKey={t('pyramid-app-instrument-iv')} components={{ strong: <strong /> }} /></li>
          <li className="marker:text-red"><Trans i18nKey={t('pyramid-app-instrument-v')} components={{ strong: <strong /> }} /></li>
        </ul>
        <ProjectText
          text={t("pyramid-app-ix")}
        />
        <ProjectTitle
          title={t("pyramid-app-x")}
        />
        <ProjectText
          text={t("pyramid-app-xi")}
        />
        <ProjectTextImage
          bar={<Bar data={dataStress} options={optionsStress} />}
          text={t("pyramid-app-xii")}
        />
        <ProjectTextImage
          bar={<Bar data={dataNasa} options={optionsNasa} />}
          text={t("pyramid-app-xiii")}
        />
        <ProjectTextImage
          bar={<Bar data={dataUeq} options={optionsUeq} />}
          text={t("pyramid-app-xiv")}
        />
        <ProjectTextImage
          image="/ux-dev-portfolio/PYRAMID-APP-DIGITAL-WELLBEING.jpg"
          text={t("pyramid-app-xv")}
        />
        <ProjectTitle
          title={t("pyramid-app-xvi")}
        />
        <ProjectText
          text={t("pyramid-app-xvii")}
        />
        <ul className="list-disc list-inside space-y-2 font-main sm:text-xl text-m my-4 mb-8 ml-4">
          <li className="marker:text-red"><Trans i18nKey={t('pyramid-app-design-enhancements-i')} components={{ strong: <strong /> }} /></li>
          <li className="marker:text-red"><Trans i18nKey={t('pyramid-app-design-enhancements-ii')} components={{ strong: <strong /> }} /></li>
          <li className="marker:text-red"><Trans i18nKey={t('pyramid-app-design-enhancements-iii')} components={{ strong: <strong /> }} /></li>
        </ul>
        <ProjectText
          text={t("pyramid-app-xviii")}
        />
        <ProjectTextImage
          image="/ux-dev-portfolio/PYRAMIDAPP-DE-I.jpg"
          text={t("pyramid-app-xix")}
        />
        <ProjectTextImage
          image="/ux-dev-portfolio/PYRAMIDAPP-DE-II.jpg"
          text={t("pyramid-app-xx")}
        />
        <ProjectTextImage
          image="/ux-dev-portfolio/PYRAMIDAPP-DE-III.jpg"
          text={t("pyramid-app-xxi")}
        />
          <ProjectTextImage
          image="/ux-dev-portfolio/PYRAMIDAPP-DE-IV.jpg"
          text={t("pyramid-app-xxii")}
        />
        <ProjectTextImage
          image="/ux-dev-portfolio/PYRAMIDAPP-DE-V.jpg"
          text={t("pyramid-app-xxiii")}
        />
        <ProjectTextImage
          image="/ux-dev-portfolio/PYRAMIDAPP-DE-VI.jpg"
          text={t("pyramid-app-xxiv")}
        />
        <ProjectTitle
          title={t("pyramid-app-xxv")}
        />
        <ProjectText
          text={t("pyramid-app-xxvi")}
        />
      </div>
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  )
}

export default PyramidApp
