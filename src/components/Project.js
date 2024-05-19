export default class Project {
  constructor({ title, subtitle, link, image }) {
    this._title = title;
    this._subtitle = subtitle;
    this._link = link;
    this._image = image;
  }
  _setAtttibutes() {
    this._element = document.querySelector("#project").content.cloneNode(true);
    this._elementTitle = this._element.querySelector(".project__title");
    this._elementSubtitle = this._element.querySelector(
      ".project__description"
    );
    this._elementImage = this._element.querySelector(".project__image");
    this._elementLink = this._element.querySelector(".project__link");
    this._elementLink.setAttribute("href", this._link);
    this._elementTitle.textContent = this._title;
    this._elementSubtitle.textContent = this._subtitle;
    this._elementImage.src = this._image;
    this._elementConatainer = this._element.querySelector(".project__icons");
  }
  setLinks(array, callback) {
    this._setAtttibutes();
    array.forEach((item) => {
      callback(item, this._elementConatainer);
    });
  }
  getProject() {
    return this._element;
  }
}
