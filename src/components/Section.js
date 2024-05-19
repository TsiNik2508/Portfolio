export default class Section {
  constructor({ title, subtitle, id }) {
    this._title = title;
    this._subtitle = subtitle;
    this._id = id;
  }
  _setSectionAttributes() {
    this._element = document
      .querySelector("#project-section")
      .content.cloneNode(true);
    this._elementTitle = this._element.querySelector(".project-section__title");
    this._elementSubtitle = this._element.querySelector(
      ".project-section__subtitle"
    );
    this._container = this._element.querySelector(
      ".project-section__container"
    );
    this._section = this._element.querySelector(".project-section");

    this._elementTitle.setAttribute("id", this._id);
    this._elementTitle.textContent = this._title;
    this._elementSubtitle.textContent = this._subtitle;
  }
  setProjects(array, callback) {
    this._setSectionAttributes();
    array.forEach((item) => {
      callback(item, this._container);
    });
  }
  getSection() {
    return this._element;
  }
}
