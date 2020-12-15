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

//CarShare
import CarShareCover from "../assets/img/practice/CarShare/cover.png";
import CarShare1 from "../assets/img/practice/CarShare/1.png";
import CarShare2 from "../assets/img/practice/CarShare/2.png";
import CarShare3 from "../assets/img/practice/CarShare/3.png";
import CarShare4 from "../assets/img/practice/CarShare/4.png";
import CarShare5 from "../assets/img/practice/CarShare/5.png";

//Notes
import Notes0 from "../assets/img/practice/Notes/0.png";
import Notes1 from "../assets/img/practice/Notes/1.png";
import Notes2 from "../assets/img/practice/Notes/2.png";
import Notes3 from "../assets/img/practice/Notes/3.png";
import Notes4 from "../assets/img/practice/Notes/4.png";
import Notes5 from "../assets/img/practice/Notes/5.png";
import Notes6 from "../assets/img/practice/Notes/6.png";
import Notes7 from "../assets/img/practice/Notes/7.png";
import Notes8 from "../assets/img/practice/Notes/8.png";
import Notes9 from "../assets/img/practice/Notes/9.png";

//Gamma
import Gamma1 from "../assets/img/practice/Gama/1.jpg";
import Gamma2 from "../assets/img/practice/Gama/2.jpg";
import Gamma3 from "../assets/img/practice/Gama/3.jpg";
import Gamma4 from "../assets/img/practice/Gama/4.jpg";
import Gamma5 from "../assets/img/practice/Gama/5.jpg";

//BlogProject
import Blog1 from "../assets/img/practice/Blog Project/1.png";
import Blog2 from "../assets/img/practice/Blog Project/2.png";
import Blog3 from "../assets/img/practice/Blog Project/3.png";

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
    website: "http://sysmodelers.com/",
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
    website: "http://sysmodelers.com/",
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
    website: "https://aptisgo.b1b2.es/",
  },
  {
    title: "Practice",
    imgCover: CarShareCover,
    route: "/practice",
    projects: [
      {
        title: "CarShare",
        skills: ["UI/UX", "Web Desing", "Mobile Design", "Prototype"],
        description:
          'CarShare is a fictional website. The purpose of this website is to practice design principles with a random theme and pallet. In this case, the idea for the website was "A real-time car-sharing app that will allow users to enlist their cars whenever they are going somewhere so that other users can share the ride if it is in their way and split the cost accordingly."',
        images: [
          {
            src: CarShareCover,
            key: "1",
          },
          {
            src: CarShare1,
            key: "2",
          },
          {
            src: CarShare2,
            key: "3",
          },
          {
            src: CarShare3,
            key: "4",
          },
          {
            src: CarShare4,
            key: "5",
          },
          {
            src: CarShare5,
            key: "6",
          },
        ],
      },
      {
        title: "Notes",
        skills: ["UI/UX", "Web Desing", "Mobile Design", "Prototype"],
        description:
          'Notes is a fictional website. The purpose of this website is to practice design principles with a random theme and pallet. In this case, the idea for the website was "A common note-taking platform where everyone can take notes, share with others, comment on notes, add to existing notes, or make new notes about a particular topic, lecture or seminar."',
        images: [
          {
            src: Notes0,
            key: "1",
          },
          {
            src: Notes1,
            key: "2",
          },
          {
            src: Notes2,
            key: "3",
          },
          {
            src: Notes3,
            key: "4",
          },
          {
            src: Notes4,
            key: "5",
          },
          {
            src: Notes5,
            key: "6",
          },
          {
            src: Notes6,
            key: "7",
          },
          {
            src: Notes7,
            key: "8",
          },
          {
            src: Notes8,
            key: "9",
          },
          {
            src: Notes9,
            key: "10",
          },
        ],
      },
      {
        title: "Gamma",
        skills: ["JavaScript", "HTML", "CSS"],
        description:
          "Gamma is a jewelry website. I used this project as a way to learn and practice HTML and CSS. I choose an existing website and try to recreate it so that I could understand the structure of the site.",
        images: [
          {
            src: Gamma1,
            key: "1",
          },
          {
            src: Gamma2,
            key: "2",
          },
          {
            src: Gamma3,
            key: "3",
          },
          {
            src: Gamma4,
            key: "4",
          },
          {
            src: Gamma5,
            key: "5",
          },
        ],
      },
      {
        title: "Blog Project",
        skills: ["JavaScript", "HTML", "CSS"],
        description:
          "Blog Project is a copy of a template. With this project, I learned how to implement JavaScript with HTML and CSS to make a website more dynamic.",
        images: [
          {
            src: Blog1,
            key: "1",
          },
          {
            src: Blog2,
            key: "2",
          },
          {
            src: Blog3,
            key: "3",
          },
        ],
      },
    ],
  },
];
