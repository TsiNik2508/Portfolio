import vkIcon from "../images/vk.png";
import instIcon from "../images/instagram.png";
import githubIcon from "../images/github.png";
import linkedinIcon from "../images/linkedin.jpg";
import tgIcon from "../images/tg.png";
import hhIcon from "../images/hh.png";
import certficateIcon from "../images/certficate.svg";
import MovieExplorer from "../images/MovieExplorer.svg";
import mestoImage from "../images/mesto.png";
import mestoReactImage from "../images/mesto-react.png";
import mestoNodeImage from "../images/mesto-node.png";
import DynamicContentHighlighter from "../images/DynamicContentHighlighter.png";
import acrossImage from "../images/across-russia.png";
import studyImage from "../images/how-to-study.png";
import procrastinateImage from "../images/procrastinate.png";
import Schistogo from "../images/Schistogo.png";
import certificate from "../certificate/certificate.pdf";
import palcImage from "../images/Palc.png";
import todoImage from "../images/todo-react.png"

export const socialIcons = {
  vk: vkIcon,
  inst: instIcon,
  github: githubIcon,
  linkedin: linkedinIcon,
  tg: tgIcon,
  certficate: certficateIcon,
  hh: hhIcon,
};
export const projects = [
  {
    title: "Основные проекты",
    subtitle: "Мои самые крупные проекты на данный момент.",
    id: "main",
    exampls: [
      {
        title: 'Проект "Palc" frontend',
        subtitle:
          "Пет проект, для музыкальной группы. Написан на React. Включает в себя несколько страниц с информацией о творчестве группы, турах, мерче и галерее (в разработке)",
        link: "https://tsinik2508.github.io/Palc",
        image: palcImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/TsiNik2508/Palc",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'Проект "Movies Explorer"',
        subtitle:
          "Дипломный проект - лендинг с портфолио автора, а также приложение для поиска и сохранения фильмов как по названию так и формату.",
        link: "https://github.com/TsiNik2508/movies-explorer-api",
        image: MovieExplorer,
        icons: [
          {
            name: "certificate",
            link: certificate,
            icon: socialIcons.certficate,
          },
          {
            name: "code",
            link: "https://github.com/TsiNik2508/movies-explorer-frontend",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'Проект "Mesto" frontend + backend',
        subtitle:
          "Проект призван закрепить вре ранее полученные в рамках учебного курса знания. Создать полностью рабочее веб-приложение, и разместить его на хостинге.",
        link: "https://github.com/TsiNik2508/react-mesto-api-full-gha",
        image: mestoNodeImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/TsiNik2508/react-mesto-api-full-gha",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'Проект "Mesto" на React.js',
        subtitle:
          " 'Mesto'- это интерактивный веб-приложение, которое позволяет пользователям делиться своими фотографиями.",
        link: "https://tsinik2508.github.io/react-mesto-auth/",
        image: mestoReactImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/TsiNik2508/react-mesto-auth",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'Проект "Mesto"',
        subtitle:
          "Проект 'Mesto' был создан в рамках учебной программы Яндекс.Практикум. Это интерактивная веб-страница, на которой используются HTML, CSS, и JavaScript.",
        link: "https://tsinik2508.github.io/mesto/",
        image: mestoImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/TsiNik2508/mesto",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'Проект "Путешествия по России"',
        subtitle:
          "Это адаптивный сайт, разработанный с использованием методики файловой структуры NEsted BEM. Он представляет собой путеводитель по местам России, демонстрирующий красоту и разнообразие  страны.",
        link: "https://tsinik2508.github.io/russian-travel/",
        image: acrossImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/TsiNik2508/russian-travel",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'Проект "Научиться учиться"',
        subtitle:
          "Проект, созданный по программе обучения в Яндекс.Практикум, призван реализовать навыки верстки и работы с анимациями.",
        link: "https://tsinik2508.github.io/how-to-learn/",
        image: studyImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/TsiNik2508/how-to-learn",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: "Dynamic-content-highlighter",
        subtitle:
          "Проект, созданный мною, для демонстрации навыков использования JavaScript, React. (В разработке)",
        link: "https://github.com/TsiNik2508/Dynamic-content-highlighter",
        image: DynamicContentHighlighter,
        icons: [
          {
            name: "code",
            link: "https://github.com/TsiNik2508/Dynamic-content-highlighter",
            icon: socialIcons.github,
          },
        ],
      },
    ],
  },
  {
    title: "Небольшие проекты",
    subtitle: "Маленькие проекты, для практики.",
    id: "small",
    exampls: [
      {
        title: 'Проект "ToDo"',
        subtitle:
          "Это простое приложение для управления списком задач, разработанное с использованием TypeScript, React и React Hooks.",
        link: "https://tsinik2508.github.io/todo-app/",
        image: todoImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/TsiNik2508/todo-app",
            icon: socialIcons.github,
          },
        ],
      },
      
      {
        title: 'Проект "Идеи для прокрастинации"',
        subtitle:
          "Проект был создан для демонстрации начальных навыков JavaScript.",
        link: "https://tsinik2508.github.io/Procrastinate/",
        image: procrastinateImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/TsiNik2508/Procrastinate",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'Проект "С чистого листа"',
        subtitle: "Проект, созданый для применения базовых знаний HTML и CSS.",
        link: "https://tsinik2508.github.io/s-chistogo-lista/",
        image: Schistogo,
        icons: [
          {
            name: "code",
            link: "https://github.com/TsiNik2508/s-chistogo-lista",
            icon: socialIcons.github,
          },
        ],
      },
    ],
  },
];

export const socialNetworks = [
  {
    name: "vk",
    link: "https://vk.com/tsi_nick",
    icon: socialIcons.vk,
  },
  {
    name: "tg",
    link: "https://t.me/Tsi_Nick",
    icon: socialIcons.tg,
  },
  {
    name: "inst",
    link: "https://www.instagram.com/tsi_nick/",
    icon: socialIcons.inst,
  },
  {
    name: "github",
    link: "https://github.com/TsiNik2508",
    icon: socialIcons.github,
  },
  {
    name: "linkedin",
    link: "https://linkedin.com/in/nikita-tsilosani-5367782b4",
    icon: socialIcons.linkedin,
  },
  {
    name: "HeadHunter",
    link: "https://spb.hh.ru/resume/3ef61543ff0d0eaa2d0039ed1f4277734f6f57",
    icon: socialIcons.hh,
  },
];

export const technologies = [
  {
    name: "React",
    percent: "100",
  },
  {
    name: "TS",
    percent: "100",
  },
  {
    name: "Express",
    percent: "100",
  },
  {
    name: "Node",
    percent: "100",
  },
  {
    name: "Redux",
    percent: "100",
  },
  {
    name: "Nuxt",
    percent: "100",
  },
  {
    name: "OOP",
    percent: "100",
  },
  {
    name: "Webpack",
    percent: "100",
  },
  {
    name: "Adaptivity",
    percent: "100",
  },
  {
    name: "GitHub",
    percent: "100",
  },
];
