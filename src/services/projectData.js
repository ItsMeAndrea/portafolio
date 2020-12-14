import PracticeCover from "../assets/img/practice/cover.png";

//Promarca
import PromarcaCover from "../assets/img/promarca/cover.jpg";
import Promarca1 from "../assets/img//promarca/1.jpg";
import Promarca2 from "../assets/img//promarca/2.jpg";
import Promarca3 from "../assets/img//promarca/3.jpg";
import Promarca4 from "../assets/img//promarca/4.jpg";
import Promarca5 from "../assets/img//promarca/5.jpg";

//FuerzaV
import FuerzaVCover from "../assets/img/fuerzav/cover.png";
import Fuerza1 from "../assets/img/fuerzav/1.png";
import Fuerza2 from "../assets/img/fuerzav/2.png";
import Fuerza3 from "../assets/img/fuerzav/3.png";
import Fuerza4 from "../assets/img/fuerzav/4.png";
import Fuerza5 from "../assets/img/fuerzav/5.png";

//AptisGo
import AptisCover from "../assets/img/aptis/cover.png";
import Aptis1 from "../assets/img/aptis/1.png";
import Aptis2 from "../assets/img/aptis/2.png";
import Aptis3 from "../assets/img/aptis/3.png";
import Aptis4 from "../assets/img/aptis/4.png";
import Aptis5 from "../assets/img/aptis/5.png";
import Aptis6 from "../assets/img/aptis/6.png";
import Aptis7 from "../assets/img/aptis/7.jpg";

export const projectData = [
  {
    title: "Promarca",
    imgCover: PromarcaCover,
    route: "/promarca",
    skills: ["React", "Adobe XD", "UI/UX", "GraphQL", "PostgreSQL"],
    description:
      "Promarca is a company that is responsible for the production and exportation of crabs. They work with a variety of processes, which they handled manually, this led to many errors and wasted a lot of time. This is why they decide to change their model and request a web application to be able to handle these processes automatically",
    images: [
      {
        src: PromarcaCover,
        key: "1",
      },
      {
        src: Promarca1,
        key: "2",
      },
      {
        src: Promarca2,
        key: "3",
      },
      {
        src: Promarca3,
        key: "4",
      },
      {
        src: Promarca4,
        key: "5",
      },
      {
        src: Promarca5,
        key: "6",
      },
    ],
  },
  {
    title: "FuerzaV",
    imgCover: FuerzaVCover,
    route: "/fuerzav",
    skills: ["ArcGIS", "UI/UX", "React", "Adobe XD", "Qt", "WordPress"],
    description:
      "FuerzaV is a project which has a vision of complementing the sales process for a companie. Using geolocation, it aims to provide tools to locate and track the available merchandise. It'll also be able to show indicators on the status of sales and overall performance of the company. FuerzaV also offers an application for Sellers, which is responsible for the sale of goods and customer orders, an application for Dispatchers, which is responsible for the logic of transporting each order and the possibility of integrating sites in WordPress.",
    images: [
      {
        src: FuerzaVCover,
        key: "1",
      },
      {
        src: Fuerza1,
        key: "2",
      },
      {
        src: Fuerza2,
        key: "3",
      },
      {
        src: Fuerza3,
        key: "4",
      },
      {
        src: Fuerza4,
        key: "5",
      },
      {
        src: Fuerza5,
        key: "6",
      },
    ],
  },
  {
    title: "AptisGo",
    imgCover: AptisCover,
    route: "/aptisgo",
    skills: ["Adobe XD", "React", "UI/UX", "Prototypes", "Web Desing"],
    description:
      "AptisGo is a web application where you can practice for the Aptis exam. This platform seek to help students from all over the world to be able to prepare in the best way for this exam. Different components were developed to meet this objective, making the experience of learning and studying more dynamic and fun.",
    images: [
      {
        src: AptisCover,
        key: "1",
      },
      {
        src: Aptis1,
        key: "2",
      },
      {
        src: Aptis2,
        key: "3",
      },
      {
        src: Aptis3,
        key: "4",
      },
      {
        src: Aptis4,
        key: "5",
      },
      {
        src: Aptis5,
        key: "6",
      },
      {
        src: Aptis6,
        key: "7",
      },
      {
        src: Aptis7,
        key: "8",
      },
    ],
  },
  {
    title: "Practice",
    imgCover: PracticeCover,
    route: "/practice",
  },
];
