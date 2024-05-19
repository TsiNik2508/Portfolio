import "./index.css";
import { projects, socialNetworks, technologies } from "../utils/data.js";
import Project from "../components/Project.js";
import Section from "../components/Section.js";
import MenuLink from "../components/MenuLink.js";
import Icon from "../components/Icon.js";
import Technology from "../components/Technology.js";
const footerContainer = document.querySelector(".footer__social-networks");
const profileContainer = document.querySelector(".profile__icons");
const profileFigure = document.querySelector(".profile__figure");
const technologiesContainer = document.querySelector(
  ".technologies__container"
);
const needCheck = [];
function setMenu() {
  const sections = document.querySelectorAll(".project-section__title");
  const menu = document.querySelector(".menu");
  sections.forEach((item) => {
    const title = item.textContent;
    const element = new MenuLink(title, item.getAttribute("id")).getLink();
    menu.append(element);
  });
}
function setSections() {
  projects.forEach((item) => {
    const element = new Section({
      title: item.title,
      subtitle: item.subtitle,
      id: item.id,
    });
    element.setProjects(item.exampls, function callback(item, container) {
      const project = new Project({
        title: item.title,
        subtitle: item.subtitle,
        link: item.link,
        image: item.image,
      });
      project.setLinks(item.icons, function callback(item, container) {
        const icon = new Icon(
          { link: item.link, icon: item.icon },
          "project-icon"
        ).getIcon();
        container.append(icon);
      });
      container.append(project.getProject());
    });
    document.querySelector(".content").append(element.getSection());
  });
}
socialNetworks.forEach((item) => {
  const element = new Icon(
    { link: item.link, icon: item.icon },
    "footer-icon"
  ).getIcon();
  footerContainer.append(element);
});
socialNetworks.forEach((item) => {
  const element = new Icon(
    { link: item.link, icon: item.icon },
    "profile-icon"
  ).getIcon();
  profileContainer.append(element);
});
function setTechnologies() {
  technologies.forEach((item) => {
    const techn = new Technology(
      { name: item.name, percent: item.percent },
      "technology"
    ).getTechnology();
    technologiesContainer.append(techn);
    needCheck.push(false);
  });
}
setSections();
setTechnologies();
setMenu();

const Icons = document.querySelectorAll(".social");
const projectFigures = Array.from(
  document.querySelectorAll(".project__figure")
);
if (
  "ontouchstart" in window ||
  (window.DocumentTouch && document instanceof DocumentTouch)
) {
  Icons.forEach((item) => {
    item.classList.add("social_type_touch");
  });
} else {
  projectFigures.forEach((item) => {
    item.classList.add("project__figure_type_notouch");
  });
  profileFigure.classList.add("profile__figure_type_notouch");
}

function isOnVisibleSpace(element) {
  const bodyHeight = window.innerHeight;
  const elemRect = element.getBoundingClientRect();
  console.log ()
  const offset = elemRect.bottom; // - bodyRect.top;
  if (offset < 0) return false;
  if (offset > bodyHeight) return false;
  return true;
}
const listenedElements = document.querySelectorAll(".technology__progress");

window.addEventListener("scroll", function () {
  if (
    !needCheck.reduce((summ, item) => {
      return (summ *= item);
    })
  ) {
    listenedElements.forEach((item, i) => {
      if (
        Array.from(item.classList).find((item) => {
          return item == "technology__progress_type_visible";
        })
      ) {
        needCheck[i] = true;
        return;
      }
      const result = isOnVisibleSpace(item);
      if (result) {
        item.classList.add("technology__progress_type_visible");
      }
    });
  }
});
